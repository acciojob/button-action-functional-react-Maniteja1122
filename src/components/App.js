import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [text, setText] = useState(null);
  const handleClick = () => {
    setText(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy."
    );
  };
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        click me
      </button>
     {text ? <p>{text}</p>:<p>please click the button</p>}
    </div>
  );
}

export default App;
