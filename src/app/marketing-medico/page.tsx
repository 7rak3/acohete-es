import Link from "next/link";
import {
  Stethoscope,
  HeartPulse,
  ArrowRight,
  Calendar,
  Lock,
} from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
import { constructMetadata, generateBreadcrumbSchema, generateFaqSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Marketing Médico & Clínicas en España | Captación Ética de Pacientes — acohete.es",
  description:
    "Estrategias digitales éticas para clínicas médicas, dentales, centros de salud y especialistas en España. Captación en Google, SEO local y protección de datos sanitarios.",
  path: "/marketing-medico",
  clPath: "/marketing-medico",
});

export default function MarketingMedicoPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Sectores", url: "/servicios" },
    { name: "Marketing Médico España", url: "/marketing-medico" },
  ]);

  const faqs = [
    {
      question: "¿Cómo cumplen con la estricta normativa de publicidad sanitaria en España?",
      answer:
        "Toda nuestra comunicación cumple rigurosamente con la Ley General de Publicidad y las directrices autonómicas de colegios de médicos y odontólogos. Evitamos promesas engañosas, no mercantilizamos la salud y destacamos el rigor científico y la solvencia del cuadro facultativo.",
    },
    {
      question: "¿Cómo se protegen los datos del paciente según el RGPD?",
      answer:
        "Los datos de salud son de categoría especial. No almacenamos historiales clínicos en herramientas de marketing; los formularios captan exclusivamente la solicitud de cita y la transfieren de forma cifrada al software de gestión médica (HIS / ERP) de la clínica.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="relative min-h-screen bg-[#07090e] selection:bg-orange-500/30 overflow-hidden">
        <section className="relative z-10 pt-14 pb-16 md:pt-20 md:pb-24 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono mb-6">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>CLÍNICAS PRIVADAS, SALUD & ESPECIALISTAS · ESPAÑA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Marketing Médico y para Clínicas de Salud en España
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Atrae nuevos pacientes para tratamientos de alto valor con estrategias éticas, rigurosas y orientadas a la reputación médica y la confianza del paciente.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="#presupuesto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/25"
              >
                <span>Solicitar Propuesta para Sector Salud</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pilares */}
        <section className="relative z-10 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Google Ads para Tratamientos</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Posicionamiento de búsqueda para pacientes con dolor inmediato o necesidad de cirugías y tratamientos odontológicos o estéticos.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Privacidad RGPD Sanitaria</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Páginas seguras con protocolos estrictos de protección de datos personales de salud de acuerdo a la legislación europea.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Agendamiento de Citas Fácil</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Embudos que facilitan la reserva directa o el contacto telefónico asistido para reducir las cancelaciones y citas no presentadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="relative z-10 py-16 bg-slate-950/70 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">
              Preguntas Frecuentes sobre Marketing Sanitario
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
                  <h3 className="text-sm font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Presupuesto */}
        <section id="presupuesto" className="relative z-10 py-20 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BudgetForm initialService="Marketing Médico & Clínicas" sourceContext="Página Marketing Médico" />
          </div>
        </section>
      </main>
    </>
  );
}
