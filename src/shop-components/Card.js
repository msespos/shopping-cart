import { useState } from "react";
import "../Styles/Card.css"

const Card = (props) => {
  const [cardClicked, setCardClicked] = useState(false);
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.incrementCart(amount);
    setCardClicked(true);
  }

  return (
    <div className="card">
      <img src={props.image} width={300} />
      <div className="title">{props.title}</div>
      <div className="description">{props.description}</div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-and-add">
            <input
              type="number"
              size="4"
              placeholder="0"
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            {cardClicked ? (
              <span>Added</span>
            ) : (
              <button type="submit">Add To Cart</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Card;
