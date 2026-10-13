import Link from "next/link";
import {
  Award,
  ArrowRight,
} from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Casos de Éxito & ROAS en España | Estudios de Crecimiento — acohete.es",
  description:
    "Estudios detallados de cómo optimizamos costes por adquisición (CPA) y multiplicamos el retorno publicitario en empresas de comercio electrónico y B2B.",
  path: "/caso-exito",
  clPath: "/caso-exito",
});

export default function CasoExitoPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Casos de Éxito", url: "/caso-exito" },
  ]);

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
              <Award className="w-3.5 h-3.5" />
              <span>ESTUDIOS DE IMPACTO FINANCIERO Y RENDIMIENTO</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Casos de Éxito: Cómo Escalamos el ROAS de Nuestros Clientes
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Análisis paso a paso de la metodología aplicada: diagnóstico inicial, reestructuración técnica, optimización de algoritmos de puja y escalado de presupuesto.
            </p>
          </div>
        </section>

        {/* Detailed Case Study */}
        <section className="relative z-10 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <span className="text-xs font-mono text-orange-400 font-semibold uppercase">
                    Caso de Estudio #01 · E-commerce de Moda & Accesorios
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    De ROAS 2.1x a ROAS 6.8x en 90 Días
                  </h2>
                </div>
                <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono font-bold text-lg">
                  +323% Crecimiento Neto
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs text-slate-400 font-mono mb-1">EL PROBLEMA INICIAL</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Campañas de Google Ads con palabras clave excesivamente amplias que consumían el 65% del presupuesto sin generar compras atribuibles. Píxel de Meta perdiendo hasta un 40% de conversiones por iOS.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs text-orange-400 font-mono mb-1">LA INTERVENCIÓN TÉCNICA</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Instalación de GTM Server-Side en servidor cloud europeo, activación de Meta CAPI y migración de Google Ads a estructuras Performance Max segmentadas por margen neto.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs text-emerald-400 font-mono mb-1">EL RESULTADO FINAL</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    El ROAS global pasó de 2.1x a 6.8x, permitiendo duplicar el presupuesto mensual de inversión publicitaria manteniendo la rentabilidad operativa.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                <div className="text-xs text-slate-400">
                  Tiempo de ejecución: <strong className="text-white">90 días continuos</strong>
                </div>
                <Link
                  href="#presupuesto"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium text-xs transition-colors"
                >
                  <span>Solicitar estudio para mi caso</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Presupuesto */}
        <section id="presupuesto" className="relative z-10 py-20 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BudgetForm sourceContext="Página Casos de Éxito" />
          </div>
        </section>
      </main>
    </>
  );
}
