import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/footer';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import CardSection from './components/CardSection';
// import Footer from './components/common/Footer';
import Hero from './components/Hero';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Journey from './pages/Journey';
// import maincss from './assets/styles/main.css'
import JourneyCard from './components/JourneyCards';


function App() {
  return (
    <div className="App">
      <Home />
    
      <Router>
      <div>
        <Header /> 
        <Hero />
        <JourneyCard/>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/journey" component={Journey} />
        </Routes>
        <CardSection/>

       
     </div>
    </Router>
      
      <Footer />
      
    </div>
  );
}

export default App;
