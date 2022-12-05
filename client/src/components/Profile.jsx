import React from "react";
import { useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import "../styles/login.css";

const Profile = () => {
  const user = useSelector((state) => state.user);

  return (
    <ListGroup className="centerList">
      <ListGroup.Item className="centerItem">Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
  );
};

export default Profile;
