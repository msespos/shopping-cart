import { useState } from "react";
import NavBar from "./NavBar";
import Card from "./shop-components/Card"
import "./Styles/Shop.css"

import CartLogo from "./imgs/shopping-cart-icon.svg"

const albums = [
                 {
                   title: "Incunabula",
                   stats: "1993. Debut album. 77:50",
                   description: "First explorations and early versions of the duo's unique sound.",
                   imageLink: "https://i.discogs.com/0KFGgi-D9w_TvEsd4q-P8G5Vnexb3rDxSUXshBTP5xw/rs:fit/g:sm/q:90/h:599/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5OTAw/LTE2MTM1OTMxNTgt/NjQwMS5wbmc.jpeg",
                   alt: "Incunabula Album Cover"
                 },

                 {
                   title: "Amber",
                   stats: "1994. Second album. 74:27",
                   description: "A dark set of soundscapes, some of which could be described as ambient.",
                   imageLink: "https://i.discogs.com/N9vUT9NvRU-5h8-Qf1dGfMkKNFd2Zoilo-Gmt3PWPOs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0OTQt/MTE1OTgxNDIzNS5q/cGVn.jpeg",
                   alt: "Amber Album Cover"
                 },

                 {
                   title: "Tri Repetae",
                   stats: "1995. Third album. 72:29",
                   description: "Venturing into harsh beats and mechanical sounds, this is Autechre coming into their own.",
                   imageLink: "https://i.discogs.com/U5ZWcUltD6rFjocqtOO1rQZ60lTq22m4ntZvhEKBxxU/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk1OTcx/ODItMTQ4MzM5NjY0/OS00MDMyLmpwZWc.jpeg",
                   alt: "Tri Repetae Album Cover"
                 },

                 {
                   title: "Chiastic Slide",
                   stats: "1997. Fourth album. 69:48",
                   description: "Initially widely panned, now widely considered the groundbreaking album that it is.",
                   imageLink: "https://i.discogs.com/0-NYLZSAqU1h4B_nbVPC5GvFmG1zvc586xjFhRI6cXI/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0OTYt/MTE0NDIxMzUyNi5q/cGVn.jpeg",
                   alt: "Chiastic Slide Album Cover"
                 },

                 {
                   title: "LP5",
                   stats: "1998. Fifth album. Self-titled but known generally as LP5. 76:16 including silence and hidden track.",
                   description: "Considered Autechre's last 'widely accessible' album.",
                   imageLink: "https://i.discogs.com/CsMRy50VLb7-Xnz-lEcASM7y9PAFXlFRQHz18UdRTxs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTkt/MTYxMzU5Mjk5Ni02/MzA5LnBuZw.jpeg",
                   alt: "LP5 Album Cover"
                 },

                 {
                   title: "Confield",
                   stats: "2001. Sixth album. 62:00",
                   description: "A stark turn away from conventional tonality and rhythm. Often considered Autechre's masterpiece.",
                   imageLink: "https://i.discogs.com/b77HFyVh7gR_urHff2UuoO8ek_Ih5Yn6_Yf_WU7SNMw/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQwNDYt/MTI4Mjc3MTUyMy5q/cGVn.jpeg",
                   alt: "Confield Album Cover"
                 },

                 {
                   title: "Draft 7.30",
                   stats: "2003. Seventh album. 62:46",
                   description: "Somewhat of a combination of the more conventional beats and tonalities of LP5 with the experimental sounds of Confield.",
                   imageLink: "https://i.discogs.com/_UtJLZXKf1B2mgxljNJXjbOgy93gGJOQ9yIJVm4FdmM/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMDEx/NS0xMTYxMzUzMTQy/LmpwZWc.jpeg",
                   alt: "Draft 7.30 Album Cover"
                 },

                 {
                   title: "Untilted",
                   stats: "2005. Eighth album. 69:50",
                   description: "A jolt of aggressive, even aggressively funky at times, beat-driven tracks. The title's pun is apt for this more straight-ahead album.",
                   imageLink: "https://i.discogs.com/oW4jHzj0vuFfs3xBv8Gxap-S56198cwcNrm0MZ3kh_g/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQxNDY0/Ni0xMjcyMjk4Njkw/LmpwZWc.jpeg",
                   alt: "Untilted Album Cover"
                 },

                 {
                   title: "Quaristice",
                   stats: "2008. Ninth album. 73:15",
                   description: "Another left turn as the duo released 20 short, widely varied tracks. Extended digital-only versions were released later.",
                   imageLink: "https://i.discogs.com/YT219griISwRINCPR829FtVMYdDptGvCoi57KsHKx5k/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNTUx/MDQtMTM3OTQ2ODgx/OC01NjkxLmpwZWc.jpeg",
                   alt: "Quaristice Album Cover"
                 },

                 {
                   title: "Oversteps",
                   stats: "2010. Tenth album. 68:23",
                   description: "Autechre continued to surprise their audience by releasing a remarkeably subdued album, almost ambient in places, and much less beat-driven.",
                   imageLink: "https://upload.wikimedia.org/wikipedia/en/c/cc/Autechre_-_Oversteps.jpg",
                   alt: "Oversteps Album Cover"
                 },

                 {
                   title: "Exai",
                   stats: "2013. Eleventh album. 121:32",
                   description: "The first double album by the duo. A mix of rough challenging beats and occasional more serene moments.",
                   imageLink: "https://i.discogs.com/78OozM9lvI0cOeO5WCyI0cS3mNo4SLtvqXM50sLER48/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQzMzgx/NDQtMTM2ODA4NTIy/NC02ODQwLmpwZWc.jpeg",
                   alt: "Exai Album Cover"
                 },

                 {
                   title: "elseq 1-5",
                   stats: "2016. Twelth album. Only available in digital format. 247:49",
                   description: "A set of 5 mini-albums comprising 4 hours of music. Sprawling and epic. Only surpassed in scope by the 8-hour NTS Sessions in 2018.",
                   imageLink: "https://d1rgjmn2wmqeif.cloudfront.net/r/73330-1.jpg",
                   alt: "elseq 1-5 Album Cover"
                 }
               ]

const Shop = () => {
  const [numInCart, setNumInCart] = useState(0);

  const incrementCart = (amount) => {
    setNumInCart(numInCart + parseInt(amount));
  }

  return (
    <div>
      <NavBar />
      <div className="items-and-button">
        <div className="icon-and-num">
          <img src={CartLogo} alt="A shopping cart logo" width={50}></img>
          <div className="num-in-cart" data-testid="num-in-cart">{numInCart}</div>
        </div>
        <button onClick={() => alert("Cart Permanently Under Construction. This is not an actual store!")}>Go To Cart</button>
      </div>
      <div className="card-container">
        {
          albums.map((album, index) => (
            <Card image={album.imageLink}
                  alt={album.alt}
                  title={album.title}
                  stats={album.stats}
                  description={album.description}
                  incrementCart={incrementCart}
                  key={index}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Shop;
