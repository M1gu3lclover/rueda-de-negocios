"use client"

import { Building, Award, Star, CheckCircle, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const nivelesPatrocinio = [
  {
    nivel: "Patrocinador Oro",
    precio: "XXXX",
    descripcion: "Máxima visibilidad y beneficios exclusivos",
    beneficios: [
      "Logo prominente en todos los materiales",
      "Stand premium de 36m² incluido",
      "8 pases VIP completos",
      "Sesión de presentación de 30 min",
      "Networking exclusivo con directivos",
      "Campaña de marketing dedicada",
      "Menciones en redes sociales",
      "Acceso a base de datos de asistentes",
    ],
    color: "from-yellow-400 to-yellow-600",
    popular: true,
  },
  {
    nivel: "Patrocinador Plata",
    precio: "xxxxx",
    descripcion: "Excelente visibilidad y beneficios premium",
    beneficios: [
      "Logo en materiales principales",
      "Stand estándar de 16m² incluido",
      "4 pases VIP completos",
      "Participación en panel de expertos",
      "Networking con asistentes VIP",
      "Promoción en newsletter",
      "Material promocional en kit",
    ],
    color: "from-gray-300 to-gray-500",
    popular: false,
  },
  {
    nivel: "Patrocinador Bronce",
    precio: "XXXXXX",
    descripcion: "Visibilidad efectiva y beneficios esenciales",
    beneficios: [
      "Logo en materiales seleccionados",
      "Stand básico de 9m² incluido",
      "2 pases completos",
      "Listado en directorio oficial",
      "Acceso a eventos de networking",
      "Promoción en sitio web",
    ],
    color: "from-orange-400 to-orange-600",
    popular: false,
  },
  {
    nivel: "Aliado Estratégico",
    precio: "XXXXX",
    descripcion: "Colaboración especial y reconocimiento",
    beneficios: [
      "Reconocimiento como aliado oficial",
      "Logo en materiales digitales",
      "2 pases de asistente",
      "Participación en rueda de prensa",
      "Acceso a contenido exclusivo",
      "Certificado de colaboración",
    ],
    color: "from-blue-400 to-blue-600",
    popular: false,
  },
]

const patrocinadoresActuales = [
  {
    nombre: "Toyota Venezuela",
    nivel: "Oro",
    logo: "/placeholder.svg?height=80&width=120",
    descripcion: "Líder automotriz comprometido con el desarrollo venezolano",
    sector: "Automotriz",
  },
  {
    nombre: "Nestlé Venezuela",
    nivel: "Oro",
    logo: "/placeholder.svg?height=80&width=120",
    descripcion: "Empresa alimentaria global con presencia en Venezuela",
    sector: "Alimentario",
  },
  {
    nombre: "JAC Motors",
    nivel: "Plata",
    logo: "/placeholder.svg?height=80&width=120",
    descripcion: "Marca automotriz innovadora en el mercado venezolano",
    sector: "Automotriz",
  },
  {
    nombre: "Universidad de Los Andes (ULA)",
    nivel: "Aliado",
    logo: "/placeholder.svg?height=80&width=120",
    descripcion: "Institución académica líder en investigación cacaotera",
    sector: "Educación",
  },
  {
    nombre: "ULA DIGEX",
    nivel: "Tecnológico",
    logo: "/placeholder.svg?height=80&width=120",
    descripcion: "Centro de innovación digital de la ULA",
    sector: "Tecnología",
  },
  {
    nombre: "Banco de Venezuela",
    nivel: "Financiero",
    logo: "/placeholder.svg?height=80&width=120",
    descripcion: "Institución financiera de apoyo al sector productivo",
    sector: "Financiero",
  },
]

const beneficiosPatrocinio = [
  {
    icono: Users,
    titulo: "Audiencia Calificada",
    descripcion: "Acceso directo a más de 2,000 profesionales del sector cacaotero",
  },
  {
    icono: TrendingUp,
    titulo: "ROI Comprobado",
    descripcion: "Retorno de inversión medible a través de leads y oportunidades generadas",
  },
  {
    icono: Award,
    titulo: "Reconocimiento Sectorial",
    descripcion: "Posicionamiento como líder y aliado estratégico de la industria",
  },
  {
    icono: Building,
    titulo: "Networking Premium",
    descripcion: "Conexiones exclusivas con tomadores de decisión y líderes del mercado",
  },
]

export default function PatrocinadoresSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Patrocinadores y Aliados Estratégicos</h1>
            <p className="text-xl mb-8 text-yellow-100">
              Únete a las empresas líderes que apoyan la Rueda de Negocios del cacao venezolano
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white">
                2,000+ Profesionales Alcanzados
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Cobertura Mediática Nacional
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                ROI Comprobado
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Patrocinadores Actuales */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Patrocinadores</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Empresas líderes que confían en Rueda de Negocios</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {patrocinadoresActuales.map((patrocinador, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building className="w-12 h-12 text-gray-400" />
                  </div>
                  <CardTitle className="text-xl">{patrocinador.nombre}</CardTitle>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="secondary">{patrocinador.nivel}</Badge>
                    <Badge variant="outline">{patrocinador.sector}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{patrocinador.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Beneficios del Patrocinio */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por Qué Ser Patrocinador?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Beneficios estratégicos para tu empresa</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficiosPatrocinio.map((beneficio, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <beneficio.icono className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{beneficio.titulo}</h3>
                <p className="text-gray-600">{beneficio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Niveles de Patrocinio */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Niveles de Patrocinio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elige el nivel que mejor se adapte a tus objetivos de marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nivelesPatrocinio.map((nivel, index) => (
              <Card key={index} className={`relative ${nivel.popular ? "ring-2 ring-yellow-500 scale-105" : ""}`}>
                {nivel.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500">
                    <Star className="w-3 h-3 mr-1" />
                    Más Solicitado
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${nivel.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{nivel.nivel}</CardTitle>
                  <CardDescription>{nivel.descripcion}</CardDescription>
                  <div className="text-2xl font-bold text-yellow-600 mt-4">{nivel.precio}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {nivel.beneficios.map((beneficio, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      nivel.popular ? "bg-yellow-600 hover:bg-yellow-700" : "bg-gray-800 hover:bg-gray-900"
                    }`}
                  >
                    Solicitar Información
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Estadísticas de Impacto */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Impacto de Nuestros Patrocinadores</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">2,000+</div>
              <p className="text-gray-600">Profesionales Alcanzados</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">150+</div>
              <p className="text-gray-600">Empresas Participantes</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">95%</div>
              <p className="text-gray-600">Satisfacción de Patrocinadores</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
              <p className="text-gray-600">Leads Generados</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 bg-gradient-to-r from-yellow-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Ser Nuestro Próximo Patrocinador?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Únete a las empresas líderes que apoyan la Rueda de Negocios del cacao venezolano
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Solicitar Propuesta
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-3 text-lg bg-transparent"
            >
              Descargar Dossier
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
