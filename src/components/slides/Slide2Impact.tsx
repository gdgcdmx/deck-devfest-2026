import React from 'react';
import { COMMUNITY_DATA } from '../../data/community';

export const Slide2Impact: React.FC = () => {
  return (
    <div className="w-full max-w-5xl space-y-8 py-4">
      {/* Section Header */}
      <div className="border-b border-slate-200 pb-4 text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Impacto Global, Alcance Comunitario
        </h2>
        <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-4xl leading-relaxed font-medium">
          DevFest es el evento insignia global de las comunidades tecnológicas de Google. Expertos, líderes de la industria y desarrolladores se reúnen para compartir conocimientos de vanguardia.
        </p>
      </div>

      {/* 3 Metric Cards - Exact Guadalajara Style */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {COMMUNITY_DATA.globalStats.map((stat, idx) => (
          <div
            key={idx}
            className={`clean-card p-6 sm:p-8 flex flex-col justify-between ${stat.color} transition-all hover:shadow-md`}
          >
            <div>
              <div className="text-5xl sm:text-6xl font-black text-slate-900 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-base sm:text-lg font-bold text-slate-800 mt-4 leading-snug">
                {stat.label}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              {stat.sublabel}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
