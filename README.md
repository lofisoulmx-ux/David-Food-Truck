# Landing Page Modular

## Cómo reutilizar este proyecto para un cliente nuevo

Solo necesitas tocar **dos cosas**, nunca el HTML/CSS/JS de estructura:

### 1. `js/config.js`
Todo el contenido vive aquí:
- Nombre de marca, ruta del logo
- Colores y fuentes (sección `theme`)
- Redes sociales y navegación
- Textos del hero, galería, "acerca de" y contacto
- Rutas de todas las imágenes

### 2. Carpeta `assets/`
- Reemplaza `assets/logo.png` por el logo del nuevo cliente (mismo nombre, o cambia la ruta en config.js).
- Reemplaza `assets/hero.jpg` por la foto del hero.
- Agrega las fotos de galería en `assets/gallery/` y referencia sus rutas en `config.js` → `gallery.items`.

## Estructura

```
index.html          → esqueleto HTML, no cambia entre proyectos
css/styles.css       → estilos, usa variables CSS (colores/fuentes vienen de config.js)
js/config.js         → ⚙️ ÚNICO archivo de contenido a editar
js/main.js           → motor que renderiza todo desde config.js, no cambia entre proyectos
assets/              → logo, hero, galería
```

## Cómo ver el sitio
Solo abre `index.html` en el navegador (no requiere instalar nada ni build).
Para producción, sube la carpeta completa a Vercel/Netlify tal cual.

## Pendiente para este proyecto
- Confirmar teléfono/email/WhatsApp reales en `contact` dentro de `config.js`.

## Subir a GitHub y desplegar en Vercel

1. Crea un repositorio nuevo en GitHub (vacío, sin README).
2. En tu computadora, dentro de esta carpeta:
   ```bash
   git init
   git add .
   git commit -m "Landing page inicial"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```
3. En [vercel.com](https://vercel.com), da clic en "Add New Project", importa ese repositorio.
4. Vercel detecta que es un sitio estático automáticamente (no necesita Build Command ni Output Directory). Da clic en "Deploy".
5. Cada vez que hagas `git push` a `main`, Vercel actualiza el sitio solo.
