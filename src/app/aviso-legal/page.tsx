import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Aviso Legal (LSSI-CE) — acohete.es",
  description: "Información legal y datos identificativos de acohete.es conforme a la Ley 34/2002 (LSSI-CE) en España.",
  path: "/aviso-legal",
});

export default function AvisoLegalPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Aviso Legal", url: "/aviso-legal" },
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
              CUMPLIMIENTO NORMATIVO ESPAÑOL
            </span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight mt-2">
              Aviso Legal (LSSI-CE)
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Última actualización: Enero de 2026. Conforme a la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">1. Datos Identificativos del Titular</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que el presente sitio web <strong>acohete.es</strong> es operado y titularidad de la red comercial Cohete (Agencia Cohete SpA y colaboradores en España), con correo electrónico de contacto: <strong>contacto@acohete.es</strong> y atención telefónica/WhatsApp: <strong>+56 9 4652 7753</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">2. Objeto y Ámbito de Aplicación</h2>
            <p>
              El presente aviso legal regula el acceso, navegación y uso del sitio web <strong>https://acohete.es</strong>, así como las responsabilidades derivadas del uso de sus contenidos (textos, gráficos, códigos de programación, software, etc.).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">3. Propiedad Intelectual e Industrial</h2>
            <p>
              Todos los contenidos de acohete.es, incluyendo su diseño gráfico, código fuente en Next.js, logotipos, marcas comerciales y textos, están protegidos por las leyes españolas e internacionales de propiedad intelectual e industrial. Queda prohibida la reproducción, distribución o comunicación pública de dichos elementos sin autorización previa y por escrito del titular.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">4. Exclusión de Responsabilidad</h2>
            <p>
              acohete.es no se hace responsable de los daños derivados de caídas del servidor ajenas a su control, virus o interferencias informáticas causadas por terceros, ni de la exactitud de los contenidos en enlaces externos pertenecientes a terceros.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">5. Legislación Aplicable y Jurisdicción</h2>
            <p>
              Para la resolución de cualquier controversia relativa a este sitio web o a las actividades en él desarrolladas, será de aplicación la legislación española vigente, sometiéndose las partes a los Juzgados y Tribunales competentes del territorio español.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
