import { cookies } from 'next/headers';
import { authApi } from '@/lib/api';
import LoginForm from './LoginForm';

interface LoginResponse {
  access_token: string;
  user: {
    email: string;
    name: string;
    role: string;
  };
}

async function login(formData: FormData) {
  'use server';

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const response = await authApi.login({ email, password }) as LoginResponse;
    
    // Obtener el store de cookies
    const cookieStore = await cookies();
    
    // Configurar el token con un dominio específico
    cookieStore.set('token', response.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7200
    });

    // Configurar la información del usuario - sin httpOnly para que sea accesible desde JS
    cookieStore.set('user', JSON.stringify(response.user), {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7200
    });

    return { 
      success: true, 
      redirect: '/admin/dashboard'
    };
  } catch (error) {
    console.error('Error de login:', error);
    return { 
      success: false, 
      error: 'Credenciales inválidas' 
    };
  }
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Iniciar sesión
          </h2>
        </div>
        <LoginForm loginAction={login} />
      </div>
    </div>
  );
} 