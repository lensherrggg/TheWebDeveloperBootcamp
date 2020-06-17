import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import CampgroundDetail from '../components/CampgroundDetail';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';
import withAuth from '../hocs/withAuth';
import CampgroundForm from '../containers/CampgroundForm';
import CommentForm from '../containers/CommentForm';

const Main = props => {
  const { authUser, errors, removeError, currentUser } = props;
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={props => <Homepage currentUser={currentUser} {...props} />} />
        <Route exact path="/signin" render={props => {
          return (
            <AuthForm removeError={removeError} errors={errors} onAuth={authUser} buttonText="Log in" heading="Welcome Back. " {...props} />
          )
        }} />
        <Route exact path="/signup" render={props => {
          return (
            <AuthForm removeError={removeError} errors={errors} onAuth={authUser} signUp buttonText="Sign me up" heading="Join YelpCamp" {...props} />
          )
        }} />
        <Route exact path="/users/:id/campgrounds" component={withAuth(CampgroundForm)} />
        <Route exact path="/users/:id/campgrounds/:campground_id" render={props => {
          return (
            <CampgroundDetail {...props} />
          )
        }} />
        <Route exact path="/users/:id/campgrounds/:campground_id/comments" component={withAuth(CommentForm)} />
      </Switch>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}
export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));