import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../store/user";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

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

  return (
    <div>
      <div className="h-screen pt-32 mx-[7vw] md:mx-[4vw] lg:mx-[6vw] xl:mx-[12vw]">
        <div className="md:flex md:space-x-2">
          <div className="h-auto shadow-card flex-col justify-center text-center rounded-3xl p-2 font-dmSans md:w-1/3">
            <img
              className="w-20 h-20 rounded-full mx-auto"
              src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
              alt=""
            />
            <p className="mt-2 mb-4">{`${user.name} ${user.lastName}`}</p>
            <p className="flex text-center justify-center my-2">
              <img
                className="w-5 mr-1"
                src="https://www.svgrepo.com/show/283449/maps-and-flags-pin.svg"
                alt=""
              />
              {`${user.city}, ${user.country}`}
            </p>
            <p className="flex text-center justify-center my-2">
              <img
                className="w-5 mr-1"
                src="https://www.svgrepo.com/show/488920/email.svg"
                alt=""
              />
              {user.email}
            </p>
            <p className="flex text-center justify-center my-2">
              <img
                className="w-5 mr-1"
                src="https://www.svgrepo.com/show/489146/smartphone-01.svg"
                alt=""
              />
              {user.phone}
            </p>
          </div>
          <div className="h-auto shadow-card rounded-3xl p-2 mt-5 font-dmSans md:w-2/3 md:mt-0">
            <div className="flex justify-center space-x-1">
              <button className="px-2 py-2 bg-primary rounded-full text-white">
                Favorites
              </button>
              <button className="px-2 py-2 bg-primary rounded-full text-white">
                Bookings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
