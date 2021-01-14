import React from "react";
import FormUpdateUser from "../components/Forms/FormUpdateUser";
// import FormProfile from "../components/Forms/FormProfile";
// import apiHandler from "../../api/apiHandler";
// import UserContext from "../Auth/UserContext";

const Profile = (props) => {
  return (
    <div>
      <h1>THIS IS MY PROFILE WHEN SIGNED IN </h1>

      <FormUpdateUser />
      {/* <FormProfile /> */}
    </div>
  );
};

export default Profile;
