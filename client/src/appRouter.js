import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import AfterLogin from "./components/afterlogin";
import MyTicket from "./components/myticket";
import Invoice from "./components/invoice";
import dropdown from "./components/dropdown";
import AdmIndex from "./components/indexadmin";
import AdmAddTicket from "./components/admaddticket";
import AdmDetailTicket from "./components/admdetailticket";
import NavbarAdmin from "./components/navbar/admnav";
import Navuser from "./components/navbar/nav";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/Afterlogin" exact component={AfterLogin} />
      <Route path="/myticket" exact component={MyTicket} />
      <Route path="/invoice" exact component={Invoice} />
      <Route path="/dropdown" exact component={dropdown} />
      <Route path="/admindex" exact component={AdmIndex} />
      <Route path="/admaddticket" exact component={AdmAddTicket} />
      <Route path="/admdetailticket" exact component={AdmDetailTicket} />
      <Route path="/admnavbar" exact component={NavbarAdmin} />
      <Route path="/nav" exact component={Navuser} />

      {/* <Route path="/Login" component={Login} />
      <Route path="/Dashboard" component={Deck} />
      <Route path="/Profile" component={Profile} />
      <Route path="/EditProfile" component={EditProfile} /> */}
      {/* <Route path="/Deck" component={Deck} /> */}
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
