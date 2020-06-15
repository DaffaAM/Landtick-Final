import React, { Component } from "react";
import "../style/allcss.css";
import Usernav from "../components/navbar/nav";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ticketUserA } from "../_actions/ticketUserA";
import { getOrderA } from "../_actions/getOrderA";
import { connect } from "react-redux";

class MyTicket extends Component {
  componentDidMount() {
    this.props.ticketUserA();
    this.props.getOrderA();
  }

 takeDate = (fullDate) => {
    const day = ["Senen", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"]
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    const date = new Date(fullDate)
    let hari = date.getDay()
    let tanggal = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()

    let tgl = day[hari] + ", " + tanggal + " " + months[month] + " " + year  

    return tgl
}
  render() {
    const { data } = this.props.ticketUserR;
    const { dataTiket } = this.props.getOrderR;




    console.log("xxxx", dataTiket);
    return (
      <>
        <div className="topnavbar">
          <Usernav />
          <h3 className="turunmyticket">Tiket Saya</h3>
        </div>

      {dataTiket != null ? 
      dataTiket.map((isi, index) => {
        return (
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
            <strong>Saturday</strong>, {this.takeDate(isi.createdAt)}
          </p>
          <p className="ket-tiket">{isi.ticket.nameTrain}</p>
        <p className="kelastiket">{isi.ticket.typetrain.name}</p>
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
          <p className="wktbrkt">{isi.ticket.startTime}</p>
          <p className="tglbrkt"> {this.takeDate(isi.createdAt)}</p>
        <p className="wktsmp">{isi.ticket.arrivalTime}</p>
          <p className="tglsmp">{this.takeDate(isi.createdAt)}</p>
        <p className="kotabrkt">{isi.ticket.startStation}</p>
        <p className="stsbrkt">{isi.ticket.startStation}</p>
        <p className="kotasmp">{isi.ticket.destinationStation}</p>
        <p className="stssmp">{isi.ticket.destinationStation}</p>
          {isi.status === "pending" ? <p className="status">PENDING</p> : <p className="status1">APPROVE</p>}
          <div className="stronginline">
            <p className="order1">No. Tanda Pengenal</p>
            <p className="order2">Nama Pemesan</p>
            <p className="order3">No. Handphone</p>
            <p className="order4">Email</p>
          </div>
          <hr className="myticketrule"></hr>
          <p className="orderticket1">3174041806980008</p>
        <p className="orderticket2">{isi.user.username}</p>
          <p className="orderticket3">{isi.user.email}</p>
        <p className="orderticket4">{isi.user.phone}</p>
          { isi.status == "pending" ?
          <Link to="/invoice">
            <Button className="btnbayar">Bayar Sekarang</Button>
          </Link> : <img
          src={require("../img/qrmy.png")}
          alt="asa"
          className="qrmy123"
        ></img>
      }
        </div>
          );
        })
      : null} 
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ticketUserR: state.ticketUserR,
    getOrderR: state.getOrderR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ticketUserA: data => dispatch(ticketUserA(data)),
    getOrderA: () => dispatch(getOrderA())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTicket);
