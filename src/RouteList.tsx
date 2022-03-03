import { useRoutes } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import About from './pages/About';

const RouteList = () => {
    return useRoutes([
        { path: '*', element: <NotFound /> },
        { path: '/', element: <Home /> },
        { path: '/about', element: <About />},
        { path: '/projects', element: <Projects />}
    ]);
}

export default RouteList;