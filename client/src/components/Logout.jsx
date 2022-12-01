import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../store/user";
import { Navigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/esm/Button";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .post("http://localhost:3001/api/users/logout")
      .then((res) => dispatch(logout(res.data)));
  }, []);

  return <Navigate to="/" />;
};

export default Logout;
