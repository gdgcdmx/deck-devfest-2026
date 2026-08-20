import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { SLIDES_CONFIG } from '../../data/slides';

interface SlideOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onSelectSlide: (slideId: number) => void;
}

export const SlideOverviewModal: React.FC<SlideOverviewModalProps> = ({
  isOpen,
  onClose,
  currentSlide,
  onSelectSlide
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>Índice de Diapositivas • DevFest CDMX</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Haz clic en cualquier diapositiva para navegar inmediatamente o presiona <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-[10px] text-slate-600 font-mono">Esc</kbd> para cerrar.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid of slides */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 my-6 overflow-y-auto pr-1">
          {SLIDES_CONFIG.map((slide) => {
            const isCurrent = slide.id === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(slide.id);
                  onClose();
                }}
                className={`relative flex flex-col text-left p-4 rounded-xl border transition-all cursor-pointer group ${
                  isCurrent
                    ? 'bg-blue-50/80 border-blue-500 ring-2 ring-blue-500/20'
                    : 'bg-white border-slate-200 hover:border-slate-400 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded bg-slate-100 text-blue-600 border border-slate-200">
                    Slide {String(slide.id).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    {slide.category}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 mb-1">
                  {slide.title}
                </h3>
                
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed flex-1">
                  {slide.subtitle}
                </p>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-400 group-hover:text-blue-600">
                  <span>{isCurrent ? 'Diapositiva Actual' : 'Ir a diapositiva'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>GDG Ciudad de México • DevFest 2026</span>
          <span>9 Diapositivas</span>
        </div>
      </div>
    </div>
  );
};
