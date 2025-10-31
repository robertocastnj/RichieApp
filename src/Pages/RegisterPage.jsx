import { useState } from 'react'
import { auth, db } from '../libs/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const { email, password, ...rest } = Object.fromEntries(formData.entries())
    console.log({ email, password, ...rest })
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.error('Error registering user:', err)
    }
  }

  return (
    <div className="flex items-center justify-center mt-10 min-h-screen bg-(--color-lightdark)  px-4">
      <div className="bg-(--color-light)/10 backdrop-blur-md p-8 rounded-xl w-full max-w-md shadow-lg border border-(--color-graylight)/40">
        {/*  Header  */}
        <h2 className="text-3xl font-bold text-center text-(--color-yellow) mb-6">
          Registrar nuevo usuario
        </h2>

        {/*  Registration Form  */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1 text-(--color-light)">
              Nombre:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-(--color-dark) border border-(--color-graylight)/60 text-(--color-light) focus:outline-none focus:ring-2 focus:ring-(--color-yellow)"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm mb-1 text-(--color-light)">
              Apellido
            </label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-(--color-dark) border border-(--color-graylight)/60 text-(--color-light) focus:outline-none focus:ring-2 focus:ring-(--color-yellow)"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-(--color-light)">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-(--color-dark) border border-(--color-graylight)/60 text-(--color-light) focus:outline-none focus:ring-2 focus:ring-(--color-yellow)"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1 text-(--color-light)">
              Telefono
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-(--color-dark) border border-(--color-graylight)/60 text-(--color-light) focus:outline-none focus:ring-2 focus:ring-(--color-yellow)"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1 text-(--color-light)">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-(--color-dark) border border-(--color-graylight)/60 text-(--color-light) focus:outline-none focus:ring-2 focus:ring-(--color-yellow)"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-(--color-yellow) text-(--color-dark) py-2 rounded-md font-semibold hover:bg-(--color-red) hover:text-(--color-light) transition"
          >
            Registrar
          </button>
        </form>

        {/* --- Footer --- */}
        <p className="text-center text-sm mt-6">
          ¿Ya tienes una cuenta?{' '}
          <a href="/login" className="text-(--color-yellow) hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}
