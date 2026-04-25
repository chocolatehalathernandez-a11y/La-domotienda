# La Domotienda — Landing 3D

Single-page experience que recorre una casa en 3D (Three.js + GSAP ScrollTrigger) y vende la instalación de domótica en Colombia. Pago 50/50, agendamiento por Calendly inline, checkout por WhatsApp, FAQ extendido y ventanas legales emergentes.

## Estructura

- `artifacts/domotienda/index.html` — Página completa, autocontenida (Three.js r128, GSAP 3.12 + ScrollTrigger, Font Awesome 6.5 vía CDN, Calendly widget cargado on-demand). No depende de React.
- `artifacts/domotienda/vite.config.ts` — Sirve el HTML estático con HMR overlay deshabilitado.
- `attached_assets/exports/domotienda-3d.html` — Copia descargable del archivo final (espejo del index).
- `attached_assets/Pasted-1-Qu-es-la-dom-tica-y-c-mo-funciona-Respuesta-La-dom-ti_*.txt` — Fuente de las 20 preguntas del FAQ.
- `artifacts/api-server/`, `artifacts/mockup-sandbox/` — Andamios sin uso para este proyecto.

## Configuración relevante

- WhatsApp: `573052332703` (constante `WHATSAPP_NUMBER`)
- Calendly: `https://calendly.com/famhalat01/30min` (constante `CALENDLY_URL`, inline en modal)
- Carrito persistido en `localStorage` con clave `domo3d_cart_v2`
- Items del carrito identificados por `${id}_${size}` para soportar tamaños (sensor de basura)

## Cambios aplicados

### Ronda 1 (publicada)
1. Diseño responsive (≤760 px y ≤420 px).
2. Modelos 3D detallados: bombilla, interruptor, cámara, contenedor.
3. Overlays con frosted glass sólido + `text-shadow` global.
4. WhatsApp real + botón Calendly en hero y modal de pago.
5. Eliminado widget kWh del header.
6. FAQ inicial reducido a 3 preguntas.

### Ronda 2 (actual)
1. **Contacto unificado a `wa.me/573052332703`** en hero, footer, header, FAQ y carrito.
2. **Stats sin números**: removidos los stats numéricos; en su lugar, 3 chips: Pago 50/50, Apoyo personalizado 24/7 post venta, Ahorro energético · Vida inteligente.
3. **Eliminado** el botón "Comenzar tour 3D"; el botón "Más información" se movió al final del FAQ.
4. **Calendly embed inline** en modal propio (`#calov`); se abre desde el hero, header (Visita virtual), FAQ, modal de pago y enlace dentro del subtítulo del FAQ. Script de Calendly cargado bajo demanda en la primera apertura.
5. **Carrito → WhatsApp adaptativo**: el botón de checkout abre `wa.me` con un mensaje que enumera cada producto, cantidad y tamaño seleccionado, y solicita cotización con el modelo 50/50.
6. **Catálogo de 5 productos sin precios** (los precios se cotizan por WhatsApp):
   - Sensor basura inteligente con selector de tamaño (Pequeño / Mediano / Grande).
   - Interruptor táctil inteligente (WiFi).
   - Interruptor por voz (Alexa, Google Home, Apple HomeKit, SmartThings).
   - Luces LED inteligentes (ahorro + app + voz).
   - Cámara de seguridad (alertas instantáneas + seguimiento inteligente, sin mención a IA/4K).
7. **FAQ ampliado a 23 preguntas**: visita virtual + pago 50/50 + tiempo de instalación + las 20 preguntas del archivo adjunto.
8. **Modales legales** (Términos y Política de privacidad) abiertos desde el footer con texto legal básico adaptado a Colombia (Ley 1581 / Habeas Data, garantía 12 meses).
9. **Bug del placeholder de video corregido**: la `.vid-wrap` ya no tiene `pointer-events:auto`, por lo que el clic accidental durante el scroll ya no dispara la notificación. El placeholder solo es visual.
10. **Sección "Cómo funciona" rediseñada a 5 pasos**: visita virtual → eliges equipo → pagas 50% → instalamos → acompañamiento 24/7.
11. **3D refinado**: tone mapping ACES Filmic, partículas flotantes cyan, anillos emisivos en el piso con pulso, listones de madera en el piso interior, marco luminoso sobre la puerta, picaporte metálico, cruces en las ventanas, planta con maceta y hojas estilizadas, halo de luz alrededor de la bombilla, biseles y reflejos en cada dispositivo, anillo táctil en el interruptor, reflejo en el lente de la cámara, refuerzos toroidales en el contenedor.

## Cómo correr

El workflow `artifacts/domotienda: web` arranca Vite en el `PORT` asignado y sirve el HTML directamente. Cualquier cambio en `index.html` se refresca solo (HMR overlay deshabilitado).

> El visor headless del preview no tiene WebGL, así que el lienzo 3D aparece negro en la captura. En Chrome/Firefox/Safari (móvil incluido) se ve la escena animada con cámara cinemática.
