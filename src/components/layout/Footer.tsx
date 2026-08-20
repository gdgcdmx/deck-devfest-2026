import React, { useState } from 'react';
import { Mail, Maximize2, Minimize2, Share2, Check, ArrowLeft, ArrowRight } from 'lucide-react';
import { COMMUNITY_DATA } from '../../data/community';
import { SLIDES_CONFIG } from '../../data/slides';

interface FooterProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onOpenSponsorModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentSlideInfo = SLIDES_CONFIG.find((s) => s.id === currentSlide) || SLIDES_CONFIG[0];
  const progressPercent = ((currentSlide) / totalSlides) * 100;

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 transition-all">
      {/* Top progress bar */}
      <div className="h-1 bg-slate-100">
        <div
          className="h-full bg-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="h-12 px-4 sm:px-6 flex items-center justify-between">
        {/* Left: Slide indicator & Title */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md">
            {String(currentSlide).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>
          <span className="text-xs font-semibold text-slate-700 hidden sm:inline">
            • {currentSlideInfo.title}
          </span>
          <span className="text-[11px] text-slate-400 hidden md:inline">
            (Navega con <kbd className="px-1 py-0.5 bg-slate-100 border border-slate-300 rounded text-[10px] text-slate-600 font-mono">←</kbd> <kbd className="px-1 py-0.5 bg-slate-100 border border-slate-300 rounded text-[10px] text-slate-600 font-mono">→</kbd>)
          </span>
        </div>

        {/* Center: Quick navigation arrows for mobile */}
        <div className="flex items-center gap-1 sm:hidden">
          <button
            onClick={onPrev}
            disabled={currentSlide === 1}
            className="p-1 rounded bg-slate-100 border border-slate-200 text-slate-700 disabled:opacity-30 cursor-pointer"
            title="Slide anterior"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides}
            className="p-1 rounded bg-slate-100 border border-slate-200 text-slate-700 disabled:opacity-30 cursor-pointer"
            title="Siguiente slide"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Community Branding & Actions */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${COMMUNITY_DATA.email}?subject=Propuesta%20de%20Patrocinio%20GDG%20CDMX`}
            className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-blue-600 font-medium transition-colors"
            title="Enviar correo a organizadores"
          >
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden sm:inline">{COMMUNITY_DATA.email}</span>
          </a>

          <div className="h-4 w-[1px] bg-slate-200 hidden sm:block" />

          {/* Share button */}
          <button
            onClick={handleShare}
            className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-all cursor-pointer"
            title="Copiar enlace directo"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>

          {/* Fullscreen button */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-all cursor-pointer hidden sm:block"
            title={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Google Developer Group logo badge */}
          <div className="hidden lg:flex items-center gap-1 text-[11px] font-semibold text-slate-600 pl-2 border-l border-slate-200">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="ml-1 text-slate-500">GDG Ciudad de México</span>
          </div>
        </div>
      </div>

      {/* Bottom Google 4-color accent strip */}
      <div className="h-1 w-full google-4-color-bar" />
    </footer>
  );
};
