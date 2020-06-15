import React, { Component } from "react";
import "../style/allcss.css";
import { Table } from "react-bootstrap";
import AdmDetailTicket from "../components/admdetailticket";
import AdmEditTicket from "../components/admeditticket";
import AdmDeleteTicket from "../components/admdelete";
import Admnav from "../components/navbar/admnav";
import { connect } from "react-redux";
import { find } from "../_actions/getUserA";
import { ticketUserA } from "../_actions/ticketUserA";
import { getOrderAllA} from "../_actions/getOrderAllA";

class AdmIndex extends Component {
  componentDidMount() {
    this.props.find();
    this.props.ticketUserA();
    this.props.getOrderAllA();
  }

  render() {
    const { dataLu } = this.props.findUser;
    const { data } = this.props.ticketUserR;
    const { dataOrder} = this.props.getOrderAllR;
    console.log("order",dataOrder);
    return (
      <>
        <div className="topnavbar">
          <Admnav />
          <h3 className="turunmyticket">List Transaksi</h3>
          <Table className="tbltrans" bordered>
            <tr>
              <th style={{ paddingLeft: 20 }}>No</th>
              <th style={{ paddingLeft: 20 }}>Users</th>
              <th style={{ paddingLeft: 20 }}>Tiket</th>
              <th style={{ paddingLeft: 20 }}>Bukti Transfer</th>
              <th style={{ paddingLeft: 20 }}>Status Payment</th>
              <th style={{ paddingLeft: 20 }}>Action</th>
            </tr>
            {dataOrder !== null
              ? dataOrder.map((isi, index) => {
                  return (
                    <tr>
                      <td style={{ paddingLeft: 20 }}>{index + 1}</td>
                      <td style={{ paddingLeft: 20 }}>{isi.user.name}</td>
                      <td style={{ paddingLeft: 20 }}>
                        {isi.ticket.startStation} -{isi.ticket.destinationStation}
                      </td>
                  <td style={{ paddingLeft: 20 }}>{isi.attachment}</td>
                      <td style={{ paddingLeft: 20 }}>{isi.status}</td>
                      <td style={{ paddingLeft: 20 }}>
                        <AdmDetailTicket />
                        <AdmEditTicket />
                        <AdmDeleteTicket isi={isi} />
                      </td>
                    </tr>
                  );
                })
              : null}
          </Table>
        </div>
        <div></div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    findUser: state.findUser,
    ticketUserR: state.ticketUserR,
    getOrderAllR: state.getOrderAllR
  };
};
const mapDispatchToProps = dispatch => {
  return {
    find: data => dispatch(find(data)),
    ticketUserA: data => dispatch(ticketUserA(data)),
    getOrderAllA: () => dispatch(getOrderAllA())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdmIndex);
