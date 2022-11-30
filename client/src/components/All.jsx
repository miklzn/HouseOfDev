import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";

const All = () => {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/properties/all")
      .then((res) => setProperty(res.data));
  }, []);

  return (
    <div>
      <div>
        {property.map((property, i) => (
          <div key={i} className="card" style={{ width: "18rem" }}>
            <img src={property.image} className="card-img-top" alt="" />
            <div className="card-body">
              <p className="card-text">{property.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All;
