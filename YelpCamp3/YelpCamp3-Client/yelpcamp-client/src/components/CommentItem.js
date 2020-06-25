import React from 'react';
import Moment from 'react-moment';

const CommentItem = ({ text, date, author, user, removeComment }) => {
  return (
    <div className="comment-card">
      <h5><strong>{author.username}</strong></h5>
      { user.id === author._id && 
        <a className="btn btn-danger float-right" onClick={removeComment}>Delete</a> 
      }
      <div className="time">
        <Moment className="text-muted" format="YYYY-MM-DD HH:mm">
          {date}
        </Moment>
      </div>
      <div className="comment-text"></div>
      <p>{text}</p>
      
    </div>
  )
}

export default CommentItem;