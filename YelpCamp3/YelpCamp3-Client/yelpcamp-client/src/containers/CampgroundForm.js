import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewCampground } from '../store/actions/campgrounds';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      image: "",
      description: ""
    };
  }

  handleNewCampground = event => {
    event.preventDefault();
    this.props.postNewCampground(this.state.name, this.state.price, this.state.latitude, this.state.longitude, this.state.image, this.state.description);
    this.setState({
      name: "",
      price: "",
      latitude: "",
      longitude: "",
      image: "",
      description: ""
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div className="camp-form-picture">
        </div>
        
        <form className="new-campground-form" onSubmit={this.handleNewCampground}>
          {this.props.errors.message && (
            <div className="alert alert-danger">
              {this.props.errors}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input 
              type="text" 
              className="form-control" 
              id="name"
              name="name"
              vlaue={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price: </label>
            <input 
              type="text" 
              className="form-control" 
              id="price"
              name="price"
              vlaue={this.state.price}
              onChange={e => this.setState({ price: e.target.value })}
            />
          </div>
          <div className="form-group">
            <div className="form-inline">
              <div className="form-inline latlon">
                <label htmlFor="latitude">Latitude: </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="latitude"
                  name="latitude"
                  vlaue={this.state.latitude}
                  onChange={e => this.setState({ latitude: e.target.value })}
                />
              </div>
              <div className="form-inline latlon">
                <label htmlFor="longitude">Longitude: </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="longitude"
                  name="longitude"
                  vlaue={this.state.longitude}
                  onChange={e => this.setState({ longitude: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image: </label>
            <input 
              type="text" 
              className="form-control" 
              id="image"
              name="image"
              vlaue={this.state.image}
              onChange={e => this.setState({ image: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description: </label>
            <textarea 
              type="text" 
              className="form-control" 
              id="description"
              name="description"
              rows= "6"
              vlaue={this.state.description}
              onChange={e => this.setState({ description: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Add Campground
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  }
}

export default connect(mapStateToProps, { postNewCampground })(MessageForm);