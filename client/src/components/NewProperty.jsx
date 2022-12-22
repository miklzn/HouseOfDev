import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const NewProperty = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/properties/create",
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
      .then(() => navigate("/home"))
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
    <div className="layout m-5">
      <form className="centerForm" onSubmit={handleSubmit}>
        <label></label>
        <input
          required
          type="text"
          className="inputStyle"
          placeholder="Titulo"
          title={title}
          onChange={handleChangeTitle}
        />
        <br />
        <br />
        <label></label>
        <input
          required
          type="text"
          className="inputStyle"
          placeholder="Direccion"
          adress={adress}
          onChange={handleChangeAdress}
        />
        <br />
        <br />
        <label></label>
        <input
          required
          type="text"
          className="inputStyle"
          placeholder="Ciudad"
          city={city}
          onChange={handleChangeCity}
        />
        <br />
        <br />
        <label></label>
        <input
          required
          type="text"
          className="inputStyle"
          placeholder="Pais"
          country={country}
          onChange={handleChangeCountry}
        />
        <br />
        <br />
        <label></label>
        <input
          required
          type="text"
          className="inputStyle"
          placeholder="Provincia"
          state={state}
          onChange={handleChangeState}
        />
        <br />
        <br />
        <label></label>
        <input
          required
          type="text"
          className="inputStyle"
          placeholder="Descripcion"
          description={description}
          onChange={handleChangeDescription}
        />
        <br />
        <br />
        <label></label>
        <input
          required
          className="inputStyle"
          placeholder="Disponible"
          available={available}
          onChange={handleChangeAvailable}
        />
        <br />
        <br />
        <label></label>
        <input
          required
          className="inputStyle"
          placeholder="Cochera"
          garage={garage}
          onChange={handleChangeGarage}
        />
        <br />
        <br />
        <label></label>
        <input
          required
          type="number"
          className="inputStyle"
          placeholder="Habitaciones"
          rooms={rooms}
          onChange={handleChangeRooms}
        />
        <br />
        <br />
        <label></label>
        <input
          required
          type="number"
          className="inputStyle"
          placeholder="Baños"
          bathrooms={bathrooms}
          onChange={handleChangeBathrooms}
        />
        <br />
        <br />
        <label></label>
        <input
          required
          type="number"
          className="inputStyle"
          placeholder="Ambientes"
          environments={environments}
          onChange={handleChangeEnvironments}
        />
        <br />
        <br />
        <label></label>
        <input
          required
          type="text"
          className="inputStyle"
          placeholder="Categoria"
          category={category}
          onChange={handleChangeCategory}
        />
        <br />
        <br />
        <label></label>
        <input
          required
          type="text"
          className="inputStyle"
          placeholder="Operacion"
          operation={operation}
          onChange={handleChangeOperation}
        />
        <br />
        <br />
        <label></label>
        <input
          required
          className="inputStyle"
          placeholder="Precio"
          price={price}
          onChange={handleChangePrice}
        />
        <br />
        <br />
        <label></label>
        <input
          required
          className="inputStyle"
          placeholder="Imagen"
          image={image}
          onChange={handleChangeImage}
        />
        <br />
        <br />
        <button>Crear</button>
      </form>
    </div>
  );
};

export default NewProperty;
