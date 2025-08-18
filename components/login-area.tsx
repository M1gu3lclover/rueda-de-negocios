"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"
import Image from "next/image"


export default function LoginArea() {
  const [form, setForm] = useState({ email: "", password: "" })
  const [error, setError] = useState("")
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  // Hooks para recuperación de contraseña
  const [showRecovery, setShowRecovery] = useState(false)
  const [recoveryEmail, setRecoveryEmail] = useState("")
  const [recoverySent, setRecoverySent] = useState(false)
  const [recoveryError, setRecoveryError] = useState("")

  const handleRecovery = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setRecoveryError("")
    if (!recoveryEmail || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(recoveryEmail)) {
      setRecoveryError("Por favor ingresa un email válido.")
      return
    }
    setLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(recoveryEmail)
    setLoading(false)
    if (error) {
      setRecoveryError("No se pudo enviar el correo. Intenta de nuevo.")
    } else {
      setRecoverySent(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    })
    setLoading(false)
    if (error) {
      setError("Credenciales incorrectas o usuario no verificado.")
    } else if (data.session) {
      // Buscar tipoParticipacion en la tabla registros
      const { data: registro, error: regError } = await supabase
        .from("registros")
        .select("tipoParticipacion, nombre")
        .eq("email", form.email)
        .single()
      if (registro) {
        setUser({
          email: form.email,
          tipoParticipacion: registro.tipoParticipacion,
          nombre: registro.nombre || form.email,
        })
      } else {
        setUser({
          email: form.email,
          tipoParticipacion: "usuario",
          nombre: form.email,
        })
      }
    }
  }

  if (user) {
    let tipoMsg = "";
    switch (user.tipoParticipacion) {
      case "expositor":
        tipoMsg = "¡Acceso a tu área de expositor!";
        break;
      case "comprador":
        tipoMsg = "¡Bienvenido comprador!";
        break;
      case "vendedor":
        tipoMsg = "¡Bienvenido vendedor!";
        break;
      case "productor":
        tipoMsg = "¡Bienvenido productor!";
        break;
      default:
        tipoMsg = `¡Bienvenido ${user.tipoParticipacion}!`;
    }
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full flex flex-col items-center text-center border border-green-500">
          <Terminal className="h-8 w-8 text-green-600 mb-2" />
          <h2 className="text-2xl font-bold mb-2 text-green-700">Hola, {user.nombre}</h2>
          <p className="mb-2 text-gray-700">Has iniciado sesión como <span className="font-semibold">{user.tipoParticipacion}</span>.</p>
          <p className="mb-6 text-green-700 font-semibold">{tipoMsg}</p>
          <Button className="bg-green-600 hover:bg-green-700 w-32" onClick={async () => {
            await supabase.auth.signOut();
            setUser(null);
          }}>
            Cerrar sesión
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navigation />
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-white py-6 px-2">
        <div className="bg-white rounded-xl shadow-2xl flex flex-col md:flex-row items-center w-full max-w-3xl overflow-hidden border border-orange-100">
          {/* Imagen decorativa al lado */}
          <div className="hidden md:block w-1/2 h-full relative min-h-[400px]">
            <Image
              src="/HotelSerrano.jpg"
              alt="Hotel El Serrano"
              fill
              className="object-cover w-full h-full"
              style={{ borderTopLeftRadius: '0.75rem', borderBottomLeftRadius: '0.75rem' }}
              priority
              quality={100}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            {/* Sin overlay para que la imagen se vea completamente */}
          </div>
          {/* Logo y formulario */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 sm:p-8">
            <Image
              src="/MDN.png"
              alt="Logo"
              width={80}
              height={80}
              className="mb-4"
              priority
            />
            <h1 className="text-3xl font-extrabold text-orange-700 mb-2 text-center">
              Rueda <span className="text-gray-900">de</span> Negocios
            </h1>
            <h2 className="text-xl font-bold text-center mb-8 text-gray-700">Iniciar Sesión</h2>
            <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={form.email} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" type="password" value={form.password} onChange={handleChange} required />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
                {loading ? "Ingresando..." : "Ingresar"}
              </Button>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mt-2">
                <a href="/registro" className="text-orange-700 hover:underline font-medium text-sm">Registrarse</a>
                <button
                  type="button"
                  className="text-gray-500 hover:text-orange-700 hover:underline font-medium text-sm"
                  onClick={() => {
                    setShowRecovery(true)
                    setRecoverySent(false)
                    setRecoveryEmail("")
                    setRecoveryError("")
                  }}
                >
                  ¿Olvidaste tu contraseña?
                </button>
        {/* Modal de recuperación de contraseña */}
        <Dialog open={showRecovery} onOpenChange={setShowRecovery}>
          <DialogContent className="max-w-md w-full p-0 rounded-xl overflow-hidden">
            <div className="flex flex-col items-center justify-center py-6 px-4 sm:py-8 sm:px-6 w-full">
              <Image src="/MDN.png" alt="Logo" width={60} height={60} className="mb-2" priority />
              <DialogHeader className="w-full text-center mb-2">
                <DialogTitle className="text-2xl font-bold text-orange-700">Recuperar contraseña</DialogTitle>
              </DialogHeader>
              {recoverySent ? (
                <div className="text-green-700 text-center py-4">
                  <div className="flex flex-col items-center mb-2">
                    <svg className="w-10 h-10 text-green-600 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div className="text-lg font-semibold mb-1">¡Enlace enviado!</div>
                  <div className="text-gray-700 text-sm">Hemos enviado un enlace de recuperación a <span className="font-semibold">{recoveryEmail}</span>.<br />Revisa tu bandeja de entrada y sigue las instrucciones.</div>
                  <Button className="mt-6 bg-green-600 hover:bg-green-700 w-full" onClick={() => setShowRecovery(false)}>Cerrar</Button>
                </div>
              ) : (
                <form onSubmit={handleRecovery} className="space-y-4 w-full">
                  <div className="mb-2">
                    <p className="text-gray-700 text-sm mb-2 text-center">Ingresa tu correo electrónico registrado y te enviaremos un enlace para restablecer tu contraseña.</p>
                    <Label htmlFor="recoveryEmail" className="text-gray-800">Email</Label>
                    <Input
                      id="recoveryEmail"
                      type="email"
                      value={recoveryEmail}
                      onChange={e => setRecoveryEmail(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  {recoveryError && (
                    <div className="text-red-600 text-sm text-center">{recoveryError}</div>
                  )}
                  <DialogFooter className="flex flex-col gap-2 mt-2">
                    <Button type="submit" className="bg-green-600 hover:bg-green-700 w-full" disabled={loading}>
                      {loading ? "Enviando..." : "Enviar enlace"}
                    </Button>
                    <Button type="button" variant="outline" className="w-full" onClick={() => setShowRecovery(false)}>Cancelar</Button>
                  </DialogFooter>
                </form>
              )}
            </div>
          </DialogContent>
        </Dialog>
              </div>
              {error && (
                <Alert className="border-red-500 text-red-700 bg-red-50 mt-4">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
