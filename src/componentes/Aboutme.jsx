import React from "react";
import "./Aboutme.scss";

const Aboutme = ({ datos }) => {
  return (
    <div className="sobremi">
      <p>{datos.sobremi}</p>
    </div>
  );
};

export default Aboutme;
