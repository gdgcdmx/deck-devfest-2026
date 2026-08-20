import React, { useState } from 'react';
import { Calculator, Check, Sparkles, Send, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Currency } from '../../types';
import { SPONSOR_TIERS } from '../../data/tiers';
import { SPONSOR_ADD_ONS } from '../../data/addOns';
import { COMMUNITY_DATA } from '../../data/community';

interface BudgetCalculatorProps {
  currency: Currency;
  onOpenSponsorModalWithConfig?: (tierId: string, addOnIds: string[]) => void;
}

export const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({
  currency,
  onOpenSponsorModalWithConfig
}) => {
  const [selectedTierId, setSelectedTierId] = useState<string>('impact');
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>(['local-flavor-cdmx']);

  const selectedTier = SPONSOR_TIERS.find((t) => t.id === selectedTierId) || SPONSOR_TIERS[1];
  const selectedAddOns = SPONSOR_ADD_ONS.filter((a) => selectedAddOnIds.includes(a.id));

  const tierCost = currency === 'USD' ? selectedTier.priceUSD : selectedTier.priceMXN;
  const addOnsCost = selectedAddOns.reduce(
    (acc, item) => acc + (currency === 'USD' ? item.priceUSD : item.priceMXN),
    0
  );
  const totalCost = tierCost + addOnsCost;

  const toggleAddOn = (id: string) => {
    if (selectedAddOnIds.includes(id)) {
      setSelectedAddOnIds(selectedAddOnIds.filter((item) => item !== id));
    } else {
      setSelectedAddOnIds([...selectedAddOnIds, id]);
    }
  };

  const handleCelebrate = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4285F4', '#EA4335', '#FBBC05', '#34A853']
    });
  };

  const formatPrice = (val: number) => {
    return currency === 'USD'
      ? `$${val.toLocaleString('en-US')} USD`
      : `$${val.toLocaleString('es-MX')} MXN`;
  };

  const buildMailto = () => {
    const addOnsText = selectedAddOns.length > 0
      ? selectedAddOns.map((a) => a.name).join(', ')
      : 'Ninguno';
    const subject = encodeURIComponent(`Interés de Patrocinio GDG CDMX - Paquete ${selectedTier.name}`);
    const body = encodeURIComponent(
      `Hola equipo organizador de GDG Ciudad de México,\n\n` +
      `Nos interesa patrocinar el DevFest Ciudad de México 2026 con la siguiente configuración simulada:\n\n` +
      `• Paquete Principal: ${selectedTier.name} (${selectedTier.badge})\n` +
      `• Add-Ons Seleccionados: ${addOnsText}\n` +
      `• Inversión Estimada: ${formatPrice(totalCost)}\n\n` +
      `Nos gustaría agendar una breve llamada para resolver dudas y formalizar el acuerdo.\n\n` +
      `Nombre de la empresa:\n` +
      `Persona de contacto:\n` +
      `Teléfono:\n`
    );
    return `mailto:${COMMUNITY_DATA.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full clean-card p-4 sm:p-6 shadow-md text-left">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>Simulador Interactivo de Inversión</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                En vivo
              </span>
            </h3>
            <p className="text-xs text-slate-500">
              Selecciona tu nivel base y añade experiencias para cotizar al instante.
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setSelectedTierId('impact');
            setSelectedAddOnIds(['local-flavor-cdmx']);
          }}
          className="text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
          title="Restablecer simulación"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Restablecer</span>
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
        {/* Left Col */}
        <div className="lg:col-span-7 space-y-4">
          {/* Step 1 */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              1. Selecciona el Paquete Principal
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
              {SPONSOR_TIERS.map((tier) => {
                const isSelected = tier.id === selectedTierId;
                const price = currency === 'USD' ? tier.priceUSD : tier.priceMXN;
                return (
                  <button
                    key={tier.id}
                    onClick={() => {
                      setSelectedTierId(tier.id);
                      handleCelebrate();
                    }}
                    className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 font-bold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-xs font-bold truncate">{tier.name.split(' ')[0]}</div>
                    <div className={`text-[11px] font-mono mt-0.5 ${isSelected ? 'text-blue-100' : 'text-blue-600 font-semibold'}`}>
                      {formatPrice(price)}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2 */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              2. Agrega Experiencias & Add-Ons (Opcional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SPONSOR_ADD_ONS.map((addOn) => {
                const isSelected = selectedAddOnIds.includes(addOn.id);
                const price = currency === 'USD' ? addOn.priceUSD : addOn.priceMXN;
                return (
                  <button
                    key={addOn.id}
                    onClick={() => toggleAddOn(addOn.id)}
                    className={`p-2.5 rounded-xl border text-left flex items-center justify-between gap-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border transition-all ${
                          isSelected
                            ? 'bg-emerald-600 border-emerald-600 text-white'
                            : 'border-slate-300 bg-white text-transparent'
                        }`}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div className="text-xs font-semibold text-slate-800 line-clamp-1">
                        {addOn.name}
                      </div>
                    </div>
                    <div className="text-xs font-mono font-bold text-emerald-700 whitespace-nowrap">
                      +{formatPrice(price)}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Col Summary */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Resumen de Propuesta
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">
                DevFest CDMX
              </span>
            </div>

            <div className="space-y-2 my-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-800 font-semibold">
                  {selectedTier.name} ({selectedTier.badge})
                </span>
                <span className="font-mono text-slate-900 font-bold">
                  {formatPrice(tierCost)}
                </span>
              </div>

              {selectedAddOns.map((addon) => (
                <div key={addon.id} className="flex items-center justify-between text-slate-600">
                  <span className="truncate pr-2">• {addon.name}</span>
                  <span className="font-mono text-emerald-700 font-bold whitespace-nowrap">
                    +{formatPrice(currency === 'USD' ? addon.priceUSD : addon.priceMXN)}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-2.5 rounded-lg bg-white border border-slate-200 space-y-1 text-[11px] text-slate-700">
              <div className="text-blue-700 font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" /> Beneficio Clave:
              </div>
              <div>{selectedTier.highlightBenefit}</div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 mt-4 space-y-3">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Inversión Estimada</div>
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-blue-700">
                {formatPrice(totalCost)}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                href={buildMailto()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all text-center cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enviar por Correo</span>
              </a>

              {onOpenSponsorModalWithConfig && (
                <button
                  onClick={() => onOpenSponsorModalWithConfig(selectedTierId, selectedAddOnIds)}
                  className="w-full py-2 px-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Formulario Directo</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
