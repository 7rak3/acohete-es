import Link from "next/link";
import {
  Target,
  Search,
  Code2,
  Share2,
  Video,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Servicios de Marketing Digital en España | Growth & Performance — acohete.es",
  description:
    "Catálogo integral de servicios de marketing digital en España: Google Ads certificado, SEO técnico & GEO, desarrollo web en Next.js, redes sociales y producción de creativos.",
  path: "/servicios",
  clPath: "/servicios",
});

export default function ServiciosPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Servicios", url: "/servicios" },
  ]);

  const services = [
    {
      title: "Gestión de Campañas Google Ads & PMax",
      desc: "Captación de demanda activa en Google Search, Google Shopping, YouTube y Performance Max. Eliminamos clics fraudulentos, estructuramos pujas automáticas por ROAS y vinculamos tu CRM.",
      href: "/ads",
      icon: Target,
      metrics: "ROAS medio auditado: +380%",
      badge: "Google Partner Oficial",
      features: [
        "Campañas de Búsqueda de alta intención de compra",
        "Performance Max y Shopping para e-commerce",
        "Seguimiento avanzado con Google Consent Mode v2",
        "Auditoría semanal de términos negativos",
      ],
    },
    {
      title: "Posicionamiento SEO Técnico & GEO (Motores IA)",
      desc: "Estrategia de posicionamiento orgánico en Google España complementada con optimización semántica para que los motores de IA (SearchGPT, Gemini, Perplexity) recomienden tu negocio.",
      href: "/seo",
      icon: Search,
      metrics: "Core Web Vitals < 0.8s",
      badge: "Preparado para IA",
      features: [
        "Auditoría técnica de rastreo y arquitectura de indexación",
        "Entidades semánticas y marcado de datos estructurados",
        "Linkbuilding editorial en prensa y blogs españoles de alta autoridad",
        "Estrategia de contenido orientada a la intención de búsqueda real",
      ],
    },
    {
      title: "Diseño & Desarrollo Web de Alto Rendimiento",
      desc: "Desarrollo de sitios corporativos, plataformas a medida y tiendas online en Next.js. Sin plantillas sobrecargadas, máxima velocidad de carga y optimización enfocada a la conversión de leads.",
      href: "/web",
      icon: Code2,
      metrics: "LCP < 0.8s garantizado",
      badge: "Arquitectura Next.js",
      features: [
        "Arquitectura frontend moderna y código modular",
        "Diseño UX/UI pensado para convertir visitas en clientes",
        "Integración con pasarelas de pago (Stripe, Bizum) y CRMs",
        "Cumplimiento normativo europeo RGPD y accesibilidad",
      ],
    },
    {
      title: "Social Paid Media & Meta Ads",
      desc: "Campañas de prospección y remarketing en Instagram, Facebook, TikTok y LinkedIn B2B. Impactamos a los directores de compra y perfiles clave con creativos dinámicos.",
      href: "/redes",
      icon: Share2,
      metrics: "CPA optimizado con CAPI",
      badge: "Meta Business",
      features: [
        "Embudos de adquisición fría y retargeting multicanal",
        "Campañas específicas en LinkedIn para directores y gerentes B2B",
        "Implementación de Meta Conversions API (CAPI)",
        "Estrategias de contenido orgánico y prueba social",
      ],
    },
    {
      title: "Producción Audiovisual Publicitaria",
      desc: "Producción de vídeo pensada exclusivamente para anuncios de alto rendimiento. Creamos piezas dinámicas que superan la ceguera publicitaria en los primeros 3 segundos.",
      href: "/audiovisual",
      icon: Video,
      metrics: "Mayor retención en los primeros 3s",
      badge: "Creatividad para Ads",
      features: [
        "Análisis de ganchos (hooks) y tendencias de mercado",
        "Edición nativa para formatos verticales (Reels, TikTok)",
        "Vídeos testimoniales, demos de producto y contenido de marca",
        "Testeo continuo de variantes creativas A/B",
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <main className="relative min-h-screen bg-[#07090e] selection:bg-orange-500/30 overflow-hidden">
        {/* Hero */}
        <section className="relative z-10 pt-14 pb-16 md:pt-20 md:pb-24 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CATÁLOGO TÉCNICO DE SOLUCIONES · ESPAÑA</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Servicios de Marketing Digital Integrados con Enfoque en ROAS
            </h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Combinamos ingeniería de datos, optimización algorítmica y creatividad publicitaria para generar crecimiento predecible en empresas españolas.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="relative z-10 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {services.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.title}
                  className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-orange-500/30 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-mono font-medium">
                        {srv.badge}
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono">
                        {srv.metrics}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {srv.title}
                    </h2>

                    <p className="text-sm text-slate-300 leading-relaxed">{srv.desc}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {srv.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                      <Link
                        href={srv.href}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium text-xs transition-colors"
                      >
                        <span>Conoce los detalles del servicio</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="#presupuesto"
                        className="text-xs text-slate-400 hover:text-white underline underline-offset-4"
                      >
                        Solicitar presupuesto
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-slate-950/80 p-6 rounded-2xl border border-slate-800/80 space-y-4">
                    <h3 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                      Telemetría & Metodología
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Implementamos trazabilidad del servidor mediante Google Tag Manager Server-Side y Meta Conversions API para atribuir cada euro invertido a su retorno comercial exacto.
                    </p>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
                      <div className="flex justify-between text-slate-400">
                        <span>ESTADO DE OPERACIÓN</span>
                        <span className="text-emerald-400">ACTIVO</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>MODELO DE TRABAJO</span>
                        <span className="text-white">Escuadrón Técnico</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>PERMANENCIA</span>
                        <span className="text-emerald-400">Mes a mes</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Budget Form */}
        <section id="presupuesto" className="relative z-10 py-20 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BudgetForm sourceContext="Página de Catálogo de Servicios" />
          </div>
        </section>
      </main>
    </>
  );
}
