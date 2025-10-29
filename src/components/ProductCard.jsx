import { ShoppingCart } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="rounded-lg mb-3 h-48 object-cover"
      />
      <h4 className="font-semibold text-gray-800 mb-1">{product.title}</h4>
      <p className="text-gray-500 mb-3">{product.price}</p>
      <button className="bg-primary text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-rose-600 transition mt-auto">
        <ShoppingCart className="w-4 h-4" /> Añadir al carrito
      </button>
    </div>
  )
}
