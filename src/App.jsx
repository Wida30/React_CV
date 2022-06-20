import { useState } from "react";
import "./App.scss";
import { CV } from "./CV/Cv";
import Datos from "./componentes/Datos";
import Aboutme from "./componentes/Aboutme";
import Estudios from "./componentes/Estudios";
import Experiencia from "./componentes/Experiencia";
import Mas from "./componentes/Mas";

const { datos, estudios, experiencia, idiomas, habilidades } = CV;

function App() {
  const [estado, setEstado] = useState("Estudios");

  const condicion = () => {
    if (estado === "Estudios") {
      return <Estudios estudios={estudios} />;
    } else if (estado === "Aboutme") {
      return <Aboutme datos={datos} />;
    } else if (estado === "Experiencia") {
      return <Experiencia experiencia={experiencia} />;
    } else {
      return <Mas idiomas={idiomas} habilidades={habilidades}></Mas>;
    }
  };

  return (
    <>
      <div className="App">
        <Datos datos={datos} />
      </div>

      <div className="botones">
        <button onClick={() => setEstado("Aboutme")}>Sobre mi</button>
        <button onClick={() => setEstado("Estudios")}>Estudios</button>
        <button onClick={() => setEstado("Experiencia")}>Experiencia</button>
        <button onClick={() => setEstado("Mas")}>Habilidades</button>
      </div>
      <div>{condicion()}</div>
    </>
  );
}

export default App;
