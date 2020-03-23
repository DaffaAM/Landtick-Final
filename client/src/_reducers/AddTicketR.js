import { ADDTICKET } from "../config/varconst";

import "../_actions/AddTicketA";

// Setup Reducer for Redux
const initialState = {
  data: [],
  authenticated: false,
  isLoading: false,
  error: null
};

const AddTicketR = (state = initialState, action) => {
  switch (action.type) {
    case `${ADDTICKET}_PENDING`:
      return {
        ...state
      };
    case `${ADDTICKET}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        authenticated: true
      };
    case `${ADDTICKET}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        error: true
      };
    default:
      return state;
  }
};

export default AddTicketR;
