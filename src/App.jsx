import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import MainLayout from './layout/MainLayout'
import LandingPage from './Pages/LandingPage'
import LoginPage from './Pages/LoginPage'
import CartPage from './Pages/CartPage'
import SettingsPage from './Pages/SettingsPage'
import RegisterPage from './Pages/RegisterPage'
import { auth } from './libs/firebase'
import { supabase } from './libs/supabase/supabase'
import { useEffect } from 'react'
import PortfolioPage from './Pages/PortafolioPage'

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/settings/*" element={<SettingsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </MainLayout>
  )
}
