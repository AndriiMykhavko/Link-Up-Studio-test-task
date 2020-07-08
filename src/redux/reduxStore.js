import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { articlesHeadersReducer } from "./articlesHeadersReducer";
import { authReducer } from "./authReducer";

let reducers = combineReducers({
  articles: articlesHeadersReducer,
  auth: authReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
