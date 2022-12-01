import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userLogout } from "../store/user";
import { Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../utils/logo_hod.png";
import Button from "react-bootstrap/esm/Button";
import "../styles/navbar.css";

function NavbarView() {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/users/logout",
        {},
        { withCredentials: true }
      )
      .then((res) => dispatch(userLogout(res.data)));

    return <Navigate to="/" />;
  };

  return (
    <Navbar className="color-nav" expand="lg">
      <Container>
        <Navbar.Brand img={logo} alt="HouseOfDev"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Venta</Nav.Link>
            <Nav.Link href="#link">Alquiler</Nav.Link>
            <NavDropdown title="Mas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Agendar Visita
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Nuestros Servicios
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mi Perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Nosotros</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contacto</NavDropdown.Item>
            </NavDropdown>
            <Button href="/login" variant="outline-light ">
              Iniciar Sesion
            </Button>
            <Button onClick={handleLogout} href="/all" variant="outline-light ">
              Cerrar Sesion
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarView;

// import React from "react";
// import logo from "../utils/logo_hod.png";
// import "../styles/navbar.css";

// const Navbar = () => {
//   return (
//     <div className="flex-container">
//       <nav className="navbar bg-light- navbarColor">
//         <div className="container">
//           <a className="navbar-brand">
//             <img src={logo} alt="HouseOfDev" />
//           </a>
//           <ul className="nav justify-content-end">
//             <li className="nav-item">
//               <a className="nav-link buttons">Venta</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link buttons">Alquiler</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link buttons">Agendar Visita</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link buttons">Nuestros Servicios</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link buttons">Mi Perfil</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link buttons">Nosotros</a>
//             </li>
//             <li>
//               <a className="nav-link active buttons" aria-current="page">
//                 Contacto
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
