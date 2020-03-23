import React from "react";
import { Modal } from "react-bootstrap";

function Alertpay(props) {
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
            Tiket anda berhasil di tambahkan silakan segera melakukan pembayaran
            <u>
              <b> Klik disini </b>
            </u>
          </p>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default Alertpay;
