import axios from "axios";

const token = window.localStorage.getItem("token");

export const PaymentA = data => {
  return {
    type: "GET_USER_PAYMENT",
    payload: axios({
      method: "GET",
      url: "http://localhost:3900/api/v1/Payment",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};
