// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/esm/Container";
// import "../styles/register.css";
import Environment from "../utils/Environments.svg";
import Room from "../utils/Room.svg";

const Register = () => {
  //   const [name, setName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [city, setCity] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [state, setState] = useState("");
  //   const [phone, setPhone] = useState("");

  //   const navigate = useNavigate();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     axios
  //       .post("http://localhost:3001/api/users/register", {
  //         name: name,
  //         lastName: lastName,
  //         email: email,
  //         password: password,
  //         country: country,
  //         city: city,
  //         state: state,
  //         phone: phone,
  //       })
  //       .then((res) => res.data)
  //       .then(() => navigate("/login"))
  //       .catch((error) => console.log(error));
  //   };

  //   const handleChangeName = (e) => {
  //     setName(e.target.value);
  //   };

  //   const handleChangeLastName = (e) => {
  //     setLastName(e.target.value);
  //   };

  //   const handleChangeEmail = (e) => {
  //     setEmail(e.target.value);
  //   };

  //   const handleChangePassword = (e) => {
  //     setPassword(e.target.value);
  //   };

  //   const handleChangeCity = (e) => {
  //     setCity(e.target.value);
  //   };

  //   const handleChangeCountry = (e) => {
  //     setCountry(e.target.value);
  //   };

  //   const handleChangeState = (e) => {
  //     setState(e.target.value);
  //   };

  //   const handleChangePhone = (e) => {
  //     setPhone(e.target.value);
  //   };

  return (
    <>
      <section>
        <div>
          <div className="relative h-[73vh] md:h-[82vh] lg:h-[76vh]">
            <img
              className="absolute rounded-b-3xl h-full w-full object-cover"
              src="https://latinexclusive.com/sites/default/files/api_file_downloads/5c7a20ff202ccf055be696ff_21.jpg"
              alt=""
            />
            <div className="absolute flex w-full h-full backdrop-opacity-10 backdrop-invert bg-transparent bg-gradient-to-b from-transparent to-black/90 h-full rounded-b-3xl items-center text-center">
              <div className="mx-[5vw] w-full text-white font-dmSans my-10 xl:px-[5vw]">
                <h3 className="text-[3rem] font-semibold mb-4 leading-10 min-[480px]:text-[2.375rem] md:text-5xl lg:text-6xl">
                  Sign Up
                </h3>
                <p className="text-gray-100 sm:px-10 md:text-lg lg:px-40 xl:px-[20vw]">
                  Non consectetur a erat nam at lectus urna duis convallis
                  molestie nunc non blandit massa ut etiam sit amet nisl.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-[5vw]">
            <div className="sticky mb-10 lg:sticky lg:top-5 ">
              <div
                className="w-full h-auto py-10 px-6 border shadow-card rounded-3xl bg-white
              -mt-36 min-[480px]:py-12 min-[480px]:px-10 sm:py-[3.125rem] sm:px-[2rem] lg:w-auto lg:-mt-[21.5625rem]"
              >
                <h2 className="text-[1.375rem] font-semibold mb-2">
                  Create account
                </h2>
                <p className="text-gray-600 mb-5 md:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit etiam
                  cras tellus sit.
                </p>
                <hr className="border-t mt-8 mb-10 " />
                <div className="min-[480px]:flex min-[480px]:space-x-2">
                  <div className="min-[480px]:w-full">
                    <h3 className="font-semibold mb-3">Name</h3>
                    <div className="h-14 border rounded-full mb-4 shadow-button"></div>
                  </div>
                  <div className="min-[480px]:w-full">
                    <h3 className="font-semibold mb-3">Email</h3>
                    <div className="h-14 border rounded-full mb-4 shadow-button"></div>
                  </div>
                  <div className="min-[480px]:w-full">
                    <h3 className="font-semibold mb-3">Phone</h3>
                    <div className="h-14 border rounded-full mb-4 shadow-button"></div>
                  </div>
                  <div className="min-[480px]:w-full">
                    <h3 className="font-semibold mb-3">Password</h3>
                    <div className="h-14 border rounded-full mb-4 shadow-button"></div>
                  </div>
                </div>
                <button
                  className="block shadow-button bg-white border border-gray-200 w-full py-[1rem] px-6 rounded-full text-base font-dmSans text-gray-900 hover:bg-primary hover:text-white min-[480px]:w-full sm:w-full sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.375rem] md:px-9"
                  href="/"
                >
                  Create
                </button>
                <div className="flex w-full items-center justify-center my-5">
                  <hr className="border border-gray-300 w-1/2" />
                  <div className="mx-5">OR</div>
                  <hr className="border border-gray-300 w-1/2" />
                </div>
                <button
                  className="block shadow-button bg-black w-full py-[1rem] px-6 rounded-full text-base font-dmSans text-white hover:bg-primary hover:text-white min-[480px]:w-full sm:w-full sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.375rem] md:px-9"
                  href="/"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;

//<Container className="centerItem">
//       <h1>Crear Cuenta</h1>
//       <br />

//       <Form className="centerForm" onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Control
//             required
//             type="text"
//             placeholder="Nombre"
//             onChange={handleChangeName}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Control
//             required
//             type="text"
//             placeholder="Apellido"
//             onChange={handleChangeLastName}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Control
//             required
//             type="email"
//             placeholder="Email"
//             onChange={handleChangeEmail}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Control
//             required
//             type="password"
//             placeholder="Contraseña"
//             onChange={handleChangePassword}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Control
//             required
//             type="text"
//             placeholder="Ciudad"
//             onChange={handleChangeCity}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Control
//             required
//             type="text"
//             placeholder="Pais"
//             onChange={handleChangeCountry}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Control
//             required
//             type="text"
//             placeholder="Provincia"
//             onChange={handleChangeState}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Control
//             required
//             type="tel"
//             placeholder="Telefono"
//             onChange={handleChangePhone}
//           />
//         </Form.Group>
//         <br />
//         <Button variant="primary" type="submit">
//           Registrar
//         </Button>
//         <br />
//       </Form>
//     </Container>
