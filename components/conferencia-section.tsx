"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Users, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const paquetesConferencia = [
  {
    nombre: "Pase de 1 Día",
    precio: "$85",
    descripcion: "Acceso a conferencias de un día",
    beneficios: [
      "Acceso a todas las sesiones del día",
      "Material de conferencias",
      "Coffee breaks incluidos",
      "Certificado de participación",
    ],
    popular: false,
  },
  {
    nombre: "Pase Completo",
    precio: "$200",
    descripcion: "Acceso completo a los 3 días",
    beneficios: [
      "Acceso a todas las conferencias",
      "Sesiones de networking",
      "Almuerzo de gala incluido",
      "Kit completo de materiales",
      "Acceso a grabaciones digitales",
    ],
    popular: true,
  },
  {
    nombre: "Pase VIP",
    precio: "$350",
    descripcion: "Experiencia premium completa",
    beneficios: [
      "Todo lo del pase completo",
      "Acceso a sesiones exclusivas",
      "Meet & greet con speakers",
      "Cena VIP de clausura",
      "Consultoría personalizada",
    ],
    popular: false,
  },
]

const speakers = [
  {
    nombre: "Dr. María Rodríguez",
    cargo: "Directora de Investigación Cacaotera",
    empresa: "INIA Venezuela",
    especialidad: "Genética del Cacao",
    imagen: "/placeholder.svg?height=100&width=100",
    bio: "Experta en mejoramiento genético del cacao con 20 años de experiencia",
  },
  {
    nombre: "Carlos Mendoza",
    cargo: "CEO",
    empresa: "Chocolates El Rey",
    especialidad: "Comercialización Internacional",
    imagen: "/placeholder.svg?height=100&width=100",
    bio: "Líder en exportación de cacao venezolano a mercados premium",
  },
  {
    nombre: "Dr. Jean-Pierre Dubois",
    cargo: "Master Chocolatier",
    empresa: "École Chocolat Paris",
    especialidad: "Técnicas de Procesamiento",
    imagen: "/placeholder.svg?height=100&width=100",
    bio: "Reconocido experto internacional en técnicas de chocolate fino",
  },
]

const programaDias = {
  dia1: [
    {
      hora: "9:00 - 9:30",
      titulo: "Registro y Bienvenida",
      speaker: "Comité Organizador",
      tipo: "Apertura",
    },
    {
      hora: "9:30 - 10:30",
      titulo: "Primer Congreso Internacional del Cacao Venezolano - Inauguración",
      speaker: "Dr. María Rodríguez",
      tipo: "Conferencia Magistral",
    },
    {
      hora: "10:30 - 11:00",
      titulo: "Coffee Break",
      speaker: "",
      tipo: "Descanso",
    },
    {
      hora: "11:00 - 12:00",
      titulo: "Tendencias Globales del Mercado Cacaotero",
      speaker: "Carlos Mendoza",
      tipo: "Conferencia",
    },
    {
      hora: "12:00 - 13:00",
      titulo: "Innovaciones en Procesamiento de Cacao",
      speaker: "Dr. Jean-Pierre Dubois",
      tipo: "Conferencia",
    },
  ],
  dia2: [
    {
      hora: "9:00 - 10:00",
      titulo: "Sostenibilidad en la Producción Cacaotera",
      speaker: "Dr. María Rodríguez",
      tipo: "Conferencia",
    },
    {
      hora: "10:00 - 11:00",
      titulo: "Certificaciones Internacionales",
      speaker: "Panel de Expertos",
      tipo: "Panel",
    },
    {
      hora: "11:00 - 11:30",
      titulo: "Coffee Break",
      speaker: "",
      tipo: "Descanso",
    },
    {
      hora: "11:30 - 12:30",
      titulo: "Tecnología en la Cadena de Valor",
      speaker: "Carlos Mendoza",
      tipo: "Conferencia",
    },
  ],
  dia3: [
    {
      hora: "9:00 - 10:00",
      titulo: "El Futuro del Cacao Venezolano",
      speaker: "Panel de Expertos",
      tipo: "Panel",
    },
    {
      hora: "10:00 - 11:00",
      titulo: "Oportunidades de Inversión",
      speaker: "Inversionistas Internacionales",
      tipo: "Conferencia",
    },
    {
      hora: "11:00 - 12:00",
      titulo: "Clausura del Primer Congreso Internacional",
      speaker: "Comité Organizador",
      tipo: "Clausura",
    },
  ],
}

export default function ConferenciaSection() {
  const [diaSeleccionado, setDiaSeleccionado] = useState("dia1")

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
  <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-yellow-500 text-yellow-900">
              <Star className="w-4 h-4 mr-1" />
              Evento Histórico
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Primer Congreso Internacional del Cacao Venezolano</h1>
            <p className="text-xl mb-8 text-blue-100">
              Un evento histórico que marca el futuro de la industria cacaotera venezolana
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="flex flex-col items-center">
                <Calendar className="w-8 h-8 mb-2 text-blue-200" />
                <h3 className="font-semibold">3 Días Intensivos</h3>
                <p className="text-sm text-blue-100">15-17 Marzo 2026</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 mb-2 text-blue-200" />
                <h3 className="font-semibold">Speakers Internacionales</h3>
                <p className="text-sm text-blue-100">20+ Expertos Mundiales</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 mb-2 text-blue-200" />
                <h3 className="font-semibold">Mérida, Venezuela</h3>
                <p className="text-sm text-blue-100">Centro de Convenciones</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Speakers Destacados */}
      <div className="py-16">
  <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Speakers Internacionales</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aprende de los mejores expertos mundiales en cacao
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {speakers.map((speaker, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={speaker.imagen || "/placeholder.svg"} alt={speaker.nombre} />
                    <AvatarFallback>
                      {speaker.nombre
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{speaker.nombre}</CardTitle>
                  <CardDescription>
                    {speaker.cargo} - {speaker.empresa}
                  </CardDescription>
                  <Badge variant="secondary" className="mx-auto">
                    {speaker.especialidad}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{speaker.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Programa de Conferencias */}
      <div className="py-16 bg-white">
  <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Programa de Conferencias</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Agenda completa del Primer Congreso Internacional</p>
          </div>

          <Tabs value={diaSeleccionado} onValueChange={setDiaSeleccionado} className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="dia1">Día 1 - 15 Marzo</TabsTrigger>
              <TabsTrigger value="dia2">Día 2 - 16 Marzo</TabsTrigger>
              <TabsTrigger value="dia3">Día 3 - 17 Marzo</TabsTrigger>
            </TabsList>

            {Object.entries(programaDias).map(([dia, sesiones]) => (
              <TabsContent key={dia} value={dia} className="mt-8">
                <div className="space-y-4">
                  {sesiones.map((sesion, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <Clock className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                            <p className="text-sm font-medium">{sesion.hora}</p>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{sesion.titulo}</h3>
                            {sesion.speaker && <p className="text-gray-600">{sesion.speaker}</p>}
                          </div>
                        </div>
                        <Badge variant={sesion.tipo === "Conferencia Magistral" ? "default" : "secondary"}>
                          {sesion.tipo}
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* Paquetes de Conferencia */}
      <div className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Paquetes de Conferencia</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elige tu nivel de participación en este evento histórico
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {paquetesConferencia.map((paquete, index) => (
              <Card key={index} className={`relative ${paquete.popular ? "ring-2 ring-blue-500 scale-105" : ""}`}>
                {paquete.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                    <Star className="w-3 h-3 mr-1" />
                    Más Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{paquete.nombre}</CardTitle>
                  <CardDescription>{paquete.descripcion}</CardDescription>
                  <div className="text-3xl font-bold text-blue-600 mt-4">
                    {paquete.precio}
                    <span className="text-sm text-gray-500 font-normal">/persona</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {paquete.beneficios.map((beneficio, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/registro">
                    <Button
                      className={`w-full ${
                        paquete.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-800 hover:bg-gray-900"
                      }`}
                    >
                      Registrarse
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
  <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Sé Parte de la Historia</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            No te pierdas el Primer Congreso Internacional del Cacao Venezolano
          </p>
          <Link href="/registro">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Registrarse al Congreso
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
