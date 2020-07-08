import React from "react";
import "./App.css";
import ArticlesListContainer from "./ArticlerList/ArticlesListContainer";
import { Route } from "react-router-dom";
import ArticleContainer from "./ArticlerList/Article/ArticleContainer";
import { Container } from "@material-ui/core";
import HeaderContainer from "./Header/HeaderContainer";
import * as firebase from "firebase";
import signInContainer from "./Auth/signIn/signInContainer";
import signUpContainer from "./Auth/SignUp/signUpContainer";
import { connect } from "react-redux";
import { login, setUser } from "./redux/authReducer";
import { Toast } from "./common/toast/toast";

class App extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        this.props.setUser();
      }
    });
  }
  render() {
    return (
      <>
        <HeaderContainer />
        <Container maxWidth="sm">
          <Route exact path="/" component={ArticlesListContainer} />
          <Route path="/article/:articleId?" component={ArticleContainer} />
          <Route path="/signIn" component={signInContainer} />
          <Route path="/signUp" component={signUpContainer} />
        </Container>
        <Toast />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { login, setUser })(App);
