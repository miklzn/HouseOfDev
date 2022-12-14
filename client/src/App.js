import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./store/user";
import axios from "axios";
import NavbarView from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import NewProperty from "./components/NewProperty";
import Home from "./components/Home";
import Property from "./components/Property";
import UpdateProperty from "./components/UpdateProperty";
import DeleteProperty from "./components/DeleteProperty";
import PanelAdmin from "./components/PanelAdmin";
import Profile from "./components/Profile";
import DeleteUser from "./components/DeleteUser";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/me`, { withCredentials: true })
      .then((res) => dispatch(setUser(res.data)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <NavbarView />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/properties/create" element={<NewProperty />} />
        <Route path="/properties/:id" element={<Property />} />
        <Route path="/properties/change/:id" element={<UpdateProperty />} />
        <Route path="/properties/delete/:id" element={<DeleteProperty />} />
        <Route path="/properties/delete/:id" element={<DeleteProperty />} />
        <Route path="/users/delete/:id" element={<DeleteUser />} />
        <Route path="/panelAdmin" element={<PanelAdmin />} />
      </Routes>
    </>
  );
};

export default App;
