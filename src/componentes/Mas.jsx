import React from "react";
import "./Mas.scss";

const Mas = ({ idiomas, habilidades }) => {
  return (
    <>
      <div className="mas">
        <div className="idiomas">
          <p> Idioma: {idiomas.language}</p>
          <p> Escrito: {idiomas.wrlevel}</p>
          <p> Hablado: {idiomas.splevel}</p>
        </div>

        <div className="habilidades">
          {habilidades.map((habilidad) => {
            return <p>{habilidad}</p>;
          })}
        </div>
      </div>
    </>
  );
};

export default Mas;
