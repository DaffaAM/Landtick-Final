const initialState = {
  data: [],
  isLoading: false,
  error: false
};

const ticketUserR = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TIKET_USER_PENDING":
      return {
        ...state,
        isLoading: true
      };

    case "GET_TIKET_USER_FULFILLED":
      console.log("data", action.payload.data.data);

      return {
        ...state,
        isloading: false,
        data: action.payload.data.data
      };
    case "GET_TIKET_USER_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true
      };

    default:
      return state;
  }
};

export default ticketUserR;
