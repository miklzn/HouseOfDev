import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/user";
import { BsDoorOpen } from "react-icons/bs";
import { BiBed, BiBath, BiCar } from "react-icons/bi";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Appointment from "./Appointment";
import "../styles/property.css";

const Property = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [property, setProperty] = useState({});

  //-------->Estados para mostrar Modal<----------
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //----------------------------------------------

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/properties/${id}`)
      .then((res) => setProperty(res.data))
      .then((res) => dispatch(setUser(res.data)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Card className="centerContainer">
        <Card.Img
          className="propertyImage"
          variant="top"
          src={property.image}
        />
        <Card.Body>
          <Card.Title className="centerItem">{property.title}</Card.Title>
          <Card.Text>{property.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Form.Text className="text-muted">
              {property.category} en {property.operation}
            </Form.Text>
            <br /> USD {property.price}
          </ListGroup.Item>
          <ListGroup.Item>
            <BsDoorOpen /> {property.environments} Ambientes |
            <BiBed /> {property.rooms} Habitaciones |
            <BiBath /> {property.bathrooms} Baños |
            <BiCar /> {property.garage} Cochera
          </ListGroup.Item>
          <ListGroup.Item>
            {property.adress}, {property.city}, {property.state}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          {user.admin ? (
            <>
              <Button
                className="buttonStyle"
                type="submit"
                onClick={handleShow}
              >
                Agendar Visita
              </Button>

              <Link to={`/properties/change/${id}`}>
                <Button className="buttonStyle">Editar Propiedad</Button>
              </Link>
              <Link to={`/properties/delete/${id}`}>
                <Button className="buttonStyle">Eliminar Propiedad</Button>
              </Link>
            </>
          ) : (
            <Button className="buttonStyle" type="submit" onClick={handleShow}>
              Agendar Visita
            </Button>
          )}
        </Card.Body>
      </Card>
      <Appointment show={show} handleClose={handleClose} />
    </>
  );
};

export default Property;
