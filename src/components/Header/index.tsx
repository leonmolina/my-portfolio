import logo from './images/bw-logo.png';
import * as H from './HeaderStyles'

import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <H.NavBar>
        <H.Container>
          <H.NavBarBrand>
          <Link to="/" className='nav-link'>
            <img src={logo} alt="LM Logo" className='nav-logo--image' />
          </Link>
          </H.NavBarBrand>
          <H.NavBarNav>
            <Link to="/projects" className='nav-link'>Projects</Link>
            <Link to="/about" className='nav-link'>About</Link>
            <Link to="/contact" className='nav-link'>Contact</Link>
          </H.NavBarNav>
        </H.Container>
      </H.NavBar>
    </header>
  );
}

export default Header;