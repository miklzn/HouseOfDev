import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import "../styles/all.css";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");

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
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
