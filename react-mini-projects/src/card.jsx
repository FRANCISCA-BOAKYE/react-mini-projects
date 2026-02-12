import "./Card.css";

function Card({ title, description, buttonText }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
}

export default Card;