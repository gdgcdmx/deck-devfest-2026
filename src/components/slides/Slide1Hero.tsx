import React from 'react';
import { ArrowRight, Sparkles, Mail, MapPin, Calendar, Users } from 'lucide-react';
import { COMMUNITY_DATA } from '../../data/community';

interface Slide1HeroProps {
  onNext: () => void;
  onOpenSponsorModal: () => void;
  onNavigateToSlide: (slideId: number) => void;
}

export const Slide1Hero: React.FC<Slide1HeroProps> = ({
  onNext,
  onNavigateToSlide
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center max-w-5xl py-4">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 shadow-xs mb-6">
        <span>Propuesta de Patrocinio</span>
        <span className="text-blue-300">•</span>
        <span className="text-blue-800">DevFest 2026</span>
      </div>

      {/* Main Title - Clean & Sharp Google DevFest style */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.08]">
        DevFest <span className="text-[#4285F4]">Ciudad</span> <span className="text-[#EA4335]">de</span> <span className="text-[#FBBC05]">México</span> <span className="text-[#34A853]">2026</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-5 text-lg sm:text-2xl text-slate-600 max-w-3xl font-medium leading-relaxed">
        Conecta con la comunidad técnica líder de la región y potencia la visibilidad de tu marca frente a ingenieros de software, desarrolladores y líderes de TI.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-8 w-full sm:w-auto">
        <button
          onClick={onNext}
          className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <span>Explorar Presentación</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => onNavigateToSlide(7)}
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm sm:text-base shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Ver Paquetes de Patrocinio</span>
        </button>
      </div>

      {/* Footer Metadata Grid - Exact Guadalajara style */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 w-full pt-6 border-t border-slate-200 text-left">
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            Organiza
          </div>
          <div className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-600" />
            <span>GDG Ciudad de México</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            Ubicación / Fecha
          </div>
          <div className="text-base font-bold text-slate-900 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-red-500" />
            <span>Noviembre, 2026 (CDMX)</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            Contacto Sponsors
          </div>
          <a
            href={`mailto:${COMMUNITY_DATA.email}`}
            className="text-base font-bold text-blue-600 hover:underline flex items-center gap-2 truncate"
          >
            <Mail className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="truncate">{COMMUNITY_DATA.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
