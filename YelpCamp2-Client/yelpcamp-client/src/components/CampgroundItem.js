import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const CampgroundItem = ({ campid, date, name, price, description, myid, username, image }) => {
  return (
    <div className="item col-md-4 col-sm-6">
      <div className="card">
        <img src={image} alt={username} height="100" width="300" className="timeline-image" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-title">${price}</h6>
          <p className="card-text">{description}</p>
          <div className="time">
            <Moment className="text-muted" format="Do MMM YYYY">
              {date}
            </Moment>
          </div>
          <div className="detail">
            <a href={`/users/${myid}/campgrounds/${campid}`} className="btn btn-primary">See Details</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampgroundItem;