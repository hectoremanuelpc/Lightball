# Lightball - Panel de Administración

Este proyecto implementa un sistema de autenticación seguro para el panel de administración de Lightball utilizando Next.js y NextAuth.js.

## Características

- Autenticación segura con NextAuth.js
- Protección de rutas mediante middleware
- Almacenamiento seguro de contraseñas con bcrypt
- Manejo de sesiones y tokens JWT
- Prevención de bucles de redirección

## Requisitos

- Node.js 18.x o superior
- npm 9.x o superior

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/lightball.git
cd lightball/frontend
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env.local
```

4. Edita el archivo `.env.local` con tus configuraciones.

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Estructura del proyecto

- `/src/app/api/auth/[...nextauth]` - Configuración de NextAuth.js
- `/src/app/admin` - Páginas del panel de administración
- `/src/middleware.ts` - Middleware para protección de rutas
- `/src/utils/auth-helpers.ts` - Utilidades para autenticación

## Rutas principales

- `/admin/login` - Página de inicio de sesión
- `/admin/dashboard` - Panel de administración (protegido)

## Preparación para producción

1. Crea un archivo `.env.production` basado en `.env.production.example`:
```bash
cp .env.production.example .env.production
```

2. Edita el archivo `.env.production` con tus configuraciones de producción:
   - Genera un secreto seguro: `openssl rand -base64 32`
   - Configura la URL de tu dominio
   - Establece credenciales seguras
   - Asegúrate de que `NEXTAUTH_COOKIE_SECURE=true`

3. Construye la aplicación:
```bash
npm run build
```

4. Inicia el servidor de producción:
```bash
npm start
```

## Seguridad

- Las contraseñas se almacenan encriptadas con bcrypt
- Se utilizan tokens JWT para la autenticación
- Las cookies se configuran con opciones seguras en producción
- Se implementa rate limiting para prevenir ataques de fuerza bruta

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## Contacto

Para cualquier consulta o soporte, contacta a [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com).
