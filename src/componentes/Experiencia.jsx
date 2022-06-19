import React from "react";
import "./Experiencia.scss";

const Experiencia = ({ experiencia }) => {
  return (
    <div className="experiencia">
      <h2>{experiencia.name}</h2>
      <p>{experiencia.date}</p>
      <p>{experiencia.where}</p>
      <p>{experiencia.web}</p>
      <p>{experiencia.description}</p>
    </div>
  );
};

export default Experiencia;
