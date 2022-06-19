import React from "react";
import "./Estudios.scss";

const Estudios = ({ estudios }) => {
  return (
    <div className="educacion">
      {estudios.map((item) => {
        return (
          <div key={item} className="educacion__text">
            <h2>{item.name}</h2>
            <p>{item.date}</p>
            <p>{item.where}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Estudios;
