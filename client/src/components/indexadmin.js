import React, { Component } from "react";
import "../style/allcss.css";
import { Table } from "react-bootstrap";
import AdmDetailTicket from "../components/admdetailticket";
import AdmEditTicket from "../components/admeditticket";
import AdmDeleteTicket from "../components/admdelete";
import Admnav from "../components/navbar/admnav";

class AdmIndex extends Component {
  render() {
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
            <tr>
              <td style={{ paddingLeft: 20 }}>1</td>
              <td style={{ paddingLeft: 20 }}>Daffa</td>
              <td style={{ paddingLeft: 20 }}>Surabaya - Jakarta</td>
              <td style={{ paddingLeft: 20 }}>bca.jpg</td>
              <td style={{ paddingLeft: 20 }}>Pending</td>
              <td style={{ paddingLeft: 20 }}>
                <AdmDetailTicket />
                <AdmEditTicket />
                <AdmDeleteTicket />
              </td>
            </tr>
          </Table>
        </div>
        <div></div>
      </>
    );
  }
}

export default AdmIndex;
