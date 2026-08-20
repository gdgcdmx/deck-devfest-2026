import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import type { Currency, SponsorTier } from '../../types';
import { SPONSOR_TIERS } from '../../data/tiers';

interface Slide7PackagesProps {
  currency: Currency;
  onSelectTier: (tierId: string) => void;
  onOpenSponsorModalWithTier: (tierId: string) => void;
}

export const Slide7Packages: React.FC<Slide7PackagesProps> = ({
  currency,
  onOpenSponsorModalWithTier
}) => {
  const formatPrice = (tier: SponsorTier) => {
    if (currency === 'USD') {
      return tier.priceLabelUSD;
    }
    return tier.priceLabelMXN;
  };

  return (
    <div className="w-full max-w-7xl space-y-5 py-2 sm:py-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 pb-3 text-left">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Paquetes de Patrocinio
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-1">
            Estructura comercial de 5 niveles concisos diseñados para maximizar el retorno de inversión de tu empresa en DevFest CDMX.
          </p>
        </div>

        <div className="text-xs text-slate-600 font-mono bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto">
          Precios en <strong className="text-blue-600 font-bold">{currency}</strong> (sin IVA)
        </div>
      </div>

      {/* 5 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3.5 items-stretch">
        {SPONSOR_TIERS.map((tier) => {
          const isImpact = tier.id === 'impact';
          const isImmersive = tier.id === 'immersive';

          return (
            <div
              key={tier.id}
              className={`clean-card p-4 flex flex-col justify-between transition-all ${
                isImmersive
                  ? 'border-2 border-blue-500 bg-blue-50/20 shadow-md'
                  : isImpact
                  ? 'border-2 border-amber-500 bg-amber-50/20 shadow-md'
                  : 'border border-slate-200 hover:border-slate-400'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isImmersive
                        ? 'bg-blue-600 text-white'
                        : isImpact
                        ? 'bg-amber-500 text-slate-950 font-black'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {tier.name}
                  </span>

                  {tier.isPopular && (
                    <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-500 text-slate-950">
                      Popular
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="my-2 text-left">
                  <div className="text-xl font-black font-mono text-slate-900 tracking-tight">
                    {formatPrice(tier)}
                  </div>
                  {tier.slotsLimit && (
                    <div className="text-[10px] text-amber-700 font-bold mt-0.5">
                      ({tier.slotsLimit})
                    </div>
                  )}
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {tier.tagline}
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-1.5 text-[11px] text-slate-700 border-t border-slate-100 pt-2.5 mt-2 text-left">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0 stroke-[2.5]" />
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-4 pt-2.5 border-t border-slate-100">
                <button
                  onClick={() => onOpenSponsorModalWithTier(tier.id)}
                  className={`w-full py-2 px-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-1 transition-all cursor-pointer ${
                    isImmersive
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs'
                      : isImpact
                      ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-black shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200'
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Cotizar</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
