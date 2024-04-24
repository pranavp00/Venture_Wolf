import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
import Journey from './pages/Journey';
import Venturewolf from './pages/venturewolf';
import WolfDenClub from './pages/WolfDenClub';
// import maincss from './assets/styles/main.css'
// import JourneyCard from './components/JourneyCards';

import GetFunded from './pages/GetFunded';
import OurValue from './pages/OurValues';
import Services from './pages/Services';
import OurPresense from './pages/OurPresense';
import Founder from './pages/Founder';


function App() {
  return (
    <div className="App">
    
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route exact path="/journey" element={<Journey/>} />
          <Route exact path="/venturewolf" element={<Venturewolf/>} />
          <Route exact path="/wolfdenclub" element={<WolfDenClub/>} />
          <Route exact path="/getFunded" element={<GetFunded/>} />
          <Route exact path="/ourValues" element={<OurValue/>} /> 
          <Route exact path="/services" element={<Services/>} /> 
          <Route exact path="/ourPresense" element={<OurPresense/>} /> 
          <Route exact path="/founder" element={<Founder/>} /> 
        </Routes>
      
  
      </Router>
      
    </div>
  );
}

export default App;


// <Route path='/' element={<Home/>} />
// <Route exact path="/journey" element={<Journey/>} />
