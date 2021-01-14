import React from "react";
import FormSignUp from "../components/Forms/FormSignup";

class Home extends React.Component {
  render() {
    return (
      <>
        <h1>Job Track Home</h1>

        {/* <img className="img__Home" src="/assets/images/my resume backdrop.jpg" alt="backdrop home" /> */}

      <div>
          <FormSignUp />
        </div>
      </>
    )
  };
}

export default Home;
