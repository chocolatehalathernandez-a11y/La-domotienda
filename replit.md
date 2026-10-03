# La Domotienda — Landing HTML

Landing ligera y responsive para presentar y cotizar servicios de domótica en Colombia. Está hecha como una sola página HTML con CSS y JavaScript integrados; el recorrido 2D/3D fue retirado.

## Estructura

- `artifacts/domotienda/index.html` — Página completa con estilos y lógica integrados; usa Font Awesome y Google Fonts desde CDN. No depende de React ni de un motor 2D/3D.
- `artifacts/domotienda/vite.config.ts` — Sirve el HTML estático con HMR overlay deshabilitado.
- `attached_assets/exports/domotienda-3d.html` — Copia descargable del HTML final.
- `attached_assets/Pasted-1-Qu-es-la-dom-tica-y-c-mo-funciona-Respuesta-La-dom-ti_*.txt` — Fuente de las 20 preguntas del FAQ.
- `artifacts/api-server/`, `artifacts/mockup-sandbox/` — Andamios sin uso para este proyecto.

## Configuración relevante

- WhatsApp: `573052332703` (constante `WHATSAPP_NUMBER`)
- Calendly: `https://calendly.com/famhalat01/30min` (constante `CALENDLY_URL`, inline en modal)
- Carrito persistido en `localStorage` con clave `domo3d_cart_v2`
- Las variantes elegidas en el catálogo se incluyen en el carrito y en la cotización de WhatsApp.

## Funcionalidad conservada

- Hero directo con accesos al catálogo, WhatsApp y agenda de visita virtual.
- “Cómo funciona” como sección informativa estática de cinco pasos.
- Luna, el catálogo con variantes, y carrito persistido con cotización por WhatsApp.
- Agenda de Calendly cargada al abrir su modal y ventanas modales de términos y privacidad.
- Navegación por secciones y diseño adaptable a móvil.

## Cómo correr

El workflow `artifacts/domotienda: web` arranca Vite en el `PORT` asignado y sirve el HTML directamente. Cualquier cambio en `index.html` se refresca solo (HMR overlay deshabilitado).
