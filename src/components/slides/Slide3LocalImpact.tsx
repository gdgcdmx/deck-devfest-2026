import React from 'react';
import { COMMUNITY_DATA } from '../../data/community';

export const Slide3LocalImpact: React.FC = () => {
  return (
    <div className="w-full max-w-5xl space-y-8 py-4">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4 text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Presencia Local en Ciudad de México
        </h2>
        <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-3xl leading-relaxed font-medium">
          El DevFest Ciudad de México se consolida como uno de los hubs de talento tecnológico y de ingeniería de software más dinámicos de México.
        </p>
      </div>

      {/* Main Grid: Left Big Metric & Right Experience Progress Bars */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Left Card */}
        <div className="md:col-span-5 clean-card p-6 sm:p-8 border-top-blue flex flex-col justify-between shadow-xs">
          <div>
            <div className="text-5xl sm:text-6xl font-black text-[#4285F4] font-mono tracking-tight">
              +4,071
            </div>
            <div className="text-lg font-bold text-slate-800 mt-4 leading-snug">
              Profesionales Registrados en la Comunidad
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 mt-6 leading-relaxed">
            Una base cualificada de ingenieros de software, directores técnicos y especialistas en la Ciudad de México interesados en nuevas herramientas.
          </p>
        </div>

        {/* Right Card: Experience Progress Bars */}
        <div className="md:col-span-7 clean-card p-6 sm:p-8 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
              <h3 className="text-xl font-bold text-slate-900">
                Años de Experiencia en la Industria
              </h3>
            </div>

            <div className="space-y-5">
              {COMMUNITY_DATA.experienceStats.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                    <span className="text-slate-800">{item.label}</span>
                    <span className={`font-mono font-bold ${item.textCol}`}>{item.percentage}%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-500`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
            Fuente: Métricas y registros oficiales de la plataforma GDG Community CDMX.
          </div>
        </div>
      </div>
    </div>
  );
};
