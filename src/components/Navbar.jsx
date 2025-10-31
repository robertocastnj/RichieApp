import { useState, useEffect } from 'react'
import {
  Search,
  User,
  ShoppingCart,
  Menu,
  X,
  LogOut,
  Settings,
  ChevronDown,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const { userData, logout } = useAuth()

  return (
    <header className="bg-(--color-dark) text-(--color-light) shadow-md sticky top-0 z-50">
      {/* Top Section */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/Logo_color.png"
            alt="Richie logo"
            className="h-8 object-contain"
          />
        </Link>

        {/* Search bar */}
        <div className="hidden md:flex items-center bg-(--color-light)/10 rounded-full px-4 py-2 w-1/2">
          <Search className="w-5 h-5 text-(--color-yellow)" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-3 flex-1 text-(--color-light) placeholder-(--color-graylight)"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5 relative">
          <div className="hidden md:flex items-center space-x-5">
            {/* User menu logic */}
            {!userData ? (
              <Link to="/login">
                <User className="text-(--color-yellow) w-5 h-5 hover:text-(--color-red) transition" />
              </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen((prev) => !prev)}
                  className="flex items-center gap-1 text-(--color-yellow) hover:text-(--color-red) transition"
                >
                  <User className="w-5 h-5" />
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown menu */}
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 bg-(--color-dark) border border-(--color-graylight)/30 rounded-md shadow-lg w-48 animate-fadeIn">
                    <div className="px-4 py-2 border-b border-(--color-graylight)/20">
                      <p className="text-sm text-(--color-yellow) font-semibold truncate">
                        {userData?.name || 'Usuario'}
                      </p>
                      <p className="text-xs text-(--color-graylight)">
                        {userData?.email}
                      </p>
                    </div>
                    <Link
                      to="/settings"
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-(--color-light)/10 transition"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <Settings size={16} />
                      Editar perfil
                    </Link>
                    <button
                      onClick={() => {
                        logout()
                        setUserMenuOpen(false)
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-(--color-light)/10 text-left transition"
                    >
                      <LogOut size={16} />
                      Cerrar sesión
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Cart icon */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-(--color-yellow) w-5 h-5 hover:text-(--color-red) transition" />
              <span className="absolute -top-2 -right-2 bg-(--color-red) text-(--color-light) text-xs px-1 rounded-full">
                2
              </span>
            </Link>
          </div>

          {/* Hamburger for mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-(--color-yellow) hover:text-(--color-red) transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Navigation links (Desktop) */}
      <div className="hidden md:flex bg-(--color-dark) items-center justify-center">
        <div className="w-[60%] flex items-end justify-between px-6 py-2 text-sm font-medium">
          <Link
            to="/portfolio"
            className="text-(--color-light) hover:text-(--color-yellow) transition"
          >
            Portafolio
          </Link>
          <Link
            to="/commissions"
            className="text-(--color-light) hover:text-(--color-yellow) transition"
          >
            Comisiones
          </Link>
          <Link
            to="/shop"
            className="text-(--color-light) hover:text-(--color-yellow) transition"
          >
            Tienda
          </Link>
          <Link
            to="/events"
            className="text-(--color-light) hover:text-(--color-yellow) transition"
          >
            Próximos eventos
          </Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-(--color-dark) border-t border-(--color-graylight)/40 animate-fadeIn">
          <div className="flex flex-col px-6 py-4 space-y-4 text-center">
            <Link
              to="/portfolio"
              className="text-(--color-light) hover:text-(--color-yellow) transition"
              onClick={() => setMenuOpen(false)}
            >
              Portafolio
            </Link>
            <Link
              to="/commissions"
              className="text-(--color-light) hover:text-(--color-yellow) transition"
              onClick={() => setMenuOpen(false)}
            >
              Comisiones
            </Link>
            <Link
              to="/shop"
              className="text-(--color-light) hover:text-(--color-yellow) transition"
              onClick={() => setMenuOpen(false)}
            >
              Tienda
            </Link>
            <Link
              to="/events"
              className="text-(--color-light) hover:text-(--color-yellow) transition"
              onClick={() => setMenuOpen(false)}
            >
              Próximos eventos
            </Link>

            {/* Mobile user menu */}
            <div className="flex flex-col gap-3 pt-4 border-t border-(--color-graylight)/30">
              {!userData ? (
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="text-(--color-yellow) hover:text-(--color-red)"
                >
                  Iniciar sesión
                </Link>
              ) : (
                <>
                  <p className="text-(--color-yellow) font-medium">
                    {userData.name || 'Usuario'}
                  </p>
                  <Link
                    to="/settings"
                    onClick={() => setMenuOpen(false)}
                    className="text-(--color-light) hover:text-(--color-yellow)"
                  >
                    Editar perfil
                  </Link>
                  <button
                    onClick={() => {
                      logout()
                      setMenuOpen(false)
                    }}
                    className="text-(--color-red) hover:text-(--color-yellow)"
                  >
                    Cerrar sesión
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
