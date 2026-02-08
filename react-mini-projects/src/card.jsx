
function Card({ title, description, buttonText }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", width: "200px" }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
}

export default Card;
