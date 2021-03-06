import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../style/allcss.css";
// import Alertbuy from "../components/alert/alertbuy";
import { Redirect } from "react-router-dom";
import Usernav from "../components/navbar/nav";

class Invoice extends Component {
  // const [show, setShow] = useState(false);
  // const [showAlCon, setShowAlCon] = useState(false);
  // const [pay, setPay] = useState(false);

  // const handleClose = () => {
  //   setShow(false);
  //   setShowAlCon(true);
  //   setTimeout(() => {
  //     setPay(true);
  //   }, 3000);
  // };
  // const handleShow = () => setShow(true);

  // const handleCloseAlCon = () => {
  //   setShowAlCon(false);
  // };

  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  // const [state, setState] = useState({
  //   file: null
  // });
  // const handleChange = e => {
  //   setState({
  //     ...state,
  //     file: URL.createObjectURL(e.target.files[0])
  //   });
  // };

  render(){
  return (
    <>

      <div className="topnavbar">
        <Usernav />
        <h4 className="invoicetitle">Invoice</h4>
        <div className="ketinvoice">
          <img
            src={require("../img/caution.png")}
            className="warninginv"
            alt="caution"
          ></img>
          <p className="warningtxt">
            Silakan melakukan pembayaran melalui M-Banking, E-Banking dan ATM Ke
            No.rek Yang Tertera <br />
            <br />
            No.rek : 09812312312
            <br />
          </p>
        </div>
        <div className="infoinvoice">
          <img
            src={require("../img/Vectorticket.png")}
            className="w"
            alt="as"
          ></img>
          <img
            src={require("../img/Vector.png")}
            className="vectortrain"
            alt="asa"
          ></img>
          <p className="myticketkiriatas1">Land tick</p>
          <p className="order31">No. Tanda Pengenal</p>
          <p className="order32">Nama Pemesan</p>
          <p className="order33">No. Handphone</p>
          <p className="order34">Email</p>
          <hr className="hrinv" />
          <p className="orderticket31">3174041806980008</p>
          <p className="orderticket32">Daffa Abdhy Muzhaffar</p>
          <p className="orderticket33">081210313944</p>
          <p className="orderticket34">daffaa34@gmail.com</p>
        </div>
        <h4 className="rincianharga">Rincian Harga</h4>
        <div className="totalhrg">
          <p className="invrincian">Argo Wilis (Dewasa) x1</p>
          <p className="hrgticketinv">Rp.250.000</p>
          <div className="ttlhrg">
            <p className="invrincian1">Total</p>
            <p className="hrgticketinv1">Rp.250.000</p>
          </div>
        </div>
        <label for="uploadfile">
          <img src={this.state.file} className="uploadphoto" />
          <div className="uploadphoto">
            <input
              onChange={(event) => this.handleChange(event)}
              type="file"
              style={{ display: "none" }}
              id="uploadfile"
            />
          </div>
        </label>
        <p className="txtup">upload payment proof</p>

        <div className="etiketinv">
          <div className="batasatas">
            <h3 upclassName="invetiket">Kereta Api</h3>
            <p className="invtiket">
              <strong>Saturday </strong>, 21 February 2020
            </p>
            <img
              src={require("../img/qr1.png")}
              className="qrkanan"
              alt="asa"
            ></img>
            <p className="qrstatus">INV0101</p>
          </div>
          <img
            src={require("../img/asal.png")}
            alt="logo"
            className="buletatasinv"
          ></img>{" "}
          <img
            src={require("../img/linemyticket.png")}
            alt="logo"
            className="linemytktinv"
          ></img>{" "}
          <img
            src={require("../img/tujuan.png")}
            alt="logo"
            className="buletbawahinv"
          ></img>
          <p className="etikettitle">Argo Wilis</p>
          <p className="ekse">Eksekutif (H)</p>
          <label className="etiket1">05.00</label>
          <label className="etiket2">21 February 2020</label>
          <label className="etiket3">10.05</label>
          <label className="etiket4">21 February 2020</label>
          <p className="kotabrkt1">Jakarta (GMR)</p>
          <p className="stsbrkt1">Stasiun Gambir</p>
          <p className="kotasmp1">Surabaya (SBY)</p>
          <p className="stssmp1">Stasiun Surabaya</p>
        </div>
        <Button className="btninv" variant="primary" >
          Bayar
        </Button>
      </div>
      <div>
      <p className="footer2"></p>
      </div>
    </>
  );
}
}
export default Invoice;
