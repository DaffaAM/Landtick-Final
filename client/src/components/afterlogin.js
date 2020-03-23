import React, { Component } from "react";
import "../style/allcss.css";
import { Button } from "react-bootstrap";
import Usernav from "../components/navbar/nav";

class AfterLogin extends Component {
  render() {
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

            <div className="coba">
              <label className="labeldiv1">Argo Wilis</label>
              <label className="labeldiv2">Eksekutif (H)</label>
              <label className="labeldiv3">05.00</label>
              <label className="labeldiv4">Gambir</label>
              <label className="labeldiv5">10.05</label>
              <img
                src={require("../img/Arrow5.png")}
                alt="arrow"
                className="panah"
              ></img>
              <label className="labeldiv6">Surabaya</label>
              <label className="labelwaktu">5j 05m</label>
              <label className="labelharga">250.000</label>
            </div>
            <div className="coba">
              <label className="labeldiv1">Anjasmoro</label>
              <label className="labeldiv2">Ekonomi (Q)</label>
              <label className="labeldiv3">05.00</label>
              <label className="labeldiv4">Gambir</label>
              <label className="labeldiv5">10.05</label>
              <img
                src={require("../img/Arrow5.png")}
                alt="arrow"
                className="panah"
              ></img>
              <label className="labeldiv6">Surabaya</label>
              <label className="labelwaktu">5j 05m</label>
              <label className="labelharga">100.000</label>
            </div>
            <div className="coba">
              <label className="labeldiv1">Wilis Argo</label>
              <label className="labeldiv2">Ekonomi (Q)</label>
              <label className="labeldiv3">05.00</label>
              <label className="labeldiv4">Gambir</label>
              <label className="labeldiv5">10.05</label>
              <img
                src={require("../img/Arrow5.png")}
                alt="arrow"
                className="panah"
              ></img>
              <label className="labeldiv6">Surabaya</label>
              <label className="labelwaktu">5j 05m</label>
              <label className="labelharga">100.000</label>
            </div>
          </div>
        </div>
        <p className="footer"></p>
      </>
    );
  }
}

export default AfterLogin;
