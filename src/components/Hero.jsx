import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useFetchData } from '../hooks/useFetchData'

export default function Hero() {
  // 🔹 Obtener solo las imágenes de la categoría "eventos"
  const {
    data: slides,
    loading,
    error,
  } = useFetchData('images', { category: 'eventos' })
  const [current, setCurrent] = useState(0)

  // ⏳ Auto-slide cada 6 segundos
  useEffect(() => {
    if (!slides || slides.length === 0) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  if (loading)
    return (
      <section className="h-[70vh] flex items-center justify-center bg-(--color-dark)">
        <p className="text-(--color-light)">Loading events...</p>
      </section>
    )

  if (error)
    return (
      <section className="h-[70vh] flex items-center justify-center bg-(--color-dark)">
        <p className="text-red-500">Error loading images 😞</p>
      </section>
    )

  if (!slides || slides.length === 0)
    return (
      <section className="h-[70vh] flex items-center justify-center bg-(--color-dark)">
        <p className="text-(--color-light)">No event images found</p>
      </section>
    )

  return (
    <section className="relative w-full overflow-hidden mt-10">
      {/* Carrusel */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full ">
            <div className="w-full flex justify-center">
              <img
                src={slide.public_url}
                alt={slide.name}
                className="h-60 sm:h-100 object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Controles */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-(--color-dark)/50 hover:bg-(--color-red) text-(--color-light) rounded-full p-2 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-(--color-dark)/50 hover:bg-(--color-red) text-(--color-light) rounded-full p-2 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index
                ? 'bg-(--color-yellow) w-6'
                : 'bg-(--color-graylight)'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
