import {
  MessageSquare,
  Mail,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Contacto & Presupuesto | Agencia de Marketing Digital — acohete.es",
  description:
    "Pide presupuesto o solicita una reunión con nuestros consultores técnicos en España. Atención directa por WhatsApp, formulario comercial y respuesta en menos de 24 horas.",
  path: "/contacto",
  clPath: "/contacto",
});

export default function ContactoPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Contacto", url: "/contacto" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <main className="relative min-h-screen bg-[#07090e] selection:bg-orange-500/30 overflow-hidden py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>RESPUESTA TÉCNICA EN MENOS DE 24 HORAS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Hablemos de tu Proyecto en España
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              Sin comerciales pesados. Hablarás directamente con ingenieros de crecimiento y especialistas en medios de pago para evaluar la viabilidad de tus objetivos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form */}
            <div className="lg:col-span-7">
              <BudgetForm sourceContext="Página de Contacto Principal" />
            </div>

            {/* Direct channels & office information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase font-mono tracking-wider">
                  Canales de Contacto Directo
                </h3>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/56946527753?text=Hola,%20contacto%20desde%20acohete.es%20para%20solicitar%20información."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-all group"
                  >
                    <MessageSquare className="w-5 h-5 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-xs font-bold text-white flex items-center justify-between">
                        <span>WhatsApp Directo</span>
                        <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <div className="text-xs text-emerald-400 font-mono mt-0.5">
                        +56 9 4652 7753
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Atención para proyectos en España y Latinoamérica (horario CET y CLT).
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:contacto@acohete.es"
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-300 hover:border-orange-500/40 transition-all group"
                  >
                    <Mail className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-xs font-bold text-white flex items-center justify-between">
                        <span>Correo Electrónico</span>
                        <ArrowUpRight className="w-4 h-4 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <div className="text-xs text-slate-200 font-mono mt-0.5">
                        contacto@acohete.es
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Recepción de briefs, convocatorias y propuestas corporativas.
                      </p>
                    </div>
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>Lunes a Viernes: 09:00 - 19:00 (Hora Peninsular Española)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Acuerdo de Confidencialidad (NDA) disponible bajo petición</span>
                  </div>
                </div>
              </div>

              {/* Red Cohete internacional */}
              <div className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800/80 text-xs">
                <span className="font-mono text-orange-400 font-semibold uppercase text-[11px]">
                  Red Internacional Cohete
                </span>
                <p className="text-slate-300 mt-1.5 leading-relaxed">
                  Operamos con hubs técnicos en España y Chile, permitiendo cobertura horaria extendida para soporte crítico y gestión de pauta internacional.
                </p>
                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-slate-400">¿Operas en Chile?</span>
                  <a
                    href="https://agenciacohete.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    agenciacohete.cl 🇨🇱
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
