import * as F from './FooterStyles';

const Footer = () => {

    return (
      <footer>
          <F.Container id="contact" className='contact-area'>
            <h2>Contact Me</h2>
            <F.MailArea>
              <a className='mail-button' href="mailto:leon.maguiar@gmail.com">Say Hello &#128075;</a>
            </F.MailArea>
            <h5>Developed by <span>Leon Molina</span></h5>
          </F.Container>
      </footer>
    );
  }
  
  export default Footer;