# La Domotienda — Landing 3D

Single-page experience that scrolls through a Three.js scene of a smart home, layered with GSAP-driven overlays in Spanish. Sells four IoT devices (smart bulb, WiFi switch, AI camera, smart trash bin) with a 50%/50% payment model and WhatsApp checkout.

## Estructura

- `artifacts/domotienda/index.html` — Página completa, autocontenida (Three.js r128, GSAP 3.12 + ScrollTrigger, Font Awesome 6.5 vía CDN). No depende de React.
- `attached_assets/exports/domotienda-3d.html` — Copia descargable del archivo final.
- `artifacts/api-server/`, `artifacts/mockup-sandbox/` — andamios sin uso para este proyecto.

## Configuración relevante

- WhatsApp: `573052332703`
- Calendly placeholder: `https://calendly.com/tu-usuario/visita-domotica`
- Vite sirve directamente el `index.html` estático (sin entry React); HMR overlay desactivado.

## Cambios aplicados sobre el HTML original

1. Diseño responsive (≤760 px y ≤420 px).
2. Modelos 3D detallados: bombilla esfera + rosca anillada, interruptor con anillo táctil + LED, cámara con cuerpo semiesférico + lente + LED rojo + base, contenedor con cuerpo cilíndrico + tapa + anillo LED + sensor.
3. Overlays con frosted glass sólido (`backdrop-filter:blur(24px)`, fondo `rgba(6,13,14,.85/.92)`) y `text-shadow` global para contraste.
4. Número WhatsApp real + botón Calendly en Hero y modal de pago.
5. Eliminado widget kWh del header y todo lo relacionado con métricas de ahorro.
6. FAQ reducido a 3 preguntas (sin garantía).
7. Stats del Hero sin `%`: 50, 100, 30.
8. Acto III renombrado a "Catálogo inteligente".
9. Barra de progreso 3 px con glow doble.
