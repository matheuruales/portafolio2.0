# Portafolio - Matheu Ruales

Portafolio personal de **Matheu Ruales** enfocado en desarrollo full stack, inteligencia artificial y experiencias interactivas.

## Tecnologias principales

- Next.js
- React
- TypeScript
- Tailwind CSS
- GSAP
- Framer Motion
- Spline Runtime
- Resend

## Desarrollo local

1. Instalar dependencias:

```bash
npm install
```

2. Crear variables de entorno:

```bash
touch .env.local
```

3. Iniciar el proyecto:

```bash
npm run dev
```

4. Abrir en:

```txt
http://localhost:3000
```

## Variables de entorno

Usa `.env.example` como referencia.

Variables clave para produccion:

- `NEXT_PUBLIC_SITE_URL`: URL publica del sitio en Vercel.
- `RESEND_API_KEY`: para el formulario de contacto.
- `NEXT_PUBLIC_WS_URL` (opcional): servidor de tiempo real para cursores/chat.
- `UMAMI_DOMAIN` y `UMAMI_SITE_ID` (opcionales): analitica.

## Despliegue en Vercel

1. Sube este repo a GitHub.
2. En Vercel, crea un proyecto desde ese repo.
3. En `Settings > Environment Variables`, agrega las variables del bloque anterior.
4. Deploy:

```bash
npm install
npm run build
```

Configuracion recomendada:

- Framework: `Next.js` (detectado automaticamente).
- Build command: `next build` (por defecto).
- Output: `.next` (por defecto).
- Node.js: `22.x`.

## Contacto

- Correo: `matheuruales2b2t@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/matheu-ruales-32221a331/`
- GitHub: `https://github.com/matheuruales?tab=repositories`
- Instagram: `https://www.instagram.com/matheu2b2t/`
