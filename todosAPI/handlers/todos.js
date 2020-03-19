const db = require('../models');

exports.getTodos = (req, res, next) => {
  db.Todo.find()
    .then(todos => {
      res.json(todos);
    })
    .catch(err => next(err));
};

exports.createTodo = (req, res, next) => {
  db.Todo.create(req.body)
    .then(function(todo) {
      res.json(todo)
    })
    .catch( err => next(err));
};

exports.getTodo = (req, res, next) => {
  db.Todo.findById(req.params.todoId)
    .then(todo => {
      res.json(todo);
    })
    .catch(err => next(err));
};

exports.updateTodo = (req, res, next) => {
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(todo => {
      res.json(todo);
    })
    .catch(err => next(err));
};

exports.deleteTodo = (req, res, next) => {
  db.Todo.findOneAndRemove({_id: req.params.todoId})
    .then(() => {
      res.json({message: "Deleted"});
    })
    .catch(err => next(err));
};

module.exports = exports;