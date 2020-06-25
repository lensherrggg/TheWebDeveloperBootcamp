import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampgrounds, removeCampground } from '../store/actions/campgrounds';
import CampgroundItem from '../components/CampgroundItem';

class CampgroundList extends Component {
  componentDidMount() {
    this.props.fetchCampgrounds();
  }
  render() {
    const { campgrounds, myid, fetchCampgroundDetail, removeCampground } = this.props;
    let campgroundList = campgrounds.map(c => (
      <CampgroundItem 
        key={c._id} 
        campid={c._id}
        date={c.createdAt} 
        name={c.name} 
        price={c.price} 
        description={c.description} 
        myid={myid}
        user={c.user}
        image={c.image}
        fetchCampgroundDetail={fetchCampgroundDetail}
        removeCampground={removeCampground.bind(this, c.user._id, c._id)}
      />
    ));
    return (
      <div className="row campground-group">
          {campgroundList}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    campgrounds: state.campgrounds,
    myid: state.currentUser.user.id,
  };
}

export default connect(mapStateToProps, { fetchCampgrounds, removeCampground })(CampgroundList);