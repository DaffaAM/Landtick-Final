import React, { Component } from "react";
import "../../style/allcss.css";
import { Redirect, Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { login } from "../../_action/LoginA";

class Usernav extends Component {
  // componentDidMount() {
  //     this.handleRefresh()
  // }
  // handleRefresh = () => {
  //     return (
  //         window.location.reload(true)
  //     )
  // }

  handleLogout = () => {
    return window.localStorage.removeItem("token");
  };

  render() {
    //const token = localStorage.getItem('token')
    // const { data } = this.props.loginR;
    // console.log("LIHAT", data);
    return (
      <>
        <div className="navbar">
          <div className="topnavbar">
            <img
              onClick={this.handleShow}
              src={require("../../img/admicon.png")}
              className="profile"
              alt="as"
            />
            <img
              className="title"
              src={require("../../img/logo.PNG")}
              alt="logo"
            ></img>

            <p className="title1">Daffa</p>
          </div>
          <div className="dropdown">
            <img
              onClick={this.handleShow}
              src={require("../../img/admicon.png")}
              className="profile"
              alt="as"
            />
            <div className="childdrop">
              <Link to="/add_tiket">
                <div className="drop">
                  <p>Tiket Saya</p>
                </div>
              </Link>
              <hr />
              <Link to="/add_tiket">
                <div className="drop">
                  <p>Payment</p>
                </div>
              </Link>
              <hr />
              <Link to="/">
                <div className="drop" onClick={this.handleLogout}>
                  <p>Logout</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Usernav;
