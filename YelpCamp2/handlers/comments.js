const db = require('../models');

// CREATE /api/users/:id/campgrounds/:campground_id/comments
exports.createComment = async function(req, res, next) {
  try {
    let comment = await db.Comment.create({
      text: req.body.text,
      user: req.params.id,
      campground: req.params.campground_id
    });
    let foundCampground = await db.Campground.findById(req.params.campground_id);
    foundCampground.comments.push(comment.id);
    await foundCampground.save();
    let foundComment = await db.Comment.findById(comment.id)
      .populate("user", { username: true})
      .populate("campground", { name: true });
    return res.status(200).json(foundComment);
  } catch (err) {
    return next(err);
  }
}

// DELETE /api/users/:id/campgrounds/:campground_id/comments/:comment_id
exports.deleteComment = async function(req, res, next) {
  try {
    let foundComment = await db.Comment.findById(req.params.comment_id);
    if (foundComment["user"].equals(req.params.id)) {
      let foundCampground = await db.Campground.findById(foundComment.campground);
      await foundComment.remove();
      return res.status(200).json(foundComment);
    }
    return next({
      status: 401,
      message: "Unauthorized"
    })
  } catch (err) {
    return next(err);
  }
}