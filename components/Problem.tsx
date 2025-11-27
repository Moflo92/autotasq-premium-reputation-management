import React from 'react';
import { MapPin, TrendingUp, Users, Search } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8">
              Le Potentiel Inexploité
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Chaque jour, des clients potentiels recherchent votre service sur Google Maps.
              Ils comparent votre entreprise avec celle de vos concurrents avant de faire leur choix.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Les entreprises avec <span className="text-slate-900 font-bold">4.8+ étoiles et des avis récents</span> captent naturellement plus d'attention.
              <br/>
              <span className="text-blue-600 font-medium block mt-2">C'est une opportunité mesurable d'augmenter votre visibilité.</span>
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-medium mb-1">Opportunité de Croissance</h4>
                  <p className="text-sm text-slate-500">Google Maps privilégie les entreprises avec des avis récents et fréquents. Vous pouvez améliorer votre positionnement.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-medium mb-1">Facteur de Confiance</h4>
                  <p className="text-sm text-slate-500">78% des consommateurs font autant confiance aux avis qu'aux recommandations personnelles. C'est un levier puissant.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl blur-3xl opacity-50" />
            <div className="glass-panel p-8 rounded-2xl border border-slate-200 relative z-10 bg-white/80">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="ml-auto bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-500 flex items-center gap-2 border border-slate-200">
                  <Search size={12} /> google maps
                </div>
              </div>

              {/* Mock Google Maps Result - Competitor */}
              <div className="mb-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-slate-900 font-bold">Concurrent Direct</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-amber-400 text-xs">★★★★★</span>
                      <span className="text-slate-500 text-xs">(128 avis)</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                    <MapPin size={16} />
                  </div>
                </div>
                <div className="mt-2 text-xs text-emerald-600 font-medium">Ouvert • Classé #1</div>
              </div>

              {/* Mock Google Maps Result - User */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-300 opacity-70">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-slate-500 font-medium">Votre Entreprise</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-slate-400 text-xs">★★★★☆</span>
                      <span className="text-slate-400 text-xs">(12 avis)</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
                    <MapPin size={16} />
                  </div>
                </div>
                <div className="mt-2 text-xs text-slate-400">7ème position • Potentiel d'amélioration</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};