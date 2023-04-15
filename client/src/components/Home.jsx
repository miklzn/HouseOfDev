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

// const Home = () => {
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

//   return (
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
//   );
// };

// export default Home;
