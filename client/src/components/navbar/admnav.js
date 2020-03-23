import React, { Component } from "react";
import "../../style/allcss.css";
import { Link } from "react-router-dom";

class TiketSaya extends Component {
  handleShow = () => {
    const childdrop = document.querySelector(".childdrop");
    childdrop.classList.toggle("childdrop1");
  };

  render() {
    return (
      <>
        <div className="navbar">
          <div className="topnavbar">
            <img
              className="title"
              src={require("../../img/logo.PNG")}
              alt="logo"
            ></img>
            <p className="title1">Admin</p>
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
                  <p>Tambah Tiket</p>
                </div>
              </Link>
              <hr />
              <Link to="/">
                <div className="drop">
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
export default TiketSaya;
