const express = require('express'),
      router = express.Router({ mergeParams: true }),
      { createCampground, getCampground, updateCampground, deleteCampground } = require('../handlers/campgrounds'),
      { createComment, getComments, deleteComment } = require('../handlers/comments');
      
router.route('/').post(createCampground);
router.route('/:campground_id')
  .get(getCampground)
  .put(updateCampground)
  .delete(deleteCampground);

router.route('/:campground_id/comments/')
  .post(createComment)
  .get(getComments);
router.route('/:campground_id/comments/:comment_id').delete(deleteComment);

module.exports = router;