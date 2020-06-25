import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewComment } from '../store/actions/campgrounds'

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleNewComment = event => {
    event.preventDefault();
    this.props.postNewComment(this.state.text, this.props.match.params.campground_id);
    this.setState({
      text: ""
    })
    this.props.history.push(`/users/${this.props.user_id}/campgrounds/${this.props.match.params.campground_id}`);
  }

  render() {
    return (
      <div>
        <div className="comment-form-bg"></div>
        <form className="new-comment-form" onSubmit={this.handleNewComment}>
          <div className="form-group">
            <label htmlFor="text">Text: </label>
            <input 
              type="text" 
              className="form-control" 
              id="text" 
              name="text" 
              value={this.state.text} 
              onChange={e => this.setState({ text: e.target.value })} 
            />
          </div>
          <button className="btn btn-success" type="submit">Add Comment</button>
        </form>
        
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user_id: state.currentUser.user.id,
    errors: state.errors
  }
}

export default connect(mapStateToProps, { postNewComment })(CommentForm);