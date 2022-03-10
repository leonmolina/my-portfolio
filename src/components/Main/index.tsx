import * as M from './MainStyles';
import MainSection from '../partials/MainSection';
import ProjectsSection from '../partials/ProjectsSection';

const Main = () => {

    return (
      <main>
          <M.Container>
            <MainSection />
            <ProjectsSection />
          </M.Container>
      </main>
    );
  }
  
  export default Main;