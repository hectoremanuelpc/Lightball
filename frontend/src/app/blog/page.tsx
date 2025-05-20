import { Metadata } from 'next';
import { Post } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { FaArrowRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos sobre tecnología y desarrollo',
};

async function getBlogPosts(): Promise<Post[]> {
  try {
    // Llamada al servidor para obtener los posts
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/blog`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Error al cargar los artículos');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error cargando posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-davys-gray/20 overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 py-36 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Nuestro Blog</h1>
        
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">No hay artículos disponibles</h2>
            <p className="text-gray-300">Vuelve pronto para ver nuevo contenido.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-black/40 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row border border-lime-300/20">
                {post.imageUrl && (
                  <div className="relative h-64 md:w-1/3 w-full">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex-grow md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-2 text-white">{post.title}</h2>
                  <p className="text-gray-300 mb-4 text-sm">
                    Por {post.author.name} • {formatDate(post.createdAt)}
                  </p>
                  <p className="text-gray-300 mb-6">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 bg-lime-300 text-black hover:bg-lime-300/90 font-medium py-2 px-6 rounded-xl transition-colors"
                  >
                    Leer más
                    <FaArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 