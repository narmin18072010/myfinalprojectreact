import './App.css';
import Home2 from './Home2';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Fitness from './Fitness';
import Yoga from './Yoga';
import ForKids from './ForKids';
import WholeBody from './WholeBody';
import Footer from './Footer';


function App() {
return (
  <div>
  <Router>
    <nav className='nav'>
      <Link to="/" className='item live'><h1 className='item first s'>Приведи себя в лучшую форму</h1> </Link>
      <Link to="/fitness" className='item live'>ФИТНЕС</Link>
      <Link to="/yoga" className='item live'>ЙОГА</Link>
      <Link to="/forkids" className='item live'>ДЕТЯМ</Link>
    </nav>
  <Routes>
  <Route path="/" element={<Home2 />} />
  <Route path="/fitness" element={<Fitness />} />
  <Route path="/yoga" element={<Yoga />} />
  <Route path="/forkids" element={<ForKids />} />
  <Route path="/:group/:title" element={<WholeBody />} />
  </Routes>
  <Footer />
  </Router>
  </div>
);
}

export default App;



