const db = require('../models');

// CREATE
exports.createCampground = async function(req, res, next) {
  try {
    let campground = await db.Campground.create({
      name: req.body.name,
      price: req.body.price,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      image: req.body.image,
      description: req.body.description,
      user: req.params.id
    });
    let foundUser = await db.User.findById(req.params.id);
    foundUser.campgrounds.push(campground.id);
    await foundUser.save();
    let foundCampground = await db.Campground.findById(campground.id).populate("user", {
      username: true
    });
    return res.status(200).json(foundCampground);
  } catch (err) {
    return next(err);
  }
}

// GET /api/user/:id/campgrounds/:campground_id
exports.getCampground = async function(req, res, next) {
  try {
    let campground = await db.Campground.findById(req.params.campground_id)
      .populate({
        path: 'user',
        select: ['username']
      })
      .populate({
        path: 'comments',
        select: ['text', 'campground', 'createdAt'],
        sort: {
          createdAt: "desc"
        },
        populate: {
          path: 'user',
          select: 'username',
        }
      });
    return res.status(200).json(campground);
  } catch (err) {
    return next(err);
  }
}

// UPDATE /api/user/:id/campgrounds/:campground_id
exports.updateCampground = async function(req, res, next) {
  try {
    let foundCampground = await db.Campground.findById(req.params.campground_id);
    if (foundCampground.user.equals(req.params.id)) {
      let updatedName = req.body.name ? req.body.name : foundCampground.name;
      let updatedPrice = req.body.price ? req.body.price : foundCampground.price;
      let updatedLat = req.body.latitude ? req.body.latitude : foundCampground.latitude;
      let updatedLong = req.body.longitude ? req.body.longitude : foundCampground.longitude;
      let updatedImage = req.body.image ? req.body.image : foundCampground.image;
      let updatedDescription = req.body.description ? req.body.description : foundCampground.description;
      
      await foundCampground.update({
        name: updatedName,
        price: updatedPrice,
        latitude: updatedLat,
        longitude: updatedLong,
        image: updatedImage,
        description: updatedDescription
      });

      return res.status(200).json(await db.Campground.findById(req.params.campground_id));
    } else {
      return next({
        status: 401,
        message: "Unauthorized"
      })
    }
  } catch (err) {
    return next(err);
  }
}

// DELETE /api/user/:id/campgrounds/:campground_id
exports.deleteCampground = async function(req, res, next) {
  try {
    let foundCampground = await db.Campground.findById(req.params.campground_id);
    if (foundCampground.user.equals(req.params.id)) {
      for (commentId of foundCampground.comments) {
        await db.Comment.deleteOne({ _id: commentId });
      }
      await foundCampground.remove();
      return res.status(200).json(foundCampground);
    } else {
      return next({
        status: 401,
        message: "Unauthorized"
      })
    }
  } catch (err) {
    return next(err);
  }
}