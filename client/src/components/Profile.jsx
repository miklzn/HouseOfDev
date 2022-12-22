import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../store/user";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "../styles/profile.css";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [properties, setProperties] = useState([]);

  const dispatch = useDispatch();

  const handleRemoveFavorite = (id) => {
    axios
      .post(
        `http://localhost:3001/api/properties/deleteFavorites/${id}`,
        {
          id: id,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => dispatch(removeFavorite(res.data)))
      .then(() => window.location.reload(false))
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <h1 className="centerItem">Mi Perfil</h1>
      <ListGroup className="centerList">
        <ListGroup.Item>
          <Form.Text className="text-muted">Nombre</Form.Text> <br />{" "}
          {user.name}
        </ListGroup.Item>
        <ListGroup.Item>
          <Form.Text className="text-muted">Apellido</Form.Text> <br />{" "}
          {user.lastName}
        </ListGroup.Item>
        <ListGroup.Item>
          <Form.Text className="text-muted">Email</Form.Text> <br />{" "}
          {user.email}
        </ListGroup.Item>
        <ListGroup.Item>
          <Form.Text className="text-muted">Telefono</Form.Text> <br />{" "}
          {user.phone}
        </ListGroup.Item>
      </ListGroup>
      <h1 className="centerItem">Mis Favoritos ({user.properties.length})</h1>
      <Row xs={1} md={4} className="g-4">
        {user.properties.map((property, i) => (
          <Col>
            <Card className="size">
              <Card.Img className="img" variant="top" src={property.image} />
              <Card.Body>
                <Link to={`/properties/${property.id}`}>
                  <Card.Title>{property.title}</Card.Title>
                </Link>
                <Card.Text>{property.description}</Card.Text>
                <Button
                  onClick={() => handleRemoveFavorite(property.id)}
                  variant="primary"
                >
                  Eliminar de Favoritos
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Profile;
