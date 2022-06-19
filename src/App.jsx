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

  
  const [showEstudios, setEstudios] = useState(true);

  return (
    <>
      <div className="App">
        <Datos datos={datos}/>
        <Aboutme datos={datos}/>

        <div className="botones">

        <button className="boton" onClick={() => setEstudios(true)}>
          Estudios
        </button>
        <button className="boton" onClick={() => setEstudios(false)}>
          Experiencia
        </button>

        </div>

        <div>
          {showEstudios ? (<Estudios estudios={estudios}/>) : (<Experiencia experiencia={experiencia} />)}
        </div>

       
        <Mas idiomas={idiomas} habilidades={habilidades}></Mas>


      </div>
    </>
  );
}

export default App;
