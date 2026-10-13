import Link from "next/link";
import {
  Building,
  Key,
  TrendingUp,
  ArrowRight,
  MapPin,
} from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
import { constructMetadata, generateBreadcrumbSchema, generateFaqSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Marketing Inmobiliario en España | Captación para Promociones y Agencias — acohete.es",
  description:
    "Estrategias de captación de compradores e inversores para promotoras inmobiliarias, promociones de obra nueva y agencias en España. Meta Ads y Google Search especializado.",
  path: "/marketing-inmobiliario",
  clPath: "/marketing-inmobiliario",
});

export default function MarketingInmobiliarioPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Sectores", url: "/servicios" },
    { name: "Marketing Inmobiliario España", url: "/marketing-inmobiliario" },
  ]);

  const faqs = [
    {
      question: "¿Cómo filtran los curiosos de los compradores cualificados?",
      answer:
        "Utilizamos formularios interactivos de cualificación con preguntas filtro (plazo estimado de compra, necesidad de financiación hipotecaria, rango de inversión) y validación de teléfono mediante OTP o verificación previa.",
    },
    {
      question: "¿Trabajan con promociones de obra nueva y activos residenciales de ticket alto?",
      answer:
        "Sí. Desarrollamos landing pages cinematográficas con renders 3D, planos descargables y campañas orientadas a inversores nacionales e internacionales (por ejemplo, compradores de la UE interesados en la Costa del Sol, Baleares o Madrid).",
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-6">
              <Building className="w-3.5 h-3.5" />
              <span>PROMOTORAS & AGENCIA INMOBILIARIA · ESPAÑA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Marketing Inmobiliario para Promotoras y Agencias en España
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Generamos contactos de compradores solventes e inversores para promociones de obra nueva, suelo y activos residenciales en Madrid, Barcelona, Costa del Sol, Levante y Baleares.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="#presupuesto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/25"
              >
                <span>Solicitar Campaña Inmobiliaria</span>
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
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Segmentación Geográfica & Demográfica</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Campañas en Meta Ads segmentadas por código postal, intereses de inversión y compradores internacionales.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                  <Key className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Google Ads de Búsqueda Local</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Captura directa de usuarios buscando pisos de obra nueva, chalets y oportunidades inmobiliarias específicas en tu ciudad.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Filtro de Solvencia & Leads Cualificados</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Formularios con cualificación previa que eliminan los contactos basura y envían los datos listos al equipo de ventas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="relative z-10 py-16 bg-slate-950/70 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">
              Preguntas Frecuentes sobre Marketing Inmobiliario
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
            <BudgetForm initialService="Marketing Inmobiliario" sourceContext="Página Marketing Inmobiliario" />
          </div>
        </section>
      </main>
    </>
  );
}
