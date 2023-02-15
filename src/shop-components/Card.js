import { useState } from "react";
import "../Styles/Card.css"

const Card = (props) => {
  const [cardClicked, setCardClicked] = useState(false);

  return (
    <div className="card">
      <img src={props.image} width={300} />
      {props.title}
      <div className="input-and-add-to-cart">
        <form onSubmit={e => {
          e.preventDefault();
          props.incrementCart();
          setCardClicked(true);
        }}>
          <input
            type="number"
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
