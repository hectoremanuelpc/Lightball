import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Hacer la petición al backend
    const response = await fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Error en la autenticación');
    }

    const data = await response.json();
    const cookieStore = await cookies();

    // Guardar el token en una cookie segura
    cookieStore.set('token', data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
    });

    // Guardar la información del usuario en una cookie - sin httpOnly para que sea accesible desde JS
    cookieStore.set('user', JSON.stringify(data.user), {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error en el login:', error);
    return NextResponse.json(
      { error: 'Error en la autenticación' },
      { status: 401 }
    );
  }
} 