import Hero from '../components/Hero'
import CategorySection from '../components/CategorySection'
import ProductCard from '../components/ProductCard'
import { useFetchData } from '../hooks/useFetchData'

export default function LandingPage() {
  const { data: images, loading, error } = useFetchData('images')

  const randomImages =
    images && images.length > 0
      ? [...images].sort(() => Math.random() - 0.5).slice(0, 5)
      : []

  return (
    <div>
      <Hero />
      <CategorySection />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          Productos destacados
        </h3>

        {loading && (
          <p className="text-gray-500 text-center">Cargando productos...</p>
        )}
        {error && (
          <p className="text-red-500 text-center">
            Error al cargar imágenes 😞
          </p>
        )}
        {!loading && !error && randomImages.length === 0 && (
          <p className="text-gray-500 text-center">
            No hay imágenes disponibles.
          </p>
        )}

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {randomImages.map((img) => (
            <ProductCard
              key={img.id}
              product={{
                title: img.name,
                price: img.price,
                image: img.public_url,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
