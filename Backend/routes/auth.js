const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../models');

const User = db.users;
const router = express.Router();

function generateToken(autheticatedUser) {
  const { Username: username, First_name: firstName, Last_name: lastName } = autheticatedUser;
  const privateKey = process.env.TOKENPRIVATEKEY;

  return jwt.sign({ username, firstName, lastName }, privateKey);
}
/* auth route. */
router.post('/', async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    res.status(400).send({
      message:
               'User or password is incorect!',
    });
    return;
  }
  const userFound = await User.findOne({ where: { Username: userName }, attributes: ['Username', 'id', 'First_name', 'Last_name', 'Password'] });
  if (password === userFound.Password) {
    res.json({ AuthToken: generateToken(userFound) });
    return;
  }
  res.status(400).send({
    message:
            'User or password is incorect!',
  });
});

module.exports = router;