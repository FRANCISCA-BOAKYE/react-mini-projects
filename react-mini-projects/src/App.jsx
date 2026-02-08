import { Card } from "./card";

function App() {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <Card
        title="Learn React"
        description="Understand the basics"
        buttonText="Start"
      />
      <Card
        title="Practice"
        description="Build projects"
        buttonText="Try"
      />
      <Card
        title="Master"
        description="Become confident"
        buttonText="Go"
      />
    </div>
  );
}

export default App;
