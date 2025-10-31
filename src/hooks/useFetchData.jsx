import { useEffect, useState } from 'react'
import { supabase } from '../libs/supabase/supabase'

/**
 * Generic hook to fetch data from any Supabase table
 * @param {string} table - The table name (e.g. "images")
 * @param {object} filters - Optional filters (e.g. { category: 'stickers', subcategory: 'ships' })
 * @param {string[]} columns - Columns to select (default: ['*'])
 */
export function useFetchData(table, filters = {}, columns = ['*']) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!table) return

    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        let query = supabase.from(table).select(columns.join(','))

        // Apply filters dynamically
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== '') {
            query = query.eq(key, value)
          }
        })

        const { data, error } = await query

        if (error) throw error
        setData(data)
      } catch (err) {
        console.error(`❌ Error fetching ${table}:`, err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [table, JSON.stringify(filters), columns.join(',')])

  return { data, loading, error }
}
