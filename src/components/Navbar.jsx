import { ShoppingCart, User, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary cursor-pointer">
          Redbubble
        </h1>

        {/* Search */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/2">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar productos..."
            className="bg-transparent outline-none px-3 flex-1 text-gray-700"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          <button className="hover:text-primary transition">
            <User />
          </button>
          <button className="hover:text-primary transition relative">
            <ShoppingCart />
            <span className="absolute -top-2 -right-2 text-xs bg-primary text-white rounded-full px-1">
              2
            </span>
          </button>
        </div>
      </nav>
    </header>
  )
}
