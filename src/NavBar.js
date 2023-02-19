import { Link } from 'react-router-dom';
import "./Styles/NavBar.css"
import logo from "./imgs/VintageAutechreAlbums.png"

const NavBar = () => {
  return (
    <div className='navbar'>
      <img className={logo} src={logo} width={100} />
      <Link to={'/'}>Home</Link>
      <Link to={'/shop'}>Shop</Link>
    </div>
  );
}

export default NavBar;
