import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users/register", {
        name: name,
        lastName: lastName,
        email: email,
        password: password,
        country: country,
        city: city,
        state: state,
        phone: phone,
      })
      .then((res) => res.data)
      //alert("ok")
      .then(() => navigate("/login"))
      .catch((error) => console.log(error));
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleChangeState = (e) => {
    setState(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="layout m-5">
      <form className="centerForm" onSubmit={handleSubmit}>
        <label></label>
        <input
          required
          className="inputStyle"
          name={name}
          onChange={handleChangeName}
          placeholder="Nombre"
          type="text"
        />
        <br />
        <label></label>
        <input
          required
          className="inputStyle"
          lastName={lastName}
          onChange={handleChangeLastName}
          placeholder="Apellido"
          type="text"
        />
        <br />
        <label></label>
        <input
          requiered
          className="inputStyle"
          email={email}
          onChange={handleChangeEmail}
          placeholder="Email"
          type="text"
        />
        <br />
        <label></label>
        <input
          required
          className="inputStyle"
          password={password}
          onChange={handleChangePassword}
          placeholder="Contraseña"
          type="password"
        />
        <br />
        <label></label>
        <input
          required
          className="inputStyle"
          city={city}
          onChange={handleChangeCity}
          placeholder="Ciudad"
          type="text"
        />
        <br />
        <label></label>
        <input
          required
          className="inputStyle"
          country={country}
          onChange={handleChangeCountry}
          placeholder="Pais"
          type="text"
        />
        <br />
        <label></label>
        <input
          required
          className="inputStyle"
          state={state}
          onChange={handleChangeState}
          placeholder="Provincia"
          type="text"
        />
        <br />
        <label></label>
        <input
          required
          className="inputStyle"
          phone={phone}
          onChange={handleChangePhone}
          placeholder="Telefono"
          type="tel"
        />
        <br />
        <button>Registrar</button>
      </form>
    </div>
  );
};

export default Register;
