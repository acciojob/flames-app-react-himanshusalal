import React from "react";
import { useState } from "react";
import calculateFlames from "./FlamesLogic";

function Flames() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    if (name1.trim() === "" || name2.trim() === "") {
      setResult("Please Enter valid input");
      return;
    }

    const output = calculateFlames(name1, name2);

    setResult(output);
  };

  const handleClear = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>FLAMES App</h1>

      <input
        type="text"
        name="name1"
        data-testid="input1"
        placeholder="Enter First Name"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        name="name2"
        data-testid="input2"
        placeholder="Enter Second Name"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />

      <br />
      <br />

      <button
        name="calculate_relationship"
        data-testid="calculate_relationship"
        onClick={handleCalculate}
      >
        Calculate Relationship Future
      </button>

      <button
        name="clear"
        data-testid="clear"
        onClick={handleClear}
        style={{ marginLeft: "10px" }}
      >
        Clear
      </button>

      <h3 data-testid="answer">{result}</h3>
    </div>
  );
}

export default Flames;