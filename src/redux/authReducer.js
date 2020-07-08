import { authAPI } from "../api/api";
import { ToastsStore } from "react-toasts";

const SET_USER = "SET_USER";
const LOG_IN = "LOG_IN";
const SET_AUTH = "SET_AUTH";

const initialState = {
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        isAuth: action.isAuth,
        email: action.email,
      };
    }
    case LOG_IN: {
      return {
        isAuth: action.isAuth,
        email: action.email,
      };
    }
    case SET_AUTH: {
      return {
        isAuth: action.isAuth,
      };
    }
    default:
      return state;
  }
};

export const setUser = (isAuth = true) => ({
  type: SET_USER,
  isAuth,
});
export const logoutUser = (isAuth = false) => ({
  type: SET_USER,
  isAuth,
});

export const login = (email, password) => (dispatch) => {
  authAPI
    .login(email, password)
    .then((response) => {
      ToastsStore.success("Success =)");
    })
    .catch((error) => ToastsStore.error(error.code, 6000));
};

export const registration = (email, password) => (dispatch) => {
  authAPI
    .registration(email, password)
    .then((response) => ToastsStore.success("Success =)"))
    .catch((error) => ToastsStore.error(error.code, 6000));
};

export const logout = () => (dispatch) => {
  authAPI.logout().then(dispatch(logoutUser()));
};
