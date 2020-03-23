import React from "react";
import { Modal } from "react-bootstrap";

function Alertbuy(props) {
  //   const [show, setShow] = useState(false);
  //   const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={props.show}
        // onHide={props.action.handleShowAlCon}
        onHide={props.action}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <p style={{ textAlign: "center" }}>
            Pembayaran Anda Akan di Konfirmasi dalam 1 x 24 Jam Untuk melihat
            pesanan Klik
            <strong>
              <u> Disini </u>
            </strong>
            Terimakasih
          </p>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default Alertbuy;
