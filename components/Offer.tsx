import React from 'react';
import { CheckCircle2 } from 'lucide-react';

declare global {
  interface Window {
    Cal: any;
  }
}

export const Offer: React.FC = () => {
  const openCalModal = () => {
    if (typeof window !== 'undefined' && window.Cal) {
      window.Cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#0f172a' } },
        hideEventTypeDetails: false,
        layout: 'month_view'
      });
      window.Cal('openModal', {
        calLink: 'florian-autotasq/30min',
        config: { layout: 'month_view' }
      });
    }
  };

  return (
    <section id="offer" className="py-24 relative overflow-hidden bg-white">
      {/* Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-blue-50 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6">Le Défi 14 Jours</h2>
        <p className="text-xl text-slate-600 mb-12">
          Je suis tellement confiant dans le système <span className="text-slate-900 font-serif italic font-bold">Autotasq</span> que je prends tous les risques.
        </p>

        <div className="glass-panel bg-white p-10 rounded-3xl border border-blue-100 shadow-2xl shadow-blue-900/10">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-bold tracking-widest uppercase text-xs mb-6">Offre de Lancement</div>

          {/* Value Breakdown */}
          <div className="mb-8 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200">
            <div className="space-y-3 text-left">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-600">✓ 10 Avis Optimisés</span>
                <span className="text-slate-900 font-semibold">0€</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-600">✓ Configuration & Formation</span>
                <span className="text-slate-900 font-semibold line-through">99€</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-600">✓ Support 24/7 (14j)</span>
                <span className="text-slate-900 font-semibold line-through">99€</span>
              </div>
              <div className="border-t border-slate-300 pt-3 mt-3 flex justify-between items-center">
                <span className="text-slate-600 font-medium">Valeur totale :</span>
                <span className="text-slate-500 line-through">198€</span>
              </div>
            </div>
          </div>

          <div className="text-6xl md:text-8xl font-bold text-slate-900 mb-2 tracking-tighter">0€</div>
          <div className="text-slate-500 mb-10 font-medium">Pendant 14 jours. Sans engagement.</div>

          <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto mb-10 text-left">
            <div className="flex items-center gap-3 text-slate-700">
              <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
              <span className="font-medium">10 Avis 5 Étoiles</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
              <span className="font-medium">Optimisation SEO</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
              <span className="font-medium">Setup en 5 min</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
              <span className="font-medium">Support 7j/7</span>
            </div>
          </div>

          <button
             onClick={openCalModal}
             className="w-full md:w-auto px-12 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl shadow-slate-900/20"
             aria-label="Réserver un appel de découverte"
          >
            Réserver Mon Appel Gratuit
          </button>

          <p className="mt-6 text-xs text-slate-400">
            Aucune carte bancaire requise. Places limitées ce mois-ci pour garantir un accompagnement de qualité.
          </p>
        </div>
      </div>
    </section>
  );
};