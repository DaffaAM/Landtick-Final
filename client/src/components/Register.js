import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "../style/allcss.css";
import { connect } from "react-redux";
import { RegisterA } from "../_actions/RegisterA";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: "",
      username: "",
      email: "",
      password: "",
      gender: "",
      phone: "",
      address: ""
    };
  }

  handleRegister = () => {
    const data = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
      phone: this.state.phone,
      address: this.state.address
    };
    this.props.RegisterA(data);
    console.log(data);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleModal = visible => {
    this.setState({ show: !visible });
  };

  render() {
    const { show } = this.state;
    // const { data } = this.props.species;

    return (
      <>
        <Button
          onClick={() => this.handleModal(show)}
          variant="outline-danger"
          className="regbtn"
        >
          Daftar
        </Button>
        <Modal show={show} onHide={() => this.handleModal(show)}>
          <div>
            <Modal.Title className="title-login"> Register</Modal.Title>
          </div>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              className="formregist"
              type="text"
              placeholder="Nama Lengkap"
              onChange={e => this.setState({ name: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="formregist"
              type="text"
              placeholder="Username"
              onChange={e => this.setState({ username: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="formregist"
              type="email"
              placeholder="Email"
              onChange={e => this.setState({ email: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="formregist"
              type="password"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control
              as="select"
              className="formregist"
              onChange={e => this.setState({ gender: e.target.value })}
              placeholder="Jenis Kelamin"
            >
              <option>Jenis Kelamin</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="formregist"
              type="text"
              placeholder="Telp"
              onChange={e => this.setState({ phone: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows="3"
              className="formregist"
              placeholder="Alamat"
              onChange={e => this.setState({ address: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Button
              className="btnlogin"
              variant="primary"
              type="submit"
              onClick={this.handleRegister}
              href="/afterlogin"
            >
              Submit
            </Button>
            <Form.Label></Form.Label>
          </Form.Group>
          <Form.Group></Form.Group>
          <div></div>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    register: state.RegisteR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    RegisterA: data => dispatch(RegisterA(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
