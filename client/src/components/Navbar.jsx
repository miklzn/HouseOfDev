import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userLogout } from "../store/user";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../utils/logo_hod.png";
import Button from "react-bootstrap/esm/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../styles/navbar.css";

function NavbarView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/users/logout",
        {},
        { withCredentials: true }
      )
      .then((res) => dispatch(userLogout(res.data)))
      .then(() => navigate("/login"));
  };

  return (
    <Navbar className="color-nav" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/home">
            <img src={logo} alt="HouseOfDev" />
          </Link>
        </Navbar.Brand>
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
              <NavDropdown.Item href="/profile">Mi Perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Nosotros</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contacto</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {user?.admin ? (
          <DropdownButton variant="outline-light " title="Admin">
            <Dropdown.Item href="/properties/create">
              Nueva Propiedad
            </Dropdown.Item>
            <Dropdown.Item href="/panelAdmin">
              Usuarios Registrados
            </Dropdown.Item>
            {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
          </DropdownButton>
        ) : null}
        {user?.name ? (
          <Button
            className="button-position"
            onClick={handleLogout}
            href="/home"
            variant="outline-light "
          >
            Cerrar Sesion
          </Button>
        ) : (
          <Button
            className="button-position"
            href="/login"
            variant="outline-light "
          >
            Iniciar Sesion
          </Button>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarView;
