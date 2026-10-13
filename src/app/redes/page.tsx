import Link from "next/link";
import {
  Share2,
  Smartphone,
  Briefcase,
  ArrowRight,
  BarChart2,
} from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
import { constructMetadata, generateBreadcrumbSchema, generateFaqSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Gestión de Redes Sociales & Meta Ads en España — acohete.es",
  description:
    "Agencia de Social Ads y Redes Sociales en España. Campañas de captación en Instagram, TikTok y LinkedIn B2B con integración de Meta Conversions API (CAPI).",
  path: "/redes",
  clPath: "/redes",
});

export default function RedesPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Servicios", url: "/servicios" },
    { name: "Redes Sociales & Ads España", url: "/redes" },
  ]);

  const faqs = [
    {
      question: "¿Qué canales sociales son más rentables para mi tipo de negocio en España?",
      answer:
        "Para e-commerce y servicios a consumidor final (B2C), Meta Ads (Instagram/Facebook) y TikTok ofrecen el menor coste por adquisición y mayor volumen de compra impulsiva. Para servicios profesionales y empresas (B2B), combinamos LinkedIn Ads con retargeting en Meta para abaratar el coste por lead cualificado.",
    },
    {
      question: "¿Cómo superan las pérdidas de datos causadas por iOS y los bloqueadores de cookies?",
      answer:
        "Implementamos la API de Conversiones de Meta (CAPI) del lado del servidor (Server-Side) y el Modo de Consentimiento de Google v2. Esto permite registrar hasta un 30% más de eventos de compra que el píxel tradicional del navegador.",
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-6">
              <Share2 className="w-3.5 h-3.5" />
              <span>SOCIAL PAID MEDIA & CAPTACIÓN B2B / B2C · ESPAÑA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Campañas de Redes Sociales & Meta Ads en España
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              No publicamos por publicar ni quemamos presupuesto en likes vacíos. Creamos embudos de prospección y retargeting en Instagram, TikTok y LinkedIn orientados a ventas y contratos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="#presupuesto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/25"
              >
                <span>Solicitar Estrategia Social Ads</span>
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
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Meta Ads (Instagram & Facebook)</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Campañas con formatos Reels, carruseles de producto y generación de clientes potenciales integrados con tu CRM.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">LinkedIn Ads para B2B</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Segmentación precisa por cargo empresarial, sector, tamaño de plantilla y facturación para captar grandes cuentas.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Meta Conversions API (CAPI)</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Trazabilidad directa desde el servidor que burla los bloqueadores de anuncios y alimenta el algoritmo de Meta con datos limpios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="relative z-10 py-16 bg-slate-950/70 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">
              Preguntas Frecuentes sobre Social Ads
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
            <BudgetForm initialService="Social Paid Media & Meta Ads" sourceContext="Página Redes Sociales" />
          </div>
        </section>
      </main>
    </>
  );
}
