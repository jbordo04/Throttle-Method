import { useState } from "react";
import { randomKey } from "./function";
import "./App.css";

function App() {
  const [genKey, setGeneKey] = useState("");
  const [toThrottle, setThrottle] = useState("");

  function handlingClick() {
    const key = randomKey();
    setGeneKey(key);
  }

  function throttle<T extends (...args: Parameters<T>) => void>(
    callback: T,
    freq: number
  ) {
    let callNow: boolean = true;
    let lastFn: ReturnType<typeof setTimeout>;
    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
      console.log(callNow);
      if (callNow) {
        callNow = false;
        clearTimeout(lastFn);
        callback.apply(this, args);
        lastFn = setTimeout(() => {
          callNow = true;
        }, freq);
      } else {
        console.log("throttled!");
      }
    };
  }
  const handlingThrottle = throttle(() => {
    const ran = randomKey();
    setThrottle(ran);
  }, 3000);

  return (
    <>
      <h1>Comprueba la función Throttle!!</h1>
      <p>Para generar un codigo aleatorio de 6 digitos, clicka</p>
      <div className="card">
        <button className="genButt" onClick={handlingClick}>
          Generate Key inmediately
        </button>
        {genKey !== "" && <button className="genKey">{genKey}</button>}
      </div>
      <div className="card">
        <button
          className="genButt"
          onClick={handlingThrottle}
          // disabled={waiting}
        >
          Generate Key w/ Throttle
        </button>
        {toThrottle !== "" && <button className="genKey">{toThrottle}</button>}
      </div>
    </>
  );
}

export default App;
