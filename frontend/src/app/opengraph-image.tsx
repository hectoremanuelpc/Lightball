import { ImageResponse } from 'next/og';

// Ruta: app/opengraph-image.tsx
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
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
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
            backgroundImage: 'linear-gradient(to right, #3b82f6, #60a5fa)',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: 96,
            fontWeight: 'bold',
            marginBottom: 24,
          }}
        >
          Lightball
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#1f2937',
            maxWidth: '70%',
            textAlign: 'center',
          }}
        >
          Soluciones tecnológicas innovadoras para impulsar tu negocio
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