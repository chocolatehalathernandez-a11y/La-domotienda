# La Domotienda — Landing 3D

Single-page experience que recorre una casa en 3D (Three.js + GSAP ScrollTrigger) y vende la instalación de domótica en Colombia. Pago 50/50, agendamiento por Calendly inline, checkout por WhatsApp, asistente conversacional Luna y ventanas legales emergentes.

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

### Ronda 3 (actual)
1. **Hero simplificado**: removidos los dos párrafos ("Domótica de última generación…" y "Paga el 50 % al instalar…"). El bloque de chips conserva el mensaje 50/50.
2. **Catálogo reordenado a 4 tarjetas** siguiendo el flujo de la cámara 3D:
   1) Luces LED inteligentes  
   2) Interruptores inteligentes — táctil + por voz combinados en una sola tarjeta con sub-bloques y botón "Agregar" independiente para cada variante (mantiene IDs 2 y 3 del carrito)  
   3) Cámara de seguridad  
   4) Sensor basura inteligente con selector de tamaño  
   Tiempos de aparición sincronizados con los keyframes (0.36 / 0.49 / 0.60 / 0.70).
3. **3D más delicado**: easing diferenciado para posición (0.042) y mira (0.052), partículas un 45 % más lentas y suaves, pulso de red más sutil, accentos de piso con respiración menor, fog reducido (0.014) y exposición ACES ligeramente más alta (1.12) con `outputEncoding sRGB`.
4. **Chatbot Luna en lugar del FAQ acordeón**: asistente femenina, empática, con avatar lunar y badge "Asistente IA". Motor de intents basado en reglas (normalización + matching por longitud de keyword) cubre 22 intents (saludo, despedida, agradecimiento, visita virtual, pago 50/50, qué es la domótica, tiempos de instalación, voz/Alexa, protocolos, hub, seguridad, control remoto, sin internet, mensualidad, dispositivos antiguos, rutinas, soporte, sensores, kit vs suelto, ROI, productos, identidad). Mensajes con animación, indicador "typing", chips de respuestas rápidas y botones de acción que abren Calendly o WhatsApp. Fallback empático que ofrece WhatsApp 24/7 y agenda Calendly. El bloque inferior conserva CTAs a videollamada y WhatsApp por si el usuario prefiere humano.

### Ronda 2 (publicada)
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

### Ronda 4 (optimización móvil y catálogo)
1. **Render 3D adaptable**: pixel ratio y sombras reducidos en móvil, geometrías con máximo de 16 segmentos y pausa del render cuando la pestaña queda oculta.
2. **Scrollytelling más delicado**: driver de 800vh, keyframes y rangos redistribuidos, `scrub: 3` y fades más amplios.
3. **Catálogo independiente** después del recorrido 3D: grid responsive con placeholders `.prod-img`, seis productos actuales, variantes de tamaño para basura y kits para luces LED, carrito y consulta individual por WhatsApp sin mostrar precios.
4. **Usabilidad táctil**: controles principales de al menos 44×44 px, mejor espaciado móvil y carrito/modal de cotización con scroll usable en pantallas pequeñas.
5. **Navegación directa**: enlace “Catálogo” junto a WhatsApp, con desplazamiento suave y adaptación móvil para conservar los accesos prioritarios.

## Cómo correr

El workflow `artifacts/domotienda: web` arranca Vite en el `PORT` asignado y sirve el HTML directamente. Cualquier cambio en `index.html` se refresca solo (HMR overlay deshabilitado).

> El visor headless del preview no tiene WebGL, así que el lienzo 3D aparece negro en la captura. En Chrome/Firefox/Safari (móvil incluido) se ve la escena animada con cámara cinemática.
