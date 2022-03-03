import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import RouteList from './RouteList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <>
      <Header />
      <RouteList />
      <Footer />
    </>
  );
}

export default App;
