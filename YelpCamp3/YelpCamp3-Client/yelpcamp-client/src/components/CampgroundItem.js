import React from 'react';
import Moment from 'react-moment';

const CampgroundItem = ({ campid, date, name, price, description, myid, user, image, removeCampground }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="camp-card img-thumbnail">
        <img src={image} alt={user.username} className="img-fluid timeline-image" />
        <div className="caption">
          <h5>{name}</h5>
        </div>
        <h6>${price}</h6>
        <p className="camp-desc">{description}</p>
        <div className="time">
            <Moment className="text-muted" format="YYYY-MM-DD HH:mm">
              {date}
            </Moment>
        </div>
        <div className="operation-button">
          <a href={`/users/${myid}/campgrounds/${campid}`} className="btn btn-primary">See Details</a>
          {myid === user._id && 
            <a className="btn btn-danger" onClick={removeCampground}>
              Delete
            </a>
          }
        </div>
      </div>
    </div>
  )
}

export default CampgroundItem;