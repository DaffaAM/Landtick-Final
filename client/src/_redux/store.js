import { createStore, combineReducers, applyMiddleware } from "redux";

import RegisterR from "../_reducers/RegisterR";
import LoginR from "../_reducers/LoginR";
import AddTicketR from "../_reducers/AddTicketR";
import findUser from "../_reducers/getUserR";
import ticketUserR from "../_reducers/ticketUserR";
import PaymentR from "../_reducers/PaymentR";

import { logger, promise } from "../config/middleware";
// Global state
const rootReducers = combineReducers({
  LoginR,
  RegisterR,
  AddTicketR,
  findUser,
  ticketUserR,
  PaymentR
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
