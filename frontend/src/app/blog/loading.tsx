export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestro Blog</h1>
      
      <div className="space-y-8">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row animate-pulse">
            <div className="h-64 md:w-1/3 w-full bg-gray-300"></div>
            <div className="p-6 flex-grow md:w-2/3">
              <div className="h-8 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mb-6"></div>
              <div className="h-10 bg-gray-300 rounded w-1/6"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 