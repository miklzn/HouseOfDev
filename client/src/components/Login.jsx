// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setUser } from "../store/user";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/esm/Container";
// import { Link } from "react-router-dom";
// import "../styles/login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post(
//         "http://localhost:3001/api/users/login",
//         {
//           email: email,
//           password: password,
//         },
//         { withCredentials: true }
//       )
//       .then((res) => dispatch(setUser(res.data)))
//       .then(() => navigate("/"))
//       .catch((error) => console.log(error));
//   };

//   const handleChangeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleChangePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   return (
//     <Container className="centerItem">
//       <h1>Bienvenido a House Of Dev</h1>
//       <br />
//       <Form className="centerForm" onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Control
//             required
//             type="email"
//             placeholder="Email"
//             onChange={handleChangeEmail}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Control
//             required
//             type="password"
//             placeholder="Contraseña"
//             onChange={handleChangePassword}
//           />
//         </Form.Group>
//         <br />
//         <Button variant="primary" type="submit">
//           Iniciar Sesion
//         </Button>
//         <br />
//         <br />
//         <Form.Text className="text-muted">¿No tenés una cuenta?</Form.Text>
//         <br />
//         <Link to="/register">
//           <Form.Text className="text-muted">Regístrate acá</Form.Text>{" "}
//         </Link>
//       </Form>
//     </Container>
//   );
// };

// export default Login;
