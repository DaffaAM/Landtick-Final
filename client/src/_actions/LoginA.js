import { LOGIN } from "../config/varconst";
import axios from "axios";

export const LoginA = data => {
  return {
    type: LOGIN,
    payload: axios({
      method: "POST",
      url: "http://localhost:3900/api/v1/login",
      data
    })
  };
};
