import React from "react";
import { connect } from "react-redux";
import { Article } from "./Article"
import { getArticles } from "../../redux/articlesHeadersReducer"
import { withRouter, Redirect } from "react-router-dom";
import { compose } from "redux";


class ArticleContainer extends React.Component {
 render() {
      return <>
          { this.props.articles.length === 0  ? <Redirect to={"/"}/>
                    :  <Article article={this.props.articles[this.props.match.params.articleId]} /> }
      </>
  }
}

let mapStateToProps = (state) => {
  return{
    articles: state.articles.list,
  }
}

export default compose(
  connect(mapStateToProps,{ getArticles }),
  withRouter
) (ArticleContainer);