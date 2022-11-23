import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => console.log(res.data))
      //alert("ok")
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
      <form onSubmit={handleSubmit}>
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
        <button>LogIn</button>
      </form>
    </div>
  );
};

export default Login;
