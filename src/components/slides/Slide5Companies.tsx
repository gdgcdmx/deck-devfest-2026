import React from 'react';
import { COMMUNITY_DATA } from '../../data/community';

export const Slide5Companies: React.FC = () => {
  const getCompanyBorder = (idx: number) => {
    const borders = [
      'border-blue-400 text-blue-700',
      'border-red-400 text-red-700',
      'border-amber-400 text-amber-700',
      'border-green-400 text-green-700'
    ];
    return borders[idx % borders.length];
  };

  return (
    <div className="w-full max-w-5xl space-y-8 py-4">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4 text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Empresas e Instituciones con Presencia
        </h2>
        <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-4xl leading-relaxed font-medium">
          Nuestra comunidad integra profesionales de corporaciones globales líderes del hub tecnológico de la Ciudad de México y las universidades de mayor prestigio.
        </p>
      </div>

      {/* Grid of Company Badges - Exact Guadalajara style */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {COMMUNITY_DATA.companies.map((company, idx) => (
          <div
            key={idx}
            className={`py-3.5 px-4 rounded-2xl bg-white border-2 text-center shadow-2xs font-extrabold text-sm sm:text-base ${getCompanyBorder(idx)} hover:scale-105 transition-all`}
          >
            {company.name}
          </div>
        ))}
      </div>

      {/* Talent & Research Box - Exact Guadalajara style */}
      <div className="clean-card p-6 sm:p-7 border-l-4 border-amber-500 bg-amber-50/40">
        <h4 className="text-base font-bold text-amber-800 mb-1">
          Semilleros de Talento e Investigación
        </h4>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Alta concentración de egresados y estudiantes avanzados de Ingeniería en Computación y afines provenientes de la{' '}
          <strong className="text-blue-700 font-bold">Universidad Nacional Autónoma de México (UNAM)</strong>,{' '}
          <strong className="text-red-700 font-bold">Instituto Politécnico Nacional (IPN)</strong>,{' '}
          <strong className="text-blue-800 font-bold">Tecnológico de Monterrey</strong>,{' '}
          <strong className="text-slate-900 font-bold">UAM</strong> e{' '}
          <strong className="text-emerald-700 font-bold">ITAM</strong>.
        </p>
      </div>
    </div>
  );
};
