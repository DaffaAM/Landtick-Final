import React, { Component } from "react";
import "../../style/allcss.css";
import { Redirect, Link } from "react-router-dom";
import "./nav.css";
import { connect } from "react-redux";
import { find } from "../../_actions/getUserA";

class Usernav extends Component {
  componentDidMount() {
    this.props.find();
  }
  // componentDidMount() {
  //     this.handleRefresh()
  // }
  // handleRefresh = () => {
  //     return (
  //         window.location.reload(true)
  //     )
  // }
  handleLogout() {
    window.localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/";
  }

  render() {
    const { dataLu } = this.props.findUser;
    // if (this.props.findUserR != null) {
    // if (this.props.findUserR != undefined) {
    console.log(dataLu);

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

            <p className="title1">{dataLu.name}</p>
          </div>
          <div className="dropdown">
            <img
              onClick={this.handleShow}
              src={require("../../img/admicon.png")}
              className="profile"
              alt="as"
            />
            <div className="childdrop">
              <Link to="/approve">
                <div className="drop">
                  <p>Tiket Saya</p>
                </div>
              </Link>
              <hr />
              <Link to="/invoice">
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

const mapStateToProps = state => {
  console.log("DATA REDUX", state);
  return {
    findUser: state.findUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    find: data => dispatch(find(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Usernav);
