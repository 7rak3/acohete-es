import Link from "next/link";
import {
  Rocket,
  ShieldCheck,
  Mail,
  MessageSquare,
  Globe2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-slate-800/80 bg-[#05070b] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <Rocket className="w-4 h-4 rotate-45" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-mono">
                acohete<span className="text-orange-400">.es</span>
              </span>
            </Link>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Agencia de Marketing Digital, Growth Engineering y Desarrollo Web en España. Especialistas certificados en adquisición con IA, Google Ads, SEO Generativo y arquitectura Next.js orientada a ventas predecibles.
            </p>

            {/* Network switch */}
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 max-w-sm">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-medium text-slate-300 flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-orange-400" />
                  Red Internacional Cohete
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  En línea
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mb-2">
                ¿Tu empresa opera o factura en Latinoamérica?
              </p>
              <a
                href="https://agenciacohete.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 font-semibold"
              >
                <span>Visitar agenciacohete.cl (Chile)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct contact buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://wa.me/56946527753?text=Hola,%20contacto%20desde%20acohete.es%20para%20un%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>+56 9 4652 7753 (WhatsApp)</span>
              </a>
              <a
                href="mailto:contacto@acohete.es"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <span>contacto@acohete.es</span>
              </a>
            </div>
          </div>

          {/* Col 1: Servicios */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">
              Servicios Principales
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ads" className="hover:text-white transition-colors">
                  Google Ads & PMax
                </Link>
              </li>
              <li>
                <Link href="/seo" className="hover:text-white transition-colors">
                  Posicionamiento SEO & GEO
                </Link>
              </li>
              <li>
                <Link href="/web" className="hover:text-white transition-colors">
                  Diseño & Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="/redes" className="hover:text-white transition-colors">
                  Social Paid Media & Meta
                </Link>
              </li>
              <li>
                <Link href="/audiovisual" className="hover:text-white transition-colors">
                  Producción Audiovisual
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-orange-400 hover:text-orange-300 font-medium">
                  Ver todos los servicios →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Sectores e Industrias */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">
              Sectores & Verticales
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/marketing-industrial" className="hover:text-white transition-colors">
                  Industria B2B & Ingeniería
                </Link>
              </li>
              <li>
                <Link href="/marketing-ecommerce" className="hover:text-white transition-colors">
                  E-commerce & Tiendas D2C
                </Link>
              </li>
              <li>
                <Link href="/marketing-inmobiliario" className="hover:text-white transition-colors">
                  Inmobiliarias & Promotoras
                </Link>
              </li>
              <li>
                <Link href="/marketing-automotriz" className="hover:text-white transition-colors">
                  Automoción & Posventa
                </Link>
              </li>
              <li>
                <Link href="/marketing-medico" className="hover:text-white transition-colors">
                  Clínicas & Sector Salud
                </Link>
              </li>
              <li>
                <Link href="/marketing-minero" className="hover:text-white transition-colors">
                  Minería & Maquinaria Pesada
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Empresa y Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">
              Empresa & Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/auditoria" className="hover:text-white transition-colors">
                  Auditoría 360° Gratuita
                </Link>
              </li>
              <li>
                <Link href="/portafolio" className="hover:text-white transition-colors">
                  Portafolio & Trabajos
                </Link>
              </li>
              <li>
                <Link href="/caso-exito" className="hover:text-white transition-colors">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="/trabaja-con-nosotros" className="hover:text-white transition-colors">
                  Trabaja con Nosotros
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <Link href="/aviso-legal" className="text-slate-400 hover:text-white transition-colors">
                  Aviso Legal (LSSI-CE)
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-slate-400 hover:text-white transition-colors">
                  Política de Privacidad (RGPD)
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-slate-400 hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-slate-400 hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} acohete.es</span>
            <span>·</span>
            <span>Todos los derechos reservados</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Certificados Google Partner & Next.js
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Sparkles className="w-3 h-3 text-orange-400" />
              Sistemas con Inteligencia Artificial
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
