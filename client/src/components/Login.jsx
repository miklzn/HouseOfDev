import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user";
//import { Form } from "react-router-dom";
//import Button from "react-bootstrap/esm/Button";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      .then((res) => dispatch(setUser(res.data)))

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
    //   <Form onSubmit={handleSubmit}>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control
    //         type="email"
    //         placeholder="Enter email"
    //         onChange={handleChangeEmail}
    //       />
    //       <Form.Text className="text-muted">
    //         We'll never share your email with anyone else.
    //       </Form.Text>
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control
    //         type="password"
    //         placeholder="Password"
    //         onChange={handleChangePassword}
    //       />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //       <Form.Check type="checkbox" label="Check me out" />
    //     </Form.Group>
    //     <Button variant="primary" type="submit">
    //       Submit
    //     </Button>
    //   </Form>
    // );

    <div className="layout m-5">
      <form className="centerForm" onSubmit={handleSubmit}>
        <label></label>
        <input
          required
          className="inputStyle"
          placeholder="Email"
          email={email}
          onChange={handleChangeEmail}
          type="email"
        />
        <br />
        <br />
        <label></label>
        <input
          required
          className="inputStyle"
          placeholder="Contraseña"
          password={password}
          onChange={handleChangePassword}
          type="password"
        />
        <br />
        <br />
        <button>Iniciar Sesion</button>
      </form>
    </div>
  );
};

export default Login;
