require("dotenv").config();
const express = require('express'),
      app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      authRoutes = require('./routes/auth'),
      campgroundsRoutes = require('./routes/campgrounds'),
      { loginRequired, ensureCorrectUser } = require('./middleware/auth'),
      errorHandler = require('./handlers/error'),
      db = require('./models');

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/users/:id/campgrounds', 
  loginRequired,
  ensureCorrectUser,
  campgroundsRoutes
);

app.get('/api/campgrounds', loginRequired, async function(req, res, next) {
  try {
    let campgrounds = await db.Campground.find()
      .sort({createdAt: "desc"})
      .populate("user", {
        username: true
      });
    return res.status(200).json(campgrounds);
  } catch (err) {
    return next(err);
  }
});

app.use(function(req, res, next) {
  let err = new Error("Not found");
  err.status = 404;
  return next(err);
})

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})