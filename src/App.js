import './App.css';
import Nav from './nav/Nav'
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'

function App() {
  return (
    <div className="main">
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
