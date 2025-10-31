import { useFetchData } from '../hooks/useFetchData'

export default function CategorySection() {
  // Fetch categories from Supabase
  const { data: categories, loading, error } = useFetchData('categories')

  if (loading)
    return (
      <section className="h-[60vh] flex items-center justify-center">
        <p className="text-gray-500">Cargando categorías...</p>
      </section>
    )

  if (error)
    return (
      <section className="h-[60vh] flex items-center justify-center">
        <p className="text-red-500">Error al cargar las categorías 😞</p>
      </section>
    )

  if (!categories || categories.length === 0)
    return (
      <section className="h-[60vh] flex items-center justify-center">
        <p className="text-gray-500">No hay categorías disponibles</p>
      </section>
    )

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h3 className="text-2xl font-bold mb-8 text-[--color-dark]">
        Categorías populares
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="rounded-lg overflow-hidden group cursor-pointer"
          >
            <img
              src={cat.public_url}
              alt={cat.name}
              className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-300 sm:h-60"
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
