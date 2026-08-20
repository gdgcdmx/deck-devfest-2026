import React, { useState } from 'react';
import { HeartHandshake, UtensilsCrossed, ShoppingBag, Tag, Coffee, Sparkles, Check, Calculator } from 'lucide-react';
import type { Currency, AddOnExperience } from '../../types';
import { SPONSOR_ADD_ONS } from '../../data/addOns';
import { BudgetCalculator } from '../interactive/BudgetCalculator';

interface Slide5AddOnsProps {
  currency: Currency;
  onOpenSponsorModalWithConfig: (tierId: string, addOnIds: string[]) => void;
}

export const Slide5AddOns: React.FC<Slide5AddOnsProps> = ({
  currency,
  onOpenSponsorModalWithConfig
}) => {
  const [viewMode, setViewMode] = useState<'cards' | 'calculator'>('cards');

  const getAddOnIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-pink-400" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-amber-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-blue-400" />;
      case 'Tag':
        return <Tag className="w-5 h-5 text-emerald-400" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-orange-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-yellow-400" />;
    }
  };

  const formatPrice = (addon: AddOnExperience) => {
    return currency === 'USD'
      ? `$${addon.priceUSD.toLocaleString('en-US')} USD`
      : `$${addon.priceMXN.toLocaleString('es-MX')} MXN`;
  };

  return (
    <div className="w-full max-w-7xl space-y-5 py-2 sm:py-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/10 pb-3">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-bold mb-1.5">
            <span>Slide 05 • Experiencias Modulares</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Sponsorship Add-Ons & Sabor Local CDMX
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            Oportunidades de alto impacto inspiradas en conferencias internacionales con el auténtico toque y calidez de la Ciudad de México.
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-white/10 self-start sm:self-auto">
          <button
            onClick={() => setViewMode('cards')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              viewMode === 'cards'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Ver Catálogo
          </button>
          <button
            onClick={() => setViewMode('calculator')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'calculator'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador de Presupuesto</span>
          </button>
        </div>
      </div>

      {/* Mode 1: Cards View */}
      {viewMode === 'cards' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SPONSOR_ADD_ONS.map((addon) => (
            <div
              key={addon.id}
              className="bg-slate-900/80 border border-white/10 hover:border-slate-500 rounded-2xl p-5 flex flex-col justify-between transition-all backdrop-blur-xl shadow-xl hover:translate-y-[-2px]"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-white/10">
                    {getAddOnIcon(addon.iconName)}
                  </div>
                  {addon.badge && (
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 border border-white/10 text-slate-300">
                      {addon.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-1">
                  {addon.name}
                </h3>
                <p className="text-xs text-slate-400 mb-3">
                  {addon.subtitle}
                </p>

                {/* Price */}
                <div className="text-xl font-mono font-black text-emerald-400 mb-3">
                  {formatPrice(addon)}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {addon.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-1.5 border-t border-white/5 pt-3 text-[11px] text-slate-400">
                  <span className="font-bold text-slate-300 block mb-1">Incluye:</span>
                  {addon.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3 h-3 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-5 pt-3 border-t border-white/10">
                <button
                  onClick={() => onOpenSponsorModalWithConfig('oro', [addon.id])}
                  className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/10 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3 h-3 text-yellow-400" />
                  <span>Agregar a Cotización</span>
                </button>
              </div>
            </div>
          ))}

          {/* 6th Card: Custom Experience Banner */}
          <div className="bg-gradient-to-br from-blue-950/40 via-purple-950/20 to-slate-900 border border-blue-500/30 rounded-2xl p-5 flex flex-col justify-between backdrop-blur-xl shadow-xl">
            <div>
              <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 w-fit mb-3">
                <Sparkles className="w-5 h-5 text-yellow-300" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                ¿Tienes una idea de activación personalizada?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mt-2">
                Hackathons relámpago, escape rooms de código, retos de IA generativa con Gemini, podcasts en vivo en la sede o barras de coctelería de autor.
              </p>
              <p className="text-xs text-blue-400 font-medium mt-3">
                Diseñamos experiencias a la medida para conectar con la cultura de tu equipo.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10">
              <button
                onClick={() => onOpenSponsorModalWithConfig('oro', [])}
                className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Proponer Activación Personalizada
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Mode 2: Interactive Budget Calculator */
        <BudgetCalculator
          currency={currency}
          onOpenSponsorModalWithConfig={onOpenSponsorModalWithConfig}
        />
      )}
    </div>
  );
};
