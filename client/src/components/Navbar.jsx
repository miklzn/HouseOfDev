import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userLogout } from "../store/user";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HOD from "../utils/HOD.svg";

function Navbar() {
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
    <nav class="absolute flex w-full mt-3 px-[3vw] py-[1.4vw] justify-center z-20 sm:px-[3vw] sm:py-[4.4vw] md:px-[2.4vw] md:py-[1vw] lg:px-[3.5vw] xl:px-[10vw]">
      <div class="container shadow-nav bg-white flex w-11/12 rounded-full flex-wrap items-center py-3 px-6 justify-between mx-auto md:w-full md:pl-9 md:pr-0 md:mx-0">
        <Link to="/">
          <img src={HOD} alt="HouseOfDev" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center py-2 ml-3 text-sm text-white md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
            stroke="#111827"
            stroke-width=".6"
            fill="rgba(0,0,0,0)"
            stroke-linecap="round"
            style={{ cursor: "pointer" }}
          >
            <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
              <animate
                dur="0.2s"
                attributeName="d"
                values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
                fill="freeze"
                begin="start.begin"
              />
              <animate
                dur="0.2s"
                attributeName="d"
                values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
                fill="freeze"
                begin="reverse.begin"
              />
            </path>
            <rect width="10" height="10" stroke="none">
              <animate
                dur="2s"
                id="reverse"
                attributeName="width"
                begin="click"
              />
            </rect>
            <rect width="10" height="10" stroke="none">
              <animate
                dur="0.001s"
                id="start"
                attributeName="width"
                values="10;0"
                fill="freeze"
                begin="click"
              />
              <animate
                dur="0.001s"
                attributeName="width"
                values="0;10"
                fill="freeze"
                begin="reverse.begin"
              />
            </rect>
          </svg>
        </button>
        <div class=" hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class=" absolute z-40 flex flex-col bg-transparent p-[5vw] mt-3 w-full -left-[0.02rem] text-base text-gray-900 font-dmSans md:p-0 md:px-0 md:w-full md:static md:flex-row md:space-x-8 md:space-y-0 md:mt-0 md:text-sm md:font-normal md:border-0 md:bg-transparent md:text-gray-900 lg:text-lg">
            <div className="bg-white shadow-dropdown rounded-3xl py-3 px-2 mx-[2vw] sm:py-5 md:shadow-none md:items-center md:py-0 md:px-0 md:flex md:flex-row md:rounded-none md:space-x-8 md:mx-4">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0"
                >
                  Pricing
                </a>
              </li>
              <li className="my-2 flex justify-center sm:my-4 md:my-0">
                <button
                  className="block bg-primary w-11/12 py-2 pl-3 pr-4 rounded-full text-white font-semibold hover:bg-primaryHover md:py-4 md:px-6 md:bg-primary md:w-full md:p-0"
                  // onClick={handleLogout}
                  href="/home"
                  variant="outline-light "
                >
                  Login
                </button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    // <Navbar className="color-nav" expand="lg">
    //   <Container>
    //     <Navbar.Brand>
    //       <Link to="/">
    //         <img src={logo} alt="HouseOfDev" />
    //       </Link>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Venta</Nav.Link>
    //         <Nav.Link href="#link">Alquiler</Nav.Link>
    //         <NavDropdown title="Mas" id="basic-nav-dropdown">
    //           <NavDropdown.Item href={user.id ? "/profile" : "/login"}>
    //             Visitas Agendadas
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Nuestros Servicios
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href={user.id ? "/profile" : "/login"}>
    //             Mi Perfil
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Nosotros</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">Contacto</NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //     {user?.admin ? (
    //       <DropdownButton variant="outline-light " title="Admin">
    //         <Dropdown.Item href="/properties/create">
    //           Nueva Propiedad
    //         </Dropdown.Item>
    //         <Dropdown.Item href="/panelAdmin">
    //           Usuarios Registrados
    //         </Dropdown.Item>
    //         {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
    //       </DropdownButton>
    //     ) : null}
    //     {user?.name ? (
    //       <Button
    //         className="button-position"
    //         onClick={handleLogout}
    //         href="/home"
    //         variant="outline-light "
    //       >
    //         Cerrar Sesion
    //       </Button>
    //     ) : (
    //       <Button
    //         className="button-position"
    //         href="/login"
    //         variant="outline-light "
    //       >
    //         Iniciar Sesion
    //       </Button>
    //     )}
    //   </Container>
    // </Navbar>
  );
}

export default Navbar;
