// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Header from './components/common/Header';
import CardSection from './components/common/CardSection'
import Footer from './components/common/Footer';
import Hero from './components/common/Hero';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Journey from './pages/Journey';
import maincss from './assets/styles/main.css'
import JourneyCard from './components/common/JourneyCards';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        {/* <Hero /> */}
        <JourneyCard/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/journey" component={Journey} />
        </Switch>
        {/* <CardSection/> */}

        <Footer />
      </div>
    </Router>
  );
};

export default App;
