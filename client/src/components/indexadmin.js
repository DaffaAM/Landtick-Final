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

class AdmIndex extends Component {
  componentDidMount() {
    this.props.find();
    this.props.ticketUserA();
  }

  render() {
    const { dataLu } = this.props.findUser;
    const { data } = this.props.ticketUserR;
    console.log(data);
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
            {data !== null
              ? data.map((isi, index) => {
                  return (
                    <tr>
                      <td style={{ paddingLeft: 20 }}>{index + 1}</td>
                      <td style={{ paddingLeft: 20 }}>Daffa</td>
                      <td style={{ paddingLeft: 20 }}>
                        {isi.startStation} -{isi.destinationStation}
                      </td>
                      <td style={{ paddingLeft: 20 }}>bni.jpg</td>
                      <td style={{ paddingLeft: 20 }}>Pending</td>
                      <td style={{ paddingLeft: 20 }}>
                        <AdmDetailTicket />
                        <AdmEditTicket />
                        <AdmDeleteTicket />
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
    ticketUserR: state.ticketUserR
  };
};
const mapDispatchToProps = dispatch => {
  return {
    find: data => dispatch(find(data)),
    ticketUserA: data => dispatch(ticketUserA(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdmIndex);
