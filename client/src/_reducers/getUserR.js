const initialState = {
  data: [],
  dataLu: [],
  isLoading: false,
  error: false,
  status: false
};

const findUser = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
        status: false
      };

    case "GET_USER_LOGIN_FULFILLED":
      return {
        ...state,
        isLoading: false,
        status: true,
        data: action.payload.data,
        dataLu: action.payload.data.data
      };
    case "GET_USER_LOGIN_REJECTED":
      return {
        ...state,
        isLoading: true,
        error: true
      };
    default:
      return state;
  }
};

export default findUser;
