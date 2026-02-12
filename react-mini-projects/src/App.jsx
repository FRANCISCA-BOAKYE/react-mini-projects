import { useState } from "react";
import Card from "./card";
import Counter from "./counter";
import Toggle from "./Toggle";
import "./App.css";


function App() {
  const [page, setPage] = useState("card");

  return (
    <div className="app-container">
      <h1> --- React Mini Projects---</h1>

      {/* Navigation */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("card")}>Card</button>
        <button onClick={() => setPage("counter")} style={{ marginLeft: "10px" }}>
          Counter
        </button>
        <button onClick={() => setPage("toggle")} style={{ marginLeft: "10px" }}>
          Toggle
        </button>
      </div>

      {/* Content */}
      {page === "card" && (
        <div style={{ display: "flex", gap: "20px" }}>
          <Card
            title="CIRCULAR PROGRESS"
            description="Visualize progress in a circular format"
            buttonText="View"
          />
          <Card
            title="Practice"
            description="Build confidence  through practice"
            buttonText="Go"
          />
          <Card
            title="Code"
            description="Enjoy coding  and learning"
            buttonText="Let's Go"
          />
          
          <Card
            title="JAVASCRIPT"
            description="Master JavaScript fundamentals"
            buttonText="Learn"
          />
          <Card
            title="Create"
            description="Bring ideas to life"
            buttonText="Create"
          />
        </div>
      )}

      {page === "counter" && <Counter />}
      {page === "toggle" && <Toggle />}
    </div>
  );
}

export default App;
