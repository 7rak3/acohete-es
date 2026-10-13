import Link from "next/link";
import {
  ShoppingBag,
  ArrowRight,
  Zap,
  Target,
  RefreshCw,
} from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
import { constructMetadata, generateBreadcrumbSchema, generateFaqSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Marketing para E-commerce en España | Escalamiento D2C & Tiendas Online — acohete.es",
  description:
    "Especialistas en escalado de tiendas online y marcas D2C en España. Google Shopping, Performance Max, Meta Ads dinámicos y optimización de tasa de conversión (CRO).",
  path: "/marketing-ecommerce",
  clPath: "/marketing-ecommerce",
});

export default function MarketingEcommercePage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Sectores", url: "/servicios" },
    { name: "Marketing E-commerce España", url: "/marketing-ecommerce" },
  ]);

  const faqs = [
    {
      question: "¿Cómo optimizan el ROAS en catálogos con cientos o miles de productos?",
      answer:
        "Segmentamos el catálogo mediante etiquetas personalizadas (Custom Labels) en Google Merchant Center según margen bruto, productos estrella (bestsellers) y productos de baja rotación, asignando pujas agresivas a lo que deja mayor beneficio neto a tu negocio.",
    },
    {
      question: "¿Qué plataformas de e-commerce gestionan?",
      answer:
        "Trabajamos con Shopify, WooCommerce, PrestaShop, Magento y tiendas a medida en Next.js con arquitectura Headless.",
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>E-COMMERCE & ESCALADO D2C · ESPAÑA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Marketing para E-commerce & Tiendas Online en España
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Escala la facturación de tu tienda online con rentabilidad real. Integramos Google Shopping, Meta Ads dinámicos y tracking del servidor para maximizar el margen de cada venta.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="#presupuesto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/25"
              >
                <span>Escalar Mi Tienda Online</span>
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
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Google Shopping & PMax</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Optimización del feed de Merchant Center, títulos con palabras clave de alta búsqueda y segmentación por margen de beneficio.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Retargeting Dinámico (DABA/DPA)</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Muestra al usuario exactamente el producto que abandonó en el carrito con ofertas limitadas y llamadas a la acción irresistibles.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Optimización CRO del Checkout</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Eliminamos fricciones en la pasarela de pago, habilitamos métodos locales como Bizum y aceleramos los tiempos de carga.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="relative z-10 py-16 bg-slate-950/70 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">
              Preguntas Frecuentes sobre E-commerce
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
            <BudgetForm initialService="Marketing E-commerce D2C" sourceContext="Página Marketing E-commerce" />
          </div>
        </section>
      </main>
    </>
  );
}
