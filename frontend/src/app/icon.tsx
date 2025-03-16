import { ImageResponse } from 'next/og';

// Ruta: app/icon.tsx
export const runtime = 'edge';

export const size = {
  width: 512,
  height: 512,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 256,
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #3b82f6, #60a5fa)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '50%',
        }}
      >
        L
      </div>
    ),
    {
      ...size,
    }
  );
} 