"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Button } from "@/components/ui/button"

const panels = {
  expositor: <div>Panel Expositor: Aquí puedes gestionar tus productos y stand.</div>,
  comprador: <div>Panel Comprador: Aquí puedes ver ofertas y contactar expositores.</div>,
  vendedor: <div>Panel Vendedor: Aquí puedes publicar tus productos y ver compradores.</div>,
  exportador: <div>Panel Exportador: Información y contactos para exportación.</div>,
  productor: <div>Panel Productor: Acceso a recursos y networking.</div>,
  visitante: <div>Panel Visitante: Agenda y actividades recomendadas.</div>,
  laboratorio: <div>Panel Laboratorio: Resultados y análisis disponibles.</div>,
  intermediario: <div>Panel Intermediario: Negociaciones y oportunidades.</div>,
  centrald: <div>Panel Central de Beneficio: Gestión de procesos y contactos.</div>,
  asociacionp: <div>Panel Asociación de Productores: Información y eventos.</div>,
  agroinsumos: <div>Panel Agroinsumos: Catálogo y pedidos.</div>,
  maquinaria: <div>Panel Maquinaria: Inventario y soporte.</div>,
}

export default function PanelPage() {
  const [session, setSession] = useState<any>(null)
  const [tipo, setTipo] = useState<string>("")
  const [loading, setLoading] = useState(true)

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
    const fetchTipo = async () => {
      if (session?.user?.email) {
        const { data, error } = await supabase
          .from("registros")
          .select("tipoParticipacion")
          .eq("email", session.user.email)
          .single()
        if (data && data.tipoParticipacion) setTipo(data.tipoParticipacion)
      }
      setLoading(false)
    }
    if (session) fetchTipo()
  }, [session])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setSession(null)
    setTipo("")
  }

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
          <h2 className="text-2xl font-bold mb-6">Debes iniciar sesión</h2>
          <p>Por favor, accede con tu correo electrónico para ver tu panel personalizado.</p>
        </div>
      </div>
    )
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Cargando panel...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Panel Personalizado</h1>
        <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white">Cerrar sesión</Button>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        {panels[tipo as keyof typeof panels] || (
          <div>No se encontró tu tipo de participación. Por favor, contacta al soporte.</div>
        )}
      </div>
    </div>
  )
}
