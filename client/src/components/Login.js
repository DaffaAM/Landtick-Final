import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "../style/allcss.css";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import { LoginA } from "../_actions/LoginA";
// import { LoginR } from "../_reducers/LoginR";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      username: "",
      password: "",
      usernameErr: "",
      passwordErr: ""
    };
  }

  handleModal = visible => {
    this.setState({ show: !visible });
  };

  handleLogin = e => {
    e.preventDefault();
    let dataLogin = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.LoginA(dataLogin);
  };

  usernameOnChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  passwordOnChange = e => {
    this.setState(
      {
        password: e.target.value
      },
      () => this.validatePassword(this.state.password)
    );
  };

  validatePassword = pass => {
    if (pass.length >= 4) {
      this.setState({
        passwordErr: ""
      });
    } else if (pass.length === 0) {
      this.setState({
        passwordErr: "Harap masukan password anda"
      });
    } else {
      this.setState({
        passwordErr: "masukan dengan minimal 4 karakter"
      });
    }
  };

  validateUsername = user => {
    if (user) {
      this.setState({
        usernameErr: ""
      });
    } else {
      this.setState({
        usernameErr: "mohon masuukan username anda"
      });
    }
  };

  render() {
    // console.log(this.props);
    // return <Redirect to="/Dashboard" />;

    const { show } = this.state;
    const { data, isLogin, error, dataErr } = this.props.login;
    if (isLogin === true && data.admin === false) {
      window.localStorage.setItem("token", data.token);
      window.location.href = "http://localhost:3000/afterlogin";
    } else if (isLogin === true && data.admin === true) {
      window.localStorage.setItem("token", data.token);
      window.location.href = "http://localhost:3000/admindex";
    }

    return (
      <>
        <Button
          className="loginbtn"
          size="lg"
          variant="primary"
          onClick={() => this.handleModal(show)}
        >
          <p className="tengahdoang">Login</p>
        </Button>
        <Modal
          className="modalsize"
          show={show}
          onHide={() => this.handleModal(show)}
        >
          <div id="coba1">
            <Modal.Title className="title-login"> Login</Modal.Title>
          </div>
          <Form onSubmit={this.handleLogin}>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control
                type="username"
                placeholder="username"
                className="emaillgn"
                name="username"
                onChange={this.usernameOnChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="passform"
                name="password"
                onChange={this.passwordOnChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Button className="btnlogin" variant="primary" type="submit">
                Submit
              </Button>
              <Form.Group></Form.Group>
              <Form.Label className="linktoreg">
                Belum Punya Akun ? <strong> Klik disini </strong>
              </Form.Label>
            </Form.Group>
          </Form>
          <div></div>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.LoginR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    LoginA: data => dispatch(LoginA(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
