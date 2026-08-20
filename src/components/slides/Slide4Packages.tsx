import React from 'react';
import { Check, Sparkles, Star, UserCheck } from 'lucide-react';
import type { Currency, SponsorTier } from '../../types';
import { SPONSOR_TIERS } from '../../data/tiers';

interface Slide4PackagesProps {
  currency: Currency;
  onSelectTier: (tierId: string) => void;
  onOpenSponsorModalWithTier: (tierId: string) => void;
}

export const Slide4Packages: React.FC<Slide4PackagesProps> = ({
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
      <div className="text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-3">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-xs font-bold mb-1.5">
            <span>Slide 04 • Paquetes Comerciales</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Paquetes Principales de Patrocinio
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            Estructura de 4 niveles adaptada a los objetivos estratégicos de tu empresa en DevFest CDMX.
          </p>
        </div>

        <div className="text-xs text-slate-400 self-center sm:self-auto font-mono bg-slate-900 px-3 py-1.5 rounded-lg border border-white/10">
          Precios en <span className="text-blue-400 font-bold">{currency}</span>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {SPONSOR_TIERS.map((tier) => {
          const isGold = tier.id === 'oro';
          const isPlatinum = tier.id === 'platino';

          return (
            <div
              key={tier.id}
              className={`relative rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 ${
                isGold
                  ? 'glass-card-glow-gold bg-gradient-to-b from-yellow-950/40 via-slate-900 to-slate-950 border-yellow-500/60 lg:-translate-y-2 shadow-2xl ring-1 ring-yellow-500/50'
                  : isPlatinum
                  ? 'bg-gradient-to-b from-blue-950/40 via-slate-900 to-slate-950 border border-blue-500/40 shadow-xl'
                  : 'bg-slate-900/80 border border-white/10 hover:border-slate-500 shadow-lg'
              }`}
            >
              {/* Featured Badge */}
              {isGold && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-lg flex items-center gap-1 whitespace-nowrap">
                  <Star className="w-3 h-3 fill-slate-950" />
                  <span>Nivel Recomendado</span>
                </div>
              )}

              {isPlatinum && tier.slotsLimit && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-600 text-white font-bold text-[10px] uppercase tracking-wider shadow-md whitespace-nowrap">
                  {tier.slotsLimit}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-bold font-mono px-2.5 py-0.5 rounded-full border ${
                      isGold
                        ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
                        : isPlatinum
                        ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                        : 'bg-slate-800 text-slate-300 border-white/10'
                    }`}
                  >
                    {tier.badge}
                  </span>

                  {tier.optInData && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1" title="Incluye base de datos de talento con CVs">
                      <UserCheck className="w-3 h-3" /> Opt-in Data
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-black text-white">{tier.name}</h3>

                {/* Price */}
                <div className="my-3">
                  <div className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight">
                    {formatPrice(tier)}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{tier.tagline}</div>
                </div>

                {/* Highlight Badge */}
                <div className={`p-2.5 rounded-xl border text-[11px] font-semibold mb-4 leading-snug ${
                  isGold
                    ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-200'
                    : isPlatinum
                    ? 'bg-blue-500/10 border-blue-500/30 text-blue-200'
                    : 'bg-slate-800/80 border-white/5 text-slate-300'
                }`}>
                  <span className="font-bold text-white block mb-0.5">Destacado:</span>
                  {tier.highlightBenefit}
                </div>

                {/* Features List */}
                <div className="space-y-2 text-xs border-t border-white/10 pt-3">
                  {tier.features.slice(0, 5).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-300">
                      <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                        isGold ? 'text-yellow-400 stroke-[3]' : 'text-emerald-400 stroke-[2.5]'
                      }`} />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                  {tier.features.length > 5 && (
                    <div className="text-[11px] text-slate-400 font-medium pl-5">
                      + {tier.features.length - 5} beneficios adicionales
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-5 pt-3 border-t border-white/10">
                <button
                  onClick={() => onOpenSponsorModalWithTier(tier.id)}
                  className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md ${
                    isGold
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-black shadow-yellow-500/20'
                      : isPlatinum
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-500/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-white/10'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Reservar Paquete</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
