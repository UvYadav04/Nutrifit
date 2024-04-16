import logo from './logo.svg';
import './App.css';
import Homepage from './Screens/Homepage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './Screens/Home';
import Auth from './Screens/Auth';
import Homeopathy from './Screens/Homeopathy';
import Treatment from './Screens/Treatment'
import Treatinfo from './Screens/Treatinfo'
import Fitness from './Screens/Fitness';
import Workout from './Screens/Workout';
import Diet from './Screens/Diet';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/home' element={<Homepage />} />
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/treatment' element={<Treatment />} />
          <Route path='/treatment/info' element={<Treatinfo />} />
          <Route path='/fitness' element={<Fitness />} />
          <Route path='/workout' element={<Workout />} />
          <Route path='/dietsection' element={<Diet />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
