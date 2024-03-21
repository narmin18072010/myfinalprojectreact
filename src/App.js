import './App.css';
import Home2 from './Home2';
import './App.css';
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

import OnTheBack from './OnTheBack';
import InYourArms from './InYourArms';
import OnTheStomach from './OnTheStomach';
import OnYourFeet from './OnYourFeet';
import Charger from './Charger';
import Stretching from './Stretching';
import WholeBodyYoga from './WholeBodyYoga';
import OnTheBackYoga from './OnTheBackYoga';
import ChargerYoga from './ChargerYoga';
import Meditation from './Meditation';
import OnTheFeetYoga from './OnTheFeetYoga';
import ForKidsYoga from './ForKidsYoga';
import ForKidsCharger from './ForKidsCharger';
import ForKidsStretching from './ForKidsStretching';
import OnTheButtocks from './OnTheButtocks';




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
          <Route path="/fitness/:title" element={<WholeBody />} />
          <Route path="/yoga/:title" element={<WholeBodyYoga />} />
          <Route path="/forkids/:title" element={<ForKidsCharger />} />

          <Route path="/wholebody" element={<WholeBody />} />
          <Route path="/ontheback" element={<OnTheBack />} />
          <Route path="/inyourarms" element={<InYourArms />} />
          <Route path="/onthestomach" element={<OnTheStomach />} />
          <Route path="/onyourfeet" element={<OnYourFeet />} />
          <Route path="/charger" element={<Charger />} />
          <Route path="/stretching" element={<Stretching />} />

          <Route path="/wholebodyyoga" element={<WholeBodyYoga />} />
          <Route path="/onthebackyoga" element={<OnTheBackYoga />} />
          <Route path="/chargeryoga" element={<ChargerYoga />} />
          <Route path="/meditationyoga" element={<Meditation />} />
          <Route path="/onthefeetyoga" element={<OnTheFeetYoga />} />
          <Route path="/forkidsyoga" element={<ForKidsYoga />} />
          <Route path="/forkidscharger" element={<ForKidsCharger />} />
          <Route path="/forkidsstretching" element={<ForKidsStretching />} />
          <Route path="/onthebuttocks" element={<OnTheButtocks />} />
        </Routes>

      </Router>




    </div>



  );
}


export default App;





