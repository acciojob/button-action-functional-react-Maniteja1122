import React from "react";
import "./../styles/App.css";

function App() {
  const [text, setText] = React.useState(false);
  const handleClick = () => {
    setText(true);
  };
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        click me
      </button>
     {text && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.
        </p>
      )}
    </div>
  );
}

export default App;
