import { ADDTICKET } from "../config/varconst";
import axios from "axios";

const AddTicketA = data => {
  const token = window.localStorage.getItem("token");

  return {
    type: ADDTICKET,
    payload: axios({
      method: "POST",
      url: "http://localhost:3900/api/v1/ticket",
      headers: {
        Authorization: `Bearer ${token}`
      },
      data
    })
  };
};

export default AddTicketA;
