import axios from "axios";
const token = window.localStorage.getItem("token");

export const find = data => {
  return {
    type: "GET_USER_LOGIN",
    payload: axios({
      method: "GET",
      url: "http://localhost:3900/api/v1/checkuser",
      headers: {
        data,
        Authorization: `Bearer ${token}`
      }
    })
  };
};
