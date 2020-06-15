const initialState = {
    dataOrder: [],
    isLoading: false,
    error: false
};

const getOrderAllR = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ORDER_ALL_PENDING":
        return {
        ...state,
        isLoading: true
        };

        case "GET_ORDER_ALL_FULFILLED":
        return{
        ...state,
        isLoading: false,
        dataOrder: action.payload.data.data
        };

        case "GET_ORDER_ALL_REJECTED":
        return{
        ...state,
        isLoading: false,
        error: true
        };

    default:
        return state;

    }
};

export default getOrderAllR;