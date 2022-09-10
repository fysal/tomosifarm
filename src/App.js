import './App.css';
import Nav from './nav/Nav'
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Footer from './components/Footer';

function App() {
  return (
    <div className="main">
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
