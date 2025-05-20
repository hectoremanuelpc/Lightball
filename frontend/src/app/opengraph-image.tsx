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
          fontFamily: 'sans-serif',
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
            src="https://lightball.tech/images/FullLogo_OG_black.png"
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
              fontWeight: 600,
            }}
          >
            Soluciones tecnológicas innovadoras para impulsar tu negocio
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 