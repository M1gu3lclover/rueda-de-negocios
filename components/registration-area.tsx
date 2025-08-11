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

type FormData = {
  nombre: string
  apellido: string
  email: string
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
      // Simulate API call
      console.log("Form Data:", formData)
      try {
        // Replace with actual API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setSubmissionStatus("success")
        // Optionally reset form
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          tipoParticipacion: "",
          empresa: "",
          pais: "",
          intereses: [],
          comentarios: "",
        })
        setStep(1) // Reset to first step
      } catch (error) {
        setSubmissionStatus("error")
      }
    }
  }

  const progressValue = (step / 3) * 100

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
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
            <p className="mb-6 text-gray-700">Gracias por registrarte en la Rueda de Negocios de Cacaos de Venezuela. Te hemos enviado un email de confirmación.</p>
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
