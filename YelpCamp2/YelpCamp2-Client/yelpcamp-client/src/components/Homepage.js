import React from 'react';
import { Link } from 'react-router-dom'
import CampgroundTimeline from './CampgroundTimeline';

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
        <h1>Bring You The Whole World</h1>
        <Link to='/signup' className='btn btn-outline-light'>
          Sign up here
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="main-page img-fluid">
        <h1>Bring You The Whole World</h1>
      </div>
      <CampgroundTimeline />
    </div>
  )
};

export default Homepage;