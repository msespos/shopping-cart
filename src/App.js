import NavBar from "./NavBar";
import VAAimg from "./imgs/VintageAutechreAlbums.png"
import "./Styles/App.css"

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="image-and-blurb">
        <img className="image" src={VAAimg} alt="Vintage Autechre Albums" width={300} />
        <div className="blurb">
          Autechre have been true musical pioneers for over thirty years.
          Buy digital copies of their first 12 albums here.<br></br><br></br>
          If you've never heard Autechre before, strap in - you're in for an
          experience like no other!
        </div>
      </div>
    </div>
  );
}

export default App;
