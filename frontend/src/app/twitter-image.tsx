import { ImageResponse } from 'next/og';

// Ruta: app/twitter-image.tsx
export const runtime = 'edge';

export const alt = 'Lightball - Consultoría Tecnológica';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  const interSemiBold = fetch(
    new URL('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap')
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '"Inter"',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <img
            src="https://lightball.tech/images/logo.svg"
            alt="Lightball Logo"
            style={{
              width: '200px',
              height: '200px',
            }}
          />
          <div
            style={{
              fontSize: 36,
              color: '#ffffff',
              maxWidth: '70%',
              textAlign: 'center',
            }}
          >
            Soluciones tecnológicas innovadoras para impulsar tu negocio
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await interSemiBold,
          style: 'normal',
          weight: 600,
        },
      ],
    }
  );
} 