import Link from "next/link";
import Image from "next/image";
import {
  Briefcase,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Portafolio de Proyectos & Casos de Éxito en España — acohete.es",
  description:
    "Descubre los proyectos, transformaciones de e-commerce y campañas de alto rendimiento desarrolladas por el equipo de acohete.es.",
  path: "/portafolio",
  clPath: "/portafolio",
});

export default function PortafolioPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Portafolio", url: "/portafolio" },
  ]);

  const projects = [
    {
      title: "Escalado E-commerce D2C Moda & Lifestyle",
      category: "Google Ads + Performance Max + CRO",
      result: "ROAS 6.8x (+420% en facturación neta)",
      desc: "Reestructuración completa del feed de Google Merchant Center, segmentación por margen de producto y activación de retargeting dinámico con CAPI.",
      img: "/img/portafolio-1.png",
    },
    {
      title: "Captación B2B para Empresa de Maquinaria Industrial",
      category: "Google Search + LinkedIn Ads B2B",
      result: "84 leads cualificados de alta especificación en 90 días",
      desc: "Campaña de búsqueda técnica hipersegmentada por referencias mecánicas con landing page ultrarrápida en Next.js.",
      img: "/img/portafolio-2.png",
    },
    {
      title: "Portal Corporativo & Sistema Inmobiliario",
      category: "Desarrollo Web Next.js + SEO Generativo",
      result: "LCP 0.6s y +180% de tráfico orgánico en 4 meses",
      desc: "Migración de arquitectura monolítica a Next.js y Cloudflare, mejorando la velocidad de carga y posicionando para palabras clave de obra nueva.",
      img: "/img/portafolio-3.png",
    },
    {
      title: "Campaña de Citas para Red de Clínicas Médicas",
      category: "Meta Ads + Google Local Search",
      result: "Reducción de CPA en un 42% y 1.200+ citas generadas",
      desc: "Embudos de cualificación médica previa con agendamiento asistido y recordatorios automatizados de asistencia.",
      img: "/img/portafolio-4.png",
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-6">
              <Briefcase className="w-3.5 h-3.5" />
              <span>RESULTADOS MEDIBLES EN NEGOCIOS REALES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Portafolio de Proyectos & Casos de Transformación Digital
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              No mostramos maquetas conceptuales. Estos son proyectos reales donde la combinación de tecnología y estrategia publicitaria impulsó las ventas de nuestros clientes.
            </p>
          </div>
        </section>

        {/* Proyectos */}
        <section className="relative z-10 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-slate-900/40 border border-slate-800 overflow-hidden hover:border-orange-500/40 transition-all flex flex-col justify-between"
                >
                  <div className="relative h-60 w-full bg-slate-950 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-mono font-medium text-orange-400 border border-slate-800">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="text-xs font-mono font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{item.result}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed mt-2">{item.desc}</p>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                      <Link
                        href="#presupuesto"
                        className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1"
                      >
                        <span>Quiero resultados similares para mi empresa</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Presupuesto */}
        <section id="presupuesto" className="relative z-10 py-20 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BudgetForm sourceContext="Página Portafolio" />
          </div>
        </section>
      </main>
    </>
  );
}
