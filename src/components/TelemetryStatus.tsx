"use client";

import { useEffect, useState } from "react";
import { Server, Cpu, Globe2, Activity } from "lucide-react";

export default function TelemetryStatus() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const systems = [
    {
      name: "Dominio & DNS",
      target: "acohete.es",
      status: "Registrado",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      icon: Globe2,
    },
    {
      name: "Despliegue Cloud",
      target: "Vercel Edge Network",
      status: "Activo",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      icon: Server,
    },
    {
      name: "Núcleo de Software",
      target: "Next.js App Engine",
      status: `Construyendo${dots}`,
      color: "text-orange-400 bg-orange-500/10 border-orange-500/20",
      icon: Cpu,
    },
    {
      name: "Servicios IA & APIs",
      target: "Soluciones Cohete",
      status: "En preparación",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      icon: Activity,
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
      {systems.map((s, idx) => {
        const Icon = s.icon;
        return (
          <div
            key={idx}
            className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-sm hover:border-slate-700 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                {s.name}
              </span>
              <Icon className="w-4 h-4 text-slate-400" />
            </div>
            <div>
              <p className="text-xs text-slate-300 font-mono font-medium truncate mb-2">
                {s.target}
              </p>
              <span
                className={`inline-block text-[11px] font-mono px-2 py-0.5 rounded-full border ${s.color}`}
              >
                {s.status}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
