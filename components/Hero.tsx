import React from 'react';
import { ArrowRight, Star, Shield, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-light">
      {/* Background Ambience - Adjusted for light theme */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[100px]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-slate-200 shadow-sm">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-xs text-slate-600 uppercase tracking-widest font-medium">Le Futur de la Réputation</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-sans font-medium text-slate-900 mb-8 leading-[0.9] tracking-tight">
          Votre Réputation <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Amplifiée.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Obtenez des avis Google 5 étoiles optimisés pour le SEO sans lever le petit doigt.
          Pendant que d'autres négligent leur réputation en ligne, construisez la vôtre stratégiquement avec notre système.
        </p>

        {/* Social Proof & Trust Badges */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white" />
            </div>
            <span className="font-medium">Rejoint par <span className="text-slate-900 font-bold">287+</span> entreprises locales</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200">
              <Shield className="w-3.5 h-3.5 text-blue-600" />
              <span>Conforme RGPD</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              <span>API Google Certifiée</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Satisfaction 4.9/5</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'auto' })}
                className="group relative px-8 py-4 bg-slate-900 text-white rounded-full text-sm font-bold tracking-wide overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl shadow-slate-900/20"
                aria-label="Démarrer l'audit gratuit"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Démarrer Mon Audit Gratuit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <span className="text-xs text-slate-500">Configuration 5 min · Aucune carte requise</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};