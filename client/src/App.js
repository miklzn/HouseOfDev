import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./store/user";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Property from "./components/Property";
import Properties from "./components/Properties";
import Sale from "./components/Sale";
import Rent from "./components/Rent";
import Register from "./components/Register";
import Login from "./components/Login";
import NewProperty from "./components/NewProperty";
import UpdateProperty from "./components/UpdateProperty";
import PanelAdmin from "./components/PanelAdmin";
import Profile from "./components/Profile";

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties/:id" element={<Property />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/panelAdmin" element={<PanelAdmin />} />
        <Route path="/properties/create" element={<NewProperty />} />
        <Route path="/properties/change/:id" element={<UpdateProperty />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
