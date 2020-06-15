import React, { Component } from "react";
import "../style/allcss.css";
import { Button } from "react-bootstrap";
import Usernav from "../components/navbar/nav";
import Alertbuy from "../components/alert/alertbuy";
// import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import {ticketUserA} from '../_actions/ticketUserA';
import {find} from "../_actions/getUserA";





class AfterLogin extends Component {
componentDidMount(){
  this.props.find();
  this.props.ticketUserA();
}

diff = (start, end) => {
  start = start.split(":");
  end = end.split(":");
  var startDate = new Date(0, 0, 0, start[0], start[1], 0);
  var endDate = new Date(0, 0, 0, end[0], end[1], 0);
  var diff = Math.abs(endDate.getTime() - startDate.getTime());
  var hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * 1000 * 60 * 60;
  var minutes = Math.floor(diff / 1000 / 60);

  return (
    (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes
  );
};



render(){
  const { data } = this.props.ticketUserR;
  const { dataLu} = this.props.findUser;
  console.log("DataLU", dataLu);
  console.log("dataticket",data);
  return (
    <>

      <div className="topnavbar">
        <Usernav />
        <div className="bghome">
          <h1 className="sayhey">Selamat Pagi, Ticket Seekers !</h1>
          <p className="ingin">Ingin Pulkam dengan Good Deal?</p>
          <p className="masuk">Masuk atau Daftar Sekarang ! !</p>
          <img
            src={require("../img/homeimg2.png")}
            alt="gbr2"
            className="gbr2"
          ></img>
          <img
            src={require("../img/homeimg1.png")}
            alt="gbr1"
            className="gbr1"
          ></img>
        </div>
        <div className="tempatkereta">
          <div className="divkiri">
            <img
              src={require("../img/trainlogo.png")}
              alt="logo"
              className="logokereta"
            ></img>
            <p className="keretaapi">Tiket Kereta Api</p>
          </div>
          <div className="divkanan">
            <p className="judul1">Tiket Kereta Api</p>
            <label className="asal">Asal</label>
            <input type="text" className="tujuan" value="Jakarta"></input>
            <label className="tgl">Tujuan</label>
            <input type="text" className="tujuan" value="Surabaya"></input>
            <label className="tglbrk">Tanggal Berangkat</label>
            <input className="tglform" type="date"></input>
            <input type="checkbox" className="tes11"></input>
            <label className="bersama">Pulang Pergi</label>
            <label className="labelpesan">Dewasa</label>
            <select className="pesan">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <label className="labelpesan2">Bayi</label>
            <select className="pesan">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <img
              src={require("../img/icon-destinasi.PNG")}
              alt="arrow"
              className="panahbolak"
            ></img>
            <Button className="submittiket">
              <p className="tulisbtn">Cari Tiket</p>
            </Button>
          </div>
          <label className="labelinfo">Nama Kereta</label>
          <label className="labelinfo2">Berangkat</label>
          <label className="labelinfo3">Tiba</label>
          <label className="labelinfo4">Durasi</label>
          <label className="labelinfo5">Harga Per Orang</label>


          { data != null ? data.map((isi, index) => {
            return (
          <div className="coba">
            <label className="labeldiv1">{isi.nameTrain}</label>
            <label className="labeldiv2">{isi.typetrain.name}</label>
            <label className="labeldiv3">{isi.startTime}</label>
            <label className="labeldiv4">{isi.startStation}</label>
            <label className="labeldiv5">{isi.arrivalTime}</label>
            <img
              src={require("../img/Arrow5.png")}
              alt="arrow"
              className="panah"
            ></img>
            <label className="labeldiv6">{isi.destinationStation}</label>
            <label className="labelwaktu">{this.diff(isi.startTime, isi.arrivalTime)}</label>
            <label className="labelharga">{isi.price}</label>
            <Alertbuy isi={isi}/>
          </div>
            );
          })
          : null }
        </div>
      <p className="footer"></p>
      </div>
    </>
  );
}
}

const mapStateToProps = state => {
return {
findUser: state.findUser,
ticketUserR: state.ticketUserR
  };
};

const mapDispatchToProps = dispatch => {
return {
  find: data => dispatch(find(data)),
  ticketUserA: data => dispatch(ticketUserA(data))
  };;
}

export default connect(mapStateToProps, mapDispatchToProps)(AfterLogin);
