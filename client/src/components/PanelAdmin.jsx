import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";
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
    <div className="centerList">
      <ListGroup as="ol" numbered>
        {users.map((user, i) => (
          <ListGroup.Item as="li">
            {`${user.name} ${user.lastName}`}
            <Button>Borrar</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
export default PanelAdmin;
