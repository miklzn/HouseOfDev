import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Appointment({ show, handleClose }) {
  const user = useSelector((state) => state.user);
  const { id } = useParams();

  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:3001/api/appointments/new/${id}`,
        {
          date: date,
          userId: user.id,
        },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .catch((error) => console.log(error));
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  //Estas 3 lineas inferiores fueron movidas al componente Property.jsx

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agenda una visita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ingresa fecha y hora </Form.Label>
              <Form.Control
                required
                type="datetime-local"
                autoFocus
                onChange={handleChangeDate}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Agendar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Appointment;
