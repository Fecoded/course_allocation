import {
  ADMIN_LOADED,
  GET_USERS,
  LOGIN_SUCCESS,
  ALLOCATE_COURSE,
  DELETE_USER,
  LOGIN_FAIL,
  AUTH_ERROR,
  LOGOUT,
} from "./admin.types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  users: [],
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADMIN_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case ALLOCATE_COURSE:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === payload._id ? payload : user
        ),
        loading: false,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== payload),
        loading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
