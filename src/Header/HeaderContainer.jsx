import React from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import { logout, } from "../redux/authReducer"

class HeaderContainer extends React.Component{
  logout = () => {
    this.props.logout()
  }
    render() {
        return (
            <Header isAuth={this.props.isAuth} logout={this.logout} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
      isAuth: state.auth.isAuth
    }
} 

export default connect (mapStateToProps, {logout}) (HeaderContainer)