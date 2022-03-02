import { Container } from 'react-bootstrap';
import './style.css';

const Footer = () => {

    return (
      <footer>
          <Container id="contact" className='contact-area'>
            <h2>Contact Me</h2>
            <div className="mail">
              <a className='mail-button' href="mailto:leon.maguiar@gmail.com">Say Hello &#128075;</a>
            </div>
            <h5>Developed by <span>Leon Molina</span></h5>
          </Container>
      </footer>
    );
  }
  
  export default Footer;