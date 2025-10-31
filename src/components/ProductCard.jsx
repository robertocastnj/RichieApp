import { ShoppingCart } from 'lucide-react'

export default function ProductCard({ product }) {
  const hasPrice = !!product.price

  return (
    <div className="bg-(--color-dark) text-(--color-light) rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />

        {hasPrice && (
          <div className="absolute inset-0 bg-(--color-dark)/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <button className="bg-(--color-yellow) text-(--color-dark) font-semibold px-4 py-2 rounded-full flex items-center gap-2 hover:bg-(--color-red) hover:text-(--color-light) transition">
              <ShoppingCart className="w-4 h-4" />
              Añadir al carrito
            </button>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 text-center">
        <h4 className="text-lg font-semibold text-(--color-yellow) group-hover:text-(--color-red) transition">
          {product.title}
        </h4>
        <p className="text-sm text-(--color-graylight) mt-1">
          {hasPrice ? `${product.price}$ USD` : ''}
        </p>
      </div>
    </div>
  )
}
