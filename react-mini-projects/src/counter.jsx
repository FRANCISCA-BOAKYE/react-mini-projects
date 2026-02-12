import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2 className="counter-title">Counter: {count}</h2>
      <div className="button-group">
        <button 
          className="counter-btn"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>

        <button 
          className="counter-btn"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>

        <button 
          className="counter-btn reset-btn"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
