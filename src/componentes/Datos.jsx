import React, { useState } from "react";
import { CV } from "../CV/Cv";
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
      <h2 className="datos">
        {datos.name} {datos.surmane}
      </h2>
      <div className="enlaces">
        <button className="enlaces__boton" onClick={() => mostrarEmail(true)}>
          <img src={datos.logoEmail} alt="Email" className="redes"></img>
        </button>
        <div className="enlaces__datos">
          {showEmail === true ? <p> laura.martinDL@gmail.com </p> : <p> </p>}
        </div>

        <button
          className="enlaces__boton"
          onClick={() => mostrarLinkedin(true)}
        >
          <img src={datos.logoLink} alt="linkedin" className="redes"></img>
        </button>

        <div className="enlaces__datos">
          {showLinkedin === true ? (
            <p>
              {" "}
              https://www.linkedin.com/in/laura-martin-de-loeches-a13667234/{" "}
            </p>
          ) : (
            <p> </p>
          )}
        </div>

        <button className="enlaces__boton" onClick={() => mostrarGit(true)}>
          <img src={datos.logoGit} alt="Email" className="redes"></img>
        </button>
        <div className="enlaces__datos">
          {showGit === true ? <p> https://github.com/Wida30 </p> : <p></p>}
        </div>
      </div>

      <img src={datos.image} alt="Laura" className="miFoto" />
    </div>
  );
};

export default Datos;
