import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LoginForm, LoginHeader } from "../hooks/index";
import { connect } from "react-redux";
import { signup } from "../actions/actions";

class Registration extends Component {
  state = {
    user: {
      username: "",
      password: ""
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
        this.props.history.push("/");
      }, 1500);
    });
    setTimeout(() => {
      this.setState({
        user: {
          ...this.state.user,
          username: "",
          password: ""
        }
      });
    }, 1500);
  };
  render() {
    return (
      <div>
        <LoginHeader>
          <h1>Registration</h1>
        </LoginHeader>
        <LoginForm onSubmit={this.signup} actions="" autoComplete="off">
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
          <button type="submit">Sign Up!</button>
          <div className="extra">
            <p>
              Already have an Account? <Link to="/">Login!</Link>
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
