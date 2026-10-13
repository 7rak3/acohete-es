import {
  Users,
  Mail,
} from "lucide-react";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Trabaja con Nosotros | Carreras & Talento Técnico — acohete.es",
  description:
    "Únete a los escuadrones técnicos de acohete.es. Buscamos especialistas en Google Ads, SEO técnico, desarrolladores Next.js y editores de vídeo para campañas en España.",
  path: "/trabaja-con-nosotros",
  clPath: "/trabaja-con-nosotros",
});

export default function TrabajaConNosotrosPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Trabaja con Nosotros", url: "/trabaja-con-nosotros" },
  ]);

  const roles = [
    {
      title: "Media Buyer Senior (Google Ads & PMax)",
      type: "Remoto (España / Latam) · Tiempo Completo",
      desc: "Gestión de cuentas con inversión publicitaria superior a 10.000 €/mes, optimización de feeds de Shopping y dominio de seguimiento offline con CRM.",
    },
    {
      title: "Desarrollador Frontend (Next.js & Tailwind)",
      type: "Remoto (España / Latam) · Proyecto / Tiempo Completo",
      desc: "Construcción de landing pages de alta conversión, headless CMS, optimización agresiva de Core Web Vitals y TypeScript moderno.",
    },
    {
      title: "Especialista en SEO Técnico & GEO",
      type: "Remoto · Tiempo Completo",
      desc: "Auditorías de rastreo, arquitectura de entidades semánticas con marcado JSON-LD y optimización para modelos generativos de IA.",
    },
    {
      title: "Editor de Vídeo Publicitario para Ads",
      type: "Remoto · Proyecto / Tiempo Completo",
      desc: "Creación de creativos en formato vertical (9:16), hooks de alto impacto en los primeros 3 segundos y variantes para testeo A/B constante.",
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
              <Users className="w-3.5 h-3.5" />
              <span>CULTURA DE ALTO RENDIMIENTO & CRECIMIENTO</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Únete a Nuestro Escuadrón Técnico
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Buscamos personas apasionadas por los datos, la tecnología y el rendimiento publicitario. Trabajo 100% remoto, autonomía real y foco en resultados.
            </p>
          </div>
        </section>

        {/* Posiciones abiertas */}
        <section className="relative z-10 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl font-bold text-white mb-8">Posiciones Abiertas</h2>

            {roles.map((role, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-orange-500/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="text-xs font-mono text-orange-400">{role.type}</div>
                  <h3 className="text-lg font-bold text-white">{role.title}</h3>
                  <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">{role.desc}</p>
                </div>

                <a
                  href={`mailto:talento@acohete.es?subject=Candidatura:%20${encodeURIComponent(
                    role.title
                  )}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-orange-500 hover:text-white text-slate-200 text-xs font-medium transition-colors shrink-0"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Enviar CV / Portafolio</span>
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
