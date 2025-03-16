import { FiFileText, FiUsers, FiBarChart2 } from "react-icons/fi";

interface StatsData {
  posts: number;
  views: number;
  subscribers: number;
  postsGrowth: string;
  viewsGrowth: string;
  subscribersGrowth: string;
}

interface StatsCardsProps {
  stats: StatsData;
}

export default function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 text-sm">Artículos</p>
            <h3 className="text-3xl font-bold mt-1">{stats.posts}</h3>
          </div>
          <div className="bg-indigo-100 p-3 rounded-lg">
            <FiFileText className="text-indigo-600 text-xl" />
          </div>
        </div>
        <p className="text-green-600 text-sm mt-4">{stats.postsGrowth}</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 text-sm">Visitas</p>
            <h3 className="text-3xl font-bold mt-1">{stats.views}</h3>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg">
            <FiBarChart2 className="text-blue-600 text-xl" />
          </div>
        </div>
        <p className="text-green-600 text-sm mt-4">{stats.viewsGrowth}</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 text-sm">Suscriptores</p>
            <h3 className="text-3xl font-bold mt-1">{stats.subscribers}</h3>
          </div>
          <div className="bg-green-100 p-3 rounded-lg">
            <FiUsers className="text-green-600 text-xl" />
          </div>
        </div>
        <p className="text-green-600 text-sm mt-4">{stats.subscribersGrowth}</p>
      </div>
    </div>
  );
} 