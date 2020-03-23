import React, { Component } from "react";
import "../style/allcss.css";
import Usernav from "../components/navbar/nav";

import { Button } from "react-bootstrap";

class MyTicket extends Component {
  render() {
    return (
      <>
        <div className="topnavbar">
          <Usernav />
          <h3 className="turunmyticket">Tiket Saya</h3>
        </div>

        <div className="myticket">
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
          <p className="labelmyticket">Kereta Api</p>
          <p className="labelmyticket2">
            <strong>Saturday</strong>, 21 February 2020
          </p>
          <p className="ket-tiket">Argo Wilis</p>
          <p className="kelastiket">Eksekutif (H)</p>
          <img
            src={require("../img/asal.png")}
            alt="logo"
            className="buletatas"
          ></img>{" "}
          <img
            src={require("../img/linemyticket.png")}
            alt="logo"
            className="linemytkt"
          ></img>{" "}
          <img
            src={require("../img/tujuan.png")}
            alt="logo"
            className="buletbawah"
          ></img>
          <p className="wktbrkt">05.00</p>
          <p className="tglbrkt"> 21 February 2020</p>
          <p className="wktsmp">10.05</p>
          <p className="tglsmp">21 February 2020</p>
          <p className="kotabrkt">Jakarta (GMR)</p>
          <p className="stsbrkt">Stasiun Gambir</p>
          <p className="kotasmp">Surabaya (SBY)</p>
          <p className="stssmp">Stasiun Surabaya</p>
          <p className="status">Pending</p>
          <div className="stronginline">
            <p className="order1">No. Tanda Pengenal</p>
            <p className="order2">Nama Pemesan</p>
            <p className="order3">No. Handphone</p>
            <p className="order4">Email</p>
          </div>
          <hr className="myticketrule"></hr>
          <p className="orderticket1">3174041806980008</p>
          <p className="orderticket2">Daffa Abdhy Muzhaffar</p>
          <p className="orderticket3">081210313944</p>
          <p className="orderticket4">daffaa34@gmail.com</p>
          <Button className="btnbayar">Bayar Sekarang</Button>
        </div>
      </>
    );
  }
}

export default MyTicket;
