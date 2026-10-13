import Link from "next/link";
import {
  Clapperboard,
  Flame,
  ArrowRight,
  TrendingUp,
  Sliders,
} from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
import { constructMetadata, generateBreadcrumbSchema, generateFaqSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Producción Audiovisual para Anuncios en España — acohete.es",
  description:
    "Productora audiovisual en España especializada en vídeo publicitario de alto rendimiento. Comerciales, formatos UGC y piezas de alta retención para Google Ads, Meta Ads y TikTok.",
  path: "/audiovisual",
  clPath: "/audiovisual",
});

export default function AudiovisualPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Servicios", url: "/servicios" },
    { name: "Producción Audiovisual España", url: "/audiovisual" },
  ]);

  const faqs = [
    {
      question: "¿Por qué un vídeo bonito no siempre vende en campañas de publicidad?",
      answer:
        "Los vídeos corporativos tradicionales suelen tardar 10-15 segundos en presentar el logotipo o contexto, momento en el que el 85% de los usuarios ya ha deslizado la pantalla. En acohete.es diseñamos anuncios basados en ganchos (hooks) inmediatos, dolor del cliente y llamada a la acción clara.",
    },
    {
      question: "¿Qué formatos y resoluciones entregan?",
      answer:
        "Entregamos piezas nativas en vertical 9:16 (optimizadas para Reels, TikTok y YouTube Shorts) y horizontal 16:9 (para YouTube In-Stream y televisión conectada), con subtítulos dinámicos integrados para visualización sin sonido.",
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono mb-6">
              <Clapperboard className="w-3.5 h-3.5" />
              <span>VÍDEO PUBLICITARIO DE ALTA CONVERSIÓN · ESPAÑA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Producción Audiovisual & Creativos para Ads en España
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              El 70% del éxito en Meta Ads y TikTok depende de la calidad del creativo. Producimos vídeos que capturan la atención, retienen al usuario y disparan la tasa de clics (CTR).
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="#presupuesto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/25"
              >
                <span>Pedir Presupuesto Audiovisual</span>
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
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Ganchos (Hooks) de 3 Segundos</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Estructuración psicológica del inicio del vídeo para frenar el scroll del usuario y multiplicar el tiempo medio de reproducción.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Variantes de Testeo A/B</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Entregamos múltiples introducciones, llamadas a la acción y ritmos de edición para que el algoritmo encuentre la versión más rentable.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Formatos UGC & Demostración</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Contenido orgánico generado por usuarios auténticos, casos de éxito reales y explicaciones técnicas de producto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="relative z-10 py-16 bg-slate-950/70 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">
              Preguntas Frecuentes sobre Producción Audiovisual
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
            <BudgetForm initialService="Producción Audiovisual & Creativos" sourceContext="Página Audiovisual" />
          </div>
        </section>
      </main>
    </>
  );
}
