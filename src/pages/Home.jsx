import React from "react";
import FormSignUp from "../components/Forms/FormSignup";
// import FormJob from "../components/Forms/FormJob";
// import FormUpdateUser from "../components/Forms/FormUpdateUser";

class Home extends React.Component {
  render() {
    return (
      <>    
      <div className="Home flex--row">
        {/* <img className="img__Home" src="/assets/images/mybackdrop.jpg" alt="backdrop home" /> */}
      <FormSignUp />
      
        </div>
      </>
    )
  };
}

export default Home;
