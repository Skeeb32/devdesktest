import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LoginForm, LoginHeader } from "../hooks/index";
import { connect } from "react-redux";
import { signup } from "../actions/actions";

class Registration extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      email: "",
      isAdmin: false,
    }
  };

  handleChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  signup = e => {
    e.preventDefault();
    this.props.signup(this.state.user).then(() => {
      setTimeout(() => {
        this.props.history.push("/login");
      }, 1500);
    });
    setTimeout(() => {
      this.setState({
        user: {
          ...this.state.user,
          firstName: "",
          lastName: "",
          username: "",
          password: "",
          email: "",
          isAdmin: false,
        }
      });
    }, 1500);
  };
  render() {
    return (
      <div>
        <LoginHeader>
          <h1>Lambda School</h1>
        </LoginHeader>
        <LoginForm onSubmit={this.signup} actions="" autoComplete="off">
          <input
            onChange={this.handleChange}
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.user.firstName}
            required
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.user.lastName}
            required
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.user.username}
            required
          />
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.user.password}
            required
          />
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.user.email}
            required
          />
          <button type="submit">Sign Up!</button>
          <div className={this.props.status}>
            <p>{this.props.error}</p>
          </div>
          <div className="extra">
            <p>
              Already have an Account? <Link to="/Login">Log in!</Link>
            </p>
          </div>
        </LoginForm>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.status,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { signup }
)(Registration);
