import React from 'react';
import { Smartphone, Mail } from 'lucide-react';
import { COMMUNITY_DATA } from '../../data/community';

export const Slide6Channels: React.FC = () => {
  return (
    <div className="w-full max-w-5xl space-y-8 py-4">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4 text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Canales de Difusión y ROI de Marca
        </h2>
        <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-3xl leading-relaxed font-medium">
          Aseguramos la máxima exposición visual para patrocinadores a través de nuestros canales digitales oficiales y el boca a boca institucional.
        </p>
      </div>

      {/* Grid: Left Channels List & Right Progress Bars */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Left Side */}
        <div className="md:col-span-5 space-y-4 flex flex-col justify-center">
          <div className="clean-card p-5 border-l-4 border-blue-500 shadow-xs">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Redes Sociales
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Impacto visual constante en Instagram, LinkedIn, X y la plataforma oficial de Meetup.
                </p>
              </div>
            </div>
          </div>

          <div className="clean-card p-5 border-l-4 border-red-500 shadow-xs">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-red-50 text-red-600 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Boletín del GDG CDMX
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Acceso a la base de contactos de más de 4,000 miembros a través de campañas de e-mail marketing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card: Progress Bars */}
        <div className="md:col-span-7 clean-card p-6 sm:p-8 border-top-green flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-6 bg-green-500 rounded-full" />
              <h3 className="text-xl font-bold text-slate-900">
                Eficiencia de Canales de Difusión
              </h3>
            </div>

            <div className="space-y-5">
              {COMMUNITY_DATA.channelStats.map((channel, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                    <span className="text-slate-800">{channel.label}</span>
                    <span className="font-mono font-bold text-slate-900">{channel.percentage}%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${channel.color} rounded-full transition-all duration-500`}
                      style={{ width: `${channel.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
            Medición de alcance y engagement en campañas anteriores de GDG CDMX.
          </div>
        </div>
      </div>
    </div>
  );
};
