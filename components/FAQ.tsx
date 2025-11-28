import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Est-ce conforme aux règles de Google ?",
    answer: "Oui, absolument. Autotasq respecte strictement les directives de Google Business Profile. Nous sollicitons uniquement de vrais clients après leur achat ou service. Notre système optimise le contenu pour le SEO, mais chaque avis provient d'une expérience client authentique. Nous ne créons jamais de faux avis."
  },
  {
    question: "Les avis sont-ils de vrais clients ?",
    answer: "Oui, tous les avis proviennent de vos clients réels. Notre système envoie automatiquement des demandes d'avis par SMS ou QR code après chaque transaction. Le système Autotasq aide simplement vos clients à formuler leurs retours de manière optimisée pour le référencement local."
  },
  {
    question: "Comment le système optimise-t-il le SEO ?",
    answer: "Notre technologie analyse les mots-clés stratégiques de votre secteur et localité. Elle suggère aux clients des formulations qui incluent naturellement ces termes (ex: 'coupe moderne' plutôt que 'très bien'). Cela améliore votre visibilité sur les recherches spécifiques tout en restant authentique."
  },
  {
    question: "Combien de temps avant de voir des résultats ?",
    answer: "Les premiers avis arrivent généralement dans les 3-7 jours après l'activation. L'impact SEO sur votre positionnement Google Maps devient visible après 2-3 semaines avec au moins 5-10 nouveaux avis. Nos clients constatent en moyenne une amélioration de 40% de leur visibilité locale en 45 jours."
  },
  {
    question: "Dois-je faire quelque chose après l'inscription ?",
    answer: "Presque rien ! Après la configuration initiale de 5 minutes (connexion de votre compte Google Business), le système fonctionne en pilote automatique. Vous pouvez optionnellement personnaliser les messages SMS, mais ce n'est pas obligatoire. Notre système gère même les réponses aux avis automatiquement."
  },
  {
    question: "Que se passe-t-il après les 14 jours ?",
    answer: "À la fin de votre période d'essai, vous choisissez de continuer avec l'un de nos forfaits mensuels ou d'arrêter sans frais. Aucune carte bancaire n'est demandée pendant l'essai. Les 10 avis que vous aurez obtenus restent évidemment sur votre profil Google, même si vous n'abonnez pas."
  },
  {
    question: "Comment fonctionne le support 24/7 ?",
    answer: "Notre équipe est disponible par email, chat en direct et téléphone 7 jours sur 7. Pendant votre essai, vous bénéficiez d'un accompagnement prioritaire pour la configuration et toute question technique. Temps de réponse moyen : moins de 2 heures."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span className="text-xs text-blue-700 uppercase tracking-widest font-medium">Questions Fréquentes</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4">
            Vos Questions, Nos Réponses
          </h2>
          <p className="text-slate-600 text-lg">
            Tout ce que vous devez savoir avant de commencer
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-slate-900 font-medium pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
                style={{ overflow: 'hidden' }}
              >
                <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Vous avez une autre question ?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'auto' })}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 text-slate-700 rounded-full text-sm font-medium hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm"
            aria-label="Contacter le support"
          >
            <HelpCircle className="w-4 h-4" />
            Contactez notre équipe
          </button>
        </div>
      </div>
    </section>
  );
};
