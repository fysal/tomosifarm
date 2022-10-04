import './App.css';
import Nav from './nav/Nav'
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="main">
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
