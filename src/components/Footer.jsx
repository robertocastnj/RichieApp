import { Instagram, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-(--color-dark) text-(--color-light) py-10 mt-20">
      <div className="max-w-7xl flex flex-col justify-center mx-auto px-6 text-center space-y-4">
        {/* Nombre */}
        <Link to={'/'}>
          <div className="w-full flex justify-center gap-4">
            <img src="/Logo_color.png" alt="" className="h-10" />
            <h3 className="text-2xl font-bold text-(--color-yellow)">
              richie.jpg
            </h3>
          </div>
        </Link>

        {/* Redes sociales */}
        <div className="flex justify-center items-center gap-6 mt-4">
          <a
            href="https://www.instagram.com/rechee.jpg/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-(--color-light) hover:text-(--color-yellow) transition"
          >
            <Instagram className="w-5 h-5" />
            <span className="hidden sm:inline text-sm font-medium">
              Instagram
            </span>
          </a>

          <a
            href="https://www.tiktok.com/@rechee.mp4?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-(--color-light) hover:text-(--color-red) transition"
          >
            <Music2 className="w-5 h-5" />
            <span className="hidden sm:inline text-sm font-medium">TikTok</span>
          </a>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-(--color-graylight)/30 my-6 w-2/3 mx-auto"></div>

        {/* Texto final */}
        <p className="text-sm text-(--color-graylight)">
          © {new Date().getFullYear()}{' '}
          <strong>Roberto Alejandro Castillo Nájera</strong>. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  )
}
