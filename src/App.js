import './App.css';
import './index.css';
// import Content from './components/Content';
// import Classstate from './components/Classstate';
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import Contact from './components/Contact';
import About from './components/About';



function App() {
  return (
    <div>
     
      <Nav />

      <Routes>

        <Route exact path="Home" element={<Home />} />
        <Route exact path="News" element={<News />} />

        <Route exact path="Contact" element={<Contact />} />

        <Route exact path="About" element={<About />} />

      </Routes>
    </div>

  );
}

export default App;
