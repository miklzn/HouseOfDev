import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userLogout } from "../store/user";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
    <nav class="w-full bg-emerald-900 px-[3vw] py-[1.4vw] border-b-4 border-emerald-900 sm:px-[3vw] sm:py-[4.4vw] md:px-[2.4vw] md:py-[1vw] lg:px-[3.5vw] xl:px-[10vw]">
      <div class="container flex flex-wrap items-center justify-between mx-auto sm:px-3 md:px-5">
        <a href="https://flowbite.com/" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center py-2 ml-3 text-sm text-white md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            className="w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
            stroke="#eee"
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
          <ul class="absolute z-40 flex flex-col bg-emerald-900 bg-opacity-[0.005] backdrop-blur-xl p-4 mt-2 w-full -left-[0.02rem] text-[5vw] text-gray-300 sm:w-full sm:mt-7 sm:text-[2.125rem] sm:space-y-8 md:w-full md:static md:flex-row md:space-x-8 md:space-y-0 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-emerald-900 md:text-gray-400 lg:text-lg">
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
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0"
              >
                Contact
              </a>
            </li>
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
