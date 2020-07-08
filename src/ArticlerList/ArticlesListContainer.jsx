import React from "react";
import { getArticles } from "../redux/articlesHeadersReducer";
import { connect } from "react-redux";
import { ArticleList } from "./ArticlesList"
import { withRouter, Redirect } from "react-router-dom";
import { compose } from "redux";
import { login } from "../redux/authReducer"

class ArticlesListContainer extends React.Component {
  componentDidMount() {
    this.props.getArticles();
  }

  render() {
    return (
      <>
      {this.props.isAuth ? <ArticleList articles={this.props.articles}/> : <Redirect to={"/signIn"}/>}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    articles: state.articles.list,
    isAuth: state.auth.isAuth
  };
};

export default compose(
  connect(mapStateToProps, {
    getArticles,
    login
  }),
  withRouter
) (ArticlesListContainer);
