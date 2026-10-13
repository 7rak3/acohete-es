import {
  Zap,
  Target,
  Search,
  FileCheck,
  Lock,
} from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Auditoría 360° Gratuita | Velocidad, Ads, SEO & Seguridad — acohete.es",
  description:
    "Solicita una auditoría técnica completa de tu web y campañas en España. Medición de Core Web Vitals (CrUX), detección de fugas en Google Ads y compatibilidad con motores de IA.",
  path: "/auditoria",
  clPath: "/auditoria",
});

export default function AuditoriaPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Auditoría 360° Gratuita", url: "/auditoria" },
  ]);

  const auditPoints = [
    {
      title: "1. Ciberseguridad & Servidor",
      desc: "Revisión de certificados SSL/TLS, cabeceras de seguridad HTTP (HSTS, CSP), latencia de respuesta (TTFB) y vulnerabilidades en puertos públicos.",
      icon: Lock,
    },
    {
      title: "2. Velocidad Real (Google CrUX)",
      desc: "Análisis con datos de navegación de usuarios reales en España: LCP (Carga del elemento principal), INP (Interactividad) y CLS (Estabilidad visual).",
      icon: Zap,
    },
    {
      title: "3. Detección de Fugas en Google & Meta Ads",
      desc: "Revisión de términos de búsqueda negativos, concordancias de palabras clave que malgastan dinero y configuración de conversiones duplicadas.",
      icon: Target,
    },
    {
      title: "4. SEO On-Page & Preparación para IA",
      desc: "Comprobación de entidades Schema.org, rastreo de Googlebot y verificación de compatibilidad con motores generativos (SearchGPT, Perplexity).",
      icon: Search,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <main className="relative min-h-screen bg-[#07090e] selection:bg-orange-500/30 overflow-hidden">
        <section className="relative z-10 pt-14 pb-16 md:pt-20 md:pb-24 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6">
              <FileCheck className="w-3.5 h-3.5" />
              <span>DIAGNÓSTICO TÉCNICO PROFESIONAL · 100% GRATUITO</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Auditoría Digital 360° para Empresas en España
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Descubre exactamente qué está frenando tus ventas antes de gastar más dinero en publicidad o rediseños web innecesarios.
            </p>
          </div>
        </section>

        {/* 4 Puntos de la Auditoría */}
        <section className="relative z-10 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                ¿Qué analizamos?
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2">
                Los 4 Pilares Críticos de Rendimiento
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {auditPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/30 transition-all flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Formulario */}
        <section id="presupuesto" className="relative z-10 py-20 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white">Solicita tu Auditoría Sin Compromiso</h2>
              <p className="text-xs text-slate-400 mt-2">
                Te enviaremos un informe en PDF con conclusiones accionables en menos de 48 horas laborables.
              </p>
            </div>
            <BudgetForm initialService="Ecosistema Integral" sourceContext="Página Auditoría 360" />
          </div>
        </section>
      </main>
    </>
  );
}
