"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Post, blogApi } from '@/lib/api';
import { useSession } from '@/components/SessionProvider';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import PostsManager from './components/PostsManager';
import SettingsManager from './components/SettingsManager';
import { DashboardData } from '@/lib/api/dashboard';
import { authApi } from '@/lib/api';

interface DashboardClientProps {
  initialData?: DashboardData;
}

export default function DashboardClient({ initialData }: DashboardClientProps) {
  const router = useRouter();
  const { user, isLoading: isLoadingSession } = useSession();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!isLoadingSession && !user) {
      router.push('/admin/login');
      return;
    }
    if (user) {
      loadPosts();
    }
  }, [user, isLoadingSession, router]);

  const loadPosts = async () => {
    try {
      setIsLoading(true);
      const data = await blogApi.getPosts(true);
      setPosts(data);
      setError(null);
    } catch (err) {
      setError('Error al cargar los posts');
      console.error('Error al cargar los posts:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar este post?')) {
      return;
    }

    try {
      await blogApi.deletePost(id);
      await loadPosts();
    } catch (err) {
      setError('Error al eliminar el post');
      console.error('Error al eliminar el post:', err);
    }
  };

  const handlePublishToggle = async (id: string, currentStatus: boolean) => {
    try {
      await blogApi.updatePost(id, { published: !currentStatus });
      await loadPosts();
    } catch (err) {
      setError('Error al actualizar el estado del post');
      console.error('Error al actualizar el estado del post:', err);
    }
  };

  const handleSignOut = () => {
    authApi.logout();
    router.push('/admin/login');
  };

  if (isLoadingSession) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Verificando sesión...</h2>
          <p className="text-gray-500">Por favor espera mientras verificamos tu sesión</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Redirigiendo a login
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        onSignOut={handleSignOut}
      />
      
      <div className="flex-1 p-8">
        <Header activeTab={activeTab} />
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        {activeTab === 'overview' && (
          <Overview 
            stats={initialData?.stats} 
            recentPosts={initialData?.recentPosts}
          />
        )}
        
        {activeTab === 'posts' && (
          <PostsManager 
            posts={posts}
            isLoading={isLoading}
            onDelete={handleDelete}
            onPublishToggle={handlePublishToggle}
            onRefresh={loadPosts}
          />
        )}
        
        {activeTab === 'settings' && (
          <SettingsManager />
        )}
      </div>
    </div>
  );
} 