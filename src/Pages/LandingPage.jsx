import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CategorySection from '../components/CategorySection'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'

const mockProducts = [
  {
    id: 1,
    title: 'Camiseta Minimalista',
    price: '$299 MXN',
    image: '/images/products/tshirt.jpg',
  },
  {
    id: 2,
    title: 'Sticker Abstracto',
    price: '$59 MXN',
    image: '/images/products/sticker.jpg',
  },
  {
    id: 3,
    title: 'Póster Geométrico',
    price: '$199 MXN',
    image: '/images/products/poster.jpg',
  },
  {
    id: 4,
    title: 'Taza Artística',
    price: '$149 MXN',
    image: '/images/products/mug.jpg',
  },
]

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CategorySection />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          Productos destacados
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {mockProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
