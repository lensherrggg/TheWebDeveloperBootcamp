import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampgroundDetail } from '../store/actions/campgrounds'
import CommentList from '../containers/CommentList';

class CampgroundDetail extends Component {
  componentDidMount() {
    this.props.fetchCampgroundDetail(this.props.match.params.id, this.props.match.params.campground_id);
  }

  render() {
    const { name, price, image, description, comments, campground } = this.props;
    return (
      <div>
        <div className="navi-bg"></div>
        <div className="row detail">
          <div className="col-md-3">
            <p className="lead">YelpCamp</p>
            <div className="list-group">
              <li className="list-group-item active">Info 1</li>
              <li className="list-group-item">Info 2</li>
              <li className="list-group-item">Info 3</li>
            </div>
          </div>
          <div className="col-md-9">
            <div className="detail-area img-thumbnail">
              <img src={image} alt={name} className="img-fluid"/>
              <div className="caption-full">
                <h4 className="float-right">${price}</h4>
                <h4><a>{name}</a></h4>
                <p>{description}</p>
              </div>
            </div>
            <div className="card comment-cards-group">
              <div className="text-right">
                <a 
                  href={`/users/${this.props.match.params.id}/campgrounds/${this.props.match.params.campground_id}/comments`} 
                  className="btn btn-success"
                >
                  Add New Comment
                </a>
              </div>
              <div>
                <CommentList campground={campground} comments={comments}/>
              </div>
            </div>
          </div>          
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    me: state.currentUser.user,
    name: state.campgroundDetail.name,
    price: state.campgroundDetail.price,
    image: state.campgroundDetail.image,
    description: state.campgroundDetail.description,
    comments: state.comments,
    campground: state.campgroundDetail._id
  };
}

export default connect(mapStateToProps, { fetchCampgroundDetail })(CampgroundDetail);