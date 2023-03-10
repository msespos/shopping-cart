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
      <img src={props.image} alt={props.alt} width={178} />
      <div className="title">{props.title}</div>
      <div className="stats">{props.stats}</div>
      <div className="description">{props.description}</div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-and-add">
            <input
              type="number"
              aria-label={props.title}
              size="5"
              min="1"
              max="100"
              placeholder="0"
              className="input"
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            {cardClicked ? (
              <div className="added">Added</div>
            ) : (
              <button type="submit" className="button" data-testid={props.title}>Add To Cart</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Card;
