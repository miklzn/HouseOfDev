import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import "../styles/newProperty.css";

const NewProperty = () => {
  const [title, setTitle] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/properties/create",
        {
          title: title,
          adress: adress,
          city: city,
          state: state,
          country: country,
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
      .then(() => navigate("/"))
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
      <h1>Nueva Propiedad</h1>
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
            placeholder="Ba??os"
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
            type="text"
            placeholder="Imagen"
            onChange={handleChangeImage}
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Crear
        </Button>
        <br />
      </Form>
    </Container>
  );
};

export default NewProperty;
