# Calculadora de Indemnización Laboral Argentina 

Una aplicación web moderna y completa para calcular indemnizaciones por despido según la legislación laboral argentina, incluyendo la Reforma Laboral 2026.

##  Características

- **Cálculo preciso** según la Ley de Contrato de Trabajo (LCT)
- **Reforma Laboral 2026** con modo comparación
- **Interfaz moderna** y responsiva con Tailwind CSS
- **SEO optimizado** para ranking orgánico
- **Exportación a PDF** y compartir resultados
- **Desglose detallado** de todos los conceptos
- **LocalStorage** para guardar últimos cálculos
- **Guías completas** sobre legislación laboral

##  Conceptos Calculados

1. **Indemnización por Antigüedad (Art. 245)**
2. **Preaviso**
3. **SAC sobre Preaviso**
4. **Integración del Mes**
5. **Vacaciones Proporcionales**
6. **SAC Proporcional**

## Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Validación:** Zod
- **Fechas:** date-fns
- **Gráficos:** Recharts (opcional)

## 📁 Estructura del Proyecto

```
calculadora-indemnizacion/
├── app/
│   ├── layout.tsx                          # Layout principal con header/footer
│   ├── page.tsx                            # Landing page (SEO optimizado)
│   ├── globals.css                         # Estilos globales
│   ├── calculadora-indemnizacion/
│   │   └── page.tsx                        # Calculadora (3 pasos)
│   ├── guias/
│   │   ├── indemnizacion-despido/
│   │   │   └── page.tsx                    # Guía completa
│   │   ├── reforma-laboral-2026/
│   │   │   └── page.tsx                    # Info sobre reforma
│   │   ├── preaviso/
│   │   │   └── page.tsx                    # Guía de preaviso
│   │   └── liquidacion-final/
│   │       └── page.tsx                    # Guía liquidación
│   └── faq/
│       └── page.tsx                        # FAQ con schema markup
├── components/
│   ├── Button.tsx                          # Botón reutilizable
│   ├── Card.tsx                            # Componente Card
│   ├── FormFields.tsx                      # Input, Select, Checkbox
│   └── AdPlaceholder.tsx                   # Placeholders para AdSense
├── lib/
│   ├── calc.ts                             # Motor de cálculo matemático
│   ├── types.ts                            # Tipos TypeScript y Zod schemas
│   └── utils.ts                            # Utilidades (localStorage, share, etc)
├── public/                                 # Assets estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## Lógica de Cálculo

### Antigüedad (Art. 245)

```typescript
antiguedad = mejorSalarioMensual * añosDeAntiguedad
```

**Regla de redondeo:**
- Si fracción > 3 meses → redondea hacia arriba
- Si fracción ≤ 3 meses → redondea hacia abajo

### Preaviso

```typescript
if (despidoSinCausa && !preavisoOtorgado) {
  preaviso = antiguedad < 5 ? 1 * salario : 2 * salario
}
```

### Integración del Mes

```typescript
if (despidoEnMitadDeMes) {
  integracion = (salario / 30) * diasRestantesDelMes
}
```

### Reforma Laboral 2026

La reforma excluye conceptos variables del cálculo:

```typescript
if (aplicarReforma2026) {
  salarioBase = salarioBase * 0.85  // ~15% reducción
}
```

## 🎨 SEO y Monetización

### Keywords Principales
- "calculadora indemnizacion laboral argentina"
- "calculo indemnizacion despido"
- "reforma laboral 2026 argentina"

### Metadata Implementada
- [✓] Title y Description optimizados
- [✓] OpenGraph tags
- [✓] Schema.org FAQPage
- [✓] Canonical URLs
- [✓] Robots.txt

### AdSense Placements
- Debajo del hero (landing)
- Después del resultado total
- Entre secciones de contenido
- Sidebar sticky (desktop)

## 🚦 Instalación y Uso

### Instalación

```bash
npm install
# o
yarn install
# o
pnpm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Producción

```bash
npm run build
npm start
```

### Type Check

```bash
npm run type-check
```

## Cómo Actualizar la Legislación

Si cambia la ley laboral:

1. **Modificar cálculos:** Edita `/lib/calc.ts`
2. **Actualizar tipos:** Ajusta `/lib/types.ts` si es necesario
3. **Actualizar contenido:** Modifica las páginas en `/app/guias/`
4. **Testing:** Verificá casos extremos
5. **Documentación:** Actualiza README y notas en las guías

### Ejemplo: Cambiar porcentaje de Reforma 2026

```typescript
// En /lib/calc.ts
if (applyReform) {
  // Cambiar de 0.85 a nuevo valor
  adjustedSalary = baseSalary * 0.85;
}
```

## Consideraciones Legales

### Disclaimer Importante

Los cálculos son **estimativos** y se basan en:
- Ley de Contrato de Trabajo (LCT) vigente
- Interpretación estándar de la legislación
- Reforma Laboral 2026 (simulada)

**Recomendaciones:**
- Siempre verificar con un abogado laboralista
- Los montos pueden variar según convenios colectivos
- Casos especiales requieren asesoramiento profesional

### Fuentes Legales

- Ley N° 20.744 (LCT)
- Ley N° 24.013 (Empleo)
- Reforma Laboral 2026 (pendiente de sanción/reglamentación)

## 🔄 Funcionalidades Avanzadas

### Modo Comparación

Compara régimen tradicional vs. Reforma 2026 lado a lado:

```typescript
setComparisonMode(true);  // Activa comparación
```

### Guardar y Compartir

```typescript
// Guarda en localStorage
saveCalculation(formData);

// Genera URL compartible
const url = generateShareUrl(formData);
```

### Exportar PDF

Usa la función de impresión del navegador. En producción, considera bibliotecas como:
- `jsPDF`
- `react-pdf`
- `puppeteer` (backend)

## 🎯 Roadmap

- [ ] Gráficos interactivos con Recharts
- [ ] Calculadora de otros tipos de indemnización (Art. 2, doble, etc.)
- [ ] Integración con API de convenios colectivos
- [ ] Versión en inglés
- [ ] App móvil (React Native)
- [ ] Panel de administración para actualizar parámetros

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit con mensajes descriptivos
4. Push y abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto para fines educativos.

## 📧 Contacto

Para consultas técnicas o sugerencias: [contacto@ejemplo.com]

---

**Última actualización:** Febrero 2026

**Versión:** 1.0.0
