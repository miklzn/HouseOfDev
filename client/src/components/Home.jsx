// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { removeFavorite } from "../store/user";
// import { addFavorites } from "../store/user";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Accordion from "react-bootstrap/Accordion";
// import { Link } from "react-router-dom";
// import ListGroup from "react-bootstrap/ListGroup";
// import { BsDoorOpen } from "react-icons/bs";
// import { BiBed, BiBath } from "react-icons/bi";

// import "../styles/home.css";
import HOD_Home from "../utils/HOD-Home.svg";
import Environment from "../utils/Environments.svg";
import Room from "../utils/Room.svg";

const Home = () => {
  //   const [properties, setProperties] = useState([]);
  //   const [search, setSearch] = useState("");
  //   const [environments, setEnvironments] = useState("");
  //   const [minimo, setMinimo] = useState("");
  //   const [maximo, setMaximo] = useState("");

  //   const user = useSelector((state) => state.user);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (search === "") {
  //       axios
  //         .get(`http://localhost:3001/api/properties/all`)
  //         .then((res) => setProperties(res.data));
  //     } else {
  //       axios
  //         .get(`http://localhost:3001/api/properties/search/${search}`)
  //         .then((res) => setProperties(res.data));
  //     }
  //   }, [search]);

  //   const handleAddFavorites = (id) => {
  //     axios
  //       .post(
  //         "http://localhost:3001/api/properties/addFavorites",
  //         {
  //           id: id,
  //         },
  //         { withCredentials: true }
  //       )
  //       .then((res) => dispatch(addFavorites(res.data)))
  //       .catch((error) => console.log(error));
  //   };

  //   const handleRemoveFavorite = (id) => {
  //     axios
  //       .post(
  //         `http://localhost:3001/api/properties/deleteFavorites/${id}`,
  //         {
  //           id: id,
  //         },
  //         {
  //           headers: { "Content-Type": "application/json" },
  //           withCredentials: true,
  //         }
  //       )
  //       .then((res) => dispatch(removeFavorite(res.data)))
  //       .then(() => window.location.reload(false))
  //       .catch((error) => console.log(error));
  //   };

  //   const handleGetEnvironments = (e) => {
  //     e.preventDefault();
  //     axios
  //       .get(
  //         `http://localhost:3001/api/properties/environments/${environments}`,
  //         {
  //           withCredentials: true,
  //         }
  //       )
  //       .then((res) => setProperties(res.data))
  //       .catch((error) => console.log(error));
  //   };

  //   const handleGetPrice = (e) => {
  //     e.preventDefault();
  //     axios
  //       .post(
  //         "http://localhost:3001/api/properties/price",
  //         { minimo: minimo, maximo: maximo },
  //         {
  //           withCredentials: true,
  //         }
  //       )
  //       .then((res) => setProperties(res.data))
  //       .catch((error) => console.log(error));
  //   };

  //   const getSearcher = (e) => {
  //     setSearch(e.target.value);
  //   };

  //   const getEnvironments = (e) => {
  //     setEnvironments(e.target.value);
  //   };

  //   const getMinimo = (e) => {
  //     setMinimo(e.target.value);
  //   };

  //   const getMaximo = (e) => {
  //     setMaximo(e.target.value);
  //   };

  return (
    <>
      <section
        className="h-screen w-full bg-cover bg-center bg-fixed sm:h-screen md:h-[110vh] "
        style={{
          backgroundImage: `url(https://wallpapercave.com/wp/wp1853406.jpg)`,
        }}
      >
        <div className="h-screen w-screen backdrop-opacity-10 backdrop-invert bg-transparent bg-gradient-to-b from-transparent to-black sm:h-screen md:h-[110vh]">
          <div className="h-screen flex items-center mx-[2.5vw] pt-[33vw] sm:h-screen sm:pt-[22vw] md:h-[110vh] md:pt-[15vh] ">
            <div className="flex flex-wrap w-full justify-center ">
              <img src={HOD_Home} alt="" className="px-4 lg:w-1/3" />
              <p className="text-white text-center font-dmSans px-3 py-6 md:text-lg md:px-[15vw] lg:px-[22vw]">
                Discover the home of your dreams with us! Buy, sell or rent with
                our wide selection of properties. Trust us to find your perfect
                place!
              </p>
              <div className="w-full flex flex-col justify-center px-3 py-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button
                  className="block bg-primary w-full py-[1.0315rem] rounded-full text-base font-dmSans text-white hover:bg-primaryHover sm:w-auto sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.25rem] md:px-8"
                  href="/"
                >
                  Explore properties
                </button>
                <button
                  className="block bg-white w-full py-[1.0315rem] rounded-full text-base font-dmSans text-gray-900 hover:bg-primary hover:text-white sm:w-auto sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.25rem] md:px-8"
                  href="/"
                >
                  About us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen">
        <div className="pt-24 mx-[5vw] mb-[4vh] space-y-8 md:flex md:flex-wrap md:items-center md:space-y-0 md:justify-between lg:mx-[10.5vw]">
          <p className="text-2xl font-dmSans font-semibold md:text-3xl lg:text-4xl">
            Explore our properties
          </p>
          <button
            className="block shadow-button bg-white border border-gray-200 w-full py-[1rem] px-6 rounded-full text-base font-dmSans text-gray-900 hover:bg-primary hover:text-white min-[480px]:w-auto sm:w-auto sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.375rem] md:px-9"
            href="/"
          >
            Browse all
          </button>
        </div>
        <div className="h-full mx-[5vw]">
          <div className="w-full h-auto border rounded-3xl">
            <img
              className="w-full h-[10.7rem] rounded-t-3xl"
              src="https://assets.website-files.com/61f981dc0f719d7071d7826c/620146dffd7b262cc0983291_duplex-rustic-cabin-main-image-rental-webflow-ecommerce-template.jpg"
              alt=""
            />
            <div className="px-6 pt-8 pb-7 font-dmSans">
              <h3 className="text-xl font-semibold">Title Property</h3>
              <div className="text-base text-gray-600 my-2">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <div className="flex flex-wrap my-5">
                <div className="w-auto flex items-center border rounded-full py-[0.625rem] px-5 text-sm">
                  <img className="mr-2" src={Environment} alt="" /> Environments
                </div>
                <div className="w-auto flex items-center border border-gray-200 rounded-full py-[0.625rem] px-5 text-sm">
                  <img className="mr-2" src={Room} alt="" /> Rooms
                </div>
              </div>
              <hr className="border-t border-gray-300 my-2" />
              <div>
                <div className="flex items-center">
                  <div className="text-xl font-semibold">$299</div>
                  <div className="text-sm text-gray-400 ml-1">/month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

//     <>
//       <Form className="searchStyle">
//         <Form.Group className="mb-3">
//           <Form.Control
//             value={search}
//             onChange={getSearcher}
//             type="text"
//             placeholder="Buscar"
//           />
//         </Form.Group>
//         <Accordion>
//           <Accordion.Item eventKey="0">
//             <Accordion.Header>Filtros</Accordion.Header>
//             <Accordion.Body>
//               <Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Label>Ambientes</Form.Label>
//                   <Form.Control
//                     onChange={getEnvironments}
//                     value={environments}
//                     type="text"
//                     placeholder="Ambientes"
//                   />
//                 </Form.Group>
//                 <Button variant="primary" onClick={handleGetEnvironments}>
//                   Filtrar
//                 </Button>
//               </Form>
//               <br />
//               <Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Label>Precio</Form.Label>
//                   <Form.Control
//                     onChange={getMinimo}
//                     value={minimo}
//                     type="text"
//                     placeholder="Minimo"
//                   />
//                   <Form.Control
//                     onChange={getMaximo}
//                     value={maximo}
//                     type="text"
//                     placeholder="Maximo"
//                   />
//                 </Form.Group>
//                 <Button variant="primary" onClick={handleGetPrice}>
//                   Filtrar
//                 </Button>
//               </Form>
//             </Accordion.Body>
//           </Accordion.Item>
//         </Accordion>
//       </Form>

//       <Row xs={1} md={4} className="g-4">
//         {properties.map((property, i) => (
//           <Col>
//             <Card className="size">
//               <Card.Img className="img" variant="top" src={property.image} />
//               <Card.Body>
//                 <Card.Title>{property.title}</Card.Title>
//                 {/* <Card.Text>{property.description}</Card.Text> */}
//               </Card.Body>
//               <ListGroup className="list-group-flush">
//                 <ListGroup.Item>
//                   <Form.Text className="text-muted">
//                     {property.category} en {property.operation}
//                   </Form.Text>
//                   <br /> USD {property.price}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <BsDoorOpen /> {property.environments} Ambientes |
//                   <BiBed /> {property.rooms} Habitaciones |
//                   <BiBath /> {property.bathrooms} Baños
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   {property.city}, {property.state}
//                 </ListGroup.Item>
//               </ListGroup>
//               <Card.Body>
//                 <Link to={`/properties/${property.id}`}>
//                   <Button className="buttonStyle">Ver Mas</Button>
//                 </Link>
//                 {user.id ? (
//                   <Button
//                     className="buttonStyle"
//                     onClick={() => handleAddFavorites(property.id)}
//                     variant="primary"
//                   >
//                     Agregar Favoritos
//                   </Button>
//                 ) : (
//                   <Link to={`/login`}>
//                     <Button className="buttonStyle">Agregar Favoritos</Button>
//                   </Link>
//                 )}
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </>
