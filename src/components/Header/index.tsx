import {  Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import logo from './images/colored-logo.png';

const Header = () => {

    return (
      <header>
        <Navbar>
          <Container className='navbar'>
            <NavbarBrand>
              <Link to="/">
                <img src={logo} alt="LM Logo" className='nav-logo--image mx-3' />
              </Link>
            </NavbarBrand>
            <Nav>
              <NavLink to="/projects" className='nav-link mx-3'>Projects</NavLink>
              <NavLink to="/about" className='nav-link mx-3'>About</NavLink>
              <a className='nav-link mx-3' href="#contact">Contact</a>
            </Nav>
          </Container>
        </Navbar>
      </header>
    );
  }
  
  export default Header;