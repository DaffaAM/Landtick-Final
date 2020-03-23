import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "../style/allcss.css";

class AdmDetailTicket extends Component {
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
          src={require("../img/magnifier.png")}
        ></img>
        <Modal
          show={show}
          onHide={() => this.handleModal(show)}
          className="modalsizedetail"
          size="lg"
          closeButton
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
            <p className="myticketkiriatas1">Land Tick</p>
            <p className="ttldetail">INVOICE</p>
            <p className="bawahttl">Kode Invoice : INV0101</p>
            <div className="divgbradm"></div>
            <div className="divinfodetail">
              <p className="kam1">Kereta Api</p>
              <p className="kam2">Saturday, 21 February 2020</p>
              <img
                src={require("../img/qr1.png")}
                alt="qr"
                className="imgqr"
              ></img>
              <p className="nmkrt">Argo Wilis</p>
              <p className="nmkls">Ekonomi (H)</p>
              <img
                src={require("../img/asal.png")}
                alt="logo"
                className="atsawal"
              ></img>{" "}
              <img
                src={require("../img/linemyticket.png")}
                alt="logo"
                className="linetgh"
              ></img>{" "}
              <img
                src={require("../img/tujuan.png")}
                alt="logo"
                className="bawahpas"
              ></img>
              <p className="wktbrkt3">05.00</p>
              <p className="tglbrkt3"> 21 February 2020</p>
              <p className="wktsmp3">10.05</p>
              <p className="tglsmp3">21 February 2020</p>
              <p className="kotabrkt3">Jakarta (GMR)</p>
              <p className="stsbrkt3">Stasiun Gambir</p>
              <p className="kotasmp3">Surabaya (SBY)</p>
              <p className="stssmp3">Stasiun Surabaya</p>
            </div>
            <br></br>
            <hr></hr>
            <p className="order21">No. Tanda Pengenal</p>
            <p className="order22">Nama Pemesan</p>
            <p className="order23">No. Handphone</p>
            <p className="order24">Email</p>
            <p className="orderticket21">3174041806980008</p>
            <p className="orderticket22">Daffa Abdhy Muzhaffar</p>
            <p className="orderticket23">081210313944</p>
            <p className="orderticket24">daffaa34@gmail.com</p>
          </Modal.Body>
          <div className="clsttl">
            <p className="clsttlhrg">Total</p>
            <p className="hrgcooy">RP. 250.000</p>
          </div>
        </Modal>
      </>
    );
  }
}

export default AdmDetailTicket;
