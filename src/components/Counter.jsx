import React, { useState } from "react";
import "../App.css";

function Counter() {
  const [count, setCount] = useState(0);

  function Increase() {
    setCount(count + 1);
  }
  function Decrease() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <h1>{count}</h1>
      <div className="btns">
        <button
          onClick={() => {
            Increase();
          }}
          type="button"
          class="button"
        >
          <div class="button-top"> Plus +</div>
          <div class="button-bottom"></div>
          <div class="button-base"></div>
        </button>
        <button
          onClick={() => {
            Decrease();
          }}
          type="button"
          class="button"
        >
          <div class="button-top"> Minus -</div>
          <div class="button-bottom"></div>
          <div class="button-base"></div>
        </button>
      </div>
    </div>
  );
}

export default Counter;
