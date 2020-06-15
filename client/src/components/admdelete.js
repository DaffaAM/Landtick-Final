import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Axios from 'axios'


class AdmDeleteTicket extends Component {
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

  delete = async () => {
    const token = window.localStorage.getItem('token')
    try {
      await Axios({
        method: "DELETE",
        url: `http://127.0.0.1:3900/api/v1/deleteorder/${this.props.isi.id}`,
        headers: {Authorization: `Bearer ${token}`}
      });
      window.location.href = "http://localhost:3000/admindex";
    } catch (error) {
      console.log(error.messages);
      
    }
  };
  render() {
    const { show } = this.state;

    console.log(this.props.isi);
    
    return (
      <>
        <img
          onClick={() => this.handleModal(show)}
          src={require("../img/vectorrubbish.PNG")}
        ></img>
        <Modal
          show={show}
          onHide={() => this.handleModal(show)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Info
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
          Are you Sure to Delete this Transaction? {this.props.isi.id}
          </p>
            <Button variant="danger" style={{width:70}} onClick={this.delete}>Yes</Button>
            <Button style={{marginLeft:20,width:70}}>No</Button>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default AdmDeleteTicket;
