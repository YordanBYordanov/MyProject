// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import MiddleSection from './components/MiddleSection/MiddleSection';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MiddleSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
