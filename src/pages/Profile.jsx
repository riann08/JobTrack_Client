import React from "react";
//import FormUpdateUser from "../components/Forms/FormUpdateUser"
import { Link } from "react-router-dom"
import { withUser } from "../components/Auth/withUser";

// class Profile extends React.Component {
//   static contextType = UserContext;

//   state={
//    user : []
//   }

// componentDidMount(){
// console.log(this.context.user._id)

// const userId = this.context.user._id;
//     apiHandler.getUserInfo(userId) 
//         .then((responseFromApi) => {
//             console.log(responseFromApi);

//                 this.setState({
//                     user: responseFromApi,
//                 });
//                         });
// }
// render(){
//  if(!this.state.user){
//    return(
//      <div>Loading...</div>
//    )
//  }
//   return (
//     <div>
//       <h1>THIS IS MY PROFILE WHEN SIGNED IN 
//         {this.props.name}
//       </h1>
//      <FormUpdateUser user={this.state.user} />

//      <button>Edit</button>

//     </div>
//   );
// };
// };

// //export default Profile;
// export default withUser(Profile);

const Profile = ({
  userName,
  email,
  password,
  context
}) => {
  return (
    context.user && <div className="Profile JobCard flex--column">
      <h1>My Profile</h1>
      <hr />
      <div className="flex--row"><p>Name:</p> <h4>{context.user.userName}</h4></div>
      <div className="flex--row"><p>Email: </p> <h4>{context.user.email}</h4></div>
      <div className="flex--row"><p>Password: </p> <h4>***</h4></div>

      <button className="blueBtn"><Link to={"/profile/" + context.user._id + "/edit"} >
        Edit
          </Link></button>
    </div>
  )
}

export default withUser(Profile)