import React, { useState } from "react";

import "./Datos.scss";

const Datos = ({ datos }) => {
  const [showEmail, setEmail] = useState(false);

  const mostrarEmail = () => {
    if (showEmail === false) {
      setEmail(true);
    } else {
      setEmail(false);
    }
  };

  const [showLinkedin, setLinkedin] = useState(false);

  const mostrarLinkedin = () => {
    if (showLinkedin === false) {
      setLinkedin(true);
    } else {
      setLinkedin(false);
    }
  };

  const [showGit, setGit] = useState(false);

  const mostrarGit = () => {
    if (showGit === false) {
      setGit(true);
    } else {
      setGit(false);
    }
  };

  return (
    <div className="main">
      <img src={datos.image} alt="Laura" className="miFoto" />

      <div className="enlaces">
        <h2 className="datos">
          {datos.name}
          {datos.surmane}
        </h2>

        <div className="fila">
          <div className="otro">
            <button
              className="enlaces__boton"
              onClick={() => mostrarEmail(true)}
            >
              <img src={datos.logoEmail} alt="Email" className="redes"></img>
            </button>
          </div>

          <div className="otro">
            <button
              className="enlaces__boton"
              onClick={() => mostrarLinkedin(true)}
            >
              <img src={datos.logoLink} alt="linkedin" className="redes"></img>
            </button>
          </div>

          <div className="otro">
            <button className="enlaces__boton" onClick={() => mostrarGit(true)}>
              <img src={datos.logoGit} alt="github" className="redes"></img>
            </button>
          </div>
        </div>
        <div className="mostrar">
          {showEmail === true ? (
            <a href={datos.email} target="-blank">
              {" "}
              {datos.email}{" "}
            </a>
          ) : (
            <p> </p>
          )}

          {showLinkedin === true ? (
            <a href={datos.linkedin} target="-blank">
              {" "}
              {datos.linkedin}{" "}
            </a>
          ) : (
            <p> </p>
          )}

          {showGit === true ? (
            <a href={datos.gitHub} target="-blank">
              {datos.gitHub}
            </a>
          ) : (
            <p> </p>
          )}
        </div>
        
      </div>
     
    </div>
  );
};

export default Datos;
