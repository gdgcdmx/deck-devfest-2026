import React from 'react';
import { Mail, ArrowRight, Sparkles, Send } from 'lucide-react';
import { COMMUNITY_DATA } from '../../data/community';

interface Slide9ProcessProps {
  onOpenSponsorModal: () => void;
}

export const Slide9Process: React.FC<Slide9ProcessProps> = ({ onOpenSponsorModal }) => {
  const steps = [
    {
      number: '1',
      title: 'Get in touch!',
      subtitle: 'Envíanos un correo a gdgcdmx@gmail.com o usa el formulario.',
      icon: <Mail className="w-5 h-5 text-blue-600" />
    },
    {
      number: '2',
      title: 'Choose your tier',
      subtitle: 'Con gusto resolvemos cualquier duda sobre beneficios.',
      icon: <Sparkles className="w-5 h-5 text-amber-500" />
    },
    {
      number: '3',
      title: 'Sign the agreement',
      subtitle: 'Formalizamos la alianza y emisión de facturación.',
      icon: <ArrowRight className="w-5 h-5 text-red-500" />
    },
    {
      number: '4',
      title: 'Reap the benefits',
      subtitle: 'Disfruta todos tus beneficios en DevFest CDMX.',
      icon: <Send className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <div className="w-full max-w-5xl space-y-8 py-4 text-center sm:text-left">
      {/* 4 Steps Section - Exact JSConf Style */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight border-b border-slate-200 pb-3">
          ¿Cómo Convertirse en Sponsor?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={onOpenSponsorModal}
              className="clean-card p-5 text-center flex flex-col items-center justify-between shadow-xs hover:border-blue-400 transition-all cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-800 text-lg mb-3">
                {step.number}
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.subtitle}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Closing Section - Exact Guadalajara Style */}
      <div className="clean-card p-8 sm:p-10 text-center bg-white border-2 border-blue-500 shadow-md space-y-4">
        <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
          ¡<span className="text-[#EA4335]">Construyamos</span> <span className="text-[#FBBC05]">el</span> <span className="text-[#34A853]">Futuro</span>!
        </h3>

        <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Tu patrocinio impulsa a la comunidad de tecnología, permitiendo financiar talleres prácticos, incentivos y dinámicas de valor para la Ciudad de México.
        </p>

        {/* Big Email Recuadro */}
        <div className="pt-4 max-w-lg mx-auto">
          <div className="p-4 rounded-2xl bg-blue-50 border-2 border-blue-500 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
            <span className="text-xs font-black uppercase tracking-wider text-blue-800">
              HAGAMOS ALIANZA:
            </span>
            <a
              href={`mailto:${COMMUNITY_DATA.email}?subject=Propuesta%20de%20Patrocinio%20DevFest%20CDMX`}
              className="text-base sm:text-lg font-black text-blue-600 hover:underline font-mono"
            >
              {COMMUNITY_DATA.email}
            </a>
          </div>
        </div>

        <div className="pt-2 text-xs text-slate-400 font-semibold">
          GDG Ciudad de México • Google Developer Groups
        </div>
      </div>
    </div>
  );
};
