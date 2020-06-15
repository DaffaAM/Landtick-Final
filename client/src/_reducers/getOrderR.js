const initialState = {
    dataTiket: [],
    isLoading: false,
    error: false
};

const getOrderR = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ORDER_USER_PENDING":
        return {
        ...state,
        isLoading: true
        };

        case "GET_ORDER_USER_FULFILLED":
        return{
        ...state,
        isLoading: false,
        dataTiket: action.payload.data.data
        };

        case "GET_ORDER_USER_REJECTED":
        return{
        ...state,
        isLoading: false,
        error: true
        };

    default:
        return state;

    }
};

export default getOrderR;