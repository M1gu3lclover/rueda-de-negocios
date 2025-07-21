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

export default function RegistrationArea() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    tipoParticipacion: "",
    empresa: "",
    pais: "",
    intereses: [],
    comentarios: "",
  })
  const [errors, setErrors] = useState({})
  const [submissionStatus, setSubmissionStatus] = useState(null) // 'success' or 'error'

  const handleChange = (e) => {
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

  const handleSelectChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const validateStep = () => {
    const newErrors = {}
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

  const handleSubmit = async (e) => {
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
                className="w-full grid grid-cols-2 gap-2"
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
                  <RadioGroupItem value="venededor" id="vendedor" />
                  <Label htmlFor="comprador">Vendedor</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="exportador" id="exportador" />
                  <Label htmlFor="comprador">Exportador</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="productor" id="prductor" />
                  <Label htmlFor="visitante">Productor</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="visitante" id="visitante" />
                  <Label htmlFor="visitante">Visitante Profesional</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="laboratorio" id="laboratorio" />
                  <Label htmlFor="visitante">Laboratorio</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="intermediario" id="intermediario" />
                  <Label htmlFor="visitante">Intermediario</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="centrald" id="centrald" />
                  <Label htmlFor="visitante">Central de Beneficio</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="asociacionp" id="asociacionp" />
                  <Label htmlFor="visitante">Asociación de Productores</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="agroinsumos" id="agroinsumos" />
                  <Label htmlFor="visitante">Agroinsumos</Label>
                </div>
                <div className="flex items-center space-x-2 w-full">
                  <RadioGroupItem value="maquinaria" id="maquinaria" />
                  <Label htmlFor="visitante">Maquinaria</Label>
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
              <Label>Áreas de Interés</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="produccion"
                    value="produccion"
                    checked={formData.intereses.includes("producción")}
                    onCheckedChange={(checked) =>
                      handleChange({ target: { id: "intereses", value: "produccion", type: "checkbox", checked } })
                    }
                  />
                  <Label htmlFor="produccion">Producción de Cacao</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="procesamiento"
                    value="procesamiento"
                    checked={formData.intereses.includes("proccesamiento")}
                    onCheckedChange={(checked) =>
                      handleChange({ target: { id: "intereses", value: "procesamiento", type: "checkbox", checked } })
                    }
                  />
                  <Label htmlFor="procesamiento">Procesamiento de Cacao</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="comercializacion"
                    value="comercializacion"
                    checked={formData.intereses.includes("comercialización")}
                    onCheckedChange={(checked) =>
                      handleChange({
                        target: { id: "intereses", value: "comercializacion", type: "checkbox", checked },
                      })
                    }
                  />
                  <Label htmlFor="comercializacion">Comercialización y Exportación</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="chocolateria"
                    value="chocolateria"
                    checked={formData.intereses.includes("chocolateria")}
                    onCheckedChange={(checked) =>
                      handleChange({ target: { id: "intereses", value: "chocolateria", type: "checkbox", checked } })
                    }
                  />
                  <Label htmlFor="chocolateria">Chocolatería Fina</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="inversion"
                    value="inversion"
                    checked={formData.intereses.includes("inversión")}
                    onCheckedChange={(checked) =>
                      handleChange({ target: { id: "intereses", value: "inversion", type: "checkbox", checked } })
                    }
                  />
                  <Label htmlFor="inversion">Inversión y Financiamiento</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="sostenibilidad"
                    value="sostenibilidad"
                    checked={formData.intereses.includes("sostenibilidad")}
                    onCheckedChange={(checked) =>
                      handleChange({ target: { id: "intereses", value: "sostenibilidad", type: "checkbox", checked } })
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
                onChange={handleChange}
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
        <Alert className="mt-8 border-green-500 text-green-700 bg-green-50">
          <Terminal className="h-4 w-4" />
          <AlertTitle>¡Registro Exitoso!</AlertTitle>
          <AlertDescription>
            Gracias por registrarte en la Rueda de Negocios de Cacaos de Venezuela. Te hemos enviado un email de
            confirmación.
          </AlertDescription>
        </Alert>
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
