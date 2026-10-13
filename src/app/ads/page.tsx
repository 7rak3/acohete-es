import Link from "next/link";
import {
  Target,
  ArrowRight,
  BarChart3,
  Search,
  ShoppingBag,
  Video,
} from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
import { constructMetadata, generateBreadcrumbSchema, generateFaqSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Agencia Google Ads en España | Partner Oficial & Performance Max — acohete.es",
  description:
    "Agencia Google Ads en España Google Partner Oficial. Campañas de Búsqueda, Performance Max, Shopping y YouTube enfocadas en ROAS, reducción de CPA y ventas reales.",
  path: "/ads",
  clPath: "/ads",
});

export default function AdsPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Servicios", url: "/servicios" },
    { name: "Google Ads España", url: "/ads" },
  ]);

  const faqs = [
    {
      question: "¿Quién paga directamente la inversión publicitaria a Google?",
      answer:
        "Tú pagas directamente a Google introduciendo tu propia tarjeta o cuenta bancaria en Google Ads. En acohete.es cobramos únicamente por la gestión y optimización técnica, garantizando 100% de transparencia sobre el coste real de tus clics.",
    },
    {
      question: "¿Qué presupuesto mínimo recomiendan para empezar en España?",
      answer:
        "Recomendamos partir desde 800 € a 1.200 € mensuales de inversión publicitaria neta para que el algoritmo de Google Ads tenga suficiente volumen de conversiones y pueda optimizar las pujas de forma eficiente.",
    },
    {
      question: "¿Cuánto tardan en verse los primeros resultados?",
      answer:
        "A diferencia del SEO, las campañas de Google Ads generan clics y contactos desde el primer día de activación. La fase de calibración y estabilización del coste por adquisición (CPA) suele tomar entre 2 y 4 semanas.",
    },
    {
      question: "¿Tienen permanencia forzada en el contrato?",
      answer:
        "No. Trabajamos mes a mes porque creemos que la mejor fidelización es el retorno de inversión y la rentabilidad demostrada en tus cuentas comerciales.",
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
        {/* Hero */}
        <section className="relative z-10 pt-14 pb-16 md:pt-20 md:pb-24 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-6">
              <Target className="w-3.5 h-3.5" />
              <span>GOOGLE PARTNER OFICIAL · GESTIÓN EN ESPAÑA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Agencia Google Ads en España Especializada en ROAS y Rendimiento
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              No quemes presupuesto en clics irrelevantes. Diseñamos estructuras publicitarias en Google Ads que capturan la demanda con mayor intención de compra en el mercado español.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="#presupuesto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/25"
              >
                <span>Solicitar Auditoría de Cuenta Ads</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/auditoria"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-sm"
              >
                <span>Diagnóstico 360° Gratuito</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Formatos y tipos de campañas */}
        <section className="relative z-10 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                Formatos Avanzados
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                Dominio de Todo el Ecosistema de Google
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">Google Search (Búsqueda)</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Aparece en la primera posición exactamente cuando un cliente potencial busca tu producto o servicio en España.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">Performance Max & Shopping</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Escalado de e-commerce sincronizando feeds con Merchant Center y pujas predictivas por margen y rentabilidad.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4">
                  <Video className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">YouTube Ads & Vídeo</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Impacto audiovisual en audiencias segmentadas por intención de compra y búsquedas previas en el ecosistema Google.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">Remarketing Inteligente</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Recuperación de usuarios que visitaron tu web sin convertir mediante anuncios dinámicos en toda la red de display.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="relative z-10 py-16 bg-slate-950/70 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">
              Preguntas Frecuentes sobre Google Ads
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
            <BudgetForm initialService="Gestión Google Ads (SEM & PMax)" sourceContext="Página Google Ads" />
          </div>
        </section>
      </main>
    </>
  );
}
