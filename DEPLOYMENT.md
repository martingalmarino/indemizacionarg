# Guía de Deployment - Calculadora Indemnización Argentina

##  Opciones de Deployment

### 1. Vercel (Recomendado - Más fácil)

Vercel es la plataforma oficial de Next.js y ofrece deployment en minutos.

#### Pasos:

1. **Crear cuenta en Vercel**
   - Visita [vercel.com](https://vercel.com)
   - Registrate con GitHub

2. **Conectar proyecto**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

3. **Configurar dominio personalizado**
   - En Vercel Dashboard → Settings → Domains
   - Agrega tu dominio: `calculadora-indemnizacion-argentina.com`
   - Configura los DNS según las instrucciones

4. **Variables de entorno** (opcional)
   - En Vercel Dashboard → Settings → Environment Variables
   - Agrega `NEXT_PUBLIC_SITE_URL`

#### Deploy automático:
- Cada push a `main` deployea automáticamente
- Preview deployments para cada PR

---

### 2. Netlify

Alternativa excelente con características similares.

#### Pasos:

1. **Instalar Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   ```

2. **Deploy**
   ```bash
   netlify init
   netlify deploy --prod
   ```

3. **Configurar build settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

---

### 3. AWS Amplify

Ideal si ya usás AWS.

#### Pasos:

1. Conecta tu repositorio Git
2. Configura build:
   - Framework: Next.js - SSR
   - Build command: `npm run build`
3. Deploy

---

### 4. Servidor propio (VPS/Dedicated)

Para control total.

#### Requirements:
- Node.js 18+
- PM2 para gestión de procesos
- Nginx como reverse proxy

#### Pasos:

1. **Clonar el proyecto**
   ```bash
   git clone <tu-repo>
   cd calculadora-indemnizacion
   npm install
   npm run build
   ```

2. **Instalar PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "calculadora" -- start
   pm2 save
   pm2 startup
   ```

3. **Configurar Nginx**
   ```nginx
   server {
       listen 80;
       server_name calculadora-indemnizacion-argentina.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **SSL con Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d calculadora-indemnizacion-argentina.com
   ```

---

## 🔧 Configuración Pre-Deployment

### 1. Variables de entorno

Crea `.env.production`:
```bash
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_ADSENSE_ID=ca-pub-xxxxxxxxxxxxxxxx
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 2. Optimizaciones

#### Activar compresión
En `next.config.mjs`:
```javascript
const nextConfig = {
  compress: true,
  // ... resto de config
};
```

#### Image optimization
Las imágenes ya están optimizadas con Next.js Image component.

### 3. SEO final

- [ ] Verifica que todas las páginas tienen metadata
- [ ] Genera `sitemap.xml` (ver sección abajo)
- [ ] Crea `robots.txt`
- [ ] Configura Google Search Console
- [ ] Agrega Google Analytics

---

## 📄 Crear Sitemap

Crea `app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://calculadora-indemnizacion-argentina.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/calculadora-indemnizacion`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guias/indemnizacion-despido`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guias/reforma-laboral-2026`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guias/preaviso`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guias/liquidacion-final`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
```

---

## 🤖 Crear robots.txt

Crea `app/robots.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://calculadora-indemnizacion-argentina.com/sitemap.xml',
  }
}
```

---

## Monetización - Google AdSense

### Setup AdSense

1. **Solicitar cuenta AdSense**
   - Visita [adsense.google.com](https://adsense.google.com)
   - Aplica con tu dominio

2. **Agregar código de verificación**
   En `app/layout.tsx`, agrega en el `<head>`:
   ```tsx
   <script
     async
     src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
     crossOrigin="anonymous"
   ></script>
   ```

3. **Reemplazar placeholders**
   Los componentes `<AdPlaceholder />` son solo visuales. Reemplazalos con:
   ```tsx
   <ins
     className="adsbygoogle"
     style={{ display: 'block' }}
     data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
     data-ad-slot="XXXXXXXXXX"
     data-ad-format="auto"
     data-full-width-responsive="true"
   ></ins>
   <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
   ```

---

##  Analytics

### Google Analytics 4

1. Crea una propiedad en [analytics.google.com](https://analytics.google.com)

2. Crea `components/GoogleAnalytics.tsx`:
   ```tsx
   'use client';
   
   import Script from 'next/script';
   
   export function GoogleAnalytics({ gaId }: { gaId: string }) {
     return (
       <>
         <Script
           src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
           strategy="afterInteractive"
         />
         <Script id="google-analytics" strategy="afterInteractive">
           {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${gaId}');
           `}
         </Script>
       </>
     );
   }
   ```

3. Agrega en `app/layout.tsx`:
   ```tsx
   {process.env.NEXT_PUBLIC_GA_ID && (
     <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
   )}
   ```

---

## SEO Post-Launch

### 1. Google Search Console
- Agrega y verifica tu sitio
- Sube el sitemap
- Monitorea indexación

### 2. Bing Webmaster Tools
- Importa desde Google Search Console

### 3. Schema Markup
Ya implementado en:
- [✓] FAQ page (FAQPage schema)
- Considera agregar: Organization, WebSite, BreadcrumbList

---

## 🎨 Customización del Dominio

### Comprar dominio
Recomendaciones:
- GoDaddy
- Namecheap
- Google Domains
- NIC Argentina (.com.ar)

### Configurar DNS
Apunta a tu plataforma:
- **Vercel:** A record a `76.76.21.21`
- **Netlify:** CNAME a `netlify-deployment-url.netlify.app`
- **VPS:** A record a tu IP

---

## Checklist Pre-Launch

- [ ] Build exitoso (`npm run build`)
- [ ] Tests manuales en todas las páginas
- [ ] Metadata SEO en todas las rutas
- [ ] Sitemap generado
- [ ] robots.txt configurado
- [ ] SSL/HTTPS activo
- [ ] Google Analytics instalado
- [ ] Variables de entorno configuradas
- [ ] Dominio personalizado apuntando
- [ ] Backup del código en Git
- [ ] README actualizado

---

## 📈 Post-Launch

1. **Monitorear performance**
   - Lighthouse scores
   - Core Web Vitals
   - Errores en consola

2. **SEO tracking**
   - Posiciones en Google
   - Tráfico orgánico
   - Conversiones

3. **Actualizar contenido**
   - Si cambia la ley, actualiza `/lib/calc.ts`
   - Mantén guías actualizadas

---

## 🆘 Troubleshooting

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build timeout en Vercel
Aumenta el timeout en `vercel.json`:
```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next",
      "config": { "maxLambdaSize": "50mb" }
    }
  ]
}
```

### Error 500 en producción
Revisa logs:
```bash
vercel logs <deployment-url>
```

---

## 📞 Soporte

- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support:** [vercel.com/support](https://vercel.com/support)
- **Issues GitHub:** Abre un issue en tu repo

---

**¡Listo para lanzar!** 
