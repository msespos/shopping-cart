import { useState } from "react";
import NavBar from "./NavBar";
import Card from "./shop-components/Card"
import "./Styles/Shop.css"

const IncunabulaLink = "https://i.discogs.com/0KFGgi-D9w_TvEsd4q-P8G5Vnexb3rDxSUXshBTP5xw/rs:fit/g:sm/q:90/h:599/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5OTAw/LTE2MTM1OTMxNTgt/NjQwMS5wbmc.jpeg";
const AmberLink = "https://i.discogs.com/N9vUT9NvRU-5h8-Qf1dGfMkKNFd2Zoilo-Gmt3PWPOs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0OTQt/MTE1OTgxNDIzNS5q/cGVn.jpeg";
const TriRepetaeLink = "https://i.discogs.com/U5ZWcUltD6rFjocqtOO1rQZ60lTq22m4ntZvhEKBxxU/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk1OTcx/ODItMTQ4MzM5NjY0/OS00MDMyLmpwZWc.jpeg";

const Shop = () => {
  const [numInCart, setNumInCart] = useState(0);

  const incrementCart = () => {
    setNumInCart(numInCart + 1);
  }

  return (
    <div>
      <NavBar />
      <div>Items In Cart: {numInCart}</div>
      <button>Go To Cart</button>
      <div className="card-container">
        <Card image={IncunabulaLink} title={"Incunabula"}
              incrementCart={incrementCart} />
        <Card image={AmberLink} title={"Amber"}
              incrementCart={incrementCart} />
        <Card image={TriRepetaeLink} title={"Tri Repetae"}
              incrementCart={incrementCart} />
      </div>
    </div>
  );
}

export default Shop;
