import React from 'react';
import { Trophy, Magnet, Sparkles } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Trophy className="text-amber-500" size={32} />,
      title: "Domination Locale",
      desc: "L'algorithme de Google favorise la fraîcheur et la pertinence. En générant un flux régulier d'avis authentiques et bien formulés, nous propulsons votre fiche en haut des résultats Maps."
    },
    {
      icon: <Magnet className="text-blue-500" size={32} />,
      title: "Attraction Magnétique",
      desc: "Les consommateurs jugent en une seconde. Avec une note parfaite et des avis élogieux, vous ne leur laissez pas le choix : vous devenez l'option évidente face à vos concurrents."
    },
    {
      icon: <Sparkles className="text-indigo-500" size={32} />,
      title: "SEO Sémantique",
      desc: "Ce ne sont pas juste des étoiles. Les avis collectés contiennent naturellement les termes que vos clients recherchent (ex: \"meilleur dentiste urgence\"), renforçant votre visibilité locale de manière organique."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6">Pourquoi Autotasq Change Tout</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Ne jouez plus avec les règles du hasard. Prenez le contrôle scientifique de votre image en ligne.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl card-hover border border-slate-100 shadow-xl shadow-slate-200/50 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl text-slate-900 font-bold mb-4">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};