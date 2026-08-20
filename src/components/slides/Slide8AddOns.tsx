import React from 'react';
import { HeartHandshake, UtensilsCrossed, ShoppingBag, Tag, Coffee, Droplets, Sparkles, Check } from 'lucide-react';
import type { Currency, AddOnExperience } from '../../types';
import { SPONSOR_ADD_ONS } from '../../data/addOns';

interface Slide8AddOnsProps {
  currency: Currency;
  onOpenSponsorModalWithConfig: (tierId: string, addOnIds: string[]) => void;
}

export const Slide8AddOns: React.FC<Slide8AddOnsProps> = ({
  currency,
  onOpenSponsorModalWithConfig
}) => {
  const getAddOnIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-red-500" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-blue-500" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-amber-500" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-amber-600" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-cyan-500" />;
      case 'Tag':
        return <Tag className="w-5 h-5 text-green-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-yellow-500" />;
    }
  };

  const formatPrice = (addon: AddOnExperience) => {
    return currency === 'USD'
      ? `$${addon.priceUSD.toLocaleString('en-US')} USD`
      : `$${addon.priceMXN.toLocaleString('es-MX')} MXN`;
  };

  return (
    <div className="w-full max-w-6xl space-y-5 py-2 sm:py-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 pb-3 text-left">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sponsorships Add-Ons
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-1">
            Oportunidades modulares de marca y experiencias gastronómicas con sabor local para complementar tu patrocinio.
          </p>
        </div>

        <div className="text-xs text-slate-500 font-medium">
          Selecciona add-ons individuales para tu propuesta
        </div>
      </div>

      {/* Grid of 6 Add-On Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
        {SPONSOR_ADD_ONS.map((addon) => (
          <div
            key={addon.id}
            className={`clean-card p-5 flex flex-col justify-between ${addon.color} shadow-xs hover:shadow-md transition-all`}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                  {getAddOnIcon(addon.iconName)}
                </div>
                {addon.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {addon.badge}
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-0.5">
                {addon.name}
              </h3>
              <div className="text-lg font-black font-mono text-blue-600 mb-2">
                {formatPrice(addon)}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {addon.description}
              </p>

              {/* Deliverables */}
              <div className="space-y-1 border-t border-slate-100 pt-2.5 text-[11px] text-slate-600">
                {addon.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <Check className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0 stroke-[2.5]" />
                    <span className="leading-tight">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="mt-4 pt-2.5 border-t border-slate-100">
              <button
                onClick={() => onOpenSponsorModalWithConfig('impact', [addon.id])}
                className="w-full py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
              >
                Agregar a Cotización
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
