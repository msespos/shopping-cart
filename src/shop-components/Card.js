import "../Styles/Card.css"

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} width={200} />
      {props.title} 
    </div>
  );
}

export default Card;
