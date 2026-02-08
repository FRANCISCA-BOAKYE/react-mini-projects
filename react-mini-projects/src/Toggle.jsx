import { useState } from "react";
import "./Toggle.css";
import Card from "./card";

function Toggle() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Content
      </button>

      {show && 
        <div style={{ marginTop: "20px" }}>
          <Card
            title="TOGGLE COMPONENT"
            description="Click the button to toggle this content"
            buttonText="Toggle"
          />
        </div>
      }
    </div>
  );
}

export default Toggle;
