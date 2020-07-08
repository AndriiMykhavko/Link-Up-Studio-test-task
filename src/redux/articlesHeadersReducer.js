import { articlesAPI } from "../api/api";

const SET_ARTICLES_LIST = "SET_ARTICLES_LIST";
const SET_ARTICLE = "SET_ARTICLE";

const initialState = {
  list: [],
};

export const articlesHeadersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLES_LIST: {
      return {
        ...state,
        list: action.list,
      };
    }
    case SET_ARTICLE: {
      return {
        ...state,
        articleId: action.articleId,
      };
    }
    default:
      return state;
  }
};

export const setArticlesList = (list) => ({
  type: SET_ARTICLES_LIST,
  list,
});

export const setArticle = (articleId) => ({
  type: SET_ARTICLE,
  articleId,
});

export const getArticles = () => {
  return (dispatch) => {
    articlesAPI.getArticlesList().then((response) => {
      const {
        response: { docs },
      } = response;
      dispatch(setArticlesList(docs));
    });
  };
};
