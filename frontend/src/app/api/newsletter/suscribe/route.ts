import { NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

// Interfaz para la respuesta de Mailchimp
interface MailchimpMemberResponse {
  id: string;
  email_address: string;
  status: string;
  merge_fields: Record<string, unknown>;
  timestamp_signup: string;
  unique_email_id: string;
}

// Interfaz para el error de Mailchimp
interface MailchimpError {
  status: number;
  response?: {
    text: string;
  };
  message?: string;
}

// Validación de variables de entorno
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

// Validar que todas las variables de entorno necesarias estén configuradas
if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER_PREFIX || !MAILCHIMP_AUDIENCE_ID) {
  console.error('Error: Faltan variables de entorno de Mailchimp');
  console.error('MAILCHIMP_API_KEY:', MAILCHIMP_API_KEY ? 'Configurada' : 'Falta');
  console.error('MAILCHIMP_SERVER_PREFIX:', MAILCHIMP_SERVER_PREFIX ? 'Configurada' : 'Falta');
  console.error('MAILCHIMP_AUDIENCE_ID:', MAILCHIMP_AUDIENCE_ID ? 'Configurada' : 'Falta');
}

// Configuración de Mailchimp
mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY || '',
  server: MAILCHIMP_SERVER_PREFIX || '',
});

export async function POST(req: Request) {
  try {
    // Validar el cuerpo de la solicitud
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'El email es requerido' 
        },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'El formato del email no es válido' 
        },
        { status: 400 }
      );
    }

    // Validar configuración de Mailchimp
    if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER_PREFIX || !MAILCHIMP_AUDIENCE_ID) {
      return NextResponse.json(
        {
          success: false,
          error: 'Error de configuración del servidor',
          details: 'Configuración de Mailchimp incompleta'
        },
        { status: 500 }
      );
    }

    // Intentar suscribir al usuario
    const response = await mailchimp.lists.addListMember(MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        // Puedes agregar campos adicionales aquí si los necesitas
        // FNAME: firstName,
        // LNAME: lastName,
      }
    }) as MailchimpMemberResponse;

    // Respuesta exitosa
    return NextResponse.json({
      success: true,
      message: '¡Gracias por suscribirte!',
      data: {
        id: response.id,
        email: response.email_address,
        status: response.status
      }
    });

  } catch (error: unknown) {
    console.error('Error al suscribir:', error);

    // Manejar error específico de email ya existente
    const mailchimpError = error as MailchimpError;
    if (mailchimpError.status === 400 && mailchimpError.response?.text) {
      try {
        const responseBody = JSON.parse(mailchimpError.response.text);
        if (responseBody.title === 'Member Exists') {
          return NextResponse.json(
            {
              success: false,
              error: 'Este email ya está suscrito a la newsletter'
            },
            { status: 400 }
          );
        }
      } catch {
        // Si no podemos parsear la respuesta, continuamos con el error genérico
      }
    }

    // Error genérico
    return NextResponse.json(
      {
        success: false,
        error: 'Error al procesar la suscripción',
        details: mailchimpError.message || 'Error desconocido'
      },
      { status: 500 }
    );
  }
}
