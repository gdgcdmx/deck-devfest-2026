import React, { useState, useEffect } from 'react';
import { X, Send, Copy, Check, Sparkles, Building, User, Mail, Phone, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Currency } from '../../types';
import { SPONSOR_TIERS } from '../../data/tiers';
import { SPONSOR_ADD_ONS } from '../../data/addOns';
import { COMMUNITY_DATA } from '../../data/community';

interface SponsorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  initialTierId?: string;
  initialAddOnIds?: string[];
}

export const SponsorModal: React.FC<SponsorModalProps> = ({
  isOpen,
  onClose,
  currency,
  initialTierId = 'impact',
  initialAddOnIds = []
}) => {
  const [tierId, setTierId] = useState(initialTierId);
  const [addOnIds, setAddOnIds] = useState<string[]>(initialAddOnIds);
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialTierId) setTierId(initialTierId);
    if (initialAddOnIds) setAddOnIds(initialAddOnIds);
  }, [initialTierId, initialAddOnIds]);

  if (!isOpen) return null;

  const selectedTier = SPONSOR_TIERS.find((t) => t.id === tierId) || SPONSOR_TIERS[1];
  const selectedAddOns = SPONSOR_ADD_ONS.filter((a) => addOnIds.includes(a.id));

  const tierCost = currency === 'USD' ? selectedTier.priceUSD : selectedTier.priceMXN;
  const addOnsCost = selectedAddOns.reduce(
    (acc, a) => acc + (currency === 'USD' ? a.priceUSD : a.priceMXN),
    0
  );
  const totalCost = tierCost + addOnsCost;

  const formatPrice = (val: number) => {
    return currency === 'USD'
      ? `$${val.toLocaleString('en-US')} USD`
      : `$${val.toLocaleString('es-MX')} MXN`;
  };

  const toggleAddOn = (id: string) => {
    if (addOnIds.includes(id)) {
      setAddOnIds(addOnIds.filter((item) => item !== id));
    } else {
      setAddOnIds([...addOnIds, id]);
    }
  };

  const generateProposalText = () => {
    const addOnsList = selectedAddOns.length > 0
      ? selectedAddOns.map((a) => `- ${a.name} (${formatPrice(currency === 'USD' ? a.priceUSD : a.priceMXN)})`).join('\n')
      : 'Ninguno';

    return (
      `Propuesta de Patrocinio • DevFest Ciudad de México 2026\n` +
      `--------------------------------------------------\n` +
      `Empresa: ${companyName || 'Por definir'}\n` +
      `Contacto: ${contactName || 'Por definir'}\n` +
      `Correo: ${email || 'Por definir'}\n` +
      `Teléfono: ${phone || 'Por definir'}\n\n` +
      `Paquete Seleccionado: ${selectedTier.name} (${selectedTier.badge}) - ${formatPrice(tierCost)}\n` +
      `Add-Ons:\n${addOnsList}\n\n` +
      `Inversión Total Estimada: ${formatPrice(totalCost)}\n` +
      (notes ? `Notas Adicionales:\n${notes}\n` : '') +
      `--------------------------------------------------\n` +
      `Enviado para el equipo de GDG CDMX (${COMMUNITY_DATA.email})`
    );
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4285F4', '#EA4335', '#FBBC05', '#34A853']
    });

    const subject = encodeURIComponent(`Interés de Patrocinio DevFest CDMX - ${companyName || selectedTier.name}`);
    const body = encodeURIComponent(
      `Hola equipo organizador de GDG Ciudad de México,\n\n` +
      `Quisiéramos solicitar información formal y formalizar nuestro patrocinio para el DevFest Ciudad de México 2026.\n\n` +
      `${generateProposalText()}\n\n` +
      `Quedamos atentos para agendar la llamada de coordinación.`
    );

    window.open(`mailto:${COMMUNITY_DATA.email}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateProposalText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 sm:p-7 overflow-hidden flex flex-col max-h-[92vh] text-left">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs">
              <Sparkles className="w-5 h-5 text-yellow-300" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Solicitud de Patrocinio • DevFest CDMX
              </h2>
              <p className="text-xs text-slate-500">
                Completa tus datos y enviaremos la propuesta directa a GDG CDMX.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendEmail} className="overflow-y-auto pr-1 my-4 space-y-4 text-xs sm:text-sm">
          {/* Company & Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-blue-600" /> Nombre de la Empresa *
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Acme Technologies"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-red-500" /> Persona de Contacto *
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Ana Morales"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-500" /> Correo Electrónico *
              </label>
              <input
                type="email"
                required
                placeholder="ejemplo@tuempresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-600" /> Teléfono / WhatsApp
              </label>
              <input
                type="tel"
                placeholder="+52 (55) 1234 5678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Tier Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Paquete Seleccionado
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
              {SPONSOR_TIERS.map((tier) => {
                const isSelected = tier.id === tierId;
                return (
                  <button
                    type="button"
                    key={tier.id}
                    onClick={() => setTierId(tier.id)}
                    className={`p-2 rounded-lg border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 font-bold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="font-bold text-xs truncate">{tier.name.split(' ')[0]}</div>
                    <div className={`text-[10px] font-mono ${isSelected ? 'text-blue-100' : 'text-blue-600'}`}>
                      {formatPrice(currency === 'USD' ? tier.priceUSD : tier.priceMXN)}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Add-ons checkboxes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Add-Ons y Experiencias (Opcional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {SPONSOR_ADD_ONS.map((addon) => {
                const isSelected = addOnIds.includes(addon.id);
                return (
                  <button
                    type="button"
                    key={addon.id}
                    onClick={() => toggleAddOn(addon.id)}
                    className={`p-2 rounded-lg border text-left flex items-center justify-between text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="truncate pr-2">{addon.name}</span>
                    <span className="font-mono text-emerald-700 font-bold whitespace-nowrap">
                      +{formatPrice(currency === 'USD' ? addon.priceUSD : addon.priceMXN)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-purple-600" /> Requerimientos Especiales o Preguntas
            </label>
            <textarea
              rows={2}
              placeholder="¿Interés en temas específicos de IA, reclutamiento, dinámicas en booth, facturación en el extranjero?"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
            />
          </div>

          {/* Investment summary box */}
          <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-500">Inversión Estimada</div>
              <div className="text-xs text-slate-800 font-bold">{selectedTier.name} + {selectedAddOns.length} Add-Ons</div>
            </div>
            <div className="text-lg sm:text-xl font-black font-mono text-blue-700">
              {formatPrice(totalCost)}
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
            <button
              type="submit"
              className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Solicitud por Correo Oficial</span>
            </button>

            <button
              type="button"
              onClick={handleCopy}
              className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              title="Copiar detalles al portapapeles"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copiado' : 'Copiar'}</span>
            </button>
          </div>
        </form>

        {/* Direct Email note */}
        <div className="pt-3 border-t border-slate-200 text-center text-[11px] text-slate-500">
          O escribe directamente a <a href={`mailto:${COMMUNITY_DATA.email}`} className="text-blue-600 underline font-bold">{COMMUNITY_DATA.email}</a>
        </div>
      </div>
    </div>
  );
};
