import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampgroundDetail, removeComment } from '../store/actions/campgrounds';
import CommentItem from '../components/CommentItem';

class CommentList extends Component {
  // componentDidMount() {
  //   this.props.fetchCampgroundDetail(this.props.user.id, this.props.campground);
  // }
  render() {
    const { comments, user, removeComment } = this.props;
    let commentList = comments.map(c => 
      <CommentItem 
        key={c._id}
        text={c.text}
        author={c.user}
        date={c.createdAt}
        user={user}
        removeComment={removeComment.bind(this, user.id, c.campground, c._id)}
      />
    );
    return (
      <div>
        {commentList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.currentUser.user
  }
}

export default connect(mapStateToProps, { fetchCampgroundDetail, removeComment })(CommentList);