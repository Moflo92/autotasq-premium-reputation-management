import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Benefits } from './components/Benefits';
import { Solution } from './components/Solution';
import { Offer } from './components/Offer';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useCalInit } from './hooks/useCalInit';

const App: React.FC = () => {
  // Initialize scroll reveal animations
  useScrollReveal();

  // Initialize Cal.com
  useCalInit();

  return (
    <div className="min-h-screen bg-brand-light text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <div className="scroll-reveal"><Problem /></div>
        <div className="scroll-reveal"><Benefits /></div>
        <div className="scroll-reveal"><Solution /></div>
        <div className="scroll-reveal"><Offer /></div>
        <div className="scroll-reveal"><FAQ /></div>
        <div className="scroll-reveal"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
};

export default App;