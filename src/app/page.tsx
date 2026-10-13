import Link from "next/link";
import Image from "next/image";
import {
  Rocket,
  Target,
  Search,
  Code2,
  Share2,
  Video,
  ShieldCheck,
  Zap,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BarChart3,
  Factory,
  ShoppingBag,
  Building,
  Wrench,
  Stethoscope,
  Pickaxe,
  Terminal,
  HelpCircle,
} from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
import TelemetryStatus from "@/components/TelemetryStatus";
import { constructMetadata, generateProfessionalServiceSchema, generateFaqSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Agencia de Marketing Digital en España | Google Ads, SEO & Desarrollo — acohete.es",
  description:
    "Agencia de marketing digital en España Google Partner Oficial. Sistemas de captación con IA, Google Ads de alto rendimiento, SEO Generativo (GEO), desarrollo web y producción audiovisual en Madrid, Barcelona y toda la península.",
  path: "/",
  clPath: "/",
});

export default function Home() {
  const serviceSchema = generateProfessionalServiceSchema();

  const faqs = [
    {
      question: "¿Por qué trabajar con acohete.es en España en vez de una agencia tradicional?",
      answer:
        "Operamos con escuadrones técnicos multidisciplinares orientados a resultados medibles y ROAS directo. No vendemos métricas de vanidad (likes o impresiones sin conversión), implementamos tracking del servidor (Server-Side) y nuestros contratos son mes a mes sin cláusulas forzosas de permanencia.",
    },
    {
      question: "¿Qué es el SEO Generativo (GEO) y cómo ayuda a mi negocio?",
      answer:
        "Es la optimización para que los nuevos motores de búsqueda basados en inteligencia artificial (SearchGPT, Perplexity, Google Gemini) citen y recomienden tu marca en sus respuestas contextuales, captando clientes con alta intención de compra antes que la competencia.",
    },
    {
      question: "¿Cómo gestionan el presupuesto publicitario en Google Ads y Meta Ads?",
      answer:
        "La inversión publicitaria se paga directamente a las plataformas desde tu cuenta empresarial, garantizando 100% de transparencia. Nosotros cobramos una comisión de gestión o fee fijo según el volumen, con optimización diaria mediante IA y análisis de atribución real.",
    },
    {
      question: "¿Trabajan con empresas en toda España?",
      answer:
        "Sí. Gestionamos proyectos para empresas en Madrid, Barcelona, Valencia, Sevilla, Bilbao, Málaga y todo el territorio nacional, además de operaciones transfronterizas para marcas que venden en la Unión Europea o Latinoamérica.",
    },
    {
      question: "¿Qué incluye la auditoría técnica gratuita de 360°?",
      answer:
        "Analizamos ciberseguridad y cabeceras de servidor, Core Web Vitals con datos reales de usuarios (CrUX), detección de fugas en tus campañas de Google Ads y compatibilidad de tu web para ser indexada por motores de Inteligencia Artificial.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="relative min-h-screen bg-[#07090e] selection:bg-orange-500/30 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-b from-orange-500/15 via-amber-500/10 to-transparent blur-3xl rounded-full" />
          <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-10 -right-48 w-96 h-96 bg-orange-600/10 blur-3xl rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        {/* 1. HERO SECTION */}
        <section className="relative z-10 pt-12 pb-20 md:pt-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Terminal pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-orange-500/30 text-orange-400 text-xs font-mono mb-8 backdrop-blur-md shadow-sm">
              <Terminal className="w-3.5 h-3.5 text-orange-400" />
              <span>[ SISTEMAS_DE_ADQUISICIÓN_CON_IA · ESPAÑA ]</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] max-w-5xl mx-auto">
              Agencia de Marketing Digital en España <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-rose-400 bg-clip-text text-transparent">
                Sistemas de Adquisición con IA & Performance
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
              Transformamos la inversión digital en facturación predecible. Especialistas certificados en{" "}
              <strong className="text-white font-medium">Google Ads</strong>,{" "}
              <strong className="text-white font-medium">SEO Generativo (GEO)</strong>, desarrollo web de alta conversión y producción audiovisual para empresas en Madrid, Barcelona y toda España.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Link
                href="/auditoria"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-sm shadow-xl shadow-orange-500/25 transition-all hover:-translate-y-0.5"
              >
                <span>Auditoría Gratuita 360°</span>
                <Zap className="w-4 h-4" />
              </Link>
              <Link
                href="#presupuesto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-sm transition-all"
              >
                <span>Pedir Presupuesto</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </Link>
            </div>

            {/* Telemetry live status */}
            <div className="max-w-2xl mx-auto mb-6">
              <TelemetryStatus />
            </div>
          </div>
        </section>

        {/* 2. OFFICIAL PARTNERS / BADGES */}
        <section className="relative z-10 py-8 border-y border-slate-800/80 bg-slate-950/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-left">
                <a
                  href="https://partnersdirectory.withgoogle.com/partners/6942800870"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 p-2 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/40 transition-colors"
                >
                  <Image
                    src="/img/badges/insignia-google-partner-agencia-marketing.svg"
                    alt="Google Partner Oficial España"
                    width={180}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </a>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">Agencia Google Partner Oficial</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                      Certificado Vigente
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Garantía de rendimiento, buenas prácticas algorítmicas y gestión de cuentas publicitarias con los más altos estándares europeos.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Sin permanencia obligatoria</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-orange-400" />
                  <span>Foco 100% en ROAS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE SERVICES GRID */}
        <section className="relative z-10 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SOLUCIONES INTEGRADAS DE ADQUISICIÓN</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Servicios de Marketing Digital & Performance
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
                Cada servicio está diseñado para trabajar en sinergia con los demás, evitando silos y maximizando el retorno neto de cada euro invertido.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service 1: Google Ads */}
              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-orange-500/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-5 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Google Ads & Performance Max</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    Campañas de búsqueda, Shopping, YouTube y PMax optimizadas para captar demanda existente con alta intención de compra en España.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Estructuras Skag & Hag de alta relevancia</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Seguimiento de conversiones offline & CRM</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Filtro diario de términos negativos</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/ads"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 pt-4 border-t border-slate-800"
                >
                  <span>Explorar Google Ads</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Service 2: SEO & GEO */}
              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Posicionamiento SEO & GEO (IA)</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    Estrategia orgánica para copar los primeros resultados en Google España y ser citado por SearchGPT, Perplexity y Gemini.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Auditoría técnica y optimización Core Web Vitals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Marcado Schema.org enriquecido para IA</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Linkbuilding editorial en medios españoles</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/seo"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 pt-4 border-t border-slate-800"
                >
                  <span>Explorar Posicionamiento SEO</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Service 3: Desarrollo Web */}
              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Diseño & Desarrollo Web Next.js</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    Páginas corporativas, tiendas online y landings de conversión ultrarrápidas con arquitectura Next.js y Tailwind CSS.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Tiempo de carga real LCP inferior a 0.8s</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Arquitectura headless y serverless</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Diseño UX/UI orientado a captar llamadas y leads</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/web"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 pt-4 border-t border-slate-800"
                >
                  <span>Explorar Desarrollo Web</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Service 4: Redes Sociales */}
              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 transition-transform">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Social Paid Media & Meta Ads</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    Estrategias multicanal en Instagram, TikTok y LinkedIn B2B para generar notoriedad e impacto en tomadores de decisión.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Funnels de prospección y retargeting dinámico</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Campañas para directores en LinkedIn</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Integración con Meta Conversions API (CAPI)</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/redes"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 pt-4 border-t border-slate-800"
                >
                  <span>Explorar Redes Sociales</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Service 5: Audiovisual */}
              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-rose-500/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-5 group-hover:scale-110 transition-transform">
                    <Video className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Producción Audiovisual para Ads</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    Creación de videos publicitarios, formatos UGC, demos de producto y contenido cinematográfico de alta retención.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Ganchos (hooks) en los primeros 3 segundos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Variantes de creativos para pruebas A/B constantes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Adaptación a formatos 9:16 (Reels/TikTok) y 16:9</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/audiovisual"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 pt-4 border-t border-slate-800"
                >
                  <span>Explorar Audiovisual</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Service 6: Hub integral */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-orange-500/10 via-slate-900/80 to-slate-950 border border-orange-500/30 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-5">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Ecosistema Completo de Adquisición</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    ¿Buscas delegar por completo la captación de clientes de tu empresa? Desplegamos un escuadrón técnico exclusivo sin permanencia forzada.
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    Incluye auditoría previa, arquitectura de datos, pauta publicitaria en Google y Meta, SEO técnico y optimizaciones quincenales de conversión.
                  </p>
                </div>
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 px-4 py-2.5 rounded-xl transition-all self-start"
                >
                  <span>Ver Todos los Servicios</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE 5-LAYER GROWTH ARCHITECTURE */}
        <section className="relative z-10 py-20 bg-slate-950/80 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                Ingeniería de Crecimiento
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                Arquitectura de Crecimiento Digital de 5 Capas
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-3">
                No hacemos marketing improvisado. Cada cuenta se construye sobre un framework técnico probado.
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {[
                {
                  capa: "CAPA 1",
                  title: "Núcleo Técnico y Seguridad",
                  desc: "Cabeceras HTTP seguras, certificados SSL, latencia de respuesta en servidor < 200ms y cumplimiento RGPD.",
                  icon: ShieldCheck,
                },
                {
                  capa: "CAPA 2",
                  title: "Manto de Datos y Telemetría",
                  desc: "Server-Side Tracking (GTM Cloud), Meta Conversions API y Google Consent Mode v2 para medir el 100% de ventas reales.",
                  icon: BarChart3,
                },
                {
                  capa: "CAPA 3",
                  title: "Superficie Orgánica (GEO & SEO)",
                  desc: "Entidades Schema.org, velocidad de carga óptima y optimización semántica para ser citados por motores generativos de IA.",
                  icon: Search,
                },
                {
                  capa: "CAPA 4",
                  title: "Atmósfera de Adquisición",
                  desc: "Campañas de Google Ads (Búsqueda y PMax) y Meta Ads con puja inteligente por valor real de conversión y ROAS.",
                  icon: Target,
                },
                {
                  capa: "CAPA 5",
                  title: "Producción Creativa & Audiovisual",
                  desc: "Desarrollo de piezas publicitarias, ganchos de alta retención y copywriting persuasivo para batir al algoritmo.",
                  icon: Video,
                },
              ].map((layer) => {
                const Icon = layer.icon;
                return (
                  <div
                    key={layer.capa}
                    className="p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-start gap-4 hover:border-orange-500/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 text-orange-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 font-bold">
                          {layer.capa}
                        </span>
                        <h3 className="text-sm font-bold text-white">{layer.title}</h3>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{layer.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. SECTORS / INDUSTRY VERTICALS */}
        <section className="relative z-10 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                Especialización Vertical
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                Estrategias de Marketing por Sector en España
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-3">
                No es lo mismo vender maquinaria industrial que moda online. Adaptamos los embudos al ciclo de compra real de tu industria.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Industrial & Proveedores B2B",
                  desc: "Ciclos largos de decisión, captación de directores de compras e ingenieros mediante Google Search y LinkedIn.",
                  href: "/marketing-industrial",
                  icon: Factory,
                },
                {
                  title: "E-commerce & Tiendas Online",
                  desc: "Rentabilidad por producto, Google Shopping feed optimizado, retargeting dinámico y reducción de carritos abandonados.",
                  href: "/marketing-ecommerce",
                  icon: ShoppingBag,
                },
                {
                  title: "Inmobiliarias & Promociones",
                  desc: "Captación de inversores y compradores para promociones de obra nueva, suelo y activos residenciales de ticket alto.",
                  href: "/marketing-inmobiliario",
                  icon: Building,
                },
                {
                  title: "Automoción & Talleres",
                  desc: "Concesionarios, talleres mecánicos y catálogos de recambios con segmentación por modelo y telemetría comercial.",
                  href: "/marketing-automotriz",
                  icon: Wrench,
                },
                {
                  title: "Salud, Clínicas & Médicos",
                  desc: "Estrategias éticas conforme a la normativa sanitaria española para citas médicas, odontología y clínicas especializadas.",
                  href: "/marketing-medico",
                  icon: Stethoscope,
                },
                {
                  title: "Minería & Maquinaria Pesada",
                  desc: "Prospección técnica para empresas proveedoras de maquinaria de extracción, áridos, obra civil e ingeniería minera.",
                  href: "/marketing-minero",
                  icon: Pickaxe,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-orange-500/40 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">{item.desc}</p>
                    </div>
                    <span className="text-xs font-semibold text-orange-400 flex items-center gap-1">
                      <span>Ver detalles del sector</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. FAQS SECTION */}
        <section className="relative z-10 py-16 bg-slate-950/70 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                Transparencia Total
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                Preguntas Frecuentes sobre acohete.es
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 text-left"
                >
                  <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-orange-400 shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. BUDGET REQUEST SECTION (#presupuesto) */}
        <section id="presupuesto" className="relative z-10 py-20 lg:py-28 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BudgetForm sourceContext="Página de Inicio" />
          </div>
        </section>
      </main>
    </>
  );
}
