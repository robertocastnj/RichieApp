import { useState } from 'react'
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-(--color-dark) text-(--color-light) shadow-md sticky top-0 z-50">
      {/*  Top Section  */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/Logo_color.png"
            alt="Richie logo"
            className="h-8 object-contain"
          />
        </Link>

        {/*  Search bar */}
        <div className="hidden md:flex items-center bg-(--color-light)/10 rounded-full px-4 py-2 w-1/2">
          <Search className="w-5 h-5 text-(--color-yellow)" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-3 flex-1 text-(--color-light) placeholder-(--color-graylight)"
          />
        </div>

        {/* Icons  */}
        <div className="flex items-center space-x-5">
          {/* Desktop icons */}
          <div className="hidden md:flex items-center space-x-5">
            <Link to="/login">
              <User className="text-(--color-yellow) w-5 h-5 hover:text-(--color-red) transition" />
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-(--color-yellow) w-5 h-5 hover:text-(--color-red) transition" />
              <span className="absolute -top-2 -right-2 bg-(--color-red) text-(--color-light) text-xs px-1 rounded-full">
                2
              </span>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-(--color-yellow) hover:text-(--color-red) transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* navigation links */}
      <div className="hidden md:flex bg-(--color-dark) items-center justify-center">
        <div className="w-[60%] flex items-end justify-between  px-6 py-2 text-sm font-medium">
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

            {/* Icons inside mobile menu */}
            <div className="flex justify-center gap-6 pt-4 border-t border-(--color-graylight)/30">
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <User className="text-(--color-yellow) w-6 h-6 hover:text-(--color-red) transition" />
              </Link>
              <Link to="/cart" onClick={() => setMenuOpen(false)}>
                <ShoppingCart className="text-(--color-yellow) w-6 h-6 hover:text-(--color-red) transition" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
