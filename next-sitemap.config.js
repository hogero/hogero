/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://hogero.github.io/hogero/', // URL base de tu sitio en GitHub Pages
    generateRobotsTxt: true, // Genera automáticamente el archivo robots.txt
    sitemapSize: 5000, // Límite de URLs por archivo sitemap
    exclude: [
      '/api/*', // Excluye rutas de API
    ],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*', // Aplica a todos los rastreadores
          allow: '/', // Permite el rastreo de todas las rutas
        },
      ],
    },
    additionalPaths: async (config) => {
      return [
        {
          loc: '/servicios', // Página de servicios
          changefreq: 'monthly',
          priority: 0.8,
          lastmod: new Date().toISOString(),
        },
        {
          loc: '/consultar-cita', // Página para consultar citas
          changefreq: 'monthly',
          priority: 0.7,
          lastmod: new Date().toISOString(),
        },
        {
          loc: '/agendar-cita', // Página para agendar citas
          changefreq: 'monthly',
          priority: 0.9,
          lastmod: new Date().toISOString(),
        },
        {
          loc: '/contactanos', // Página de contacto
          changefreq: 'monthly',
          priority: 0.6,
          lastmod: new Date().toISOString(),
        },
      ];
    },
  };
  