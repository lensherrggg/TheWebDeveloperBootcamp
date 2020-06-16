import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampgrounds } from '../store/actions/campgrounds';
import CampgroundItem from '../components/CampgroundItem';

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchCampgrounds();
  }
  render() {
    const { campgrounds, myid } = this.props;
    let campgroundList = campgrounds.map(c => (
      <CampgroundItem 
        key={c._id} 
        campid={c._id}
        date={c.createdAt} 
        name={c.name} 
        price={c.price} 
        description={c.description} 
        myid={myid}
        username={c.user.username} 
        image={c.image}
      />
    ));
    return (
      <div className="row">
          {campgroundList}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    campgrounds: state.campgrounds,
    myid: state.currentUser.user.id
  };
}

export default connect(mapStateToProps, { fetchCampgrounds })(MessageList);