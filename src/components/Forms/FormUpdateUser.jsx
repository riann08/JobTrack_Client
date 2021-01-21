import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
    //console.log("test" + this.props);
    const userId = this.context.user._id;


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
    console.log(event);
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleDelete = () => {
    // console.log(this.props);

    apiHandler.deleteUser()
      .then(() => {
        this.props.history.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.event)

    apiHandler
      .updateUser(this.context.user._id, this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/profile");
      })
      .catch((error) => {
        console.log(error);
      });

  };

  render() {
    // if (this.context.user) {
    //   return <Redirect to="/" />;
    // }

    return (

      <div className="FormUpdateUser flex--column">
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
          type="profileImg"
          id="profileImg"
          name="profileImg"
        /> */}
          <button>Submit</button>

        </form>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default withRouter(FormUpdateUser);
