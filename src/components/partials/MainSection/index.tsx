import * as MS from './MainSectionStyles';
import picture from './images/leon-square.jpg';

const MainSection = () => {

    return (
        <MS.MainSection id='main'>
        <MS.MainSectionLeftSide>
          <h1>Hello I'm Leon Molina</h1>
          <h2>I'm a junior front-end software developer and student based in Brazil.</h2>
          <MS.Socials>
            <abbr title="GitHub" className='padding-right'>
              <a target="_blank" href="https://github.com/leonmolina">GH</a>
            </abbr>
            <abbr title="LinkedIn">
              <a target="_blank" href="https://www.linkedin.com/in/leonaguiar">LI</a>
            </abbr>
          </MS.Socials>
        </MS.MainSectionLeftSide>
        <MS.MainSectionRightSide>
          <img src={picture} alt="Leon's Picture" />
        </MS.MainSectionRightSide>
      </MS.MainSection>
    );
  }
  
  export default MainSection;