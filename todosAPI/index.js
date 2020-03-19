const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes')
const errorHandler = require('./handlers/error');

const PORT = 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/todos', router);

app.use(errorHandler);

app.listen(PORT, function() {
  console.log(`Server is running on port ${PORT}`);
})