import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export async function GET() {
  try {
    const cookiesList = await cookies();
    const token = cookiesList.get('token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'No token found' }, { status: 401 });
    }

    // Hacer la petición al backend con el token
    const response = await fetch('http://localhost:4000/auth/check-session', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Error verificando sesión');
    }

    const data = await response.json();

    // Crear la respuesta
    const res = NextResponse.json(data);

    // Configurar la cookie en la respuesta
    res.cookies.set('token', data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
    } as ResponseCookie);

    return res;
  } catch (error) {
    console.error('Error en check-session:', error);
    return NextResponse.json(
      { error: 'Error verificando sesión' },
      { status: 401 }
    );
  }
} 