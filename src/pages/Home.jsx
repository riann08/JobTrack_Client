import React from "react";
import FormSignUp from "../components/Forms/FormSignup";

class Home extends React.Component {
  render() {
    return (
      <>    
      <div className="Home flex--row">
        <img className="Home__img" src="/images/undraw_job_offers_kw5d.svg" alt="home page pic"/>
         <FormSignUp />
      
        </div>
      </>
    )
  };
}

export default Home;
