"use client"

import { Building, CheckCircle, Star, Handshake, Target, Globe, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const paquetesExhibicion = [
  {
    nombre: "Stand Básico + Rueda",
    precio: "$2,500",
    descripcion: "Stand estándar con participación en rueda de negocios",
    beneficios: [
      "Stand de 9m² equipado",
      "2 pases de expositor",
      "10 reuniones B2B incluidas",
      "Perfil en plataforma de networking",
      "Listado en directorio",
    ],
    popular: false,
  },
  {
    nombre: "Stand Premium + Networking VIP",
    precio: "$4,500",
    descripcion: "Stand premium con networking avanzado",
    beneficios: [
      "Stand de 16m² premium",
      "4 pases de expositor",
      "25 reuniones B2B incluidas",
      "Acceso a eventos VIP de networking",
      "Diseño personalizado del stand",
      "Promoción en redes sociales",
      "Almuerzo de negocios incluido",
    ],
    popular: true,
  },
  {
    nombre: "Pabellón Corporativo + Rueda VIP",
    precio: "$8,500",
    descripcion: "Espacio exclusivo con rueda de negocios VIP",
    beneficios: [
      "Pabellón de 36m² exclusivo",
      "8 pases de expositor",
      "Reuniones B2B ilimitadas",
      "Sala privada para reuniones",
      "Eventos privados en stand",
      "Campaña de marketing dedicada",
      "Servicio de matchmaking premium",
      "Cena VIP con compradores",
    ],
    popular: false,
  },
]

const beneficiosExhibir = [
  {
    icono: Target,
    titulo: "Audiencia B2B Calificada",
    descripcion: "Acceso directo a más de 500 compradores internacionales pre-calificados",
  },
  {
    icono: Handshake,
    titulo: "Reuniones Programadas",
    descripcion: "Sistema de matchmaking que programa reuniones con compradores relevantes",
  },
  {
    icono: Globe,
    titulo: "Alcance Internacional",
    descripcion: "Compradores de más de 30 países buscando cacao venezolano premium",
  },
  {
    icono: DollarSign,
    titulo: "ROI Comprobado",
    descripcion: "90% de expositores generan negocios durante o después del evento",
  },
]

export default function ExhibirSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Exhibe y Conecta con Compradores Globales</h1>
            <p className="text-xl mb-8 text-orange-100">
              Combina la exhibición de tu cacao con reuniones B2B programadas para maximizar tus oportunidades de
              negocio
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white">
                500+ Compradores B2B
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Reuniones Programadas
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                ROI del 300%+
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Beneficios de Exhibir */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por Qué Exhibir en Nuestra Rueda de Negocios?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La combinación perfecta entre exhibición y networking B2B dirigido
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficiosExhibir.map((beneficio, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <beneficio.icono className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{beneficio.titulo}</h3>
                <p className="text-gray-600">{beneficio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Paquetes de Exhibición */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Paquetes de Exhibición + Networking</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Todos nuestros paquetes incluyen participación en la rueda de negocios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {paquetesExhibicion.map((paquete, index) => (
              <Card key={index} className={`relative ${paquete.popular ? "ring-2 ring-orange-500 scale-105" : ""}`}>
                {paquete.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500">
                    <Star className="w-3 h-3 mr-1" />
                    Más Completo
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{paquete.nombre}</CardTitle>
                  <CardDescription>{paquete.descripcion}</CardDescription>
                  <div className="text-3xl font-bold text-orange-600 mt-4">
                    {paquete.precio}
                    <span className="text-sm text-gray-500 font-normal">/stand</span>
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
                        paquete.popular ? "bg-orange-600 hover:bg-orange-700" : "bg-gray-800 hover:bg-gray-900"
                      }`}
                    >
                      Reservar Stand + Networking
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resultados de Expositores</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">$15M+</div>
              <p className="text-gray-600">Negocios Cerrados por Expositores</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">300+</div>
              <p className="text-gray-600">Reuniones B2B de Expositores</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">90%</div>
              <p className="text-gray-600">Expositores Generan Negocios</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
              <p className="text-gray-600">Países de Compradores</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 bg-gradient-to-r from-orange-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Exhibir y Hacer Negocios?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Combina la exhibición de tu cacao con networking B2B dirigido para maximizar tu ROI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registro">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
                <Building className="w-5 h-5 mr-2" />
                Reservar Stand + Networking
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg bg-transparent"
            >
              <Handshake className="w-5 h-5 mr-2" />
              Ver Compradores
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
