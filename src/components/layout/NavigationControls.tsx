import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SLIDES_CONFIG } from '../../data/slides';

interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onNavigate: (slideId: number) => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onNavigate
}) => {
  return (
    <>
      {/* Lateral Previous Button */}
      {currentSlide > 1 && (
        <button
          onClick={onPrev}
          aria-label="Diapositiva anterior"
          className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 hover:bg-white border border-slate-200 text-slate-700 hover:text-blue-600 backdrop-blur-md shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer hidden md:flex"
          title="Diapositiva anterior (Flecha Izquierda)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Lateral Next Button */}
      {currentSlide < totalSlides && (
        <button
          onClick={onNext}
          aria-label="Siguiente diapositiva"
          className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 hover:bg-white border border-slate-200 text-slate-700 hover:text-blue-600 backdrop-blur-md shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer hidden md:flex group"
          title="Siguiente diapositiva (Flecha Derecha)"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}

      {/* Floating Bottom Dot Indicators */}
      <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-30 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200 backdrop-blur-md shadow-md">
        {SLIDES_CONFIG.map((slide) => {
          const isActive = slide.id === currentSlide;
          return (
            <button
              key={slide.id}
              onClick={() => onNavigate(slide.id)}
              className="group relative p-1 focus:outline-none cursor-pointer"
              title={`${slide.id}. ${slide.title}`}
            >
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-7 bg-blue-600 shadow-xs'
                    : 'w-2 bg-slate-300 hover:bg-slate-400 hover:w-3'
                }`}
              />
              
              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block pointer-events-none whitespace-nowrap">
                <div className="bg-slate-900 text-white text-[11px] font-medium px-2.5 py-1 rounded-md shadow-md">
                  {slide.id}. {slide.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
};
