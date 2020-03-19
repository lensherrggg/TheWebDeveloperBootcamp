const express = require("express");
const router = express.Router();
const handlers = require('../handlers/todos');

router.route('/')
  .get(handlers.getTodos)
  .post(handlers.createTodo);

router.route('/:todoId')
  .get(handlers.getTodo)
  .put(handlers.updateTodo)
  .delete(handlers.deleteTodo);

module.exports = router;