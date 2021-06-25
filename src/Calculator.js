import React, { useState } from "react";
import "./styles.css";
const Calculator = () => {
  const [result, setResult] = useState("");

  const handleOnClick = (event) => {
    setResult(result.concat(event.target.name));
  };

  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("error");
    }
  };

  const items = [
    {
      name: "Clear",
      type: 2,
      id: "clear",
      onClick: clear
    },
    {
      name: "C",
      type: 2,
      onClick: backspace
    },
    {
      name: "/",
      type: 2,
      onClick: handleOnClick
    },
    {
      name: "7",
      type: 1,
      onClick: handleOnClick
    },
    {
      name: "8",
      type: 1,
      onClick: handleOnClick
    },
    {
      name: "9",
      type: 1,
      width: 1,
      onClick: handleOnClick
    },
    {
      name: "*",
      type: 2,
      onClick: handleOnClick
    },
    {
      name: "4",
      type: 1,
      onClick: handleOnClick
    },
    {
      name: "5",
      type: 1,
      onClick: handleOnClick
    },
    {
      name: "6",
      type: 1,
      onClick: handleOnClick
    },
    {
      name: "-",
      type: 2,
      onClick: handleOnClick
    },
    {
      name: "1",
      type: 1,
      onClick: handleOnClick
    },
    {
      name: "2",
      type: 1,
      onClick: handleOnClick
    },
    {
      name: "3",
      type: 1,
      onClick: handleOnClick
    },
    {
      name: "+",
      type: 2,
      onClick: handleOnClick
    },
    {
      name: "0",
      type: 1,
      onClick: handleOnClick
    },
    {
      name: ".",
      type: 1,
      onClick: handleOnClick
    },
    {
      name: "=",
      id: "result",
      type: 2,
      onClick: calculate
    }
  ];

  return (
    <>
      <div className="contanier">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          {items.map((item) => {
            return (
              <button
                className={`${item.type === 2 ? "highlight" : ""}`}
                id={item.id}
                name={item.name}
                onClick={item.onClick}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Calculator;
