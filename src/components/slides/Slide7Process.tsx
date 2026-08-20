import React from 'react';
import { Mail, CalendarCheck, FileCheck, PartyPopper, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { COMMUNITY_DATA } from '../../data/community';

interface Slide7ProcessProps {
  onOpenSponsorModal: () => void;
  onNext: () => void;
}

export const Slide7Process: React.FC<Slide7ProcessProps> = ({ onOpenSponsorModal }) => {
  const steps = [
    {
      number: '01',
      title: 'Ponte en Contacto',
      subtitle: 'Primer acercamiento directo',
      description: `Escríbenos a ${COMMUNITY_DATA.email} o utiliza nuestro formulario interactivo indicando el paquete o add-on de tu interés.`,
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      color: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
      badge: 'Paso 1'
    },
    {
      number: '02',
      title: 'Elige y Personaliza tu Paquete',
      subtitle: 'Llamada de alineación de 15 min',
      description: 'Agendamos una breve sesión virtual para resolver dudas técnicas, coordinar requerimientos de reclutamiento y ajustar entregables a la medida.',
      icon: <CalendarCheck className="w-6 h-6 text-red-400" />,
      color: 'border-red-500/30 bg-red-500/10 text-red-400',
      badge: 'Paso 2'
    },
    {
      number: '03',
      title: 'Firma del Acuerdo y Facturación',
      subtitle: 'Formalización legal y fiscal',
      description: 'Emisión del convenio de patrocinio con CFDI oficial en México o Invoice internacional para empresas en el extranjero con soporte fiscal.',
      icon: <FileCheck className="w-6 h-6 text-yellow-400" />,
      color: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400',
      badge: 'Paso 3'
    },
    {
      number: '04',
      title: 'Disfruta los Beneficios y Presencia',
      subtitle: 'Ejecución estelar en DevFest',
      description: 'Coordinación logística de stand, talks, entrega de boletos VIP, acceso a la plataforma y máximo impacto durante la jornada del evento.',
      icon: <PartyPopper className="w-6 h-6 text-emerald-400" />,
      color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
      badge: 'Paso 4'
    }
  ];

  return (
    <div className="w-full max-w-6xl space-y-6 sm:space-y-8 py-2 sm:py-4">
      {/* Header */}
      <div className="text-center sm:text-left border-b border-white/10 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold mb-2">
          <span>Slide 07 • Proceso de Onboarding</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          ¿Cómo Convertirse en Sponsor?
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
          Un proceso ágil, transparente y formal en 4 sencillos pasos para asegurar la presencia de tu marca en DevFest CDMX.
        </p>
      </div>

      {/* 4 Step Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-slate-900/80 border border-white/10 hover:border-slate-500 rounded-2xl p-5 flex flex-col justify-between backdrop-blur-xl shadow-xl transition-all relative group hover:-translate-y-1"
          >
            <div>
              {/* Step number badge & icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-black text-slate-400 group-hover:text-white transition-colors">
                  {step.number}
                </span>
                <div className={`p-2.5 rounded-xl border ${step.color}`}>
                  {step.icon}
                </div>
              </div>

              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                {step.subtitle}
              </div>

              <h3 className="text-base font-bold text-white mb-2 leading-snug">
                {step.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Respuesta en &lt; 24 horas</span>
            </div>
          </div>
        ))}
      </div>

      {/* Assurance banner */}
      <div className="bg-gradient-to-r from-blue-950/40 via-slate-900 to-emerald-950/30 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">
              Garantía de Formalidad & Facturación Fiscal
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Emitimos facturación válida ante el SAT en México y contratos formales internacionales.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <button
            onClick={onOpenSponsorModal}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>Iniciar Proceso Ahora</span>
          </button>
        </div>
      </div>
    </div>
  );
};
