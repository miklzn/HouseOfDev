import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import "../styles/panelAdmin.css";

const PanelAdmin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users/allUsers", {
        withCredentials: true,
      })
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="centerList">
      <ListGroup as="ol" numbered>
        {users.map((user, i) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                {user.name} {user.lastName}
              </div>
              {user.email}
            </div>
            <Link to={`/users/delete/${user.id}`}>
              <Button className="button-delete">Borrar</Button>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};
export default PanelAdmin;
