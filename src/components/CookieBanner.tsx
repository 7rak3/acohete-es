"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X } from "lucide-react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("acohete_cookie_consent");
      if (!consent) {
        setShow(true);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("acohete_cookie_consent", "all");
    setShow(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem("acohete_cookie_consent", "necessary");
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      aria-label="Aviso de cookies"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 p-5 rounded-2xl bg-[#0b0f19]/95 border border-slate-700/80 shadow-2xl backdrop-blur-xl text-slate-200 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 text-orange-400">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-white flex items-center gap-1.5">
            Privacidad & Cookies (RGPD)
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </h3>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Utilizamos cookies técnicas y de rendimiento para ofrecerte una navegación fluida y medir el tráfico de forma agregada. Cumplimos estrictamente con la normativa española y europea (AEPD / RGPD).
          </p>
        </div>
        <button
          onClick={handleAcceptNecessary}
          className="text-slate-500 hover:text-slate-300 transition-colors p-1"
          aria-label="Cerrar aviso de cookies"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
        <button
          onClick={handleAcceptAll}
          className="flex-1 py-2 px-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium transition-all shadow-md shadow-orange-500/20 text-center cursor-pointer"
        >
          Aceptar todas
        </button>
        <button
          onClick={handleAcceptNecessary}
          className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-all text-center cursor-pointer"
        >
          Solo técnicas
        </button>
        <Link
          href="/cookies"
          className="text-xs text-slate-400 hover:text-orange-400 underline underline-offset-2 px-1"
        >
          Detalles
        </Link>
      </div>
    </aside>
  );
}
