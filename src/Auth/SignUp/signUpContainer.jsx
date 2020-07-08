import React from "react";
import SignUp from "./signUp";
import { connect } from "react-redux";
import { registration } from "../../redux/authReducer"



class SignInContainer extends React.Component {

  registration = (email, password) => {
    this.props.registration(email,password);
  }
  render() {
    return <>
      <SignUp isAuth={this.props.isAuth} registration={this.registration}/>
    </>
  }
}

let mapStateToProps = (state) => {
  return{
   isAuth: state.auth.isAuth
  }
}

export default connect( mapStateToProps , { registration }) (SignInContainer);