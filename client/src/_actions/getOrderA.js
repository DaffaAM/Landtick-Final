import axios from 'axios';

const token = window.localStorage.getItem("token");

export const getOrderA = () => {
    return {
        type: "GET_ORDER_USER",
        payload: axios({
            method: "GET",
            url: "http://localhost:3900/api/v1/listorder",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    };
};