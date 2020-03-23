import axios from "axios";

const token = window.localStorage.getItem("token");

export const ticketUserA = () => {
  return {
    type: "GET_TIKET_USER",
    payload: axios({
      method: "GET",
      url: "http://localhost:3900/api/v1/tickets",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};
