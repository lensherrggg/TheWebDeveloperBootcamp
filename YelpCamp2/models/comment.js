const mongoose = require('mongoose'),
      Campground = require('./campground');

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    campground: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campground"
    }
  }, {
    timestamps: true
  }
)

commentSchema.pre("remove", async function(next) {
  try {
    let campground = await Campground.findById(this.campground);
    campground.comments.remove(this.id);
    await campground.save();
  } catch (err) {
    return next(err);
  }
})

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;