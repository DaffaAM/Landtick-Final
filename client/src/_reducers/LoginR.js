import { LOGIN } from "../config/varconst";
import "../_actions/LoginA";
// Setup Reducer for Redux
const initialState = {
  data: [],
  dataErr: [],
  isLogin: false,
  isLoading: false
};

const LoginR = (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}_PENDING`:
      return {
        ...state
      };
    case `${LOGIN}_FULFILLED`:
      window.localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isLogin: true
      };
    case `${LOGIN}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        error: true,
        dataErr: action.payload.data
      };
    default:
      return state;
  }
};

export default LoginR;
