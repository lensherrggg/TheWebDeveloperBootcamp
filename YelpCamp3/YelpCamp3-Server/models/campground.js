const mongoose = require('mongoose'),
      User = require('./user');

const campgroundSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }, 
    price: {
      type: String,
      required: true
    }, 
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    },
    image: String,
    description: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }, 
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
      }
    ]
  }, {
    timestamps: true
  }
);

campgroundSchema.pre("remove", async function(next) {
  try {
    let user = await User.findById(this.user);
    user.campgrounds.remove(this.id);
    await user.save();
  } catch (err) {
    return next(err);
  }
})

const Campground = mongoose.model("Campground", campgroundSchema);

module.exports = Campground;