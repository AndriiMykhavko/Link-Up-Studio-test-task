import React from "react";
import SignIn from "./signIn";
import { login } from "../../redux/authReducer";
import { connect } from "react-redux";


class SignInContainer extends React.Component {

  login = (email, password) => {
    this.props.login(email,password);
  }
  render() {
    return <>
      <SignIn isAuth={this.props.isAuth} login={this.login}/>
    </>
  }
}

let mapStateToProps = (state) => {
  return{
   isAuth: state.auth.isAuth
  }
}

export default connect( mapStateToProps , { login }) (SignInContainer);