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
      {props.title}
      <div className="input-and-add-to-cart">
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          {cardClicked ? (
            <div>Added</div>
          ) : (
            <button type="submit">Add To Cart</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Card;
