import { useState } from "react";
import { throttle, randomKey } from "./function";
import "./App.css";

function App() {
  const [genKey, setGeneKey] = useState("");
  const [toThrottle, setThrottle] = useState("");

  function handlingClick() {
    const key = randomKey();
    setGeneKey(key);
  }
  const handlingThrottle = throttle(() => {
    const ran = randomKey();
    setThrottle(ran);
  }, 4000);
  return (
    <>
      <h1>Comprueba la función Throttle!!</h1>
      <p>Para generar un codigo aleatorio de 6 digitos, clicka</p>
      <div className="card">
        <button className="genButt" onClick={handlingClick}>
          Generate Key inmediately
        </button>
        {genKey != "" && <button className="genKey">{genKey}</button>}
      </div>
      <div className="card">
        <button className="genButt" onClick={handlingThrottle}>
          Generate Key w/ Throttle
        </button>
        {toThrottle != "" && <button className="genKey">{toThrottle}</button>}
      </div>
    </>
  );
}

export default App;
