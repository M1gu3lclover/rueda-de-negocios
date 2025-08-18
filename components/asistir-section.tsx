"use client"

import { Calendar, MapPin, Clock, Users, Star, CheckCircle, Handshake, TrendingUp, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const paquetesAsistencia = [
  {
    nombre: "Participante Básico",
    precio: "$150",
    descripcion: "Acceso estándar a la rueda de negocios",
    beneficios: [
      "Acceso a piso de exhibición",
      "5 reuniones B2B programadas",
      "Perfil en plataforma de networking",
      "Material informativo básico",
    ],
    popular: false,
  },
  {
    nombre: "Participante Premium",
    precio: "$350",
    descripcion: "Participación completa con networking avanzado",
    beneficios: [
      "Todo lo del paquete básico",
      "15 reuniones B2B programadas",
      "Acceso a eventos VIP de networking",
      "Kit premium de materiales",
      "Almuerzo de negocios incluido",
      "Seguimiento post-evento",
    ],
    popular: true,
  },
  {
    nombre: "Participante VIP",
    precio: "$650",
    descripcion: "Experiencia premium de networking",
    beneficios: [
      "Todo lo del paquete premium",
      "Reuniones B2B ilimitadas",
      "Acceso a sala VIP privada",
      "Cena exclusiva con compradores",
      "Consultoría comercial personalizada",
      "Servicio de matchmaking premium",
    ],
    popular: false,
  },
]

const informacionEvento = {
  fecha: "15-17 Marzo 2026",
  ubicacion: "Centro de Convenciones de Mérida",
  horario: "9:00 AM - 6:00 PM",
  participantes: "500+ reuniones B2B programadas",
}

const beneficiosAsistir = [
  {
    icono: Handshake,
    titulo: "Reuniones B2B Programadas",
    descripcion: "Encuentros comerciales pre-programados con compradores calificados de todo el mundo",
  },
  {
    icono: Target,
    titulo: "Networking Dirigido",
    descripcion: "Sistema de matchmaking inteligente para conectar con los compradores más relevantes",
  },
  {
    icono: TrendingUp,
    titulo: "Oportunidades Reales",
    descripcion: "85% de participantes cierran al menos un negocio durante o después del evento",
  },
  {
    icono: Users,
    titulo: "Compradores Internacionales",
    descripcion: "Acceso directo a compradores de más de 30 países buscando cacao venezolano",
  },
]

export default function AsistirSection() {
  return (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
  <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Participa en Rueda de Negocios 2026</h1>
            <p className="text-xl mb-8 text-green-100">
              Conecta con compradores internacionales y genera negocios reales en el evento B2B más importante de
              Venezuela
            </p>

            {/* Información del evento */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="flex flex-col items-center">
                <Calendar className="w-8 h-8 mb-2 text-green-200" />
                <h3 className="font-semibold">Fechas</h3>
                <p className="text-sm text-green-100">{informacionEvento.fecha}</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 mb-2 text-green-200" />
                <h3 className="font-semibold">Ubicación</h3>
                <p className="text-sm text-green-100">Mérida, Venezuela</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 mb-2 text-green-200" />
                <h3 className="font-semibold">Horario</h3>
                <p className="text-sm text-green-100">{informacionEvento.horario}</p>
              </div>
              <div className="flex flex-col items-center">
                <Handshake className="w-8 h-8 mb-2 text-green-200" />
                <h3 className="font-semibold">Reuniones B2B</h3>
                <p className="text-sm text-green-100">{informacionEvento.participantes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beneficios de Participar */}
      <div className="py-16">
  <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por Qué Participar en Nuestra Rueda de Negocios?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La plataforma más efectiva para generar negocios reales en la industria cacaotera
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficiosAsistir.map((beneficio, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <beneficio.icono className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{beneficio.titulo}</h3>
                <p className="text-gray-600">{beneficio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Paquetes de Participación */}
      <div className="py-16 bg-white">
  <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Paquetes de Participación</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elige el nivel de participación que mejor se adapte a tus objetivos comerciales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {paquetesAsistencia.map((paquete, index) => (
              <Card key={index} className={`relative ${paquete.popular ? "ring-2 ring-green-500 scale-105" : ""}`}>
                {paquete.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500">
                    <Star className="w-3 h-3 mr-1" />
                    Más Efectivo
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{paquete.nombre}</CardTitle>
                  <CardDescription>{paquete.descripcion}</CardDescription>
                  <div className="text-3xl font-bold text-green-600 mt-4">
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
                        paquete.popular ? "bg-green-600 hover:bg-green-700" : "bg-gray-800 hover:bg-gray-900"
                      }`}
                    >
                      Participar Ahora
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Estadísticas de Éxito */}
      <div className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resultados Comprobados</h2>
            <p className="text-lg text-gray-600">Estadísticas de ediciones anteriores</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">$25M+</div>
              <p className="text-gray-600">Volumen de Negocios Generado</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-gray-600">Reuniones B2B Realizadas</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
              <p className="text-gray-600">Participantes Cierran Negocios</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">30+</div>
              <p className="text-gray-600">Países Representados</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 bg-gradient-to-r from-green-600 to-emerald-700">
  <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Hacer Negocios?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            No te pierdas la oportunidad de conectar con compradores internacionales y generar negocios reales
          </p>
          <Link href="/registro">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
              <Handshake className="w-5 h-5 mr-2" />
              Participar en la Rueda
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
