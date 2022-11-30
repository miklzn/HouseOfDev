// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import logo from "../utils/logo_hod.png";
// import "../styles/navbar.css";

// function NavbarView() {
//   return (
//     <Navbar bg="navbarColor" expand="lg">
//       <Container>
//         <Navbar.Brand src={logo} alt="HouseOfDev"></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavbarView;

import React from "react";
import logo from "../utils/logo_hod.png";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="flex-container">
      <nav className="navbar bg-light- navbarColor">
        <div className="container">
          <a className="navbar-brand">
            <img src={logo} alt="HouseOfDev" />
          </a>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link buttons">En Venta</a>
            </li>
            <li className="nav-item">
              <a className="nav-link buttons">Alquiler</a>
            </li>
            <li className="nav-item">
              <a className="nav-link buttons">Agendar Visita</a>
            </li>
            <li className="nav-item">
              <a className="nav-link buttons">Nuestros Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link buttons">Mi Perfil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link buttons">Nosotros</a>
            </li>
            <li>
              <a className="nav-link active buttons" aria-current="page">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
