"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Star, Handshake, Users, Wine, Network, ChevronRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

const eventosNetworking = [
  {
    id: 1,
    titulo: "Rueda de Negocios B2B Internacional",
    descripcion: "El evento principal de networking para conectar productores con compradores globales",
    fecha: "15-17 Marzo 2026",
    hora: "9:00 AM - 6:00 PM",
    ubicacion: "Centro de Negocios Principal",
    categoria: "Rueda de Negocios",
    precio: "$350",
    destacado: true,
    imagen: "/placeholder.svg?height=200&width=300",
    detalles: [
      "500+ reuniones B2B programadas",
      "Compradores de 30+ países",
      "Plataforma de matchmaking digital",
      "Seguimiento post-evento incluido",
    ],
  },
  {
    id: 2,
    titulo: "Cóctel VIP de Compradores Internacionales",
    descripcion: "Evento exclusivo para networking informal con los principales compradores mundiales",
    fecha: "15 Marzo 2026",
    hora: "7:00 PM - 10:00 PM",
    ubicacion: "Terraza VIP Hotel Serrano",
    categoria: "Networking VIP",
    precio: "$150",
    destacado: true,
    imagen: "/placeholder.svg?height=200&width=300",
    detalles: [
      "Solo 100 participantes seleccionados",
      "Compradores premium internacionales",
      "Ambiente relajado para networking",
      "Degustación de cacao premium",
    ],
  },
  {
    id: 3,
    titulo: "Almuerzo de Negocios con Exportadores",
    descripcion: "Encuentro gastronómico para facilitar conexiones comerciales",
    fecha: "16 Marzo 2026",
    hora: "12:00 PM - 2:00 PM",
    ubicacion: "Salón Ejecutivo",
    categoria: "Almuerzo de Negocios",
    precio: "$85",
    destacado: false,
    imagen: "/placeholder.svg?height=200&width=300",
    detalles: [
      "Mesas temáticas por región",
      "Facilitadores de conversación",
      "Menú gourmet con cacao",
      "Intercambio de tarjetas digitales",
    ],
  },
  {
    id: 4,
    titulo: "Speed Networking del Cacao",
    descripcion: "Sesiones rápidas de networking para maximizar conexiones",
    fecha: "16 Marzo 2026",
    hora: "4:00 PM - 6:00 PM",
    ubicacion: "Sala de Networking Dinámico",
    categoria: "Speed Networking",
    precio: "$75",
    destacado: false,
    imagen: "/placeholder.svg?height=200&width=300",
    detalles: [
      "5 minutos por conexión",
      "50+ participantes por sesión",
      "Sistema de matching inteligente",
      "Seguimiento digital automático",
    ],
  },
  {
    id: 5,
    titulo: "Cena de Gala de Clausura",
    descripcion: "Evento de cierre con premiación y networking final",
    fecha: "17 Marzo 2026",
    hora: "7:00 PM - 11:00 PM",
    ubicacion: "Gran Salón Hotel Serrano",
    categoria: "Gala",
    precio: "$200",
    destacado: false,
    imagen: "/placeholder.svg?height=200&width=300",
    detalles: [
      "Cena de 5 tiempos",
      "Premiación a mejores negocios",
      "Música en vivo",
      "Última oportunidad de networking",
    ],
  },
  {
    id: 6,
    titulo: "Desayuno de Networking Matutino",
    descripcion: "Inicio del día con conexiones comerciales tempranas",
    fecha: "16-17 Marzo 2026",
    hora: "7:00 AM - 8:30 AM",
    ubicacion: "Café del Centro de Convenciones",
    categoria: "Desayuno de Negocios",
    precio: "$45",
    destacado: false,
    imagen: "/placeholder.svg?height=200&width=300",
    detalles: [
      "Ambiente relajado matutino",
      "Café premium venezolano",
      "Networking informal",
      "Preparación para el día",
    ],
  },
]

const categorias = [
  "Todos",
  "Rueda de Negocios",
  "Networking VIP",
  "Almuerzo de Negocios",
  "Speed Networking",
  "Gala",
  "Desayuno de Negocios",
]

const agendaNetworking = {
  "15-marzo": [
    { hora: "9:00 AM", evento: "Inicio Rueda de Negocios - Día 1", ubicacion: "Centro de Negocios" },
    { hora: "12:00 PM", evento: "Almuerzo de Networking", ubicacion: "Restaurante Principal" },
    { hora: "2:00 PM", evento: "Continuación Reuniones B2B", ubicacion: "Salas de Reuniones" },
    { hora: "7:00 PM", evento: "Cóctel VIP Compradores Internacionales", ubicacion: "Terraza VIP" },
  ],
  "16-marzo": [
    { hora: "7:00 AM", evento: "Desayuno de Networking Matutino", ubicacion: "Café del Centro" },
    { hora: "9:00 AM", evento: "Rueda de Negocios - Día 2", ubicacion: "Centro de Negocios" },
    { hora: "12:00 PM", evento: "Almuerzo de Negocios con Exportadores", ubicacion: "Salón Ejecutivo" },
    { hora: "4:00 PM", evento: "Speed Networking del Cacao", ubicacion: "Sala de Networking" },
  ],
  "17-marzo": [
    { hora: "7:00 AM", evento: "Desayuno de Networking Matutino", ubicacion: "Café del Centro" },
    { hora: "9:00 AM", evento: "Rueda de Negocios - Día Final", ubicacion: "Centro de Negocios" },
    { hora: "2:00 PM", evento: "Sesión de Cierre de Negocios", ubicacion: "Auditorio Principal" },
    { hora: "7:00 PM", evento: "Cena de Gala de Clausura", ubicacion: "Gran Salón" },
  ],
}

export default function EventosSection() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos")
  const [diaSeleccionado, setDiaSeleccionado] = useState("15-marzo")

  const eventosFiltrados =
    categoriaSeleccionada === "Todos"
      ? eventosNetworking
      : eventosNetworking.filter((evento) => evento.categoria === categoriaSeleccionada)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-yellow-500 text-yellow-900">
              <Network className="w-4 h-4 mr-1" />
              Eventos de la Rueda de Negocios
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Participa en la Rueda de Negocios</h1>
            <p className="text-xl mb-8 text-blue-100">
              Conecta con los principales actores de la industria y expande tu red de contactos
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="flex flex-col items-center">
                <Handshake className="w-8 h-8 mb-2 text-blue-200" />
                <h3 className="font-semibold">Rueda de Negocios Principal</h3>
                <p className="text-sm text-blue-100">500+ reuniones programadas</p>
              </div>
              <div className="flex flex-col items-center">
                <Wine className="w-8 h-8 mb-2 text-blue-200" />
                <h3 className="font-semibold">Eventos VIP</h3>
                <p className="text-sm text-blue-100">Networking exclusivo</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 mb-2 text-blue-200" />
                <h3 className="font-semibold">Speed Networking</h3>
                <p className="text-sm text-blue-100">Conexiones rápidas y efectivas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium">Filtrar por tipo de evento:</span>
            </div>
            <Select value={categoriaSeleccionada} onValueChange={setCategoriaSeleccionada}>
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Seleccionar tipo de evento" />
              </SelectTrigger>
              <SelectContent>
                {categorias.map((categoria) => (
                  <SelectItem key={categoria} value={categoria}>
                    {categoria}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Lista de Eventos de Networking */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventosFiltrados.map((evento) => (
              <Card
                key={evento.id}
                className={`relative overflow-hidden ${evento.destacado ? "ring-2 ring-blue-500" : ""}`}
              >
                {evento.destacado && (
                  <Badge className="absolute top-4 right-4 bg-blue-500 z-10">
                    <Star className="w-3 h-3 mr-1" />
                    Destacado
                  </Badge>
                )}
                <div className="aspect-video bg-gradient-to-r from-blue-400 to-indigo-400 flex items-center justify-center">
                  <Handshake className="w-12 h-12 text-white" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{evento.categoria}</Badge>
                    <span className="text-lg font-bold text-blue-600">{evento.precio}</span>
                  </div>
                  <CardTitle className="text-xl">{evento.titulo}</CardTitle>
                  <CardDescription>{evento.descripcion}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {evento.fecha}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {evento.hora}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {evento.ubicacion}
                    </div>
                  </div>

                  <div className="space-y-1 mb-4">
                    {evento.detalles.slice(0, 2).map((detalle, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <ChevronRight className="w-3 h-3 mr-1 text-blue-500" />
                        {detalle}
                      </div>
                    ))}
                  </div>

                  <Link href="/registro">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Participar</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Agenda de Networking */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Agenda de Eventos de Networking</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Planifica tu participación en los eventos de networking más efectivos
            </p>
          </div>

          <Tabs value={diaSeleccionado} onValueChange={setDiaSeleccionado} className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="15-marzo">15 Marzo</TabsTrigger>
              <TabsTrigger value="16-marzo">16 Marzo</TabsTrigger>
              <TabsTrigger value="17-marzo">17 Marzo</TabsTrigger>
            </TabsList>

            {Object.entries(agendaNetworking).map(([dia, eventos]) => (
              <TabsContent key={dia} value={dia} className="mt-8">
                <div className="space-y-4">
                  {eventos.map((evento, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <Clock className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                            <p className="text-sm font-medium">{evento.hora}</p>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{evento.evento}</h3>
                            <p className="text-gray-600 flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {evento.ubicacion}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Maximiza tus Oportunidades de Networking</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Participa en los eventos de networking más efectivos de la Rueda de Negocios
          </p>
          <Link href="/registro">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              <Network className="w-5 h-5 mr-2" />
              Participar en Eventos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
