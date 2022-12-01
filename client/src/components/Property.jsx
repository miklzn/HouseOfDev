import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/user";

const Property = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [property, setProperty] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/properties/${id}`)
      .then((res) => setProperty(res.data))
      .then((res) => dispatch(setUser(res.data)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {user.admin ? (
        <div>
          <h1> {property.title}</h1>
          <img src={property.image} alt="Imagen" />

          <button>
            <Link to={`/properties/change/${id}`}>Editar Propiedad</Link>
          </button>
          <button>Agregar Propiedad</button>
        </div>
      ) : (
        <div>
          <h2> {property.title} </h2>
          <img src={property.image} alt="Imagen" />
        </div>
      )}
    </div>
  );
};

export default Property;
