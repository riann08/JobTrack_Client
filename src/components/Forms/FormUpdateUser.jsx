import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { UserContext } from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";

class FormUpdateUser extends Component {
  static contextType = UserContext;

  state = {
    userName: "",
    email: "",
    password: "",
    profileImg: "",
  };

  componentDidMount() {
    // console.log(this.context.user._id);
    // console.log("test" + this.props.match.params.id);
    const userId = this.context.user._id;
    ;
    
    apiHandler
    .getUserInfo(userId)
    .then((apiResponse) => {
      const user = apiResponse;
      console.log(apiResponse);
        this.setState({
          userName: user.userName,
          email: user.email,
          password: user.password,
          profileImg: user.profileImg,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .updateUser(this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/profile");
      }) 
      .catch ((error) => {
          console.log(error);
        });
  };

  render() {
    if (this.context.user) {
      return <Redirect to="/dashboard" />;
    }

    return (
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

        <label htmlFor="profileImg">Profile Image</label>
        <input
          onChange={this.handleChange}
          value={this.state.profileImg}
          type="profileImg"
          id="profileImg"
          name="profileImg"
        />
        <button>Submit</button>


      </form>


    );
  }
}

export default withRouter(FormUpdateUser);
