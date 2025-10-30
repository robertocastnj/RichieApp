export default function AdminSettings() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Panel de administrador</h3>
      <p className="text-gray-600 mb-4">
        Desde aquí puedes gestionar usuarios, productos y generar reportes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button className="bg-primary text-white py-3 rounded-lg font-semibold hover:bg-rose-600">
          Gestionar usuarios
        </button>
        <button className="bg-primary text-white py-3 rounded-lg font-semibold hover:bg-rose-600">
          Gestionar productos
        </button>
        <button className="bg-primary text-white py-3 rounded-lg font-semibold hover:bg-rose-600">
          Ver reportes
        </button>
      </div>
    </div>
  );
}
