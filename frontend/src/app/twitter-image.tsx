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
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="https://lightball.tech/images/FullLogo_OG_black.png"
          alt="Lightball Logo"
          style={{
            width: '400px',
            height: '400px',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
} 