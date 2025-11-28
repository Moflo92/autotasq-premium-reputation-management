import React, { useEffect } from 'react';
import { Lock, Shield, CheckCircle2, Calendar } from 'lucide-react';

declare global {
  interface Window {
    Cal: any;
  }
}

export const Contact: React.FC = () => {
  useEffect(() => {
    // Initialize Cal.com when component mounts
    if (typeof window !== 'undefined' && window.Cal) {
      window.Cal('init', { origin: 'https://app.cal.com' });
    }
  }, []);

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
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-slate-900 mb-4">Démarrer Maintenant</h2>
          <p className="text-slate-600">Réservez votre appel de découverte gratuit de 30 minutes et découvrez comment Autotasq peut transformer votre réputation en ligne.</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Appel de Découverte</h3>
                <p className="text-sm text-slate-500">30 minutes • Gratuit • Sans engagement</p>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Analyse personnalisée de votre réputation actuelle</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Démonstration du système Autotasq en action</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Réponses à toutes vos questions</span>
              </li>
            </ul>

            <button
              onClick={openCalModal}
              className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center gap-2"
              aria-label="Réserver un appel gratuit"
            >
              <Calendar className="w-5 h-5" />
              Réserver Mon Appel Gratuit
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-600" />
              <span>Appel 100% confidentiel</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Gratuit</span>
            </div>
          </div>
          <p className="text-center text-xs text-slate-400 mt-4">
            Réservez votre créneau en quelques clics. Annulation possible à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
};