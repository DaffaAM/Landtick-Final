import axios from 'axios';


const token = window.localStorage.getItem("token");

export const getOrderAllA = () => {
return {
    type:"GET_ORDER_ALL",
    payload:axios({
        method: "GET",
        url: "http://localhost:3900/api/v1/listorderAll",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};
};