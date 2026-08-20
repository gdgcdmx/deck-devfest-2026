import React, { useState } from 'react';
import { UserCheck, TrendingUp, Terminal, CheckCircle2, ArrowRight, Zap, Target } from 'lucide-react';
import { COMMUNITY_DATA } from '../../data/community';

interface Slide3WhySponsorProps {
  onNavigateToSlide: (slideId: number) => void;
}

export const Slide3WhySponsor: React.FC<Slide3WhySponsorProps> = ({ onNavigateToSlide }) => {
  const [activeTab, setActiveTab] = useState<string>('hiring');

  const pillars = COMMUNITY_DATA.sponsorshipReasons;
  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'hiring':
        return <UserCheck className="w-6 h-6" />;
      case 'brand':
        return <TrendingUp className="w-6 h-6" />;
      case 'product':
        return <Terminal className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  return (
    <div className="w-full max-w-6xl space-y-6 py-2 sm:py-4">
      {/* Section Header */}
      <div className="text-center sm:text-left border-b border-white/10 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold mb-2">
          <span>Slide 03 • Retorno de Inversión & Valor</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          ¿Por qué Patrocinar DevFest CDMX?
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
          Tres pilares estratégicos diseñados para maximizar el ROI de tu empresa en captación de talento, posicionamiento de marca y adopción tecnológica.
        </p>
      </div>

      {/* 3 Pillar Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        {pillars.map((pillar) => {
          const isActive = pillar.id === activeTab;
          return (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(pillar.id)}
              className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                isActive
                  ? 'bg-slate-900 border-blue-500 shadow-xl shadow-blue-500/15 ring-2 ring-blue-500/30'
                  : 'bg-slate-900/50 border-white/10 hover:border-slate-600 hover:bg-slate-900/80'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-yellow-400 to-green-500" />
              )}
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2.5 rounded-xl border ${pillar.accent}`}>
                  {getIcon(pillar.id)}
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white">
                    {pillar.title}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-slate-400 line-clamp-2">
                {pillar.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Interactive Details Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-white/15 rounded-2xl p-5 sm:p-8 backdrop-blur-xl shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
              <Target className="w-4 h-4" />
              <span>Pilar Estratégico Seleccionado</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {currentPillar.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              {currentPillar.description}
            </p>
          </div>

          <button
            onClick={() => onNavigateToSlide(4)}
            className="self-start lg:self-center px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-blue-500/25 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Ver Paquetes Relacionados</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6">
          {currentPillar.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-white/5 hover:border-white/15 transition-all"
            >
              <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
