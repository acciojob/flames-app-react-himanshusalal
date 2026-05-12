// import React, {Component, useState} from "react";
// import '../styles/App.css';

// class App extends Component {
//     render() {

//         return(
//             <div id="main">
//                {/* Do not remove the main div */}
//             </div>
//         )
//     }
// }


// export default App;


import React, { useState } from "react";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const calculateFlames = () => {
    if (!name1 || !name2) {
      setResult("Please Enter valid input");
      return;
    }

    let arr1 = name1.split("");
    let arr2 = name2.split("");

    // Remove common characters
    for (let i = 0; i < arr1.length; i++) {
      let index = arr2.indexOf(arr1[i]);

      if (index !== -1) {
        arr1[i] = null;
        arr2[index] = null;
      }
    }

    const remaining1 = arr1.filter((char) => char !== null);
    const remaining2 = arr2.filter((char) => char !== null);

    const count = remaining1.length + remaining2.length;

    const flames = {
      1: "Friends",
      2: "Love",
      3: "Affection",
      4: "Marriage",
      5: "Enemy",
      0: "Siblings",
    };

    setResult(flames[count % 6]);
  };

  const clearFields = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>FLAMES App</h1>

      <input
        type="text"
        data-testid="input1"
        name="name1"
        placeholder="Enter first name"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        data-testid="input2"
        name="name2"
        placeholder="Enter second name"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />

      <br />
      <br />

      <button
        data-testid="calculate_relationship"
        name="calculate_relationship"
        onClick={calculateFlames}
      >
        Calculate Relationship Future
      </button>

      <button
        data-testid="clear"
        name="clear"
        onClick={clearFields}
        style={{ marginLeft: "10px" }}
      >
        Clear
      </button>

      <h3 data-testid="answer">{result}</h3>
    </div>
  );
}

export default App;