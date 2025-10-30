export default function AccountForm() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Datos de tu cuenta</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nombre completo</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Correo electrónico</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            placeholder="tuemail@ejemplo.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Contraseña</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            placeholder="********"
          />
        </div>
        <button className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:bg-rose-600 transition">
          Guardar cambios
        </button>
      </form>
    </div>
  );
}
