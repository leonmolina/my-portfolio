import logo from './images/bw-logo.png';
import * as H from './HeaderStyles'

const Header = () => {

  return (
    <header>
      <H.NavBar>
        <H.Container>
          <H.NavBarBrand>
            <a href="#main">
              <img src={logo} alt="LM Logo" className='nav-logo--image' />
            </a>
          </H.NavBarBrand>
          <H.NavBarNav>
            <a className='nav-link' href="#projects">Projects</a>
            <a className='nav-link' href="#about">About</a>
            <a className='nav-link' href="#contact">Contact</a>
          </H.NavBarNav>
        </H.Container>
      </H.NavBar>
    </header>
  );
}

export default Header;