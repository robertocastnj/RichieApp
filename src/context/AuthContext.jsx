// src/contexts/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'
import { auth, db } from '../libs/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const ref = doc(db, 'users', user.uid)
          const snap = await getDoc(ref)

          if (snap.exists()) {
            const data = snap.data()
            setUserData(data)
          } else {
            console.warn('No Firestore document found for:', user.uid)
            setUserData(null)
          }
        } catch (err) {
          console.error('❌ Error fetching user data:', err)
        }
      } else {
        setUserData(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const logout = async () => {
    try {
      await signOut(auth)
      setUserData(null)
    } catch (err) {
      console.error('Logout error:', err)
    }
  }

  return (
    <AuthContext.Provider value={{ userData, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
