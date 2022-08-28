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
  const [estado, setEstado] = useState("Aboutme");

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

      <div class="custom-shape-divider-bottom-1661710624">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <rect x="1200" height="3.6"></rect>
        <rect height="3.6"></rect>
        <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z" class="shape-fill"></path>
    </svg>
</div>

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
