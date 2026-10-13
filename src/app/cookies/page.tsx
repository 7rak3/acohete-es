import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Política de Cookies — acohete.es",
  description: "Uso de cookies analíticas, técnicas y publicitarias en acohete.es conforme a las directrices de la AEPD.",
  path: "/cookies",
});

export default function CookiesPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Política de Cookies", url: "/cookies" },
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
              DIRECTIVA EUROPEA EPRIVACY & AEPD
            </span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight mt-2">
              Política de Cookies
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Información transparente sobre los archivos de seguimiento y almacenamiento local utilizados en acohete.es.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">1. ¿Qué es una Cookie?</h2>
            <p>
              Una cookie es un pequeño fichero de texto que se descarga en tu navegador web al visitar determinadas páginas. Permite a una página web almacenar y recuperar información sobre los hábitos de navegación de un usuario para facilitar su funcionamiento y mejorar la experiencia de navegación.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">2. Tipos de Cookies que Utilizamos</h2>
            <div className="space-y-2">
              <p>
                <strong>Cookies Técnicas / Necesarias:</strong> Imprescindibles para el funcionamiento correcto del sitio web, navegación y gestión de sesiones. No pueden ser desactivadas.
              </p>
              <p>
                <strong>Cookies Analíticas y de Rendimiento:</strong> Recogen datos estadísticos de forma anónima y agregada (como páginas visitadas o tiempos de carga) para optimizar el rendimiento técnico de la plataforma.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">3. Cómo Configurar o Desactivar las Cookies</h2>
            <p>
              Puedes rechazar las cookies no esenciales mediante nuestro banner de consentimiento o configurando las preferencias de privacidad en tu navegador (Chrome, Safari, Firefox, Edge).
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
