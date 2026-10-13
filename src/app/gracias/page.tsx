import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  FileCheck,
} from "lucide-react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "¡Solicitud Recibida con Éxito! — acohete.es",
  description: "Gracias por contactar con acohete.es. Un consultor técnico revisará tu caso y te responderá en breve.",
  path: "/gracias",
  clPath: "/gracias",
});

export default function GraciasPage() {
  return (
    <main className="relative min-h-[80vh] flex items-center justify-center bg-[#07090e] px-4 py-16 selection:bg-orange-500/30 overflow-hidden">
      <div className="max-w-xl w-full p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 text-center space-y-6 backdrop-blur-xl relative z-10 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-orange-400 uppercase font-semibold">
            FASE DE REVISIÓN INICIADA
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            ¡Hemos Recibido Tu Solicitud!
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Gracias por confiar en <strong className="text-white">acohete.es</strong>. Ya estamos analizando las métricas de tu sector para preparar una sesión técnica de diagnóstico.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-left text-xs space-y-2.5">
          <div className="font-semibold text-slate-200">Próximos Pasos:</div>
          <div className="flex items-center gap-2 text-slate-400">
            <Clock className="w-4 h-4 text-orange-400 shrink-0" />
            <span>Respuesta en menos de 24 horas laborables.</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Auditoría preliminar de tu web o cuentas publicitarias.</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Propuesta sin compromiso y sin permanencia forzada.</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/56946527753?text=Hola,%20acabo%20de%20enviar%20una%20solicitud%20desde%20acohete.es%20y%20me%20gustaría%20agilizar%20la%20revisión."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Agilizar por WhatsApp</span>
          </a>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
          >
            <span>Volver al Inicio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
