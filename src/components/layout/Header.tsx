import React from 'react';
import { Sparkles, Grid3X3, HelpCircle, DollarSign } from 'lucide-react';
import type { Currency } from '../../types';
import { SLIDES_CONFIG } from '../../data/slides';

interface HeaderProps {
  currentSlide: number;
  onNavigate: (slideId: number) => void;
  currency: Currency;
  onToggleCurrency: () => void;
  onOpenOverview: () => void;
  onOpenShortcuts: () => void;
  onOpenSponsorModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSlide,
  onNavigate,
  currency,
  onToggleCurrency,
  onOpenOverview,
  onOpenShortcuts,
  onOpenSponsorModal
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-200 shadow-sm transition-all">
      {/* Top Google 4-color accent strip */}
      <div className="h-1.5 w-full google-4-color-bar" />

      {/* Main Header Row */}
      <div className="h-14 px-4 sm:px-6 flex items-center justify-between">
        {/* Brand & Community Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate(1)}
            className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
            title="Ir a la portada"
          >
            {/* Google 4-color brackets */}
            <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center p-1 shadow-xs group-hover:border-blue-400 transition-all">
              <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
                <path d="M7 8L3 12L7 16" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17 8L21 12L17 16" stroke="#EA4335" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 17L14 7" stroke="#FBBC05" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  GDG Ciudad de México
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                  DevFest 2026
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Currency Switcher */}
          <button
            onClick={onToggleCurrency}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 transition-all cursor-pointer"
            title={`Moneda actual: ${currency}. Clic para cambiar a ${currency === 'USD' ? 'MXN' : 'USD'}`}
          >
            <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
            <span>{currency}</span>
          </button>

          {/* Slides Grid Overview Button */}
          <button
            onClick={onOpenOverview}
            className="p-1.5 sm:px-2.5 sm:py-1.5 text-xs font-medium rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 transition-all flex items-center gap-1.5 cursor-pointer"
            title="Ver índice de diapositivas (Tecla G)"
          >
            <Grid3X3 className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline">Índice</span>
          </button>

          {/* Keyboard Shortcuts Help */}
          <button
            onClick={onOpenShortcuts}
            className="p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg border border-transparent transition-all cursor-pointer hidden md:flex items-center justify-center"
            title="Atajos de teclado (Tecla ?)"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* Sponsor CTA Button */}
          <button
            onClick={onOpenSponsorModal}
            className="relative inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>Ser Patrocinador</span>
          </button>
        </div>
      </div>

      {/* Second Row: Dedicated Clean Sub-Navbar */}
      <div className="border-t border-slate-100 bg-slate-50 px-4 py-1.5 overflow-x-auto no-scrollbar flex items-center justify-start md:justify-center gap-1.5">
        {SLIDES_CONFIG.map((slide) => {
          const isActive = slide.id === currentSlide;
          return (
            <button
              key={slide.id}
              onClick={() => onNavigate(slide.id)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
              title={slide.subtitle}
            >
              <span className={`font-mono text-[10px] ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                {String(slide.id).padStart(2, '0')}.
              </span>
              <span>{slide.title}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
