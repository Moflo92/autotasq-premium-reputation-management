import React from 'react';
import { Lock, Shield, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-slate-900 mb-4">Démarrer Maintenant</h2>
          <p className="text-slate-600">Remplissez ce formulaire pour activer votre période d'essai de 14 jours.</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Prénom"
              autoComplete="given-name"
              aria-label="Prénom"
              className="w-full bg-white border border-slate-300 rounded-lg p-4 text-slate-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
              required
            />
            <input
              type="text"
              placeholder="Nom"
              autoComplete="family-name"
              aria-label="Nom de famille"
              className="w-full bg-white border border-slate-300 rounded-lg p-4 text-slate-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email Professionnel"
            autoComplete="email"
            aria-label="Adresse email professionnelle"
            className="w-full bg-white border border-slate-300 rounded-lg p-4 text-slate-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
            required
          />
          <input
            type="text"
            placeholder="Nom de l'entreprise"
            autoComplete="organization"
            aria-label="Nom de votre entreprise"
            className="w-full bg-white border border-slate-300 rounded-lg p-4 text-slate-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
            required
          />
          <button
            type="submit"
            className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors mt-4 shadow-lg"
            aria-label="Valider l'inscription"
          >
            Démarrer Ma Période Gratuite
          </button>
        </form>

        {/* Trust Badges */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-600" />
              <span>Données chiffrées SSL</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>Conforme RGPD</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Paiement sécurisé</span>
            </div>
          </div>
          <p className="text-center text-xs text-slate-400 mt-4">
            Vos informations sont protégées et ne seront jamais partagées.
          </p>
        </div>
      </div>
    </section>
  );
};