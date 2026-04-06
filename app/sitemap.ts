import { MetadataRoute } from 'next'

/**
 * Generador de Sitemap para SEO de Riopaila Agrícola
 * Este archivo genera automáticamente el sitemap.xml durante la construcción del sitio.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // ======================================================================
  // IMPORTANTE: Cambiar esta URL por el dominio oficial en producción
  // ======================================================================
  const baseUrl = 'https://riopailaagricola.com.co'

  const routes = [
    '',
    '/compania',
    '/compania/quienes-somos',
    '/compania/historia',
    '/compania/gobierno-corporativo',
    '/compania/politicasycumplimiento',
    '/compania/linea-transparente',
    '/Operacion/desarrollo-cultivos',
    '/Operacion/cadena-de-valor',
    '/Operacion/belagro',
    '/Operacion/otras-lineas',
    '/Operacion/proyectos-inmobiliarios',
    '/inversionistas',
    '/sostenibilidad/gestion-social',
    '/sostenibilidad/gestion-ambiental',
    '/sostenibilidad/gestion-economica',
    '/sostenibilidad/informes',
    '/grupos-de-interes/talento',
    '/grupos-de-interes/proveedores-clientes',
    '/grupos-de-interes/politicas',
  ]

  return routes.map((route) => {
    // Definimos prioridades basadas en la importancia de la página
    let priority = 0.7
    let changeFrequency: 'monthly' | 'weekly' | 'always' | 'hourly' | 'daily' | 'yearly' | 'never' = 'monthly'

    if (route === '') {
      priority = 1.0
      changeFrequency = 'weekly'
    } else if (route === '/inversionistas' || route.startsWith('/sostenibilidad')) {
      priority = 0.9
      changeFrequency = 'weekly'
    } else if (route.startsWith('/compania')) {
      priority = 0.8
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }
  })
}
