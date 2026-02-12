import { useState } from "react";
import "./Toggle.css";
import Card from "./card";

function Toggle() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} 
      </button>

      {show && 
        <div style={{ marginTop: "20px" }}>
          <Card
            title="Dance"
            description="Feel the rhythm and dance to the beat"
            buttonText="Let's Dance"
          />
        </div>
      }
    </div>
  );
}

export default Toggle;
