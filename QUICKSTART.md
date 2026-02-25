#  Quick Start Guide

## Inicio Rápido (5 minutos)

### 1. Ver la aplicación

El servidor de desarrollo ya está corriendo en:
**http://localhost:3000**

Abre tu navegador y visita la URL para ver la aplicación funcionando.

### 2. Estructura de navegación

- **/** - Landing page con SEO optimizado
- **/calculadora-indemnizacion** - Calculadora interactiva de 3 pasos
- **/guias/indemnizacion-despido** - Guía completa sobre indemnizaciones
- **/guias/reforma-laboral-2026** - Info sobre la reforma
- **/guias/preaviso** - Guía sobre preaviso laboral
- **/guias/liquidacion-final** - Guía de liquidación final
- **/faq** - Preguntas frecuentes con schema markup

### 3. Probar la calculadora

1. Ve a http://localhost:3000/calculadora-indemnizacion
2. Completa los datos:
   - Fecha inicio: 2020-01-01
   - Fecha fin: 2026-02-15
   - Salario: 500000
   - Tipo: Despido sin causa
3. Avanza a paso 2 y activa "Modo comparación"
4. Calcula y revisa los resultados detallados

### 4. Comandos útiles

```bash
# Detener el servidor (Ctrl+C en la terminal)

# Reiniciar desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar producción
npm start

# Verificar tipos TypeScript
npm run type-check
```

### 5. Modificar contenido

#### Actualizar cálculos
Edita: `/lib/calc.ts`

#### Cambiar diseño
Edita: `/app/globals.css` o componentes en `/components/`

#### Actualizar guías
Edita: páginas en `/app/guias/`

## 📱 Características implementadas

[✓] Cálculo matemático exacto según LCT
[✓] Reforma Laboral 2026 con comparación
[✓] 3 pasos de UX fluidos
[✓] Validación con Zod
[✓] LocalStorage para guardar cálculos
[✓] Compartir resultados por URL
[✓] Modo comparación (tradicional vs reforma)
[✓] Responsive design completo
[✓] SEO optimizado con metadata
[✓] Schema.org en FAQ
[✓] 5 páginas de contenido educativo
[✓] Placeholders para AdSense
[✓] Build exitoso en producción

## 🎨 Personalización rápida

### Cambiar colores

Edita `/tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#TU_COLOR', // Cambia este
  }
}
```

### Cambiar logo/nombre

Edita `/app/layout.tsx` línea ~79:

```tsx
<a href="/" className="font-bold text-xl text-primary-600">
  TU NOMBRE AQUÍ
</a>
```

##  Deploy en 1 minuto (Vercel)

```bash
npm install -g vercel
vercel login
vercel
```

¡Listo! Tu app estará online.

## Documentación completa

- **README.md** - Guía técnica completa
- **DEPLOYMENT.md** - Guía de deployment paso a paso
- Este archivo - Quick start

## 🆘 Problemas comunes

**Puerto 3000 ocupado:**
```bash
npm run dev -- -p 3001
```

**Error de módulos:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Cambios no se ven:**
- Guarda el archivo
- El hot reload es automático
- Si no funciona, reinicia el servidor (Ctrl+C y `npm run dev`)

## ✨ Próximos pasos sugeridos

1. Personaliza los colores y textos
2. Agrega tu dominio real en metadata
3. Crea cuenta en Vercel para deploy
4. Solicita cuenta Google AdSense
5. Configura Google Analytics
6. Prueba todas las funcionalidades
7. Deploy a producción

---

**¿Preguntas?** Revisa el README.md completo o DEPLOYMENT.md
