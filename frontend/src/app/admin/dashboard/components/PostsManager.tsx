"use client";

import { FiPlusCircle } from "react-icons/fi";

interface PostsManagerProps {
  onNewPost?: () => void;
}

export default function PostsManager({ onNewPost }: PostsManagerProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Gestión de artículos</h3>
        <button 
          onClick={onNewPost}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <FiPlusCircle className="mr-2" /> Nuevo artículo
        </button>
      </div>
      <p className="text-gray-600 mb-4">
        Aquí podrás crear, editar y gestionar todos los artículos del blog.
      </p>
      <div className="bg-indigo-50 p-4 rounded-lg">
        <p className="text-indigo-800">
          Esta sección se implementará próximamente con funcionalidades completas de gestión de contenidos.
        </p>
      </div>
    </div>
  );
} 