import NavBar from "./NavBar";
import VAAimg from "./imgs/VintageAutechreAlbums.png"
import "./Styles/App.css"

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="image-and-blurb">
        <img className="image" src={VAAimg} width={300} />
        <div className="blurb">Autechre have been true musical pioneers for over thirty
                               years. Buy digital copies of their first 12 albums here.
                               If you've never heard Autechre before, strap in - you're
                               in for an experience like no other!<br></br><br></br>
                               <em>Note: this is not an actual store. It's simply for
                               learning purposes. I'm not actually selling anything,
                               least of all Autechre's music!<br></br>
                               But you should definitely go listen to Autechre
                               right now!</em>
        </div>
      </div>
    </div>
  );
}

export default App;
