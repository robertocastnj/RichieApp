import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: '/images/banner1.jpg',
    title: 'Colección Verano 2025 ☀️',
    text: 'Explora los diseños más frescos y coloridos de la temporada.',
  },
  {
    id: 2,
    image: '/images/banner2.jpg',
    title: 'Arte y Creatividad 🎨',
    text: 'Encuentra obras únicas y productos con estilo auténtico.',
  },
  {
    id: 3,
    image: '/images/banner3.jpg',
    title: 'Nuevas Ofertas 🔥',
    text: 'Hasta 50% de descuento en artículos seleccionados.',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  // Avanza automáticamente cada 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative w-full overflow-hidden bg-(--color-dark)">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-[70vh] sm:h-[80vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-(--color-dark)/70 p-6 sm:p-10 rounded-lg backdrop-blur-sm">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-(--color-yellow) mb-4">
                {slide.title}
              </h2>
              <p className="text-(--color-light) text-sm sm:text-lg mb-6 max-w-xl mx-auto">
                {slide.text}
              </p>
              <button className="bg-(--color-yellow) text-(--color-dark) px-6 py-3 rounded-full font-semibold hover:bg-(--color-red) hover:text-(--color-light) transition">
                Explorar productos
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Controles izquierda / derecha */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-(--color-dark)/60 hover:bg-(--color-red) text-(--color-light) rounded-full p-2 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-(--color-dark)/60 hover:bg-(--color-red) text-(--color-light) rounded-full p-2 transition"
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
