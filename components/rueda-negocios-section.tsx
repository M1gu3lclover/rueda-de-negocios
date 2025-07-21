"use client"

import { useState } from "react"
import { Clock, Star, CheckCircle, Handshake, TrendingUp, Globe, DollarSign, Target, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const paquetesRuedaNegocios = [
  {
    nombre: "Participante Básico",
    precio: "$150",
    descripcion: "Acceso estándar a la rueda de negocios",
    beneficios: [
      "Perfil en plataforma B2B",
      "5 reuniones programadas",
      "Acceso a área de networking",
      "Material promocional básico",
    ],
    popular: false,
  },
  {
    nombre: "Participante Premium",
    precio: "$350",
    descripcion: "Participación completa con beneficios adicionales",
    beneficios: [
      "Perfil destacado en plataforma",
      "15 reuniones programadas",
      "Acceso VIP a eventos de networking",
      "Kit premium de materiales",
      "Seguimiento post-evento",
      "Almuerzo de negocios incluido",
    ],
    popular: true,
  },
  {
    nombre: "Participante VIP",
    precio: "$650",
    descripcion: "Experiencia exclusiva de networking",
    beneficios: [
      "Todo lo del paquete premium",
      "Reuniones ilimitadas",
      "Acceso a sala VIP privada",
      "Cena exclusiva con compradores internacionales",
      "Consultoría comercial personalizada",
      "Servicio de matchmaking premium",
    ],
    popular: false,
  },
]

const facilitadoresNegocios = [
  {
    nombre: "Carlos Herrera",
    cargo: "Director Comercial Internacional",
    empresa: "ProVenezuela Export",
    especialidad: "Exportación de Cacao",
    imagen: "/placeholder.svg?height=100&width=100",
    bio: "20 años facilitando negocios internacionales de cacao venezolano",
    logros: ["$50M+ en negocios facilitados", "200+ empresas conectadas", "30+ países alcanzados"],
  },
  {
    nombre: "María González",
    cargo: "CEO",
    empresa: "Cacao Premium International",
    especialidad: "Mercados Premium",
    imagen: "/placeholder.svg?height=100&width=100",
    bio: "Experta en posicionamiento de cacao venezolano en mercados de lujo",
    logros: ["Contratos con Godiva y Lindt", "Mercado europeo desarrollado", "Certificaciones internacionales"],
  },
  {
    nombre: "Jean-Pierre Dubois",
    cargo: "Comprador Internacional",
    empresa: "European Cocoa Traders",
    especialidad: "Comercio Internacional",
    imagen: "/placeholder.svg?height=100&width=100",
    bio: "Principal comprador europeo de cacao fino de aroma venezolano",
    logros: ["€25M+ en compras anuales", "Red de 100+ chocolatiers", "15 años en el mercado"],
  },
]

const programaRuedaNegocios = {
  dia1: [
    {
      hora: "8:00 - 9:00",
      titulo: "Registro y Configuración de Perfiles B2B",
      facilitador: "Equipo Técnico",
      tipo: "Registro",
    },
    {
      hora: "9:00 - 9:30",
      titulo: "Inauguración de la Rueda de Negocios Global",
      facilitador: "Carlos Herrera",
      tipo: "Inauguración",
    },
    {
      hora: "9:30 - 12:00",
      titulo: "Primera Ronda de Reuniones B2B",
      facilitador: "Facilitadores Asignados",
      tipo: "Reuniones B2B",
    },
    {
      hora: "12:00 - 13:00",
      titulo: "Almuerzo de Networking",
      facilitador: "",
      tipo: "Networking",
    },
    {
      hora: "13:00 - 16:00",
      titulo: "Segunda Ronda de Reuniones B2B",
      facilitador: "Facilitadores Asignados",
      tipo: "Reuniones B2B",
    },
    {
      hora: "16:00 - 17:00",
      titulo: "Sesión de Matchmaking Adicional",
      facilitador: "María González",
      tipo: "Matchmaking",
    },
  ],
  dia2: [
    {
      hora: "9:00 - 12:00",
      titulo: "Tercera Ronda de Reuniones B2B",
      facilitador: "Facilitadores Asignados",
      tipo: "Reuniones B2B",
    },
    {
      hora: "12:00 - 13:00",
      titulo: "Presentaciones de Oportunidades de Inversión",
      facilitador: "Jean-Pierre Dubois",
      tipo: "Presentación",
    },
    {
      hora: "13:00 - 14:00",
      titulo: "Almuerzo VIP con Compradores Internacionales",
      facilitador: "",
      tipo: "VIP",
    },
    {
      hora: "14:00 - 17:00",
      titulo: "Cuarta Ronda de Reuniones B2B",
      facilitador: "Facilitadores Asignados",
      tipo: "Reuniones B2B",
    },
    {
      hora: "17:00 - 18:00",
      titulo: "Mesa Redonda: Tendencias del Mercado Global",
      facilitador: "Panel de Expertos",
      tipo: "Mesa Redonda",
    },
  ],
  dia3: [
    {
      hora: "9:00 - 12:00",
      titulo: "Quinta Ronda de Reuniones B2B",
      facilitador: "Facilitadores Asignados",
      tipo: "Reuniones B2B",
    },
    {
      hora: "12:00 - 13:00",
      titulo: "Sesión de Seguimiento y Cierre de Negocios",
      facilitador: "Carlos Herrera",
      tipo: "Cierre",
    },
    {
      hora: "13:00 - 14:00",
      titulo: "Almuerzo de Clausura",
      facilitador: "",
      tipo: "Clausura",
    },
    {
      hora: "14:00 - 15:00",
      titulo: "Evaluación y Próximos Pasos",
      facilitador: "Equipo Organizador",
      tipo: "Evaluación",
    },
  ],
}

const estadisticasRuedaNegocios = [
  { numero: "500+", descripcion: "Reuniones B2B Programadas" },
  { numero: "$25M+", descripcion: "Volumen de Negocios Esperado" },
  { numero: "200+", descripcion: "Empresas Participantes" },
  { numero: "30+", descripcion: "Países Representados" },
]

export default function RuedaNegociosSection() {
  const [diaSeleccionado, setDiaSeleccionado] = useState("dia1")

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-yellow-500 text-yellow-900">
              <Handshake className="w-4 h-4 mr-1" />
              Rueda de Negocios Global
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Rueda de Negocios 2026</h1>
            <p className="text-xl mb-8 text-green-100">
              El evento B2B más importante de América Latina para conectar productores, exportadores y compradores
              internacionales de cacao
            </p>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {estadisticasRuedaNegocios.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-green-200 mb-2">{stat.numero}</div>
                  <div className="text-sm text-green-100">{stat.descripcion}</div>
                </div>
              ))}
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
              La oportunidad más efectiva para generar negocios reales en la industria cacaotera
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reuniones Programadas</h3>
              <p className="text-gray-600">Encuentros B2B pre-programados con compradores calificados</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alcance Internacional</h3>
              <p className="text-gray-600">Compradores de más de 30 países buscando cacao venezolano</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Negocios Reales</h3>
              <p className="text-gray-600">Más de $25M en volumen de negocios esperado</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ROI Comprobado</h3>
              <p className="text-gray-600">85% de participantes cierran al menos un negocio</p>
            </div>
          </div>
        </div>
      </div>

      {/* Facilitadores de Negocios */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Facilitadores de Negocios</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expertos que te ayudarán a maximizar tus oportunidades comerciales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {facilitadoresNegocios.map((facilitador, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={facilitador.imagen || "/placeholder.svg"} alt={facilitador.nombre} />
                    <AvatarFallback>
                      {facilitador.nombre
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{facilitador.nombre}</CardTitle>
                  <CardDescription>
                    {facilitador.cargo} - {facilitador.empresa}
                  </CardDescription>
                  <Badge variant="secondary" className="mx-auto">
                    {facilitador.especialidad}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{facilitador.bio}</p>
                  <div className="space-y-1">
                    {facilitador.logros.map((logro, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Award className="w-3 h-3 mr-2 text-green-600" />
                        {logro}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Programa de la Rueda de Negocios */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Programa de la Rueda de Negocios</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Agenda completa de 3 días de networking intensivo</p>
          </div>

          <Tabs value={diaSeleccionado} onValueChange={setDiaSeleccionado} className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="dia1">Día 1 - 15 Marzo</TabsTrigger>
              <TabsTrigger value="dia2">Día 2 - 16 Marzo</TabsTrigger>
              <TabsTrigger value="dia3">Día 3 - 17 Marzo</TabsTrigger>
            </TabsList>

            {Object.entries(programaRuedaNegocios).map(([dia, sesiones]) => (
              <TabsContent key={dia} value={dia} className="mt-8">
                <div className="space-y-4">
                  {sesiones.map((sesion, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <Clock className="w-5 h-5 text-green-600 mx-auto mb-1" />
                            <p className="text-sm font-medium">{sesion.hora}</p>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{sesion.titulo}</h3>
                            {sesion.facilitador && <p className="text-gray-600">{sesion.facilitador}</p>}
                          </div>
                        </div>
                        <Badge variant={sesion.tipo === "Reuniones B2B" ? "default" : "secondary"}>{sesion.tipo}</Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* Paquetes de Participación */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Paquetes de Participación</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elige el nivel de participación que mejor se adapte a tus objetivos comerciales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {paquetesRuedaNegocios.map((paquete, index) => (
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

      {/* Testimonios de Éxito */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Historias de Éxito</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lo que dicen los participantes de ediciones anteriores
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "En una sola rueda de negocios cerré contratos por $2.5M USD con compradores europeos. La organización
                  fue perfecta."
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Miguel Rodríguez</p>
                    <p className="text-sm text-gray-600">Hacienda San José</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Conecté con 15 compradores internacionales en 3 días. Ahora exporto a 8 países nuevos."
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>AG</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Ana González</p>
                    <p className="text-sm text-gray-600">Cacao Premium del Sur</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "La calidad de los compradores es excepcional. Todos están realmente interesados en hacer negocios."
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>CM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Carlos Mendoza</p>
                    <p className="text-sm text-gray-600">Chocolates Andinos</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Hacer Negocios?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Únete a la rueda de negocios más importante del cacao venezolano y conecta con compradores de todo el mundo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registro">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
                <Handshake className="w-5 h-5 mr-2" />
                Participar en la Rueda
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg bg-transparent"
            >
              <Target className="w-5 h-5 mr-2" />
              Ver Compradores
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
