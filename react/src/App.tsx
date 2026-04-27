import { useState } from "react";
import './App.css';

function App() {
  const [visor, setVisor] = useState<string>("");
  const handleClick = (valor: string): void => {
    setVisor((prev) => prev + valor);
  };

  const limparVisor = (): void => {
    setVisor("");
  };

  const calcular = (): void => {
    try {
      const resultado = eval(visor);
      setVisor(String(resultado));
    } catch (error) {
      setVisor("Erro");
    }
  };

  const apagarUltimo = (): void => {
    setVisor(visor.slice(0, -1));
  };

  return (
    <div className="body">
      <div className="layout">
        <div className="visor" id="visor-result">
          {visor || "0"}
        </div>
        <div className="teclado">
          <button className="btn-calc btn-clear" onClick={limparVisor}>C</button>
          <button className="btn-calc btn-operator" onClick={apagarUltimo}>|</button>
          <button className="btn-calc btn-operator" onClick={() => handleClick("%")}>%</button>
          <button className="btn-calc btn-operator" onClick={() => handleClick("/")}>/</button>
          <button className="btn-calc" onClick={() => handleClick("7")}>7</button>
          <button className="btn-calc" onClick={() => handleClick("8")}>8</button>
          <button className="btn-calc" onClick={() => handleClick("9")}>9</button>
          <button className="btn-calc btn-operator" onClick={() => handleClick("*")}>*</button>
          <button className="btn-calc" onClick={() => handleClick("4")}>4</button>
          <button className="btn-calc" onClick={() => handleClick("5")}>5</button>
          <button className="btn-calc" onClick={() => handleClick("6")}>6</button>
          <button className="btn-calc btn-operator" onClick={() => handleClick("-")}>-</button>
          <button className="btn-calc" onClick={() => handleClick("1")}>1</button>
          <button className="btn-calc" onClick={() => handleClick("2")}>2</button>
          <button className="btn-calc" onClick={() => handleClick("3")}>3</button>
          <button className="btn-calc btn-operator" onClick={() => handleClick("+")}>+</button>
          <button className="btn-calc" onClick={() => handleClick("0")}>0</button>
          <button className="btn-calc" onClick={() => handleClick("00")}>00</button>
          <button className="btn-calc" onClick={() => handleClick(".")}>.</button>
          <button className="btn-calc btn-equal" onClick={calcular}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;