"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Rocket,
  ChevronDown,
  Menu,
  X,
  Target,
  Search,
  Code2,
  Share2,
  Video,
  Factory,
  ShoppingBag,
  Building,
  Wrench,
  Stethoscope,
  Pickaxe,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);

  const services = [
    {
      name: "Google Ads & Performance Max",
      desc: "Gestión certificada Google Partner con foco en ROAS",
      href: "/ads",
      icon: Target,
      badge: "Google Partner",
    },
    {
      name: "Posicionamiento SEO & GEO (IA)",
      desc: "Rankea en Google España, SearchGPT y Perplexity",
      href: "/seo",
      icon: Search,
      badge: "IA Ready",
    },
    {
      name: "Diseño & Desarrollo Web Next.js",
      desc: "Plataformas web ultrarrápidas (LCP < 0.8s) y arquitectura moderna",
      href: "/web",
      icon: Code2,
    },
    {
      name: "Social Paid Media & Meta Ads",
      desc: "Campañas de prospección en Instagram, TikTok y LinkedIn B2B",
      href: "/redes",
      icon: Share2,
    },
    {
      name: "Producción Audiovisual & Creativos",
      desc: "Videos publicitarios y edición de alto impacto para anuncios",
      href: "/audiovisual",
      icon: Video,
    },
  ];

  const sectors = [
    { name: "Industrial & Proveedores B2B", href: "/marketing-industrial", icon: Factory },
    { name: "E-commerce & Tiendas Online", href: "/marketing-ecommerce", icon: ShoppingBag },
    { name: "Inmobiliarias & Promociones", href: "/marketing-inmobiliario", icon: Building },
    { name: "Automoción & Talleres", href: "/marketing-automotriz", icon: Wrench },
    { name: "Salud, Clínicas & Médicos", href: "/marketing-medico", icon: Stethoscope },
    { name: "Minería & Maquinaria Pesada", href: "/marketing-minero", icon: Pickaxe },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#07090e]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30 shadow-lg shadow-orange-500/10 group-hover:border-orange-500/60 transition-colors">
            <Rocket className="w-5 h-5 text-orange-400 rotate-45 transform group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-bold tracking-tight text-white font-mono">
              acohete
            </span>
            <span className="text-xs px-1.5 py-0.5 rounded-md bg-orange-500/20 text-orange-400 font-mono font-semibold border border-orange-500/30">
              .es
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-300">
          <Link
            href="/"
            className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-900/60 transition-colors"
          >
            Inicio
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-white hover:bg-slate-900/60 transition-colors cursor-pointer">
              <span>Servicios</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 w-96 p-3 rounded-2xl bg-[#0b0f19] border border-slate-800 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2">
                <div className="space-y-1">
                  {services.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-900/90 hover:border-slate-800 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 text-orange-400 group-hover:bg-orange-500/20">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-white group-hover:text-orange-400 flex items-center gap-2">
                            {item.name}
                            {item.badge && (
                              <span className="text-[10px] px-1.5 py-0.2 rounded bg-orange-500/20 text-orange-400 font-mono">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="pt-2 mt-2 border-t border-slate-800/80 px-2 flex justify-between items-center text-xs">
                  <Link
                    href="/servicios"
                    onClick={() => setServicesOpen(false)}
                    className="text-orange-400 hover:text-orange-300 font-medium flex items-center gap-1"
                  >
                    Ver catálogo integral
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Sectors dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSectorsOpen(true)}
            onMouseLeave={() => setSectorsOpen(false)}
          >
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-white hover:bg-slate-900/60 transition-colors cursor-pointer">
              <span>Sectores</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {sectorsOpen && (
              <div className="absolute top-full left-0 w-80 p-3 rounded-2xl bg-[#0b0f19] border border-slate-800 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2">
                <div className="space-y-1">
                  {sectors.map((sector) => {
                    const Icon = sector.icon;
                    return (
                      <Link
                        key={sector.name}
                        href={sector.href}
                        onClick={() => setSectorsOpen(false)}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-900/90 transition-colors text-xs text-slate-300 hover:text-white"
                      >
                        <Icon className="w-4 h-4 text-orange-400 shrink-0" />
                        <span>{sector.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/auditoria"
            className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-900/60 transition-colors flex items-center gap-1"
          >
            <span>Auditoría 360°</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 font-mono">
              Gratis
            </span>
          </Link>

          <Link
            href="/portafolio"
            className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-900/60 transition-colors"
          >
            Portafolio
          </Link>

          <Link
            href="/nosotros"
            className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-900/60 transition-colors"
          >
            Nosotros
          </Link>

          <Link
            href="/contacto"
            className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-900/60 transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* Right side controls */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Country selector */}
          <div className="flex items-center text-xs font-mono bg-slate-900/80 border border-slate-800 rounded-lg p-1">
            <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 font-semibold flex items-center gap-1">
              🇪🇸 ES
            </span>
            <a
              href="https://agenciacohete.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-0.5 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors flex items-center gap-1"
              title="Ir a versión Chile (agenciacohete.cl)"
            >
              🇨🇱 CL
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
          </div>

          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium text-xs shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pedir Presupuesto</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <Link
            href="/contacto"
            className="px-3 py-1.5 rounded-lg bg-orange-500 text-white text-xs font-medium"
          >
            Presupuesto
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#07090e] px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <span className="text-xs text-slate-400">Región seleccionada:</span>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-2 py-1 rounded bg-orange-500/20 text-orange-400 font-bold">
                🇪🇸 España
              </span>
              <a
                href="https://agenciacohete.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 rounded bg-slate-900 text-slate-400"
              >
                🇨🇱 Chile
              </a>
            </div>
          </div>

          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-900"
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-orange-400 font-semibold hover:bg-slate-900"
            >
              Servicios Principales
            </Link>
            <div className="pl-4 space-y-1 border-l border-slate-800 my-2">
              {services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-1.5 text-xs text-slate-400 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <span className="block px-3 pt-3 text-xs font-bold text-slate-500 uppercase font-mono">
              Sectores
            </span>
            <div className="pl-4 space-y-1 border-l border-slate-800 my-2">
              {sectors.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-1.5 text-xs text-slate-400 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              href="/auditoria"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-900"
            >
              Auditoría 360° Gratuita
            </Link>
            <Link
              href="/portafolio"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-900"
            >
              Portafolio & Casos
            </Link>
            <Link
              href="/nosotros"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-900"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/contacto"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-900"
            >
              Contacto
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <Link
              href="/contacto"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-500 text-white font-medium text-sm"
            >
              Solicitar Propuesta Comercial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
