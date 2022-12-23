import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import "../styles/updateProperty.css";

const UpdateProperty = () => {
  const [title, setTitle] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [description, setDescription] = useState("");
  const [available, setAvailable] = useState("");
  const [garage, setGarage] = useState("");
  const [rooms, setRooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [environments, setEnvironments] = useState("");
  const [category, setCategory] = useState("");
  const [operation, setOperation] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:3001/api/properties/change/${id}`,
        {
          title: title,
          adress: adress,
          city: city,
          country: country,
          state: state,
          description: description,
          available: available,
          garage: garage,
          rooms: rooms,
          bathrooms: bathrooms,
          environments: environments,
          category: category,
          operation: operation,
          price: price,
          image: image,
        },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .then(() => navigate(`/properties/${id}`))
      .catch((error) => console.log(error));
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeAdress = (e) => {
    setAdress(e.target.value);
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleChangeState = (e) => {
    setState(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeAvailable = (e) => {
    setAvailable(e.target.value);
  };

  const handleChangeGarage = (e) => {
    setGarage(e.target.value);
  };

  const handleChangeRooms = (e) => {
    setRooms(e.target.value);
  };

  const handleChangeBathrooms = (e) => {
    setBathrooms(e.target.value);
  };

  const handleChangeEnvironments = (e) => {
    setEnvironments(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeOperation = (e) => {
    setOperation(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };

  return (
    <Container className="centerItem">
      <h1>Editar Propiedad</h1>
      <br />

      <Form className="centerForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            type="text"
            placeholder="Titulo"
            onChange={handleChangeTitle}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            type="text"
            placeholder="Direccion"
            onChange={handleChangeAdress}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            type="text"
            placeholder="Ciudad"
            onChange={handleChangeCity}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            required
            type="text"
            placeholder="Provincia"
            onChange={handleChangeState}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            type="text"
            placeholder="Pais"
            onChange={handleChangeCountry}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            type="text"
            placeholder="Description"
            onChange={handleChangeDescription}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            type="text"
            placeholder="Disponible"
            onChange={handleChangeAvailable}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            type="text"
            placeholder="Cochera"
            onChange={handleChangeGarage}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            type="text"
            placeholder="Habitaciones"
            onChange={handleChangeRooms}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            type="text"
            placeholder="Baños"
            onChange={handleChangeBathrooms}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            type="text"
            placeholder="Ambientes"
            onChange={handleChangeEnvironments}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            type="text"
            placeholder="Categoria"
            onChange={handleChangeCategory}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            type="text"
            placeholder="Operacion"
            onChange={handleChangeOperation}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            type="text"
            placeholder="Precio"
            onChange={handleChangePrice}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            type="file"
            placeholder="Imagen"
            onChange={handleChangeImage}
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Editar
        </Button>
        <br />
      </Form>
    </Container>
  );
  //   <div className="layout m-5">
  //     <form className="centerForm" onSubmit={handleSubmit}>
  //       <label></label>
  //       <input
  //         className="inputStyle"
  //         placeholder="Title"
  //         title={title}
  //         onChange={handleChangeTitle}
  //       />
  //       <br />
  //       <br />
  //       <label></label>
  //       <input
  //         className="inputStyle"
  //         placeholder="Adress"
  //         adress={adress}
  //         onChange={handleChangeAdress}
  //       />
  //       <br />
  //       <br />
  //       <label></label>
  //       <input
  //         className="inputStyle"
  //         placeholder="City"
  //         city={city}
  //         onChange={handleChangeCity}
  //       />
  //       <br />
  //       <br />
  //       <label></label>
  //       <input
  //         className="inputStyle"
  //         placeholder="Country"
  //         country={country}
  //         onChange={handleChangeCountry}
  //       />

  //       <br />
  //       <br />
  //       <label></label>
  //       <input
  //         className="inputStyle"
  //         placeholder="State"
  //         state={state}
  //         onChange={handleChangeState}
  //       />
  //       <br />
  //       <br />
  //       <label></label>
  //       <input
  //         className="inputStyle"
  //         placeholder="Description"
  //         description={description}
  //         onChange={handleChangeDescription}
  //       />
  //       <br />
  //       <br />
  //       <label></label>
  //       <input
  //         className="inputStyle"
  //         placeholder="Available"
  //         available={available}
  //         onChange={handleChangeAvailable}
  //       />
  //       <br />
  //       <br />
  //       <label></label>
  //       <input
  //         className="inputStyle"
  //         placeholder="Garage"
  //         garage={garage}
  //         onChange={handleChangeGarage}
  //       />
  //       <br />
  //       <br />
  //       <label></label>
  //       <input
  //         className="inputStyle"
  //         placeholder="Rooms"
  //         rooms={rooms}
  //         onChange={handleChangeRooms}
  //       />
  //       <br />
  //       <br />
  //       <label></label>
  //       <input
  //         className="inputStyle"
  //         placeholder="Bathrooms"
  //         bathrooms={bathrooms}
  //         onChange={handleChangeBathrooms}
  //       />
  //       <br />
  //       <br />
  //       <label></label>
  //       <input
  //         className="inputStyle"
  //         placeholder="Environments"
  //         environments={environments}
  //         onChange={handleChangeEnvironments}
  //       />
  //       <br />
  //       <br />
  //       <label></label>
  //       <input
  //         className="inputStyle"
  //         placeholder="Category"
  //         category={category}
  //         onChange={handleChangeCategory}
  //       />
  //       <br />
  //       <br />
  //       <label></label>
  //       <input
  //         className="inputStyle"
  //         placeholder="Operation"
  //         operation={operation}
  //         onChange={handleChangeOperation}
  //       />
  //       <br />
  //       <br />
  //       <label></label>
  //       <input
  //         className="inputStyle"
  //         placeholder="Price"
  //         price={price}
  //         onChange={handleChangePrice}
  //       />
  //       <br />
  //       <br />
  //       <label></label>
  //       <input
  //         className="inputStyle"
  //         placeholder="Image"
  //         image={image}
  //         onChange={handleChangeImage}
  //       />
  //       <br />
  //       <br />
  //       <button>Editar</button>
  //     </form>
  //   </div>
  // );
};

export default UpdateProperty;
