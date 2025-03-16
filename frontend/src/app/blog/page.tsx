import { Metadata } from 'next';
import { blogApi, Post } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

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
    <div className="container mx-auto px-4 py-36">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestro Blog</h1>
      
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">No hay artículos disponibles</h2>
          <p className="text-gray-600">Vuelve pronto para ver nuevo contenido.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
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
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 text-sm">
                  Por {post.author.name} • {formatDate(post.createdAt)}
                </p>
                <p className="text-gray-700 mb-6">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-colors"
                >
                  Leer más
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 