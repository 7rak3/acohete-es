import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Política de Privacidad (RGPD) — acohete.es",
  description: "Tratamiento de datos personales y derechos ARCO según el Reglamento (UE) 2016/679 (RGPD) y LOPDGDD en España.",
  path: "/privacidad",
  clPath: "/privacidad",
});

export default function PrivacidadPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Política de Privacidad", url: "/privacidad" },
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
              REGLAMENTO GENERAL DE PROTECCIÓN DE DATOS (RGPD)
            </span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight mt-2">
              Política de Privacidad y Protección de Datos
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">1. Responsable del Tratamiento</h2>
            <p>
              El responsable del tratamiento de los datos recabados en <strong>acohete.es</strong> es el equipo titular del dominio, con dirección de contacto electrónica: <strong>contacto@acohete.es</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">2. Finalidad del Tratamiento de Datos</h2>
            <p>Los datos facilitados por el usuario a través de formularios de contacto o presupuesto son tratados con las siguientes finalidades:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Gestionar y dar respuesta a las solicitudes de presupuesto, auditoría y consultas comerciales.</li>
              <li>Realizar el seguimiento de proyectos y propuestas contratadas.</li>
              <li>Envío de comunicaciones técnicas o novedades operativas con el consentimiento previo del usuario.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">3. Base Legal del Tratamiento</h2>
            <p>
              La base legal para el tratamiento de tus datos es el <strong>consentimiento expreso</strong> otorgado al marcar la casilla de aceptación en nuestros formularios, así como la ejecución de medidas precontractuales cuando solicitas un presupuesto.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">4. Conservación de los Datos</h2>
            <p>
              Los datos personales se conservarán mientras dure la relación precontractual o contractual, o hasta que el interesado solicite su supresión, manteniéndose posteriormente bloqueados durante los plazos legalmente exigidos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">5. Derechos del Usuario (ARCO / RGPD)</h2>
            <p>
              Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición enviando un correo electrónico a <strong>contacto@acohete.es</strong> adjuntando copia de tu documento identificativo. Asimismo, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
