import {  Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import './style.css';
import logo from './images/colored-logo.png';

const Header = () => {

    return (
      <header>
        <Navbar>
          <Container className='navbar'>
            <NavbarBrand>
              <img src={logo} alt="Leon Molina Logo" className='nav-logo--image mx-3' />
            </NavbarBrand>
            <Nav>
              <NavLink className='mx-3'>Projects</NavLink>
              <NavLink className='mx-3'>About</NavLink>
              <a className='nav-link mx-3' href="#contact">Contact</a>
            </Nav>
          </Container>
        </Navbar>
      </header>
    );
  }
  
  export default Header;