import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-900 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
          <span className="text-slate-900 font-bold font-serif italic text-xs">a</span>
        </div>
        <span className="text-lg font-serif tracking-wider text-white">autotasq</span>
      </div>
      <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Autotasq. Tous droits réservés.</p>
    </footer>
  );
};