import React, { Component } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { login } from "../../_action/LoginA";
import { find } from "../../_actions/getUserA";

class TiketSaya extends Component {
  componentDidMount() {
    this.props.find();
  }

  handleShow = () => {
    const childdrop = document.querySelector(".childdrop");
    childdrop.classList.toggle("childdrop1");
  };

  handleLogout() {
    window.localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/";
  }

  render() {
    const { dataLu } = this.props.findUser;
    // if (this.props.findUserR != null) {
    // if (this.props.findUserR != undefined) {
    console.log(dataLu);

    //   //     console.log("ddghg", this.props.findUserR.dataLu.name);
    // }
    // }
    return (
      <>
        <div className="navbar">
          <div className="topnavbar">
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
              <Link to="/admaddticket">
                <div className="drop">
                  <p>Tambah Tiket</p>
                </div>
              </Link>
              <hr />
              <Link to="/">
                <div className="drop" onclick={this.handleLogout}>
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
export default connect(mapStateToProps, mapDispatchToProps)(TiketSaya);
