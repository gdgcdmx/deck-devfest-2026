import React from 'react';
import { Check, X, Sparkles, Star } from 'lucide-react';
import type { Currency } from '../../types';
import { COMPARISON_MATRIX } from '../../data/comparisonMatrix';
import { SPONSOR_TIERS } from '../../data/tiers';

interface Slide6ComparisonProps {
  currency: Currency;
  onOpenSponsorModalWithTier: (tierId: string) => void;
}

export const Slide6Comparison: React.FC<Slide6ComparisonProps> = ({
  onOpenSponsorModalWithTier
}) => {
  const renderCell = (val: string | boolean, isGold = false) => {
    if (typeof val === 'boolean') {
      return val ? (
        <div className="flex items-center justify-center">
          <div className={`p-1 rounded-full ${isGold ? 'bg-yellow-500/20 text-yellow-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center text-slate-600">
          <X className="w-4 h-4 stroke-[2]" />
        </div>
      );
    }
    return (
      <span className={`text-xs font-semibold text-center block ${isGold ? 'text-yellow-200 font-bold' : 'text-slate-200'}`}>
        {val}
      </span>
    );
  };

  return (
    <div className="w-full max-w-7xl space-y-4 py-2 sm:py-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-3">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold mb-1.5">
            <span>Slide 06 • Comparativa Detallada</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Matriz Comparativa de Beneficios
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            Revisa todos los entregables, capacidades y accesos incluidos en cada uno de los niveles de patrocinio.
          </p>
        </div>

        <div className="text-xs text-slate-400 font-medium hidden md:flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          <span>El nivel <strong>Oro (Impact Partner)</strong> es el más elegido por empresas tech.</span>
        </div>
      </div>

      {/* Table Container with Glassmorphism */}
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/90 shadow-2xl backdrop-blur-xl max-h-[62vh] overflow-y-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          {/* Sticky Table Header */}
          <thead className="sticky top-0 z-20 bg-slate-950/95 backdrop-blur-md border-b border-white/10 text-xs">
            <tr>
              <th className="p-3.5 sm:p-4 text-slate-400 font-bold uppercase tracking-wider w-[32%]">
                Entregable / Beneficio
              </th>
              <th className="p-3.5 text-center text-slate-300 font-bold w-[17%]">
                <div className="text-xs text-amber-500 font-mono">Bronce</div>
                <div className="text-slate-400 text-[11px]">Friend</div>
              </th>
              <th className="p-3.5 text-center text-slate-300 font-bold w-[17%]">
                <div className="text-xs text-slate-300 font-mono">Plata</div>
                <div className="text-slate-400 text-[11px]">Insight</div>
              </th>
              {/* Highlighted Gold Column Header */}
              <th className="p-3.5 text-center bg-yellow-500/10 border-x border-yellow-500/30 text-yellow-300 font-bold w-[18%] relative">
                <div className="text-xs text-yellow-400 font-mono flex items-center justify-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>Oro</span>
                </div>
                <div className="text-yellow-200 text-[11px]">Impact (Top)</div>
              </th>
              <th className="p-3.5 text-center text-blue-300 font-bold w-[16%]">
                <div className="text-xs text-blue-400 font-mono">Platino</div>
                <div className="text-slate-400 text-[11px]">Immersive</div>
              </th>
            </tr>
          </thead>

          {/* Table Body with Categories */}
          <tbody className="divide-y divide-white/5 text-xs">
            {COMPARISON_MATRIX.map((category, catIdx) => (
              <React.Fragment key={catIdx}>
                {/* Category Header Row */}
                <tr className="bg-slate-950/60 font-bold text-slate-300">
                  <td
                    colSpan={5}
                    className="py-2.5 px-4 text-blue-400 text-[11px] uppercase tracking-wider border-y border-white/10"
                  >
                    {category.title}
                  </td>
                </tr>

                {/* Items */}
                {category.items.map((item, itemIdx) => (
                  <tr
                    key={itemIdx}
                    className="hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="p-3 sm:p-3.5 text-slate-200 font-medium">
                      <div>{item.feature}</div>
                      {item.tooltip && (
                        <div className="text-[10px] text-slate-400 font-normal mt-0.5">
                          {item.tooltip}
                        </div>
                      )}
                    </td>
                    <td className="p-3 text-center">
                      {renderCell(item.bronze)}
                    </td>
                    <td className="p-3 text-center">
                      {renderCell(item.silver)}
                    </td>
                    <td className="p-3 text-center bg-yellow-500/5 border-x border-yellow-500/20">
                      {renderCell(item.gold, true)}
                    </td>
                    <td className="p-3 text-center">
                      {renderCell(item.platinum)}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick reservation row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
        {SPONSOR_TIERS.map((tier) => (
          <button
            key={tier.id}
            onClick={() => onOpenSponsorModalWithTier(tier.id)}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              tier.id === 'oro'
                ? 'bg-yellow-500 hover:bg-yellow-400 text-slate-950 shadow-md shadow-yellow-500/20'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-white/10'
            }`}
          >
            <span>Cotizar {tier.badge.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
