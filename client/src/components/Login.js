import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
// import { Redirect } from "react-router-dom";
import "../style/allcss.css";

// import { LoginR } from "./_reducers/LoginR";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      email: "",
      password: ""
    };
  }

  handleModal = visible => {
    this.setState({ show: !visible });
  };
  handleLogin = e => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const data = { email, password };
    console.log("data login handle", data);
  };

  handleEmail = e => {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  };

  handlePassword = e => {
    e.preventDefault();
    this.setState({
      password: e.target.value
    });
  };
  render() {
    // console.log(this.props);
    // return <Redirect to="/Dashboard" />;

    const { show } = this.state;
    // const { data, isLoading, authenticated, error } = this.props.login;
    return (
      <>
        {/* return <Redirect to="/Dashboard" />; */}
        {/* {data.token != null ? <Redirect to="/Dashboard" /> : null} */}

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
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              type="Email"
              placeholder="Email"
              className="emaillgn"
              value={this.state.email}
              onChange={this.handleEmail}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="passform"
              value={this.state.password}
              onChange={this.handlePassword}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Button
              className="btnlogin"
              variant="primary"
              type="submit"
              onClick={this.handleLogin}
            >
              Submit
            </Button>
            <Form.Group></Form.Group>
            <Form.Label className="linktoreg">
              Belum Punya Akun ? <strong> Klik disini </strong>
            </Form.Label>
          </Form.Group>
          <div></div>
        </Modal>
      </>
    );
  }
}

export default Login;
