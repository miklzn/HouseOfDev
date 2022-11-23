import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name={name} onChange={handleChangeName} />
        <br />
        <label>Last Name:</label>
        <input lastName={lastName} onChange={handleChangeLastName} />
        <br />
        <label>Email:</label>
        <input email={email} onChange={handleChangeEmail} />
        <br />
        <label>Password:</label>
        <input
          password={password}
          onChange={handleChangePassword}
          type="password"
        />
        <br />
        <label>City:</label>
        <input city={city} onChange={handleChangeCity} />
        <br />
        <label>Country:</label>
        <input country={country} onChange={handleChangeCountry} />
        <br />
        <label>State:</label>
        <input state={state} onChange={handleChangeState} />
        <br />
        <label>Phone:</label>
        <input phone={phone} onChange={handleChangePhone} />
        <br />
        <button>SingUp</button>
      </form>
    </div>
  );
};

export default Register;
