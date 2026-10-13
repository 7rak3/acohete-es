import Link from "next/link";
import {
  Code2,
  Zap,
  Layout,
  ShoppingBag,
  ArrowRight,
  Server,
} from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
import { constructMetadata, generateBreadcrumbSchema, generateFaqSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Diseño y Desarrollo Web en España | Next.js & Alta Velocidad — acohete.es",
  description:
    "Desarrollo web en España de alto impacto. Páginas web corporativas, tiendas online y landings de conversión con Next.js y Tailwind CSS. Velocidad de carga < 0.8s.",
  path: "/web",
  clPath: "/web",
});

export default function WebPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Servicios", url: "/servicios" },
    { name: "Desarrollo Web España", url: "/web" },
  ]);

  const faqs = [
    {
      question: "¿Por qué desarrollan en Next.js en vez de WordPress tradicional?",
      answer:
        "Next.js ofrece una velocidad de carga hasta 5 veces más rápida, elimina vulnerabilidades típicas de plugins desactualizados en WordPress, resiste picos masivos de tráfico publicitario sin caerse y logra puntuaciones perfectas en Google Core Web Vitals.",
    },
    {
      question: "¿Qué incluye el desarrollo de una web con acohete.es?",
      answer:
        "Diseño UI/UX a medida, desarrollo frontend y backend headless, optimización SEO técnica inicial, adaptación total a móviles, configuración de telemetría y analítica (GA4 / GTM) y adecuación legal al RGPD europeo.",
    },
    {
      question: "¿Puedo autogestionar los contenidos una vez entregada la web?",
      answer:
        "Sí. Integramos paneles de gestión intuitivos (headless CMS como Sanity o Strapi) para que tu equipo pueda actualizar textos, imágenes y blogs de forma ágil sin tocar una sola línea de código.",
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6">
              <Code2 className="w-3.5 h-3.5" />
              <span>ARQUITECTURA SERVERLESS & NEXT.JS · ESPAÑA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Diseño y Desarrollo Web de Alto Rendimiento en España
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Tu web debe ser tu mejor comercial, no un folleto digital lento. Creamos plataformas ultrarrápidas pensadas para maximizar las conversiones de tus campañas de pago y tráfico orgánico.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="#presupuesto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/25"
              >
                <span>Pedir Presupuesto Web</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portafolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-sm"
              >
                <span>Ver Proyectos Realizados</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Tipos de desarrollos */}
        <section className="relative z-10 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">Webs Corporativas B2B</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Autoridad de marca, arquitectura de servicios clara y captura directa de leads comerciales cualificados.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">E-commerce de Alta Escala</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Checkout optimizado en 1 paso, integración con Shopify o WooCommerce Headless y sincronización ERP.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">Landings de Conversión</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Páginas de aterrizaje diseñadas con enfoque directo en ROAS para campañas de Google Ads y Meta Ads.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">APIs & Software a Medida</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Portales de clientes, cotizadores automatizados e integraciones de bases de datos personalizadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="relative z-10 py-16 bg-slate-950/70 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">
              Preguntas Frecuentes sobre Desarrollo Web
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
            <BudgetForm initialService="Diseño & Desarrollo Web Next.js" sourceContext="Página Desarrollo Web" />
          </div>
        </section>
      </main>
    </>
  );
}
