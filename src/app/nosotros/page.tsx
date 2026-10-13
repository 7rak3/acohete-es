import {
  Rocket,
  ShieldCheck,
  TrendingUp,
  Zap,
  HeartHandshake,
} from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Sobre Nosotros | Agencia de Growth Engineering & Performance — acohete.es",
  description:
    "Conoce la filosofía de acohete.es. Escuadrones técnicos multidisciplinares, contratos mes a mes sin permanencia forzada y foco 100% en retorno de inversión (ROAS) en España.",
  path: "/nosotros",
  clPath: "/nosotros",
});

export default function NosotrosPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Sobre Nosotros", url: "/nosotros" },
  ]);

  const values = [
    {
      title: "Foco Obsesivo en Resultados",
      desc: "No celebramos métricas de vanidad. Los likes y las impresiones no pagan nóminas; optimizamos para conseguir llamadas, leads cualificados y ventas en tu cuenta bancaria.",
      icon: TrendingUp,
    },
    {
      title: "Transparencia Radical",
      desc: "Las cuentas publicitarias están a tu nombre. Tienes acceso total a las métricas en tiempo real y explicamos cada decisión técnica de forma comprensible.",
      icon: ShieldCheck,
    },
    {
      title: "Velocidad de Ejecución",
      desc: "Implementamos cambios, pruebas de creativos y ajustes de pujas en cuestión de horas, no de semanas. La agilidad es la ventaja competitiva en el entorno digital actual.",
      icon: Zap,
    },
    {
      title: "Sin Contratos de Amarre",
      desc: "Creemos que la mejor manera de mantener a un cliente es haciéndole ganar dinero de forma recurrente. Trabajamos mes a mes con total libertad contractual.",
      icon: HeartHandshake,
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
              <Rocket className="w-3.5 h-3.5 rotate-45" />
              <span>LA FILOSOFÍA COHETE · MODELO DE ESCUADRONES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Ingeniería de Crecimiento para Empresas con Ambición en España
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Nacimos para desterrar el humo de las agencias tradicionales. Construimos sistemas técnicos de adquisición de clientes con rigor analítico, automatización e inteligencia artificial.
            </p>
          </div>
        </section>

        {/* Pilares de la filosofía */}
        <section className="relative z-10 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-orange-500/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-bold text-white mb-2">{val.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Presupuesto */}
        <section id="presupuesto" className="relative z-10 py-20 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BudgetForm sourceContext="Página Sobre Nosotros" />
          </div>
        </section>
      </main>
    </>
  );
}
