export default function BusinessHours() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <h3 className="text-xl font-bold mb-4 text-primary">Horario de atención</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Lunes - Viernes</span>
          <span className="font-medium">9:00 - 18:00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Sábado</span>
          <span className="font-medium">Cerrado</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Domingo</span>
          <span className="font-medium">Cerrado</span>
        </div>
      </div>
    </div>
  );
} 