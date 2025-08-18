"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

import { supabase } from "@/lib/supabaseClient"

type FormData = {
  nombre: string
  apellido: string
  email: string
  password: string
  tipoParticipacion: string
  empresa: string
  pais: string
  intereses: string[]
  comentarios: string
}

export default function RegistrationArea() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    tipoParticipacion: "",
    empresa: "",
    pais: "",
    intereses: [],
    comentarios: "",
  })
  type Errors = Partial<Record<keyof FormData, string>>
  const [errors, setErrors] = useState<Errors>({})
  const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null) // 'success' or 'error'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target
    if (type === "checkbox") {
      setFormData((prev) => {
        const newInterests = checked ? [...prev.intereses, value] : prev.intereses.filter((item) => item !== value)
        return { ...prev, intereses: newInterests }
      })
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }))
    }
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData((prev) => {
      const newInterests = checked
        ? [...prev.intereses, interest]
        : prev.intereses.filter((item) => item !== interest)
      return { ...prev, intereses: newInterests }
    })
  }

  const handleSelectChange = (id: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const validateStep = () => {
    const newErrors: Errors = {}
    if (step === 1) {
      if (!formData.nombre) newErrors.nombre = "El nombre es requerido."
      if (!formData.apellido) newErrors.apellido = "El apellido es requerido."
      if (!formData.email) newErrors.email = "El email es requerido."
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido."
    } else if (step === 2) {
      if (!formData.tipoParticipacion) newErrors.tipoParticipacion = "Debe seleccionar un tipo de participación."
      if (!formData.empresa) newErrors.empresa = "El nombre de la empresa es requerido."
      if (!formData.pais) newErrors.pais = "El país es requerido."
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateStep()) {
      // Validación extra antes de enviar a Supabase
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        setErrors((prev) => ({ ...prev, email: "Email inválido." }))
        return
      }
      if (!formData.password || formData.password.length < 6) {
        setErrors((prev) => ({ ...prev, password: "La contraseña debe tener al menos 6 caracteres." }))
        return
      }
      try {
        // 1. Crear usuario en Supabase Auth
        const { data: signUpData, error: authError } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              nombre: formData.nombre,
              apellido: formData.apellido,
              tipoParticipacion: formData.tipoParticipacion,
              empresa: formData.empresa,
              pais: formData.pais,
              intereses: formData.intereses,
              comentarios: formData.comentarios,
            }
          }
        })
        if (authError) {
          // Mensaje específico si el email ya existe
          if (authError.message && authError.message.includes("already registered")) {
            setErrors((prev) => ({ ...prev, email: "Este email ya está registrado. Usa otro o inicia sesión." }))
          } else {
            setSubmissionStatus("error")
          }
          return
        }
        // 2. Guardar datos en la tabla registros
        const res = await fetch("/api/registro", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
        const result = await res.json()
        if (result.success) {
          setSubmissionStatus("success")
          setFormData({
            nombre: "",
            apellido: "",
            email: "",
            password: "",
            tipoParticipacion: "",
            empresa: "",
            pais: "",
            intereses: [],
            comentarios: "",
          })
          setStep(1)
        } else {
          setSubmissionStatus("error")
        }
      } catch (error) {
        setSubmissionStatus("error")
      }
    }
  }

  const progressValue = (step / 3) * 100

  return (
  <div className="container mx-auto px-4 py-8 sm:py-12 max-w-md sm:max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-8">Registro para la Rueda de Negocios</h1>
      <Progress value={progressValue} className="w-full mb-8" />

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Paso 1: Información Personal</h2>
            <div>
              <Label htmlFor="nombre">Nombre</Label>
              <Input id="nombre" value={formData.nombre} onChange={handleChange} required />
              {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
            </div>
            <div>
              <Label htmlFor="apellido">Apellido</Label>
              <Input id="apellido" value={formData.apellido} onChange={handleChange} required />
              {errors.apellido && <p className="text-red-500 text-sm mt-1">{errors.apellido}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" value={formData.password} onChange={handleChange} required minLength={6} />
              <p className="text-gray-500 text-xs mt-1">Mínimo 6 caracteres</p>
            </div>
            <Button type="button" onClick={nextStep} className="w-full bg-green-600 hover:bg-green-700">
              Siguiente
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Paso 2: Detalles de Participación</h2>
            <div>
              <Label htmlFor="tipoParticipacion">Tipo de Participación</Label>
              <RadioGroup
                id="tipoParticipacion"
                value={formData.tipoParticipacion}
                onValueChange={(value) => handleSelectChange("tipoParticipacion", value)}
                className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2"
              >
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="expositor" id="expositor" />
                  <Label htmlFor="expositor">Expositor</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="comprador" id="comprador" />
                  <Label htmlFor="comprador">Comprador</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="vendedor" id="vendedor" />
                  <Label htmlFor="vendedor">Vendedor</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="exportador" id="exportador" />
                  <Label htmlFor="exportador">Exportador</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="productor" id="productor" />
                  <Label htmlFor="productor">Productor</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="visitante" id="visitante" />
                  <Label htmlFor="visitante">Visitante Profesional</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="laboratorio" id="laboratorio" />
                  <Label htmlFor="laboratorio">Laboratorio</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="intermediario" id="intermediario" />
                  <Label htmlFor="intermediario">Intermediario</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="centrald" id="centrald" />
                  <Label htmlFor="centrald">Central de Beneficio</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="asociacionp" id="asociacionp" />
                  <Label htmlFor="asociacionp">Asociación de Productores</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="agroinsumos" id="agroinsumos" />
                  <Label htmlFor="agroinsumos">Agroinsumos</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="maquinaria" id="maquinaria" />
                  <Label htmlFor="maquinaria">Maquinaria</Label>
                </div>
              </RadioGroup>
              {errors.tipoParticipacion && <p className="text-red-500 text-sm mt-1">{errors.tipoParticipacion}</p>}
            </div>
            <div>
              <Label htmlFor="empresa">Empresa</Label>
              <Input id="empresa" value={formData.empresa} onChange={handleChange} required />
              {errors.empresa && <p className="text-red-500 text-sm mt-1">{errors.empresa}</p>}
            </div>
            <div>
              <Label htmlFor="pais">País</Label>
              <Select value={formData.pais} onValueChange={(value) => handleSelectChange("pais", value)}>
                <SelectTrigger id="pais">
                  <SelectValue placeholder="Selecciona tu país" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="venezuela">Venezuela</SelectItem>
                  <SelectItem value="colombia">Colombia</SelectItem>
                  <SelectItem value="ecuador">Ecuador</SelectItem>
                  <SelectItem value="peru">Perú</SelectItem>
                  <SelectItem value="brasil">Brasil</SelectItem>
                  <SelectItem value="usa">Estados Unidos</SelectItem>
                  <SelectItem value="spain">España</SelectItem>
                  <SelectItem value="france">Francia</SelectItem>
                  <SelectItem value="italy">Italia</SelectItem>
                  <SelectItem value="germany">Alemania</SelectItem>
                  <SelectItem value="other">Otro</SelectItem>
                </SelectContent>
              </Select>
              {errors.pais && <p className="text-red-500 text-sm mt-1">{errors.pais}</p>}
            </div>
            <div className="flex justify-between">
              <Button type="button" onClick={prevStep} variant="outline">
                Anterior
              </Button>
              <Button type="button" onClick={nextStep} className="bg-green-600 hover:bg-green-700">
                Siguiente
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Paso 3: Intereses y Comentarios</h2>
            <div>
              <Label>Intereses</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="produccion"
                    value="produccion"
                    checked={formData.intereses.includes("produccion")}
                    onCheckedChange={(checked) =>
                      handleInterestChange("produccion", !!checked)
                    }
                  />
                  <Label htmlFor="produccion">Producción</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="procesamiento"
                    value="procesamiento"
                    checked={formData.intereses.includes("procesamiento")}
                    onCheckedChange={(checked) =>
                      handleInterestChange("procesamiento", !!checked)
                    }
                  />
                  <Label htmlFor="procesamiento">Procesamiento</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="comercializacion"
                    value="comercializacion"
                    checked={formData.intereses.includes("comercializacion")}
                    onCheckedChange={(checked) =>
                      handleInterestChange("comercializacion", !!checked)
                    }
                  />
                  <Label htmlFor="comercializacion">Comercialización</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="chocolateria"
                    value="chocolateria"
                    checked={formData.intereses.includes("chocolateria")}
                    onCheckedChange={(checked) =>
                      handleInterestChange("chocolateria", !!checked)
                    }
                  />
                  <Label htmlFor="chocolateria">Chocolatería</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="inversion"
                    value="inversion"
                    checked={formData.intereses.includes("inversion")}
                    onCheckedChange={(checked) =>
                      handleInterestChange("inversion", !!checked)
                    }
                  />
                  <Label htmlFor="inversion">Inversión</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="sostenibilidad"
                    value="sostenibilidad"
                    checked={formData.intereses.includes("sostenibilidad")}
                    onCheckedChange={(checked) =>
                      handleInterestChange("sostenibilidad", !!checked)
                    }
                  />
                  <Label htmlFor="sostenibilidad">Sostenibilidad y Certificaciones</Label>
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="comentarios">Comentarios Adicionales</Label>
              <Textarea
                id="comentarios"
                value={formData.comentarios}
                onChange={handleTextareaChange}
                rows={4}
                placeholder="Escribe cualquier comentario o pregunta adicional aquí..."
              />
            </div>
            <div className="flex justify-between">
              <Button type="button" onClick={prevStep} variant="outline">
                Anterior
              </Button>
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                Finalizar Registro
              </Button>
            </div>
          </div>
        )}
      </form>

      {submissionStatus === "success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full flex flex-col items-center text-center border border-green-500">
            <Terminal className="h-8 w-8 text-green-600 mb-2" />
            <h2 className="text-2xl font-bold mb-2 text-green-700">¡Registro Exitoso!</h2>
            <p className="mb-4 text-gray-700">Gracias por registrarte en la Rueda de Negocios de Cacaos de Venezuela.</p>
            <p className="mb-6 text-green-700 font-semibold">Te hemos enviado un email de confirmación. <br />Por favor revisa tu bandeja de entrada y haz clic en el enlace para activar tu cuenta antes de iniciar sesión.</p>
            <Button className="bg-green-600 hover:bg-green-700 w-32" onClick={() => setSubmissionStatus(null)}>
              Aceptar
            </Button>
          </div>
        </div>
      )}

      {submissionStatus === "error" && (
        <Alert className="mt-8 border-red-500 text-red-700 bg-red-50">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error en el Registro</AlertTitle>
          <AlertDescription>
            Hubo un problema al procesar tu registro. Por favor, inténtalo de nuevo más tarde.
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}
