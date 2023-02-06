const express = require('express');

const router = express.Router();

const db = require('../models');

const Expense = db.expense;
const create = (req, res) => {
  const expense = {
    Rent: req.body.rent,
    Gas: req.body.gas,
    Water: req.body.water,
    Electric: req.body.electric,
  };
  Expense.create(expense)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
                err.message || 'Some error occurred.',
      });
    });
};
const findOne = (req, res) => {
  const { id } = req.params;
  Expense.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Expense with id=${id}.`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: `Error retrieving Expense with id=${id}`,
      });
    });
};
const find = (req, res) => {
  Expense.findAll()
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Expense with id=${id}.`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: `Error retrieving Expense with id=${id}`,
      });
    });
};
const update = (req, res) => {
  const { id } = req.params;
  Expense.update(req.body, {
    where: { id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: 'Expense was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update Expense with id=${id}.`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: `Error updating Expense with id=${id}`,
      });
    });
};
const deleteRoute = (req, res) => {
  const { id } = req.params;
  Expense.destroy({
    where: { id },
  }).then((num) => {
    if (num === 1) {
      res.send({
        message: 'Expense was deleted successfully!',
      });
    } else {
      res.send({
        message: `Cannot delete Expense with id=${id}.`,
      });
    }
  })
    .catch(() => {
      res.status(500).send({
        message: `Could not delete Expense with id=${id}`,
      });
    });
};
const expense = {
  create, findOne, update, deleteRoute, find,
};

router.get('/', expense.find);
router.post('/', expense.create);
router.get('/:id', expense.findOne);
router.put('/:id', expense.update);
router.delete('/:id', expense.deleteRoute);


module.exports = router;
