import React, { useState } from 'react';
import { generateSEOExample } from '../services/geminiService';
import { Bot, Sparkles, ArrowRight, Loader2 } from 'lucide-react';

export const GeminiDemo: React.FC = () => {
  const [businessType, setBusinessType] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ weakReview: string, optimizedReview: string, explanation: string } | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessType || !city) return;

    setLoading(true);
    setResult(null);
    try {
      const jsonStr = await generateSEOExample(businessType, city);
      const parsed = JSON.parse(jsonStr);
      setResult(parsed);
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue lors de la génération. Vérifiez votre clé API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Input Side */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                <Sparkles size={20} />
              </div>
              <h2 className="text-3xl font-serif text-slate-900">Simulateur SEO</h2>
            </div>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              Voyez la différence entre un avis standard et un avis optimisé par la technologie <strong>Autotasq</strong>. 
              Nos suggestions intelligentes poussent vos clients à utiliser les mots-clés que Google adore.
            </p>

            <form onSubmit={handleGenerate} className="space-y-6 max-w-md">
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2 font-bold">Votre Secteur d'activité</label>
                <input 
                  type="text" 
                  placeholder="ex: Restaurant Italien, Plombier, Dentiste..." 
                  className="w-full bg-white border border-slate-300 rounded-lg p-4 text-slate-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2 font-bold">Votre Ville</label>
                <input 
                  type="text" 
                  placeholder="ex: Paris, Lyon, Bordeaux..." 
                  className="w-full bg-white border border-slate-300 rounded-lg p-4 text-slate-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <button 
                type="submit" 
                disabled={loading || !businessType || !city}
                className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg"
              >
                {loading ? <Loader2 className="animate-spin" /> : <>Générer la Comparaison <ArrowRight size={18} /></>}
              </button>
            </form>
          </div>

          {/* Result Side */}
          <div className="glass-panel bg-white p-8 rounded-2xl min-h-[400px] flex flex-col justify-center border border-slate-200 shadow-xl shadow-slate-200/50 relative">
             {!result && !loading && (
               <div className="text-center text-slate-400">
                 <Bot size={48} className="mx-auto mb-4 opacity-50" />
                 <p>Entrez vos détails pour voir la magie de l'IA opérer.</p>
               </div>
             )}

             {loading && (
               <div className="text-center text-blue-600 animate-pulse">
                 <div className="w-16 h-1 bg-blue-200 rounded-full mx-auto mb-4"></div>
                 <p className="text-sm font-medium">Analyse des mots-clés locaux...</p>
                 <p className="text-xs text-slate-400 mt-2">Powered by Gemini 2.5 Flash</p>
               </div>
             )}

             {result && (
               <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                 
                 {/* Weak Review */}
                 <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-300">
                   <div className="text-xs text-slate-500 uppercase tracking-widest mb-2 font-bold">Avis Standard (Faible Impact)</div>
                   <p className="text-slate-600 italic">"{result.weakReview}"</p>
                 </div>

                 {/* Strong Review */}
                 <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
                   <div className="text-xs text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-2 font-bold">
                     <Sparkles size={14} /> Avis Optimisé Autotasq
                   </div>
                   <p className="text-slate-900 font-medium text-lg">"{result.optimizedReview}"</p>
                 </div>

                 <div className="mt-4 pt-4 border-t border-slate-100">
                   <p className="text-sm text-slate-600"><span className="text-blue-600 font-bold">L'avis de l'Expert :</span> {result.explanation}</p>
                 </div>

               </div>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};