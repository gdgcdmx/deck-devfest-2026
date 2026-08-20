import React from 'react';
import { Check } from 'lucide-react';
import { COMMUNITY_DATA } from '../../data/community';

export const Slide4Profiles: React.FC = () => {
  return (
    <div className="w-full max-w-5xl space-y-8 py-4">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4 text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Perfiles Técnicos de la Audiencia
        </h2>
        <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-3xl leading-relaxed font-medium">
          El 100% de la audiencia registrada corresponde a perfiles de ingeniería de software y TI activa.
        </p>
      </div>

      {/* Grid: Left Technical Roles & Right Key Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Left Card: Progress Bars */}
        <div className="md:col-span-6 clean-card p-6 sm:p-8 border-top-red flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-6 bg-red-500 rounded-full" />
              <h3 className="text-xl font-bold text-slate-900">
                Especialidades Técnicas
              </h3>
            </div>

            <div className="space-y-4">
              {COMMUNITY_DATA.technicalRoles.map((role, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                    <span className="text-slate-800 truncate pr-2">{role.label}</span>
                    <span className="font-mono font-bold text-slate-900">{role.percentage}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${role.color} rounded-full transition-all duration-500`}
                      style={{ width: `${role.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Key Pillars */}
        <div className="md:col-span-6 space-y-5 flex flex-col justify-center">
          <div className="clean-card p-6 border-accent-blue shadow-xs">
            <div className="flex items-start gap-3">
              <div className="p-1 rounded-full bg-blue-100 text-blue-600 mt-0.5 shrink-0">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Desarrollo Core & APIs
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Ingenieros de software generales, backend y fullstack listos para implementar tecnologías web y cloud en entornos de producción.
                </p>
              </div>
            </div>
          </div>

          <div className="clean-card p-6 border-accent-green shadow-xs">
            <div className="flex items-start gap-3">
              <div className="p-1 rounded-full bg-green-100 text-green-600 mt-0.5 shrink-0">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Especialidades Emergentes
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Fuerte presencia de ingenieros especializados en Inteligencia Artificial y Machine Learning (Gemini, Vertex AI) junto a DevOps y Ciberseguridad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
