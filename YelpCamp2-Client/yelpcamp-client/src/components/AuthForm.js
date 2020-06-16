import React, {Component} from 'react';
import errors from '../store/reducers/errors';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props.onAuth(authType, this.state)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(() => {
        return;
      });
  };

  render() {
    const { email, username, password } = this.state;
    const { buttonText, heading, signUp, errors, history, removeError } = this.props;

    history.listen(() => {
      removeError();
    });

    return (
      <div className="auth-form">
        <div className="row justify-content-md-center">
          <form onSubmit={this.handleSubmit}>
            <h2 className="text-center">{heading}</h2>
            {errors.message && <div className="alert alert-danger">{errors.message}</div>}
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input 
                className="form-control" 
                id="email" 
                name="email" 
                onChange={this.handleChange} 
                value={email} 
                type="text"
              />
              <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
            </div>
            {signUp && (
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input 
                  className="form-control" 
                  id="username" 
                  name="username" 
                  onChange={this.handleChange} 
                  vlaue={username}
                  type="text"
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="password">Password:</label>
                <input 
                  className="form-control" 
                  id="password" 
                  name="password" 
                  onChange={this.handleChange} 
                  type="password"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-outline-light btn-block btn-lg">
                  {buttonText}
                </button>
              </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AuthForm;