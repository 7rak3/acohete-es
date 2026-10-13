import Link from "next/link";
import {
  Cpu,
  ArrowRight,
  Sparkles,
  Globe2,
  FileCode2,
} from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
import { constructMetadata, generateBreadcrumbSchema, generateFaqSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Agencia SEO en España | Posicionamiento Web & SEO Generativo (GEO) — acohete.es",
  description:
    "Agencia SEO en España líder en posicionamiento web orgánico y optimización para motores de IA (GEO / SearchGPT / Perplexity). Auditoría técnica, Core Web Vitals y linkbuilding.",
  path: "/seo",
  clPath: "/seo",
});

export default function SeoPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Servicios", url: "/servicios" },
    { name: "SEO & GEO España", url: "/seo" },
  ]);

  const faqs = [
    {
      question: "¿Qué diferencia al SEO tradicional de la Optimización para Motores Generativos (GEO)?",
      answer:
        "El SEO tradicional se enfoca en posicionar páginas en los enlaces azules de Google mediante palabras clave y backlinks. El GEO (Generative Engine Optimization) optimiza las entidades semánticas y la estructura de datos para que modelos de IA como ChatGPT, Perplexity y Gemini citen tu empresa como fuente y recomendación directa.",
    },
    {
      question: "¿Cuánto tiempo tarda una estrategia SEO en generar tráfico orgánico en España?",
      answer:
        "Los primeros resultados en indexación y mejoras técnicas se notan en las primeras 4 a 8 semanas. El crecimiento sustancial de tráfico orgánico y palabras clave competitivas en el mercado español suele consolidarse entre el tercer y sexto mes de trabajo continuo.",
    },
    {
      question: "¿Cómo garantizan que Google no penalice por contenido duplicado?",
      answer:
        "Implementamos arquitecturas de etiquetado hreflang bidireccional, canónicas autorreferenciales, metadatos únicos por país y redacción localizada adaptada al vocabulario y búsqueda de usuarios en España.",
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SEO ORGÁNICO + MOTORES DE IA (GEO) · ESPAÑA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Agencia SEO en España: Posicionamiento Web & Optimización para IA
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Posiciona en los primeros puestos de Google España y garantiza que las inteligencias artificiales (SearchGPT, Perplexity y Gemini) recomienden tu marca a sus usuarios.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="#presupuesto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/25"
              >
                <span>Solicitar Auditoría SEO Gratuita</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/auditoria"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-sm"
              >
                <span>Ver cómo auditamos tu web</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Pilares del SEO */}
        <section className="relative z-10 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                  <FileCode2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">SEO Técnico & WPO</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Optimización de Core Web Vitals (LCP, INP, CLS), presupuesto de rastreo (crawl budget), indexabilidad y arquitectura web limpia en Next.js.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">GEO (Generative Engine Optimization)</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Estructuración semántica mediante Schema.org enriquecido y fuentes citables para que ChatGPT, Perplexity y Gemini recomienden tus servicios.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Linkbuilding & Autoridad en España</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Adquisición ética de enlaces en medios de comunicación españoles, blogs sectoriales y directorios empresariales para transferir autoridad de dominio real.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="relative z-10 py-16 bg-slate-950/70 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">
              Preguntas Frecuentes sobre SEO y Motores de IA
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
            <BudgetForm initialService="Posicionamiento SEO & GEO (IA)" sourceContext="Página Posicionamiento SEO" />
          </div>
        </section>
      </main>
    </>
  );
}
