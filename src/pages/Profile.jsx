import React from "react";
import FormUpdateUser from "../components/Forms/FormUpdateUser";
import FormProfile from "../components/Forms/FormProfile";
import apiHandler from "../api/apiHandler";
//import UserContext from "../Auth/UserContext";

class Profile extends React.Component {

  state={
    users: null
  }
  
  componentDidMount(){

    // console.log(this.props.match.params.id);
    // const userId = this.props.match.params.id;

    apiHandler.getUser()
    console.log(this.props)
        .then((responseFromApi) => {
            console.log(responseFromApi);
            
                this.setState({
                    users: responseFromApi,
                });
                        });
}
render(){
  return (
    <div>
      <h1>THIS IS MY PROFILE WHEN SIGNED IN </h1>
      <FormUpdateUser users={this.state.users} />
      <FormProfile users={this.state.users}/>
    </div>
  );
};
};

export default Profile;
