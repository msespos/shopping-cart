import { Link } from 'react-router-dom';
import "./Styles/NavBar.css"
import logo from "./imgs/logo.png"

const NavBar = () => {
  return (
    <div className='navbar'>
      <img className={logo} src={logo} width={50} />
      <Link to={'/'}>Home</Link>
      <Link to={'/shop'}>Shop</Link>
    </div>
  );
}

export default NavBar;
