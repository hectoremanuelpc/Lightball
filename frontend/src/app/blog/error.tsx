'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Algo salió mal</h1>
      <p className="text-lg mb-8">
        No pudimos cargar los artículos del blog. Por favor, intenta de nuevo más tarde.
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={reset}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Intentar de nuevo
        </button>
        <Link
          href="/"
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
} 