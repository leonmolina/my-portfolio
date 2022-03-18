import * as M from './MainStyles';
import MainSection from '../../components/partials/MainSection';
import ProjectsSection from '../../components/partials/ProjectsSection';

const Home = () => {

    return (
      <main>
          <M.Container>
            <MainSection />
            <ProjectsSection />
          </M.Container>
      </main>
    );
  }
  
  export default Home;