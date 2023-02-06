const express = require('express');

const router = express.Router();

const db = require('../models');

const User = db.users;
const create = (req, res) => {
  const user = {
    Username: req.body.userName,
    First_name: req.body.firstName,
    Last_name: req.body.lastName,
    Email: req.body.email,
    Password: req.body.password,
  };
  User.create(user)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
                err.message || 'Some error occurred while creating the Tutorial.',
      });
    });
};
const findOne = (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: `Error retrieving User with id=${id}`,
      });
    });
};
const update = (req, res) => {
  const { id } = req.params;
  User.update(req.body, {
    where: { id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: 'User was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}.`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: `Error updating User with id=${id}`,
      });
    });
};
const deleteRoute = (req, res) => {
  const { id } = req.params;
  User.destroy({
    where: { id },
  }).then((num) => {
    if (num === 1) {
      res.send({
        message: 'User was deleted successfully!',
      });
    } else {
      res.send({
        message: `Cannot delete User with id=${id}.`,
      });
    }
  })
    .catch(() => {
      res.status(500).send({
        message: `Could not delete User with id=${id}`,
      });
    });
};
const user = {
  create, findOne, update, deleteRoute,
};

router.post('/', user.create);
router.get('/:id', user.findOne);
router.put('/:id', user.update);
router.delete('/:id', user.deleteRoute);

module.exports = router;
