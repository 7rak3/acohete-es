import Link from "next/link";
import {
  Pickaxe,
  ShieldCheck,
  ArrowRight,
  Search,
  Globe2,
} from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
import { constructMetadata, generateBreadcrumbSchema, generateFaqSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Marketing para Proveedores de Minería e Industria Pesada en España — acohete.es",
  description:
    "Estrategias B2B de adquisición para fabricantes de maquinaria de extracción, áridos, obra civil y proveedores mineros en España y exportación internacional.",
  path: "/marketing-minero",
  clPath: "/marketing-minero",
});

export default function MarketingMineroPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Sectores", url: "/servicios" },
    { name: "Minería & Maquinaria Pesada", url: "/marketing-minero" },
  ]);

  const faqs = [
    {
      question: "¿Tiene sentido el marketing digital para proveedores de minería y canteras en España?",
      answer:
        "Totalmente. El sector de áridos, roca ornamental, cementeras y proyectos de minería metálica en España (como la faja pirítica en Andalucía o explotaciones en el norte) requiere repuestos críticos, maquinaria y servicios de ingeniería donde cada contrato representa decenas o cientos de miles de euros.",
    },
    {
      question: "¿Cómo apoyan a empresas españolas que exportan suministros mineros al extranjero?",
      answer:
        "Diseñamos campañas de captación en Google Search y LinkedIn orientadas a los principales distritos mineros de Latinoamérica (Chile, Perú, México) y Europa, captando directores de compras que buscan ingeniería europea de máxima calidad.",
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
              <Pickaxe className="w-3.5 h-3.5" />
              <span>EXTRACCIÓN, ÁRIDOS & MAQUINARIA PESADA · ESPAÑA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Marketing para Proveedores de Minería & Extracción en España
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Conecta con directores de explotación, jefes de planta y responsables de compras de maquinaria pesada, suministros industriales y servicios de ingeniería minera tanto en España como en mercados de exportación.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="#presupuesto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/25"
              >
                <span>Solicitar Propuesta para Sector Extractivo</span>
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
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Google Ads Técnico & Repuestos</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Posicionamiento de búsqueda para componentes de desgaste, bombas, cribas, trituradoras y maquinaria pesada.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Captación para Exportación</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Estrategias digitales para empresas españolas que suministran a proyectos mineros en Latinoamérica o el norte de África.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Homologaciones & Seguridad</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Contenido orientado a certificaciones CE, normativas medioambientales y fiabilidad en faenas exigentes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="relative z-10 py-16 bg-slate-950/70 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">
              Preguntas Frecuentes sobre Proveedores de Extracción
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
            <BudgetForm initialService="Marketing Minero & Extracción" sourceContext="Página Marketing Minero" />
          </div>
        </section>
      </main>
    </>
  );
}
