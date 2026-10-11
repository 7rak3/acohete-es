import Link from "next/link";
import {
  Rocket,
  MessageSquare,
  Mail,
  Layers,
  Sparkles,
  ShieldCheck,
  Code2,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import LaunchNotification from "@/components/LaunchNotification";
import TelemetryStatus from "@/components/TelemetryStatus";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#07090e] selection:bg-orange-500/30">
      {/* Background ambient lighting effects */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-orange-500/15 via-rose-500/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 -right-48 w-96 h-96 bg-orange-600/10 blur-3xl rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Top Navigation */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30 shadow-lg shadow-orange-500/10">
            <Rocket className="w-5 h-5 text-orange-400 rotate-45 transform" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-bold tracking-tight text-white font-mono">
              acohete
            </span>
            <span className="text-xs px-1.5 py-0.5 rounded-md bg-orange-500/20 text-orange-400 font-mono font-semibold border border-orange-500/30">
              .es
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Construyendo el futuro
          </span>
          <Link
            href="https://wa.me/56946527753?text=Hola%20Rodrigo,%20te%20escribo%20desde%20acohete.es."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-slate-500 text-slate-200 hover:text-white transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            Contacto
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-12 md:py-16 text-center flex-1 flex flex-col justify-center items-center">
        {/* Domain announcement pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-8 backdrop-blur-md shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-orange-400" />
          <span>NUEVO DOMINIO ASEGURADO · ACOHETE.ES</span>
        </div>

        {/* Central Animated Rocket Graphic */}
        <div className="relative mb-8 group cursor-default">
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-red-500/20 rounded-full blur-xl animate-pulse-glow" />
          <div className="relative w-28 h-28 rounded-3xl bg-slate-950/80 border border-orange-500/40 p-4 flex flex-col items-center justify-center shadow-2xl backdrop-blur-xl animate-float">
            <Rocket className="w-14 h-14 text-orange-400 transform -rotate-45" />
            <div className="w-6 h-2 mt-1 rounded-full bg-gradient-to-r from-orange-500 via-amber-300 to-red-500 blur-[1px] animate-flame" />
          </div>
        </div>

        {/* Headlines */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Estamos preparando{" "}
          <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-rose-400 bg-clip-text text-transparent">
            el despegue
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          <strong className="text-white font-medium">acohete.es</strong> se
          encuentra actualmente en fase activa de desarrollo. Muy pronto
          lanzaremos soluciones de ingeniería de software, arquitectura cloud y
          automatizaciones con Inteligencia Artificial pensadas para impulsar
          empresas a gran velocidad.
        </p>

        {/* Early notification signup */}
        <div className="w-full mb-12">
          <LaunchNotification />
        </div>

        {/* Live Systems Telemetry */}
        <div className="w-full mb-14">
          <TelemetryStatus />
        </div>

        {/* Solutions Preview Cards */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-12">
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-orange-500/30 transition-all">
            <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-3">
              <Code2 className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-white mb-1.5">
              Software de Alto Rendimiento
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Desarrollo de aplicaciones web y plataformas escalables usando
              Next.js, TypeScript y arquitecturas serverless de última
              generación.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-amber-500/30 transition-all">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-white mb-1.5">
              Automatización & Agentes IA
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Integración de modelos de inteligencia artificial, flujos
              autónomos y bots de atención oficial con Meta Cloud API.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-all">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-white mb-1.5">
              Infraestructura & Cloud Edge
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Conectividad con Cloudflare, almacenamiento distribuido y
              servidores privados para soberanía total de datos.
            </p>
          </div>
        </div>

        {/* Urgent Contact Direct Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <span className="text-slate-400">
            ¿Necesitas contactarnos antes del lanzamiento oficial?
          </span>
          <Link
            href="https://wa.me/56946527753?text=Hola%20Rodrigo,%20te%20contacto%20desde%20acohete.es%20para%20un%20proyecto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium underline underline-offset-4"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            WhatsApp (+56 9 4652 7753)
            <ArrowUpRight className="w-3 h-3" />
          </Link>
          <span className="text-slate-600">·</span>
          <Link
            href="mailto:contacto@acohete.es"
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-medium underline underline-offset-4"
          >
            <Mail className="w-3.5 h-3.5" />
            contacto@acohete.es
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-slate-800/70 bg-slate-950/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span>© 2026 acohete.es</span>
            <span>·</span>
            <span>Un proyecto de la red Cohete</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Desplegado en Vercel
            </span>
            <span>·</span>
            <span className="text-slate-400">SSL 256-bit Seguro</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
