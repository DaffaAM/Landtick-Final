import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "../style/allcss.css";
// import { connect } from "react-redux";
// import { RegisterA } from "./_actions/RegisterA";
// import { getSpecies } from "./_actions/SpeciesA";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedSpecies: "",
      breednder: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      namepet: "",
      gender: "",
      species: "",
      age: ""
    };
  }

  handleRegister = () => {
    const data = {
      breednder: this.state.breednder,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      address: this.state.address,
      pet: {
        name: this.state.petName,
        gender: this.state.gender,
        species: this.state.selectedSpecies,
        age: this.state.age
      }
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
              onChange={e => this.setState({ breednder: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="formregist"
              type="text"
              placeholder="Username"
              onChange={e => this.setState({ email: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="formregist"
              type="password"
              placeholder="Email"
              onChange={e => this.setState({ password: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="formregist"
              type="password"
              placeholder="Password"
              onChange={e => this.setState({ phone: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control
              as="select"
              className="formregist"
              onChange={e => this.setState({ selectedSpecies: e.target.value })}
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
              onChange={e => this.setState({ petName: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows="3"
              className="formregist"
              placeholder="Alamat"
            />
          </Form.Group>
          <Form.Group>
            <Button
              className="btnlogin"
              variant="primary"
              type="submit"
              onClick={this.handleRegister}
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

export default Register;
