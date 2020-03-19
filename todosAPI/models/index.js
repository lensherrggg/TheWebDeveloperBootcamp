const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/todo-api", {
  keepAlive: true,
  useNewUrlParser: true
});

mongoose.Promise = Promise;

module.exports.Todo = require('./todos');

