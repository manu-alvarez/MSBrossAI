import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: [
    /*
     * Protege todas las rutas de la app EXCEPTO:
     * - /login y /register (Páginas de autenticación)
     * - /api/auth (Endpoints internos de NextAuth)
     * - /api/auth/register (Endpoint de registro custom)
     * - /_next/static, /_next/image (Assets estáticos de Next)
     * - /images (Carpeta public/images)
     * - Archivos con extensión .png, .jpg, .ico, etc.
     */
    "/((?!login|register|api/auth|_next/static|_next/image|images|.*\\\\.png$).*)",
  ],
};
