import React, { useState } from 'react';
import { Mail, ExternalLink, Sparkles, ChevronDown, ChevronUp, MessageSquare, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { COMMUNITY_DATA } from '../../data/community';
import { FAQS } from '../../data/faqs';

interface Slide8ContactProps {
  onOpenSponsorModal: () => void;
}

export const Slide8Contact: React.FC<Slide8ContactProps> = ({ onOpenSponsorModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const mailtoLink = `mailto:${COMMUNITY_DATA.email}?subject=Propuesta%20de%20Patrocinio%20GDG%20CDMX`;

  return (
    <div className="w-full max-w-6xl space-y-6 py-2 sm:py-4">
      {/* Section Header */}
      <div className="text-center sm:text-left border-b border-white/10 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold mb-2">
          <span>Slide 08 • Contacto Oficial & Cierre</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Construyamos Juntos el DevFest CDMX
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
          Asegura la presencia y liderazgo de tu marca ante la mayor comunidad de desarrolladores de la Ciudad de México.
        </p>
      </div>

      {/* Main Grid: Left Contact Card & Right FAQ Accordion */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Col: Contact Call to Action */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-white/15 rounded-2xl p-6 backdrop-blur-xl shadow-2xl space-y-5">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-blue-400">
              Canal Directo de Patrocinios
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              Comité Organizador GDG CDMX
            </h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Estamos listos para coordinar los detalles de tu patrocinio, stands, ponencias técnicas y dinámicas de reclutamiento.
            </p>
          </div>

          {/* Email button */}
          <div className="space-y-2.5">
            <a
              href={mailtoLink}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              <Mail className="w-4 h-4" />
              <span>{COMMUNITY_DATA.email}</span>
            </a>

            <button
              onClick={onOpenSponsorModal}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/10 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>Abrir Formulario de Cotización</span>
            </button>
          </div>

          {/* Location & Official Links */}
          <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-400 shrink-0" />
              <span>Ciudad de México, México</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href={COMMUNITY_DATA.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-1 truncate"
              >
                <span>gdg.community.dev/gdg-cdmx</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick confirmation check */}
          <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1 text-[11px] text-slate-300">
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Disponibilidad Limitada por Nivel</span>
            </div>
            <p className="text-slate-400">
              Los cupos para Platino y Oro se asignan por orden de confirmación y firma de acuerdo.
            </p>
          </div>
        </div>

        {/* Right Col: FAQ Accordion */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between pb-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-blue-400" />
              <span>Preguntas Frecuentes de Patrocinadores</span>
            </h3>
            <span className="text-xs text-slate-500">FAQ</span>
          </div>

          <div className="space-y-2.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-slate-900/70 overflow-hidden transition-all backdrop-blur-md"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-3.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-3.5 pb-3.5 pt-1 text-xs text-slate-400 leading-relaxed border-t border-white/5 bg-slate-950/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
