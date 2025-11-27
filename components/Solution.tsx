import React from 'react';
import { Smartphone, Zap, CheckCircle } from 'lucide-react';

export const Solution: React.FC = () => {
  const steps = [
    {
      icon: <Zap size={24} />,
      title: "1. Activation",
      desc: "Connectez votre fiche Google Business en 30 secondes. C'est la seule action requise de votre part."
    },
    {
      icon: <Smartphone size={24} />,
      title: "2. Collecte Automatique",
      desc: "Notre système détecte vos clients et les sollicite poliment via SMS ou QR Code au moment où ils sont le plus satisfaits."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "3. Croissance",
      desc: "Les avis 5 étoiles s'accumulent. L'IA rédige les réponses. Votre classement grimpe. Vous regardez les résultats."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
       <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 leading-tight">
              Complexe en interne.<br />
              <span className="text-blue-600">Invisible pour vous.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Nous avons supprimé la friction. Il n'y a pas de tableau de bord compliqué à apprendre. Pas d'équipe à former. 
              <strong className="text-slate-900"> Juste des résultats.</strong>
            </p>

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl text-slate-900 font-bold mb-2">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-3xl blur-2xl transform rotate-3" />
             <div className="glass-panel bg-white/80 p-8 rounded-3xl relative border border-slate-100 shadow-2xl shadow-blue-900/5">
                {/* Mock Phone Interface */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-2 w-20 bg-slate-200 rounded"></div>
                    <div className="h-8 w-8 rounded-full bg-slate-200"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                         <div className="text-sm font-bold text-slate-700">Nouvel Avis 5★</div>
                      </div>
                      <p className="text-xs text-slate-500">"Excellent service, rapide et efficace..."</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 opacity-60">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                         <div className="text-sm font-bold text-slate-700">Nouvel Avis 5★</div>
                      </div>
                      <p className="text-xs text-slate-500">"Je recommande vivement..."</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-200 text-center">
                    <div className="text-3xl font-bold text-slate-900">+142%</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest">Visibilité ce mois</div>
                  </div>
                </div>
             </div>
          </div>

        </div>
       </div>
    </section>
  );
};