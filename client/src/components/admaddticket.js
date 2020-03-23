import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import "../style/allcss.css";
import Admnav from "../components/navbar/admnav";
import AddTicketA from "../_actions/AddTicketA";

class AdmAddTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: [],
      nameTrain: "",
      id: "",
      dateStart: "",
      startStation: "",
      startTime: "",
      destinationStation: "",
      arrivalTime: "",
      price: "",
      qty: ""
    };
  }

  handleRegister = () => {
    const data = {
      nameTrain: this.state.nameTrain,
      typetrain_id: {
        id: this.state.id
      },
      dateStart: this.state.dateStart,
      startStation: this.state.startStation,
      startTime: this.state.startTime,
      destinationStation: this.state.destinationStation,
      arrivalTime: this.state.arrivalTime,
      price: this.state.price,
      qty: this.state.qty
    };
    console.log(data);
    this.props.AddTicketA(data);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleModal = visible => {
    this.setState({ show: !visible });
  };

  render() {
    const { ifSuccess } = this.props.addticket;
    console.log(ifSuccess);
    return (
      <div className="topnavbar">
        <Admnav />
        <h3 className="turunmyticket">Tambah Ticket</h3>
        <div>
          <input
            type="text"
            className="formadd1"
            placeholder="Nama Kereta"
            onChange={e => this.setState({ nameTrain: e.target.value })}
          ></input>
          <input
            type="text"
            className="formadd2"
            placeholder="Jenis Kereta"
            onChange={e => this.setState({ id: e.target.value })}
          ></input>
          <input
            type="date"
            className="formadd3"
            placeholder="Tanggal Keberangkatan"
            onChange={e => this.setState({ dateStart: e.target.value })}
          ></input>
          <input
            type="text"
            className="formadd4"
            placeholder="Stasiun Keberangkatan"
            onChange={e => this.setState({ startStation: e.target.value })}
          ></input>
          <input
            type="time"
            className="formadd5"
            placeholder="Jam Keberangkatan"
            onChange={e => this.setState({ startTime: e.target.value })}
          ></input>
          <input
            type="text"
            className="formadd6"
            placeholder="Stasiun Tujuan"
            onChange={e =>
              this.setState({ destinationStation: e.target.value })
            }
          ></input>
          <input
            type="time"
            className="formadd7"
            placeholder="Jam Tiba"
            onChange={e => this.setState({ arrivalTime: e.target.value })}
          ></input>
          <input
            type="text"
            className="formadd8"
            placeholder="Harga Tiket"
            onChange={e => this.setState({ price: e.target.value })}
          ></input>
          <input
            type="text"
            className="formadd9"
            placeholder="Qty"
            onChange={e => this.setState({ qty: e.target.value })}
          ></input>
          <Button className="btnaddticket" onClick={this.handleRegister}>
            Save
          </Button>
        </div>
        <p className="footer"></p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addticket: state.AddTicketR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AddTicketA: data => dispatch(AddTicketA(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdmAddTicket);
