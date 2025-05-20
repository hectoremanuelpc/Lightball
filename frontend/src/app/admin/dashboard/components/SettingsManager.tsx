"use client";
import { useState, FormEvent } from "react";
import { useSession } from "@/components/SessionProvider";

interface SettingsData {
  blogName: string;
  blogDescription: string;
  metaTitle: string;
  metaDescription: string;
}

interface SettingsManagerProps {
  initialSettings?: SettingsData;
  onSaveSettings?: (settings: SettingsData) => Promise<void>;
  onChangePassword?: () => void;
}

export default function SettingsManager({ 
  initialSettings = {
    blogName: "Lightball Blog",
    blogDescription: "Blog de contenido sobre tecnología y desarrollo",
    metaTitle: "Lightball Blog | Tecnología y Desarrollo",
    metaDescription: "Blog especializado en tecnología, desarrollo web y mejores prácticas de programación"
  },
  onSaveSettings,
  onChangePassword
}: SettingsManagerProps) {
  const { user } = useSession();
  const [settings, setSettings] = useState<SettingsData>(initialSettings);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!onSaveSettings) return;
    
    setIsSaving(true);
    setSaveMessage(null);
    
    try {
      await onSaveSettings(settings);
      setSaveMessage({
        type: 'success',
        text: 'Configuración guardada correctamente'
      });
    } catch (error) {
      console.error('Error al guardar la configuración:', error);
      setSaveMessage({
        type: 'error',
        text: 'Error al guardar la configuración'
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-6">Configuración del blog</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h4 className="text-md font-medium mb-2">Información general</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre del blog
              </label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={settings.blogName}
                onChange={(e) => setSettings({...settings, blogName: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descripción
              </label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={settings.blogDescription}
                onChange={(e) => setSettings({...settings, blogDescription: e.target.value})}
              />
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-md font-medium mb-2">SEO</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Meta título
              </label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={settings.metaTitle}
                onChange={(e) => setSettings({...settings, metaTitle: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Meta descripción
              </label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={settings.metaDescription}
                onChange={(e) => setSettings({...settings, metaDescription: e.target.value})}
              />
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-md font-medium mb-2">Cuenta de administrador</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input 
                type="email" 
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100"
                value={user?.email || ""}
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cambiar contraseña
              </label>
              <button 
                type="button"
                onClick={onChangePassword}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
              >
                Cambiar contraseña
              </button>
            </div>
          </div>
        </div>
        
        {saveMessage && (
          <div className={`p-3 rounded ${saveMessage.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
            {saveMessage.text}
          </div>
        )}
        
        <div className="pt-4 border-t border-gray-200">
          <button 
            type="submit"
            disabled={isSaving}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-70"
          >
            {isSaving ? 'Guardando...' : 'Guardar cambios'}
          </button>
        </div>
      </form>
    </div>
  );
} 