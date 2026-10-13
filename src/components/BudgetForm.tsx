"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Building2,
  Mail,
  User,
  Phone,
  Euro,
} from "lucide-react";

interface BudgetFormProps {
  initialService?: string;
  sourceContext?: string;
}

export default function BudgetForm({
  initialService = "Ecosistema Integral",
  sourceContext = "Formulario Web",
}: BudgetFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    servicio: initialService,
    presupuesto: "1500-3000",
    mensaje: "",
    consentimiento: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const servicesList = [
    "Ecosistema Integral",
    "Gestión Google Ads (SEM & PMax)",
    "Posicionamiento SEO & GEO (IA)",
    "Diseño & Desarrollo Web Next.js",
    "Social Paid Media & Meta Ads",
    "Producción Audiovisual & Creativos",
    "Marketing Industrial B2B",
    "Marketing E-commerce D2C",
    "Marketing Inmobiliario",
    "Marketing Automoción & Talleres",
    "Marketing Médico & Clínicas",
    "Marketing Minero & Extracción",
  ];

  const budgetTiers = [
    { value: "sub-1000", label: "Menos de 1.000 € / mes" },
    { value: "1000-2500", label: "1.000 € – 2.500 € / mes" },
    { value: "2500-5000", label: "2.500 € – 5.000 € / mes" },
    { value: "plus-5000", label: "Más de 5.000 € / mes" },
  ];

  const [waMessage, setWaMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.consentimiento) {
      setError("Debes aceptar la política de privacidad para enviar la solicitud.");
      return;
    }

    setLoading(true);

    try {
      // Create WhatsApp message fallback string & record submission
      const textMessage = `Hola acohete.es, solicito presupuesto para:
- Nombre: ${formData.nombre}
- Empresa: ${formData.empresa}
- Email: ${formData.email}
- Teléfono: ${formData.telefono}
- Servicio: ${formData.servicio}
- Presupuesto mensual: ${formData.presupuesto}
- Mensaje: ${formData.mensaje || "Sin comentarios adicionales"}
- Origen: ${sourceContext}`;

      setWaMessage(textMessage);

      // Open confirmation and record submission
      setSubmitted(true);
      setLoading(false);

      // Store in session storage for thank you tracking
      if (typeof window !== "undefined") {
        sessionStorage.setItem("last_lead_data", JSON.stringify(formData));
      }
    } catch {
      setError("Ocurrió un error al procesar el envío. Por favor, contáctanos por WhatsApp directamente.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-slate-900/60 border border-slate-800/90 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      {submitted ? (
        <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white">¡Propuesta Solicitada!</h3>
          <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
            Hemos recibido los detalles de tu proyecto. Un consultor técnico de nuestro equipo analizará tus métricas y te contactará en menos de 24 horas laborables.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/56946527753?text=${encodeURIComponent(
                waMessage || `Hola acohete.es, acabo de enviar una solicitud para ${formData.empresa || formData.nombre} y me gustaría acelerar la revisión.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-xs transition-colors"
            >
              Acelerar por WhatsApp directo
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors cursor-pointer"
            >
              Enviar otra consulta
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div className="border-b border-slate-800 pb-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRESUPUESTO PERSONALIZADO SIN COMPROMISO</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Acelera el crecimiento de tu empresa en España
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Recibe una auditoría inicial y una propuesta técnica detallada con estimación de ROAS y plazos.
            </p>
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-orange-400" />
                Nombre y Apellidos *
              </label>
              <input
                type="text"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                placeholder="Ej. Carlos Mendoza"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-orange-400" />
                Empresa o Web *
              </label>
              <input
                type="text"
                required
                value={formData.empresa}
                onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                placeholder="Ej. Iberia Tech SL / tuempresa.es"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                Correo Electrónico Corporativo *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="carlos@empresa.es"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                Teléfono / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                placeholder="+34 600 000 000 o +56..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Servicio Principal de Interés
              </label>
              <select
                value={formData.servicio}
                onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-orange-500"
              >
                {servicesList.map((srv) => (
                  <option key={srv} value={srv} className="bg-slate-900 text-slate-100">
                    {srv}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Euro className="w-3.5 h-3.5 text-orange-400" />
                Presupuesto Mensual Estimado
              </label>
              <select
                value={formData.presupuesto}
                onChange={(e) => setFormData({ ...formData, presupuesto: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-orange-500"
              >
                {budgetTiers.map((tier) => (
                  <option key={tier.value} value={tier.value} className="bg-slate-900 text-slate-100">
                    {tier.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Cuéntanos brevemente tus objetivos o problemas actuales
            </label>
            <textarea
              rows={3}
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              placeholder="¿Qué estás buscando solucionar? (ej. bajar CPA en Google Ads, renovar web en Next.js, posicionar en España...)"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-orange-500"
            />
          </div>

          <div className="flex items-start gap-2.5 pt-2">
            <input
              type="checkbox"
              id="rgpd-consent"
              checked={formData.consentimiento}
              onChange={(e) => setFormData({ ...formData, consentimiento: e.target.checked })}
              className="mt-1 rounded bg-slate-950 border-slate-700 text-orange-500 focus:ring-orange-500 cursor-pointer"
            />
            <label htmlFor="rgpd-consent" className="text-xs text-slate-400 leading-relaxed cursor-pointer">
              Acepto la{" "}
              <Link href="/privacidad" className="text-orange-400 underline hover:text-orange-300" target="_blank">
                política de privacidad (RGPD)
              </Link>{" "}
              y el tratamiento de mis datos para recibir la propuesta comercial solicitada.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <span>Procesando solicitud...</span>
            ) : (
              <>
                <span>Solicitar Presupuesto y Auditoría</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-2 font-mono">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Datos protegidos según RGPD UE
            </span>
            <span>·</span>
            <span>Respuesta en &lt; 24h</span>
          </div>
        </form>
      )}
    </div>
  );
}
