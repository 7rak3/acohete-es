import Link from "next/link";
import {
  Car,
  ArrowRight,
  MapPin,
  Calendar,
  Settings,
} from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
import { constructMetadata, generateBreadcrumbSchema, generateFaqSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Marketing para Automoción & Talleres en España — acohete.es",
  description:
    "Estrategias digitales para talleres mecánicos, concesionarios y tiendas de recambios en España. Captación local en Google Maps, Google Ads y catálogos de piezas.",
  path: "/marketing-automotriz",
  clPath: "/marketing-automotriz",
});

export default function MarketingAutomotrizPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Sectores", url: "/servicios" },
    { name: "Marketing Automoción España", url: "/marketing-automotriz" },
  ]);

  const faqs = [
    {
      question: "¿Cómo consiguen que entren más coches al taller cada semana?",
      answer:
        "Combinamos campañas locales de máxima urgencia en Google Ads (búsquedas como 'taller cambio de distribución cerca de mí', 'reparación caja de cambios Madrid') con optimización de fichas de Google Business Profile para copar el mapa local.",
    },
    {
      question: "¿Trabajan con tiendas online de recambios y repuestos?",
      answer:
        "Sí. Desarrollamos filtros avanzados por Marca / Modelo / Año / Motorización vinculados con Google Shopping para vender piezas compatibles directamente al consumidor y a profesionales.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="relative min-h-screen bg-[#07090e] selection:bg-orange-500/30 overflow-hidden">
        <section className="relative z-10 pt-14 pb-16 md:pt-20 md:pb-24 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-6">
              <Car className="w-3.5 h-3.5" />
              <span>TALLERES MECÁNICOS, RECAMBIOS & CONCESIONARIOS · ESPAÑA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Marketing para el Sector Automoción en España
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Llena la agenda de tu taller mecánico, vende stock de vehículos o comercializa piezas de recambio con campañas de alta intención en Google y redes sociales.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="#presupuesto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/25"
              >
                <span>Pedir Propuesta para Automoción</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pilares */}
        <section className="relative z-10 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Google Ads Local & Mapas</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Aparición prioritaria en Google Maps y búsquedas por cercanía cuando un conductor tiene una avería o necesita mantenimiento.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <Settings className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Catálogos de Recambios</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  E-commerce estructurado por compatibilidad de motor y chasis para repuesteras y distribuidores mayoristas de piezas.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Reserva de Citas Online</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Integración de sistemas de cita previa automatizados conectados con WhatsApp para recordar la ITV o revisiones periódicas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="relative z-10 py-16 bg-slate-950/70 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">
              Preguntas Frecuentes sobre Marketing de Automoción
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
                  <h3 className="text-sm font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Presupuesto */}
        <section id="presupuesto" className="relative z-10 py-20 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BudgetForm initialService="Marketing Automoción & Talleres" sourceContext="Página Marketing Automotriz" />
          </div>
        </section>
      </main>
    </>
  );
}
