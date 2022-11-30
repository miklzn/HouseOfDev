import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/users/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => console.log(res.data))

      .then(() => navigate("/home"))
      .catch((error) => console.log(error));
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="layout m-5">
      <form className="centerForm" onSubmit={handleSubmit}>
        <label></label>
        <input
          className="inputStyle"
          placeholder="Email"
          email={email}
          onChange={handleChangeEmail}
        />
        <br />
        <br />
        <label></label>
        <input
          className="inputStyle"
          placeholder="Password"
          password={password}
          onChange={handleChangePassword}
          type="password"
        />
        <br />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
