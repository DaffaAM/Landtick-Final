import axios from "axios";
import { REGISTER } from "../config/varconst";
export const RegisterA = data => {
  return {
    type: REGISTER,
    payload: axios({
      method: "POST",
      url: "http://localhost:3900/api/v1/register",
      data
    })
  };
};
