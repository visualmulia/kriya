import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import TrialForm from './components/TrialForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Process />
      <Portfolio />
      <Pricing />
      <TrialForm />
      <Footer />
    </>
  );
}

export default App;
