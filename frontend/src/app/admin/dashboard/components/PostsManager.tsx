"use client";

import { FiPlusCircle, FiEdit, FiTrash2, FiEye, FiEyeOff } from "react-icons/fi";
import Link from "next/link";
import { Post } from "@/lib/types";
import { formatDate } from "@/lib/utils";

interface PostsManagerProps {
  posts: Post[];
  isLoading: boolean;
  onDelete: (id: string) => void;
  onPublishToggle: (id: string, currentStatus: boolean) => void;
  onRefresh: () => void;
  onNewPost?: () => void;
}

export default function PostsManager({ 
  posts, 
  isLoading, 
  onDelete, 
  onPublishToggle, 
  onRefresh,
}: PostsManagerProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-semibold">Gestión de artículos</h3>
        <div className="flex gap-2">
          <button 
            onClick={onRefresh}
            className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Actualizar
          </button>
          <Link 
            href="/admin/dashboard/new"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition-colors"
          >
            <FiPlusCircle className="mr-2" /> Nuevo artículo
          </Link>
        </div>
      </div>
      
      {isLoading ? (
        <div className="p-8 text-center">
          <p className="text-gray-500">Cargando artículos...</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="p-8 text-center">
          <p className="text-gray-500">No hay artículos disponibles</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Título
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Autor
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{post.title}</div>
                    <div className="text-sm text-gray-500 truncate max-w-md">{post.excerpt}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{post.author.name}</div>
                    <div className="text-sm text-gray-500">{post.author.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{formatDate(post.createdAt)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => onPublishToggle(String(post.id), post.published)}
                      className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        post.published
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {post.published ? (
                        <>
                          <FiEye className="mr-1" /> Publicado
                        </>
                      ) : (
                        <>
                          <FiEyeOff className="mr-1" /> Borrador
                        </>
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                    <Link
                      href={`/admin/dashboard/edit/${String(post.id)}`}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <FiEdit className="inline mr-1" /> Editar
                    </Link>
                    <button
                      onClick={() => onDelete(String(post.id))}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FiTrash2 className="inline mr-1" /> Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 