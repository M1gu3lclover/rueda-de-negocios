"use client"

import { supabase } from "@/lib/supabaseClient"
import React, { useEffect, useState } from "react"

export default function AdminRegistrosPage() {
  const [registros, setRegistros] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [session, setSession] = useState<any>(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      setSession(data.session)
    }
    getSession()
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (session) {
      const fetchRegistros = async () => {
        const { data, error } = await supabase.from("registros").select("*")
        if (!error) setRegistros(data || [])
        setLoading(false)
      }
      fetchRegistros()
    }
  }, [session])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError("Credenciales incorrectas o usuario no existe.")
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setSession(null)
    setEmail("")
    setPassword("")
  }

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Acceso Admin</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border rounded px-3 py-2" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-medium">Contraseña</label>
            <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border rounded px-3 py-2" required />
          </div>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold">Ingresar</button>
        </form>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-center">Registros de Participantes</h1>
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Cerrar sesión</button>
      </div>
      {loading ? (
        <p>Cargando registros...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Nombre</th>
                <th className="p-2 border">Apellido</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Tipo</th>
                <th className="p-2 border">Empresa</th>
                <th className="p-2 border">País</th>
                <th className="p-2 border">Intereses</th>
                <th className="p-2 border">Comentarios</th>
              </tr>
            </thead>
            <tbody>
              {registros.map((r, i) => (
                <tr key={i} className="border-b">
                  <td className="p-2 border">{r.nombre}</td>
                  <td className="p-2 border">{r.apellido}</td>
                  <td className="p-2 border">{r.email}</td>
                  <td className="p-2 border">{r.tipoParticipacion}</td>
                  <td className="p-2 border">{r.empresa}</td>
                  <td className="p-2 border">{r.pais}</td>
                  <td className="p-2 border">{Array.isArray(r.intereses) ? r.intereses.join(", ") : r.intereses}</td>
                  <td className="p-2 border">{r.comentarios}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
// ...existing code...
}
