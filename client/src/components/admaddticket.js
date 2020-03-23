import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../style/allcss.css";
import Admnav from "../components/navbar/admnav";

class AdmAddTicket extends Component {
  render() {
    return (
      <div className="topnavbar">
        <Admnav />
        <h3 className="turunmyticket">Tambah Ticket</h3>
        <input
          type="text"
          className="formadd1"
          placeholder="Nama Kereta"
        ></input>
        <input
          type="text"
          className="formadd2"
          placeholder="Jenis Kereta"
        ></input>
        <input
          type="text"
          className="formadd3"
          placeholder="Tanggal Keberangkatan"
        ></input>
        <input
          type="text"
          className="formadd4"
          placeholder="Stasiun Keberangkatan"
        ></input>
        <input
          type="text"
          className="formadd5"
          placeholder="Jam Keberangkatan"
        ></input>
        <input
          type="text"
          className="formadd6"
          placeholder="Stasiun Tujuan"
        ></input>
        <input type="text" className="formadd7" placeholder="Jam Tiba"></input>
        <input
          type="text"
          className="formadd8"
          placeholder="Harga Ticket"
        ></input>
        <input type="text" className="formadd9" placeholder="Qty"></input>
        <Button className="btnaddticket">Save</Button>
        <p className="footer"></p>
      </div>
    );
  }
}

export default AdmAddTicket;
