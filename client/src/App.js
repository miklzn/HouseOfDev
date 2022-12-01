import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import NavbarView from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import NewProperty from "./components/NewProperty";
import All from "./components/All";
import Property from "./components/Property";
import Logout from "./components/Logout";
import { setUser } from "./store/user";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/me`, { withCredentials: true })
      .then((res) => dispatch(setUser(res.data)))
      .catch((error) => console.log(error));
  });

  return (
    <>
      <NavbarView />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/properties/create" element={<NewProperty />} />
        <Route path="/properties/all" element={<All />} />
        <Route path="/properties/:id" element={<Property />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
};

export default App;
