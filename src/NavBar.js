import { Link } from 'react-router-dom';
import "./Styles/NavBar.css"
import logo from "./imgs/logo.png"

const NavBar = () => {
  return (
    <div>
      <div className="note">
        <em>Note: this is not an actual store. It's simply a site created for
            learning purposes. I'm not actually selling anything, least of all
            Autechre's music!<br></br>
            But you should definitely go listen to Autechre right now!
        </em>
      </div>
      <div className='navbar'>
        <img src={logo} width={50} />
        <Link to={'/'}>Home</Link>
        <Link to={'/shop'}>Shop</Link>
      </div>
    </div>
  );
}

export default NavBar;
