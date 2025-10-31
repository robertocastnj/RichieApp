// src/components/LoginForm.jsx
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../libs/firebase'

export default function LoginForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password)
      navigate('/')
    } catch (err) {
      console.error('❌ Error logging in:', err.message)
      setError('Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email */}
      <div>
        <label className="block text-sm text-(--color-light)/80 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-(--color-graylight)/20 border border-(--color-graylight)/30 text-(--color-light) rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--color-yellow)"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm text-(--color-light)/80 mb-2">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full bg-(--color-graylight)/20 border border-(--color-graylight)/30 text-(--color-light) rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--color-yellow)"
        />
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-(--color-red) text-sm text-center">{error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-(--color-yellow) text-(--color-dark) py-2 rounded-md font-semibold hover:bg-(--color-red) hover:text-(--color-light) transition"
      >
        {loading ? 'Entrando...' : 'Entrar'}
      </button>

      {/* Register link */}
      <p className="text-sm text-center text-(--color-light)/70">
        ¿Aún no tienes cuenta?{' '}
        <Link
          to="/register"
          className="text-(--color-yellow) hover:text-(--color-red) transition font-medium"
        >
          Crear cuenta
        </Link>
      </p>
    </form>
  )
}
