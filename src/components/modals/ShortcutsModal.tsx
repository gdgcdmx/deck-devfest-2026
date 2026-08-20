import React from 'react';
import { X, Keyboard, Compass } from 'lucide-react';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: '→ / Espacio / AvPág', description: 'Avanzar a la siguiente diapositiva' },
    { key: '← / RePág', description: 'Retroceder a la diapositiva anterior' },
    { key: '1 – 9', description: 'Saltar directamente a la diapositiva 1 a 9' },
    { key: 'Inicio / Fin', description: 'Ir a la primera o última diapositiva' },
    { key: 'G', description: 'Abrir el índice visual de todas las diapositivas' },
    { key: 'M', description: 'Alternar moneda entre USD ($) y MXN ($MXN)' },
    { key: 'F', description: 'Alternar modo pantalla completa' },
    { key: '?', description: 'Abrir este menú de atajos de teclado' },
    { key: 'Esc', description: 'Cerrar ventanas y modales activos' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
              <Keyboard className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Atajos de Teclado</h2>
              <p className="text-xs text-slate-500">Navegación profesional y fluida por la propuesta</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Shortcuts list */}
        <div className="divide-y divide-slate-100 my-4">
          {shortcuts.map((item, index) => (
            <div key={index} className="py-2.5 flex items-center justify-between">
              <span className="text-xs sm:text-sm text-slate-700">{item.description}</span>
              <kbd className="px-2.5 py-1 bg-slate-100 border border-slate-300 rounded-lg text-xs font-mono font-bold text-blue-700 shadow-2xs">
                {item.key}
              </kbd>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5 text-slate-600">
            <Compass className="w-4 h-4 text-emerald-600" /> Compatible con swipe táctil en móvil
          </span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
