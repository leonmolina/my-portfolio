import { Container } from 'react-bootstrap';
import './style.css';
import picture from './images/leon-square.jpg';
import Slide from '../partials/Slide';

const Body = () => {

    return (
      <main>
          <Container>
            <section className='main-section'>
              <div className="left-side">
                <h1 className='title'>Hello I'm Leon Molina</h1>
                <p className='sub-title'>I'm a junior front-end software developer and student based in Brazil.</p>
                <div className="socials">
                  <abbr title="GitHub" className='padding-right'>
                    <a target="_blank" href="https://github.com/leonmolina">GH</a>
                  </abbr>
                  <abbr title="LinkedIn" className='padding-right'>
                    <a target="_blank" href="https://www.linkedin.com/in/leonaguiar">LI</a>
                  </abbr>
                  <abbr title="Instagram" className='padding-right'>
                    <a target="_blank" href="https://www.instagram.com/leonmolinaa">IG</a>
                  </abbr>
                  <abbr title="Twitter">
                    <a target="_blank" href="https://twitter.com/leonmolinaa">TW</a>
                  </abbr>
                </div>
              </div>
              <div className="right-side">
                <img src={picture} alt="" />
              </div>
            </section>
            <section id="projects" className="projects-section">
              <h2>My Projects</h2>
              <Slide />
            </section>
          </Container>
      </main>
    );
  }
  
  export default Body;