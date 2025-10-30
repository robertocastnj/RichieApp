export default function LoginForm() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-6 mt-20">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Iniciar sesión</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
          <input
            type="email"
            placeholder="tuemail@ejemplo.com"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
          <input
            type="password"
            placeholder="********"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:bg-rose-600 transition">
          Acceder
        </button>
      </form>
      <p className="text-sm text-gray-600 mt-4 text-center">
        ¿No tienes cuenta? <a href="#" className="text-primary hover:underline">Regístrate aquí</a>
      </p>
    </div>
  );
}
