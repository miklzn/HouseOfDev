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
import Top_Card from "../utils/TopCard.svg";
import Bottom_Card from "../utils/BottomCard.svg";

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
      <section className="h-auto mb-[1vh]">
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
          <div className="w-full h-auto border rounded-3xl shadow-card min-[480px]:w-[24.375rem]">
            <img
              className="w-full h-[53.5vw] rounded-t-3xl object-cover min-[480px]:h-[14.5rem]"
              src="https://assets.website-files.com/61f981dc0f719d7071d7826c/620146dffd7b262cc0983291_duplex-rustic-cabin-main-image-rental-webflow-ecommerce-template.jpg"
              alt=""
            />
            <div className="px-6 pt-8 pb-7 font-dmSans">
              <h3 className="text-xl font-semibold">Title Property</h3>
              <div className="text-base text-gray-600 my-2">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <div className="flex flex-wrap my-5">
                <div className="w-auto flex items-center border rounded-full py-[0.625rem] px-4 text-sm mr-3">
                  <img className="mr-2" src={Environment} alt="" /> Environments
                </div>
                <div className="w-auto flex items-center border border-gray-200 rounded-full py-[0.625rem] px-4 text-sm">
                  <img className="mr-2" src={Room} alt="" /> Rooms
                </div>
              </div>
              <hr className="border-t border-gray-300 mb-6 mt-8" />
              <div className="min-[480px]:w-full min-[480px]:flex min-[480px]:flex-wrap min-[480px]:items-center min-[480px]:justify-between">
                <div className="flex items-center mb-4 min-[480px]:mb-0">
                  <div className="text-xl font-semibold">$299</div>
                  <div className="text-sm text-gray-400 ml-1">/month</div>
                </div>
                <div className="w-full min-[480px]:w-auto">
                  <button
                    className="block bg-primary w-full py-[0.81rem] pl-3 pr-4 rounded-full text-white font-semibold hover:bg-primaryHover min-[480px]:w-auto min-[480px]:px-[1.63rem] md:py-4 md:px-6 md:bg-primary md:w-full md:p-0"
                    href="/home"
                    variant="outline-light "
                  >
                    See more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" h-auto">
        <div className="pt-24 mx-[5vw] font-dmSans text-center">
          <h2 className="text-2xl font-semibold mb-3 sm:px-[15vw] sm:mb-5 md:text-3xl lg:text-4xl lg:px-[25vw]">
            Come and enjoy a one of a kind experience
          </h2>
          <p className="text-gray-600 mb-10 sm:px-[10vw]md:text-lg md:px-[10vw] lg:text-lg lg:px-[22vw]">
            Lorem ipsum dolor sit amet consectetur adipiscing elitolmi mauris
            convallis mauris ultricies dolor viverra.
          </p>
          <div className="grid grid-cols gap-x-7 gap-y-14 mb-5 md:grid-cols-2 md:mb-12 lg:grid-cols-3 lg:mb-16 xl:px-[4.5vw]">
            <div className="flex items-center">
              <img
                className="h-[6.5rem] mr-6"
                src="https://assets.website-files.com/61f981dc0f719d75a5d78239/6202c7c4c9c163d2b432aa8d_lake-paddling-illustration-rental-webflow-ecommerce-template.png"
                alt=""
              />
              <div className="text-start">
                <h3 className="font-semibold mb-1 text-xl lg:text-2xl">
                  Title
                </h3>
                <p className="text-gray-600 lg:text-lg">
                  Sagittis, facilisis mauris sed vitae habitant dolor sit.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="h-[6.5rem] mr-6"
                src="https://assets.website-files.com/61f981dc0f719d75a5d78239/6202c7c4c9c163d2b432aa8d_lake-paddling-illustration-rental-webflow-ecommerce-template.png"
                alt=""
              />
              <div className="text-start">
                <h3 className="font-semibold mb-1 text-xl lg:text-2xl">
                  Title
                </h3>
                <p className="text-gray-600 lg:text-lg">
                  Sagittis, facilisis mauris sed vitae habitant dolor sit.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="h-[6.5rem] mr-6"
                src="https://assets.website-files.com/61f981dc0f719d75a5d78239/6202c7c4c9c163d2b432aa8d_lake-paddling-illustration-rental-webflow-ecommerce-template.png"
                alt=""
              />
              <div className="text-start">
                <h3 className="font-semibold mb-1 text-xl lg:text-2xl">
                  Title
                </h3>
                <p className="text-gray-600 lg:text-lg">
                  Sagittis, facilisis mauris sed vitae habitant dolor sit.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="h-[6.5rem] mr-6"
                src="https://assets.website-files.com/61f981dc0f719d75a5d78239/6202c7c4c9c163d2b432aa8d_lake-paddling-illustration-rental-webflow-ecommerce-template.png"
                alt=""
              />
              <div className="text-start">
                <h3 className="font-semibold mb-1 text-xl lg:text-2xl">
                  Title
                </h3>
                <p className="text-gray-600 lg:text-lg">
                  Sagittis, facilisis mauris sed vitae habitant dolor sit.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="h-[6.5rem] mr-6"
                src="https://assets.website-files.com/61f981dc0f719d75a5d78239/6202c7c4c9c163d2b432aa8d_lake-paddling-illustration-rental-webflow-ecommerce-template.png"
                alt=""
              />
              <div className="text-start">
                <h3 className="font-semibold mb-1 text-xl lg:text-2xl">
                  Title
                </h3>
                <p className="text-gray-600 lg:text-lg">
                  Sagittis, facilisis mauris sed vitae habitant dolor sit.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="h-[6.5rem] mr-6"
                src="https://assets.website-files.com/61f981dc0f719d75a5d78239/6202c7c4c9c163d2b432aa8d_lake-paddling-illustration-rental-webflow-ecommerce-template.png"
                alt=""
              />
              <div className="text-start">
                <h3 className="font-semibold mb-1 text-xl lg:text-2xl">
                  Title
                </h3>
                <p className="text-gray-600 lg:text-lg">
                  Sagittis, facilisis mauris sed vitae habitant dolor sit.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center px-3 py-6 space-y-4 min-[480px]:flex-row min-[480px]:space-y-0 min-[480px]:space-x-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <button
              className="block bg-primary z-10 w-full py-[1.0315rem] rounded-full text-base font-semibold font-dmSans text-white hover:bg-primaryHover sm:w-auto sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.25rem] md:px-8"
              href="/"
            >
              Explore properties
            </button>
            <button
              className="block shadow-button bg-white z-10 border border-gray-200 w-full py-[1.0315rem] rounded-full text-base font-dmSans text-gray-900 hover:bg-primary hover:text-white sm:w-auto sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.25rem] md:px-8"
              href="/"
            >
              About us
            </button>
          </div>
        </div>
      </section>
      <section className="h-auto">
        <div className="py-16 mx-[5vw] lg:py-44">
          <div className="relative h-auto bg-primary rounded-3xl xl:mx-[4.5vw]">
            <img
              className="w-[15rem] absolute -top-28 -left-28 md:w-[18rem]"
              src={Top_Card}
              alt=""
            />
            <img
              className="w-[10rem] absolute -bottom-24 -right-24 min-[480px]:-bottom-16 min-[480px]:-right-16 sm:w-[40vw] sm:-bottom-14 sm:-right-14"
              src={Bottom_Card}
              alt=""
            />
            <div className="py-14 px-8 font-dmSans md:py-[4.5rem] md:px-[3.375rem] lg:py-[5.875rem] lg:px-[5.375rem]">
              <h2 className="text-2xl font-semibold text-white mb-3 min-[480px]:text-[1.625rem] md:text-3xl md:w-[36.5rem] lg:text-[2.75rem] lg:leading-tight">
                Recharge your energies in one of our forest cabins
              </h2>
              <p className="text-base text-white md:text-lg md:w-[36.5rem]">
                Non consectetur a erat nam at lectus urna duis convallis
                molestie nunc non blandit massa ut etiam sit amet nisl purus in
                mollis.
              </p>
              <div className="w-full flex flex-col justify-center pt-6 space-y-4 min-[480px]:flex-row min-[480px]:space-y-0 min-[480px]:space-x-3 min-[480px]:justify-start sm:pt-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button
                  className="block bg-white w-full py-[1.0315rem] rounded-full text-base font-dmSans text-primary font-semibold hover:text-black min-[480px]:w-auto min-[480px]:px-6 sm:w-auto sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.25rem] md:px-8"
                  href="/"
                >
                  Explore properties
                </button>
                <button
                  className="block shadow-button bg-primary border border-white w-full py-[1.0315rem] rounded-full text-base font-dmSans text-white hover:bg-white hover:text-black min-[480px]:w-auto min-[480px]:px-6 sm:w-auto sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.25rem] md:px-8"
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
        <div className="mx-[5vw]">
          <h2 className="text-2xl font-dmSans font-semibold">
            Explore by city
          </h2>
          <div className="py-10 grid grid-cols-1 gap-6">
            <div className="relative h-[24.375rem]">
              <img
                className="absolute rounded-3xl h-full w-full object-cover"
                src="https://coolwallpapers.me/picsup/3111988-argentina_bruno-scramgnon_buenos-aires_floralis-generica.jpg"
                alt=""
              />
              <div className="absolute w-full backdrop-opacity-10 backdrop-invert bg-transparent bg-gradient-to-b from-transparent to-black h-full rounded-3xl">
                <h3 className="h-full absolute flex px-8 text-white items-end py-20 text-[1.375rem] font-semibold">
                  Buenos Aires
                </h3>
              </div>
            </div>
            <div className="relative h-[24.375rem]">
              <img
                className="absolute rounded-3xl h-full w-full object-cover"
                src="https://coolwallpapers.me/picsup/3111988-argentina_bruno-scramgnon_buenos-aires_floralis-generica.jpg"
                alt=""
              />
              <div className="absolute w-full backdrop-opacity-10 backdrop-invert bg-transparent bg-gradient-to-b from-transparent to-black h-full rounded-3xl">
                <h3 className="h-full absolute flex px-8 text-white items-end py-20 text-[1.375rem] font-semibold">
                  Buenos Aires
                </h3>
              </div>
            </div>
            <div className="relative h-[24.375rem]">
              <img
                className="absolute rounded-3xl h-full w-full object-cover"
                src="https://coolwallpapers.me/picsup/3111988-argentina_bruno-scramgnon_buenos-aires_floralis-generica.jpg"
                alt=""
              />
              <div className="absolute w-full backdrop-opacity-10 backdrop-invert bg-transparent bg-gradient-to-b from-transparent to-black h-full rounded-3xl">
                <h3 className="h-full absolute flex px-8 text-white items-end py-20 text-[1.375rem] font-semibold">
                  Buenos Aires
                </h3>
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

//Carrusel

// <section className="mt-48">
// <div
//   id="animation-carousel"
//   class="relative w-full"
//   data-carousel="static"
// >
//   {/* <!-- Carousel wrapper --> */}
//   <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
//     {/* <!-- Item 1 --> */}
//     <div class="hidden duration-200 ease-linear" data-carousel-item>
//       <img
//         src="/docs/images/carousel/carousel-1.svg"
//         class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//         alt="..."
//       />
//     </div>
//     {/* <!-- Item 2 --> */}
//     <div class="hidden duration-200 ease-linear" data-carousel-item>
//       <img
//         src="https://www.construyehogar.com/wp-content/uploads/2016/01/Casa-moderna-un-piso.jpg"
//         class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//         alt="..."
//       />
//     </div>
//     {/* <!-- Item 3 --> */}
//     <div
//       class="hidden duration-200 ease-linear"
//       data-carousel-item="active"
//     >
//       <img
//         src="/docs/images/carousel/carousel-3.svg"
//         class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//         alt="..."
//       />
//     </div>
//     {/* <!-- Item 4 --> */}
//     <div class="hidden duration-200 ease-linear" data-carousel-item>
//       <img
//         src="/docs/images/carousel/carousel-4.svg"
//         class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//         alt="..."
//       />
//     </div>
//     {/* <!-- Item 5 --> */}
//     <div class="hidden duration-200 ease-linear" data-carousel-item>
//       <img
//         src="/docs/images/carousel/carousel-5.svg"
//         class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//         alt="..."
//       />
//     </div>
//   </div>
//   {/* <!-- Slider controls --> */}
//   <button
//     type="button"
//     class=" absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//     data-carousel-prev
//   >
//     <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary">
//       <svg
//         aria-hidden="true"
//         class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="2"
//           d="M15 19l-7-7 7-7"
//         ></path>
//       </svg>
//       <span class="sr-only">Previous</span>
//     </span>
//   </button>
//   <button
//     type="button"
//     class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//     data-carousel-next
//   >
//     <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary">
//       <svg
//         aria-hidden="true"
//         class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="2"
//           d="M9 5l7 7-7 7"
//         ></path>
//       </svg>
//       <span class="sr-only">Next</span>
//     </span>
//   </button>
// </div>
// </section>
