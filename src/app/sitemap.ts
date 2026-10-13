import type { MetadataRoute } from "next";
import { SITE_URL, CL_SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", clPath: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/servicios", clPath: "/servicios", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/ads", clPath: "/ads", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/seo", clPath: "/seo", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/web", clPath: "/web", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/redes", clPath: "/redes", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/audiovisual", clPath: "/audiovisual", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/marketing-industrial", clPath: "/marketing-industrial", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/marketing-ecommerce", clPath: "/marketing-ecommerce", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/marketing-inmobiliario", clPath: "/marketing-inmobiliario", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/marketing-automotriz", clPath: "/marketing-automotriz", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/marketing-medico", clPath: "/marketing-medico", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/marketing-minero", clPath: "/marketing-minero", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/auditoria", clPath: "/auditoria", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/nosotros", clPath: "/nosotros", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/portafolio", clPath: "/portafolio", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/caso-exito", clPath: "/caso-exito", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contacto", clPath: "/contacto", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/trabaja-con-nosotros", clPath: "/trabaja-con-nosotros", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/aviso-legal", clPath: "", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/privacidad", clPath: "/privacidad", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/cookies", clPath: "", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terminos", clPath: "/terminos", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const currentDate = new Date();

  return routes.map((r) => {
    const esUrl = `${SITE_URL}${r.path}`;
    const clUrl = r.clPath !== undefined ? `${CL_SITE_URL}${r.clPath}` : `${CL_SITE_URL}${r.path}`;

    return {
      url: esUrl,
      lastModified: currentDate,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
      alternates: {
        languages: {
          "es-ES": esUrl,
          "es-CL": clUrl,
          "x-default": esUrl,
        },
      },
    };
  });
}
