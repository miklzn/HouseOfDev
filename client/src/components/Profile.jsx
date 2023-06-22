import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../store/user";
import Environment from "../utils/icons/Environments.svg";
import Room from "../utils/icons/Room.svg";
import Pin from "../utils/icons/Pin.svg";
import Email from "../utils/icons/Email.svg";
import Smartphone from "../utils/icons/Smartphone.svg";
import Delete from "../utils/icons/Delete.svg";
import DeleteAppointmentProfile from "../commons/DeleteAppointmentProfile";

const Profile = () => {
  const [properties, setProperties] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [info, setInfo] = useState(0);
  const [appointId, setAppointId] = useState("");
  const [deleteAppoint, setDeleteAppoint] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/properties/all`)
      .then((res) => setProperties(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/api/appointments/user/${user.id}
      `,
        {
          withCredentials: true,
        }
      )
      .then((res) => setAppointments(res.data))
      .catch((error) => console.log(error));
  }, [user.id]);

  //Get appointmentId
  const getAppointmentId = (id) => {
    setAppointId(id);
    return setDeleteAppoint(true);
  };

  //Delete appointment
  const handleDeleteAppointment = () => {
    axios
      .delete(`http://localhost:3001/api/appointments/delete/${appointId}`, {
        withCredentials: true,
      })
      .then((res) => console.log(res))
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  //Close modal
  const closeModal = () => {
    return setDeleteAppoint(false);
  };

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

  console.log(appointments);

  return (
    <>
      <div>
        <div className="h-auto pt-32 mx-[7vw] md:mx-[4vw] lg:mx-[6vw] xl:mx-[12vw]">
          <div className="md:flex md:space-x-2">
            <div className="h-auto shadow-card flex-col justify-center text-center rounded-3xl p-2 font-dmSans md:sticky md:top-5 md:w-1/3 md:mb-9 md:h-[50vh]">
              <img
                className="w-16 h-16 rounded-full mx-auto mt-6"
                src="https://secure.gravatar.com/avatar/2d1f3467f640887f96f42f1b493c9b6d?s=500&d=mm&r=g"
                alt=""
              />
              <p className="mt-2 mb-4">{`${user.name} ${user.lastName}`}</p>
              <p className="flex text-center justify-center my-2">
                <img className="w-5 mr-1" src={Pin} alt="" />
                {`${user.city}, ${user.country}`}
              </p>
              <p className="flex text-center justify-center my-2">
                <img className="w-5 mr-1" src={Email} alt="" />
                {user.email}
              </p>
              <p className="flex text-center justify-center my-2">
                <img className="w-5 mr-1" src={Smartphone} alt="" />
                {user.phone}
              </p>
            </div>
            <div className="h-auto min-h-[90vh] rounded-3xl p-4 my-5 font-dmSans md:w-2/3 md:mt-0">
              <div className="flex flex-col justify-center">
                <div className="w-full flex justify-center mb-4 space-x-1">
                  <button
                    className={
                      info === 0
                        ? "px-2 py-2 bg-primary h-12 rounded-full text-white"
                        : "px-2 py-2 bg-white h-12 rounded-full  text-black border border-gray-200"
                    }
                    onClick={() => {
                      setInfo(0);
                    }}
                  >
                    Favorites (0)
                  </button>
                  <button
                    className={
                      info === 1
                        ? "px-2 py-2 bg-primary h-12 rounded-full text-white"
                        : "px-2 py-2 bg-white h-12 rounded-full  text-black border border-gray-200"
                    }
                    onClick={() => {
                      setInfo(1);
                    }}
                  >
                    Bookings ({appointments.length})
                  </button>
                </div>
                {info === 0 ? (
                  <div className="grid grid-cols gap-10 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-x-3">
                    {properties.map((property, i) => (
                      <div className="w-full h-auto border rounded-3xl shadow-card">
                        <img
                          className="w-full h-[53.5vw rounded-t-3xl object-cover min-[480px]:h-[48.5vw] sm:h-[55.2vw] md:h-[26.9vw] lg:h-[17.8vw]"
                          src={property.image}
                          alt=""
                        />
                        <div className="px-6 pt-8 pb-7 font-dmSans">
                          <h3 className="text-xl font-semibold">
                            {property.title}
                          </h3>
                          <div className="text-base text-gray-600 my-2">
                            Lorem ipsum dolor sit amet consectetur.
                          </div>
                          <div className="flex flex-wrap my-5">
                            <div className="w-auto flex items-center border rounded-full py-[0.625rem] px-4 text-sm mr-3">
                              <img className="mr-2" src={Environment} alt="" />{" "}
                              {property.environments} Environments
                            </div>
                            <div className="w-auto flex items-center border border-gray-200 rounded-full py-[0.625rem] px-4 text-sm">
                              <img className="mr-2" src={Room} alt="" />{" "}
                              {property.rooms} Rooms
                            </div>
                          </div>
                          <hr className="border-t border-gray-300 mb-6 mt-8" />
                          <div className="min-[480px]:w-full min-[480px]:flex min-[480px]:flex-wrap min-[480px]:items-center min-[480px]:justify-between">
                            <div className="flex items-center mb-4 min-[480px]:mb-0">
                              <div className="text-xl font-semibold">
                                ${property.price}
                              </div>
                              <div className="text-sm text-gray-400 ml-1">
                                /month
                              </div>
                            </div>
                            <div className="w-full min-[480px]:w-auto">
                              <button
                                className="block bg-primary w-full py-[0.81rem] pl-3 pr-4 rounded-full text-white font-semibold hover:bg-primaryHover min-[480px]:w-auto min-[480px]:px-[1.63rem] md:py-4 md:px-6 md:bg-primary md:w-full md:p-0"
                                href="/home"
                              >
                                See more
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  appointments.map((appointment, i) => (
                    <div className="flex items-center justify-between h-20 border border-gray-200 rounded-full font-dmSans my-1">
                      <div className="flex items-center">
                        <Link to={`/properties/${appointment.propertyId}`}>
                          <img
                            className="w-16 h-16 ml-6 rounded-2xl"
                            src={appointment.propertyImage}
                            alt=""
                          />
                        </Link>
                        <div className="flex xl:grid xl:grid-cols-3 xl:gap-x-2 xl:w-9/12">
                          <div className="flex flex-col ml-4 md:ml-4">
                            <h3 className=" text-gray-500">Date:</h3>
                            <p className="w-[32vw] overflow-hidden whitespace-nowrap min-[480px]:max-w-[105px]">
                              {appointment.date}
                            </p>
                          </div>
                          <div className="flex flex-col ml-3 hidden min-[480px]:block md:ml-7">
                            <h3 className=" text-gray-500">Time:</h3>
                            <p className="w-[30vw] overflow-hidden whitespace-nowrap min-[480px]:max-w-[60px]">
                              {appointment.time}
                            </p>
                          </div>
                          <div className="flex flex-col ml-3 hidden lg:block md:ml-7">
                            <h3 className=" text-gray-500">Location:</h3>
                            <p className="w-[39.065vw] overflow-hidden whitespace-nowrap min-[480px]:w-[26.044vw] min-[480px]:max-w-[180px] xl:max-w-[160px]">
                              {`${appointment.propertyCity}, ${appointment.propertyCountry}`}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          className="mr-4 p-2 bg-primary rounded-full hover:bg-primaryHover"
                          onClick={() => getAppointmentId(appointment.id)}
                        >
                          <img className="w-5" src={Delete} alt="" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {deleteAppoint && (
        <DeleteAppointmentProfile
          handleDeleteAppointment={handleDeleteAppointment}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default Profile;

//<Container>
//       <h1 className="centerItem">Mi Perfil</h1>
//       <ListGroup className="centerList">
//         <ListGroup.Item>
//           <Form.Text className="text-muted">Nombre</Form.Text> <br />{" "}
//           {user.name}
//         </ListGroup.Item>
//         <ListGroup.Item>
//           <Form.Text className="text-muted">Apellido</Form.Text> <br />{" "}
//           {user.lastName}
//         </ListGroup.Item>
//         <ListGroup.Item>
//           <Form.Text className="text-muted">Email</Form.Text> <br />{" "}
//           {user.email}
//         </ListGroup.Item>
//         <ListGroup.Item>
//           <Form.Text className="text-muted">Telefono</Form.Text> <br />{" "}
//           {user.phone}
//         </ListGroup.Item>
//       </ListGroup>
//       <h2 className="centerItem">Mis Favoritos ({user.properties.length})</h2>
//       <Row xs={1} md={4} className="g-4">
//         {user.properties.map((property, i) => (
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
//                 <Button
//                   onClick={() => handleRemoveFavorite(property.id)}
//                   variant="primary"
//                 >
//                   Eliminar de Favoritos
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
