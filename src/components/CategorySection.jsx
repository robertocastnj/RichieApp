const categories = [
  { name: 'Ropa', image: '/images/categories/clothing.jpg' },
  { name: 'Stickers', image: '/images/categories/stickers.jpg' },
  { name: 'Decoración', image: '/images/categories/decor.jpg' },
  { name: 'Accesorios', image: '/images/categories/accessories.jpg' },
]

export default function CategorySection() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">
        Categorías populares
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="rounded-lg overflow-hidden group cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center mt-3 font-medium text-gray-800">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
