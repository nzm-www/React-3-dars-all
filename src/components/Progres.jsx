import React, { useState } from "react";
import "../App.css";

function Progress() {
  const [width, setWidth] = useState(10);

  function IncreaseWidth() {
    setWidth(width + 10);
    if (width === 100) {
      setWidth((width = 100));
    } else {
      setWidth(width + 10);
    }
  }
  function DecreaseWidth() {
    setWidth(width - 10);
  }

  return (
    <div className="bar">
      <div className="wrapper">
        <div style={{ width: `${width}%` }} className="fill"></div>
      </div>
      <div className="bar-btns">
        <button onClick={() => DecreaseWidth()} className="progresbtn">
          -
        </button>
        <button onClick={() => IncreaseWidth()} className="progresbtn">
          +
        </button>
       
      </div>
    </div>
  );
}

export default Progress;
