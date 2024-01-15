import { useState } from "react";

function App() {
  const [calculatorValue, setCalculatorValue] = useState("");
  const [operators] = useState(["+", "-", "x", "/"]);

  const calculatorInput = (value) => {
    if (operators.includes(value)) {
      if (/^\d/.test(calculatorValue)) {
        if (!/[+\/x-]/.test(calculatorValue)) {
          setCalculatorValue(`${calculatorValue}${value}`);
        }
      }
      return;
    }

    setCalculatorValue(`${calculatorValue}${value}`);
  };

  const deleteValue = () => {
    if (!calculatorValue) return;
    setCalculatorValue(calculatorValue.slice(0, -1));
  };

  const clearValue = () => {
    setCalculatorValue("");
  };

  const result = () => {
    try {
      const regex = /(\d+)([+\/x-])(\d+)/;

      const checkValue = calculatorValue.match(regex);
      console.log(checkValue);

      if (checkValue) {
        const firstNumber = Number(checkValue[1]);
        const operator = checkValue[2];
        const secondNumber = Number(checkValue[3]);

        switch (operator) {
          case "+":
            setCalculatorValue(String(firstNumber + secondNumber));
            break;
          case "-":
            setCalculatorValue(String(firstNumber - secondNumber));
            break;
          case "x":
            setCalculatorValue(String(firstNumber * secondNumber));
            break;
          case "/":
            setCalculatorValue(String(firstNumber / secondNumber));
            break;
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <div className="calculator">
        <p className="calculator-output">{calculatorValue}</p>
        <div className="calculator-flex">
          <button className="calculator-button" onClick={clearValue}>
            Clear
          </button>
          <button className="calculator-button" onClick={deleteValue}>
            Del
          </button>
        </div>
        <div className="calculator-flex">
          <button
            className="calculator-button"
            onClick={() => calculatorInput("7")}
          >
            7
          </button>
          <button
            className="calculator-button"
            onClick={() => calculatorInput("8")}
          >
            8
          </button>
          <button
            className="calculator-button"
            onClick={() => calculatorInput("9")}
          >
            9
          </button>
          <button
            className="calculator-button"
            onClick={() => calculatorInput("/")}
          >
            /
          </button>
        </div>
        <div className="calculator-flex">
          <button
            className="calculator-button"
            onClick={() => calculatorInput("4")}
          >
            4
          </button>
          <button
            className="calculator-button"
            onClick={() => calculatorInput("5")}
          >
            5
          </button>
          <button
            className="calculator-button"
            onClick={() => calculatorInput("6")}
          >
            6
          </button>
          <button
            className="calculator-button"
            onClick={() => calculatorInput("x")}
          >
            x
          </button>
        </div>
        <div className="calculator-flex">
          <button
            className="calculator-button"
            onClick={() => calculatorInput("1")}
          >
            1
          </button>
          <button
            className="calculator-button"
            onClick={() => calculatorInput("2")}
          >
            2
          </button>
          <button
            className="calculator-button"
            onClick={() => calculatorInput("3")}
          >
            3
          </button>
          <button
            className="calculator-button"
            onClick={() => calculatorInput("-")}
          >
            -
          </button>
        </div>
        <div className="calculator-flex">
          <button
            className="calculator-button"
            onClick={() => calculatorInput("0")}
          >
            0
          </button>
          <button className="calculator-button" onClick={result}>
            =
          </button>
          <button
            className="calculator-button"
            onClick={() => calculatorInput("+")}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
