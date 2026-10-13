import Link from "next/link";
import {
  Factory,
  TrendingUp,
  ArrowRight,
  Search,
  Briefcase,
} from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
import { constructMetadata, generateBreadcrumbSchema, generateFaqSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Marketing Industrial B2B en España | Captación para Ingeniería y Proveedores — acohete.es",
  description:
    "Estrategias de adquisición digital para empresas industriales, fabricantes y proveedores B2B en España. Google Ads técnico, LinkedIn Ads para compras y SEO B2B.",
  path: "/marketing-industrial",
  clPath: "/marketing-industrial",
});

export default function MarketingIndustrialPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Sectores", url: "/servicios" },
    { name: "Marketing Industrial B2B España", url: "/marketing-industrial" },
  ]);

  const faqs = [
    {
      question: "¿Cómo funciona el marketing digital para productos industriales de alto valor?",
      answer:
        "A diferencia del consumo masivo, las ventas industriales implican ciclos largos y comités de compras. Diseñamos estrategias centradas en palabras clave de alta especificación técnica en Google Search y campañas de prospección dirigida en LinkedIn para llegar a directores de compras, ingenieros y gerentes de planta.",
    },
    {
      question: "¿Cómo medimos los resultados en contratos que tardan meses en cerrarse?",
      answer:
        "Sincronizamos tus campañas con tu CRM (HubSpot, Salesforce u otros) para medir no sólo el coste por lead, sino la tasa de cualificación técnica (SQL) y el valor de las cotizaciones emitidas.",
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-6">
              <Factory className="w-3.5 h-3.5" />
              <span>INDUSTRIA B2B, INGENIERÍA & MAQUINARIA · ESPAÑA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Marketing Industrial B2B para Empresas y Fabricantes en España
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Posiciona tu catálogo técnico y capta solicitudes de presupuesto cualificadas de directores de compras, plantas de producción y empresas de ingeniería en toda la península.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="#presupuesto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/25"
              >
                <span>Solicitar Propuesta para Sector Industrial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pilares industriales */}
        <section className="relative z-10 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Google Ads Técnico & SKU</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Campañas en Google Search hipersegmentadas por referencias, códigos de pieza, normativas ISO y especificaciones técnicas exactas.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Prospección en LinkedIn</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Contacto directo con decisores de compras, responsables de mantenimiento y directores de operaciones en empresas del sector.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Fichas Técnicas & Catálogos</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Páginas de aterrizaje con descarga de fichas en PDF protegidas con captura de datos y cotizador interactivo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="relative z-10 py-16 bg-slate-950/70 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">
              Preguntas Frecuentes sobre Marketing Industrial
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
            <BudgetForm initialService="Marketing Industrial B2B" sourceContext="Página Marketing Industrial" />
          </div>
        </section>
      </main>
    </>
  );
}
