import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class AdmEditTicket extends Component {
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

  render() {
    const { show } = this.state;
    return (
      <>
        <img
          onClick={() => this.handleModal(show)}
          src={require("../img/vectoredit.PNG")}
        ></img>
        <Modal
          show={show}
          onHide={() => this.handleModal(show)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Body>
            <img
              src={require("../img/Vectorticket.png")}
              alt="logo"
              className=""
            ></img>
            <img
              src={require("../img/Vector.png")}
              alt="logo"
              className="myticketkiriatas"
            ></img>
            <img
              src={require("../img/X.png")}
              alt="logo"
              // show={show}
              // onHide={() => this.handleModal(show)}
              className="xbtnedit"
            ></img>
            <p className="myticketkiriatas1">Land Tick</p>

            <input type="text" className="edittkt1" disabled value="1"></input>
            <input
              type="text"
              className="edittkt2"
              disabled
              value="Daffa"
            ></input>
            <input
              type="text"
              className="edittkt3"
              disabled
              value="Surabaya - Jakarta"
            ></input>
            <input
              type="text"
              className="edittkt4"
              disabled
              value="bca.jpg"
            ></input>
            <input type="text" className="edittkt5" value="Approved"></input>
            <Button variant="primary" className="btnsaveedit">
              Save
            </Button>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default AdmEditTicket;
