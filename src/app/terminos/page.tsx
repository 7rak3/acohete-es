import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Términos y Condiciones de Servicio — acohete.es",
  description: "Condiciones de contratación, alcance de servicios y acuerdos operativos de acohete.es.",
  path: "/terminos",
  clPath: "/terminos",
});

export default function TerminosPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Términos y Condiciones", url: "/terminos" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <main className="relative min-h-screen bg-[#07090e] selection:bg-orange-500/30 overflow-hidden py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-300 text-xs sm:text-sm leading-relaxed">
          <div className="border-b border-slate-800 pb-6">
            <span className="text-xs font-mono text-orange-400 uppercase font-semibold">
              CONDICIONES GENERALES DE CONTRATACIÓN
            </span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight mt-2">
              Términos y Condiciones de Servicio
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Condiciones aplicables a la prestación de servicios de marketing digital, desarrollo web y consultoría técnica.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">1. Modelo Operativo sin Permanencia</h2>
            <p>
              Salvo que se acuerde expresamente por escrito en una propuesta de desarrollo de software cerrado, los servicios de gestión recurrente (Google Ads, SEO, Social Ads) se contratan bajo la modalidad mensual sin compromiso de permanencia forzada, pudiendo ser cancelados mediante notificación previa con 15 días naturales de antelación.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">2. Propiedad de las Cuentas Publicitarias y Datos</h2>
            <p>
              Todas las cuentas publicitarias en Google Ads, Meta Business Suite o herramientas analíticas son propiedad exclusiva del cliente. acohete.es opera como gestor técnico autorizado. En caso de cese de la relación comercial, el cliente conserva íntegramente el historial, las campañas y los accesos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">3. Responsabilidad sobre la Inversión en Medios</h2>
            <p>
              Los costes de inversión publicitaria cobrados por terceros (Google, Meta, LinkedIn, etc.) son facturados directamente por dichas plataformas a la tarjeta o cuenta bancaria del cliente, no formando parte de los honorarios profesionales de acohete.es.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
