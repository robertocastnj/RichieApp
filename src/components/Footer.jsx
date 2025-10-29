export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-20">
      <div className="max-w-7xl mx-auto text-center text-gray-600">
        <p>
          © {new Date().getFullYear()} Redbubble Clone. Todos los derechos
          reservados.
        </p>
        <p className="text-sm mt-2">
          Proyecto educativo hecho con ❤️ en React + Tailwind.
        </p>
      </div>
    </footer>
  )
}
