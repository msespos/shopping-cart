import { useState } from "react";
import NavBar from "./NavBar";
import Card from "./shop-components/Card"
import "./Styles/Shop.css"

import CartLogo from "./imgs/shopping-cart-icon.svg"

const IncunabulaLink = "https://i.discogs.com/0KFGgi-D9w_TvEsd4q-P8G5Vnexb3rDxSUXshBTP5xw/rs:fit/g:sm/q:90/h:599/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5OTAw/LTE2MTM1OTMxNTgt/NjQwMS5wbmc.jpeg";
const AmberLink = "https://i.discogs.com/N9vUT9NvRU-5h8-Qf1dGfMkKNFd2Zoilo-Gmt3PWPOs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0OTQt/MTE1OTgxNDIzNS5q/cGVn.jpeg";
const TriRepetaeLink = "https://i.discogs.com/U5ZWcUltD6rFjocqtOO1rQZ60lTq22m4ntZvhEKBxxU/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk1OTcx/ODItMTQ4MzM5NjY0/OS00MDMyLmpwZWc.jpeg";
const ChiasticSlideLink = "https://i.discogs.com/0-NYLZSAqU1h4B_nbVPC5GvFmG1zvc586xjFhRI6cXI/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0OTYt/MTE0NDIxMzUyNi5q/cGVn.jpeg";
const LP5Link = "https://i.discogs.com/CsMRy50VLb7-Xnz-lEcASM7y9PAFXlFRQHz18UdRTxs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTkt/MTYxMzU5Mjk5Ni02/MzA5LnBuZw.jpeg";
const ConfieldLink = "https://i.discogs.com/b77HFyVh7gR_urHff2UuoO8ek_Ih5Yn6_Yf_WU7SNMw/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQwNDYt/MTI4Mjc3MTUyMy5q/cGVn.jpeg";
const Draft730Link = "https://i.discogs.com/_UtJLZXKf1B2mgxljNJXjbOgy93gGJOQ9yIJVm4FdmM/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMDEx/NS0xMTYxMzUzMTQy/LmpwZWc.jpeg";
const UntiltedLink = "https://i.discogs.com/oW4jHzj0vuFfs3xBv8Gxap-S56198cwcNrm0MZ3kh_g/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQxNDY0/Ni0xMjcyMjk4Njkw/LmpwZWc.jpeg";
const QuaristiceLink = "https://i.discogs.com/YT219griISwRINCPR829FtVMYdDptGvCoi57KsHKx5k/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNTUx/MDQtMTM3OTQ2ODgx/OC01NjkxLmpwZWc.jpeg";
const OverstepsLink = "https://upload.wikimedia.org/wikipedia/en/c/cc/Autechre_-_Oversteps.jpg";
const ExaiLink = "https://i.discogs.com/78OozM9lvI0cOeO5WCyI0cS3mNo4SLtvqXM50sLER48/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQzMzgx/NDQtMTM2ODA4NTIy/NC02ODQwLmpwZWc.jpeg";
const Elseq15Link = "https://d1rgjmn2wmqeif.cloudfront.net/r/73330-1.jpg";

const linkArray = [IncunabulaLink, AmberLink, TriRepetaeLink, ChiasticSlideLink,
                   LP5Link, ConfieldLink, Draft730Link, UntiltedLink,
                   QuaristiceLink, OverstepsLink, ExaiLink, Elseq15Link];

const IncunabulaStats = "1993. Debut album. 77:50";
const AmberStats = "1994. Second album. 74:27";
const TriRepetaeStats = "1995. Third album. 72:29";
const ChiasticSlideStats = "1997. Fourth album. 69:48";
const LP5Stats = "1998. Fifth album. Self-titled but known generally as LP5. 76:16 including silence and hidden track.";
const ConfieldStats = "2001. Sixth album. 62:00";
const Draft730Stats = "2003. Seventh album. 62:46";
const UntiltedStats = "2005. Eighth album. 69:50";
const QuaristiceStats = "2008. Ninth album. 73:15";
const OverstepsStats = "2010. Tenth album. 68:23";
const ExaiStats = "2013. Eleventh album. 121:32";
const Elseq15Stats = "2016. Twelth album. 247:49";

const statsArray = [IncunabulaStats, AmberStats, TriRepetaeStats, ChiasticSlideStats,
                    LP5Stats, ConfieldStats, Draft730Stats, UntiltedStats,
                    QuaristiceStats, OverstepsStats, ExaiStats, Elseq15Stats];

const IncunabulaDescription = "First explorations and early versions of the duo's unique sound.";
const AmberDescription = "A darker set of soundscapes, some of which could be described as ambient.";
const TriRepetaeDescription = "Venturing into harsher beats and more mechanical sounds, this is Autechre coming into their own.";
const ChiasticSlideDescription = "Initially widely panned, now widely considered the groundbreaking album that it is.";
const LP5Description = "Considered Autechre's last 'widely accessible' album.";
const ConfieldDescription = "A stark turn away from conventional tonality and rhythm. Often considered Autechre's masterpiece.";
const Draft730Description = "Somewhat of a combination of the more conventional beats and tonalities of LP5 with the experimental sounds of Confield.";
const UntiltedDescription = "A jolt of aggressive, even aggressively funky at times, beat-driven tracks. The title's pun is apt for this more straight-ahead album.";
const QuaristiceDescription = "Another left turn as the duo released 20 short, widely varied tracks. Extended digital-only versions were released later.";
const OverstepsDescription = "Autechre continued to surprise their audience by releasing a remarkeably subdued album, almost ambient in places, and much less beat-driven.";
const ExaiDescription = "The first double album by the duo. A mix of rough challenging beats and occasional more serene moments.";
const Elseq15Description = "A set of 5 mini-albums comprising 4 hours of music. Sprawling and epic. Only available in digital format.";

const descriptionArray = [IncunabulaDescription, AmberDescription, TriRepetaeDescription,
                          ChiasticSlideDescription, LP5Description, ConfieldDescription,
                          Draft730Description, UntiltedDescription, QuaristiceDescription,
                          OverstepsDescription, ExaiDescription, Elseq15Description];

const altArray = ["Incunabula Album Cover", "Amber Album Cover", "TriRepetae Album Cover",
                  "ChiasticSlide Album Cover", "LP5 Album Cover", "Confield Album Cover",
                  "Draft730 Album Cover", "Untilted Album Cover", "Quaristice Album Cover",
                  "Oversteps Album Cover", "Exai Album Cover", "Elseq15 Album Cover"];

const titleArray = ["Incunabula", "Amber", "TriRepetae", "ChiasticSlide", "LP5", "Confield",
                    "Draft730", "Untilted", "Quaristice", "Oversteps", "Exai", "Elseq15"];

const albumArrays = [linkArray, altArray, titleArray, statsArray, descriptionArray];

const numArray = [...Array(12).keys()]

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
          <div className="num-in-cart">{numInCart}</div>
        </div>
        <button onClick={() => alert("Cart Permanently Under Construction. This is not an actual store!")}>Go To Cart</button>
      </div>
      <div className="card-container">
        {
          numArray.map((number) => (
            <Card image={albumArrays[0][number]} alt={albumArrays[1][number]}
                  title={albumArrays[2][number]} stats={albumArrays[3][number]}
                  description={albumArrays[4][number]} incrementCart={incrementCart}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Shop;
