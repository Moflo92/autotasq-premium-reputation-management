import React from 'react';
import { Menu, X } from 'lucide-react';
import { openCalModal as openCal } from '../hooks/useCalInit';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Transition instantanée sans animation de scroll
      element.scrollIntoView({ behavior: 'auto' });
      setIsOpen(false);
    }
  };

  const openCalModal = () => {
    openCal();
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
          <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
            <span className="text-white font-bold font-serif italic text-sm">a</span>
          </div>
          <span className="text-2xl font-serif tracking-wider text-slate-900">autotasq</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('problem')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Pourquoi Nous ?</button>
          <button onClick={() => scrollTo('benefits')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Avantages</button>
          <button onClick={() => scrollTo('how-it-works')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Comment ça marche</button>
          <button onClick={() => scrollTo('faq')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">FAQ</button>
          <button
            onClick={openCalModal}
            className="px-6 py-2 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10"
            aria-label="Réserver un appel gratuit"
          >
            Réserver un Appel
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full glass-panel border-b border-slate-200 py-8 px-6 flex flex-col gap-6 shadow-xl">
          <button onClick={() => scrollTo('problem')} className="text-left text-slate-600 hover:text-slate-900">Pourquoi Nous ?</button>
          <button onClick={() => scrollTo('benefits')} className="text-left text-slate-600 hover:text-slate-900">Avantages</button>
          <button onClick={() => scrollTo('how-it-works')} className="text-left text-slate-600 hover:text-slate-900">Comment ça marche</button>
          <button onClick={() => scrollTo('faq')} className="text-left text-slate-600 hover:text-slate-900">FAQ</button>
          <button onClick={openCalModal} className="text-left text-brand-accent font-semibold">Réserver un Appel</button>
        </div>
      )}
    </nav>
  );
};