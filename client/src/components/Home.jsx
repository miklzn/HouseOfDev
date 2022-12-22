import React, { useState, useEffect } from "react";
import axios from "axios";
import { addFavorites } from "../store/user";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search === "") {
      axios
        .get(`http://localhost:3001/api/properties/all`)
        .then((res) => setProperties(res.data));
    } else {
      axios
        .get(`http://localhost:3001/api/properties/search/${search}`)
        .then((res) => setProperties(res.data));
    }
  }, [search]);

  const handleAddFavorites = (id) => {
    axios
      .post(
        "http://localhost:3001/api/properties/addFavorites",
        {
          id: id,
        },
        { withCredentials: true }
      )
      .then((res) => dispatch(addFavorites(res.data)))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label></Form.Label>
          <Form.Control
            value={search}
            onChange={searcher}
            type="text"
            placeholder="Buscar"
          />
        </Form.Group>
      </Form>
      <Row xs={1} md={4} className="g-4">
        {properties.map((property, i) => (
          <Col>
            <Card className="size">
              <Card.Img className="img" variant="top" src={property.image} />
              <Card.Body>
                <Link to={`/properties/${property.id}`}>
                  <Card.Title>{property.title}</Card.Title>
                </Link>
                <Card.Text>{property.description}</Card.Text>
                <Button
                  onClick={() => handleAddFavorites(property.id)}
                  variant="primary"
                >
                  Agregar Favoritos
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
