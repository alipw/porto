import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import CareerJourney from './components/CareerJourney';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <About />
        <CareerJourney />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
