// src/Pages/LoginPage.jsx
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import LoginForm from '../components/LoginForm'

export default function LoginPage() {
  const { userData, loading } = useAuth()
  const navigate = useNavigate()

  // Redirect
  useEffect(() => {
    if (!loading && userData) {
      navigate('/')
    }
  }, [userData, loading, navigate])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-(--color-dark) text-(--color-light)">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <section className="h-full flex items-center justify-center ">
      <div className="bg-(--color-dark) mt-8 border border-(--color-graylight)/20 rounded-2xl shadow-lg p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-(--color-yellow) text-center mb-2">
          ¡Bienvenido!
        </h2>
        <p className="text-(--color-light)/70 text-center mb-8">
          Ingresa para acceder a contenido personalizado
        </p>

        <LoginForm />
      </div>
    </section>
  )
}
