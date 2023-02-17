import { Link } from 'react-router-dom';
import "./Styles/NavBar.css"

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to={'/'}>Home</Link> <Link to={'/shop'}>Shop</Link>
    </div>
  );
}

export default NavBar;
