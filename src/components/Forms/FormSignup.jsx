import React, { Component } from "react";
import { withRouter, Redirect, NavLink } from "react-router-dom";
import { UserContext } from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";


class FormSignup extends Component {
  static contextType = UserContext;

  state = {
    userName: "",
    email: "",
    password: "",
    //profileImg: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signup(this.state)
      .then((data) => {
        this.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.context.user) {
      return <Redirect to="/dashboard" />;
    }

    return (

      <div className="FormSignup flex--column">
        <form className="flex--column"
          onSubmit={this.handleSubmit}>
          <label htmlFor="userName">User Name</label>
          <input
            onChange={this.handleChange}
            value={this.state.userName}
            type="userName"
            id="userName"
            name="userName"
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={this.handleChange}
            value={this.state.email}
            type="email"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={this.handleChange}
            value={this.state.password}
            type="password"
            id="password"
            name="password"
          />

          {/* <label htmlFor="profileImg">Profile Image</label>
        <input
          onChange={this.handleChange}
          value={this.state.profileImg}
          type="file"
          id="profileImg"
          name="profileImg"
        /> */}
          <button className="blueBtn">Join</button>

          <p>Already have an account?</p> <NavLink to="/signin">Log in</NavLink>
        </form>
      </div>

    );
  }
}

export default withRouter(FormSignup);
