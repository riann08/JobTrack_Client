import React from "react";
import FormUpdateUser from "../components/Forms/FormUpdateUser"
import apiHandler from "../api/apiHandler";
import {withUser} from "../components/Auth/withUser";

class Profile extends React.Component {

  state={
   user : []
  }
  
  componentDidMount(){
console.log(this.props)
    // console.log(this.props.match.params.id);
    const userId = this.context.user._id;

    apiHandler.getUserInfo(userId)
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
      <h1>THIS IS MY PROFILE WHEN SIGNED IN 
        {this.props.name}
      </h1>
     <FormUpdateUser users={this.state.users} />
     
     <button>Edit</button>

    </div>
  );
};
};

export default withUser(Profile);
