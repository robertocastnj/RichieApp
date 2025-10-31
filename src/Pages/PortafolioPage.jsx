import { useState, useEffect } from 'react'
import { supabase } from '../libs/supabase/supabase'
import ProductCard from '../components/ProductCard'

export default function PortfolioPage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await supabase
          .from('images')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) throw error
        setItems(data || [])
      } catch (err) {
        console.error('❌ Error fetching images:', err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-(--color-light)">
      <h2 className="text-3xl font-bold text-(--color-yellow) mb-10 text-center">
        Portafolio de Piezas
      </h2>

      {loading ? (
        <p className="text-center text-(--color-graylight)">Cargando...</p>
      ) : items.length === 0 ? (
        <p className="text-center text-(--color-graylight)">
          No hay piezas registradas todavía.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <ProductCard
              key={item.id}
              product={{
                title: item.name,
                price: item.price,
                image: item.public_url,
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}
