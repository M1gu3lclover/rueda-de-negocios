import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation" // Import the Navigation component

export default function CacaoExpo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-2 sm:px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Linkedin className="w-4 h-4" />
            <Facebook className="w-4 h-4" />
            <Instagram className="w-4 h-4" />
            <Twitter className="w-4 h-4" />
            <Youtube className="w-4 h-4" />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:space-x-6">
            <span className="text-orange-400">Cacaos de Venezuela</span>
            <span className="text-orange-400">Rueda de Negocios Global</span>
            <span className="text-orange-400">Excelencia del Cacao</span>
            <span className="text-orange-400">Innovación Cacaotera</span>
          </div>
          <div className="text-center sm:text-right">
            <span className="text-orange-400">2025 | Mérida, Venezuela</span>
          </div>
        </div>
      </div>

      {/* Header (using Navigation component) */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 text-white py-16 sm:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-2 sm:px-4 text-center relative z-10">
          <div className="max-w-2xl sm:max-w-4xl mx-auto">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight">
              La
              <br />
              <span className="text-yellow-200">RUEDA DE NEGOCIOS</span>
              <br />
              de Cacaos de Venezuela
              <br />
              2025
            </h1>
            <div className="text-lg xs:text-xl md:text-3xl font-semibold mb-4">2025 / MÉRIDA, VENEZUELA</div>
            <div className="text-base xs:text-lg opacity-90">Hotel El Serrano</div>
          </div>
        </div>

        {/* Decorative cacao bean shapes */}
        <div className="hidden xs:block absolute top-20 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-white/10 rounded-full opacity-50"></div>
        <div className="hidden xs:block absolute bottom-20 right-10 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full opacity-30"></div>
        <div className="hidden xs:block absolute top-1/2 left-4 w-10 h-10 sm:w-16 sm:h-16 bg-white/10 rounded-full opacity-40"></div>
      </section>

      {/* Main Action Cards */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Attend Card */}
            <Card className="group cursor-pointer overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0 h-60 sm:h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Image
                  src="/placeholder.svg?height=320&width=400"
                  alt="Participar en la Rueda de Negocios"
                  width={400}
                  height={320}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-4xl font-bold mb-2">PARTICIPAR</h3>
                  <p className="text-lg opacity-90">Conecta con compradores globales</p>
                </div>
              </CardContent>
            </Card>

            {/* Exhibit Card */}
            <Card className="group cursor-pointer overflow-hidden bg-gradient-to-br from-green-600 to-green-800 text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0 h-60 sm:h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Image
                  src="/placeholder.svg?height=320&width=400"
                  alt="Exhibir productos"
                  width={400}
                  height={320}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-4xl font-bold mb-2">EXHIBIR</h3>
                  <p className="text-lg opacity-90">Muestra tus cacaos premium</p>
                </div>
              </CardContent>
            </Card>

            {/* Excellence Card */}
            <Card className="group cursor-pointer overflow-hidden bg-gradient-to-br from-purple-600 to-purple-800 text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0 h-60 sm:h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Image
                  src="/placeholder.svg?height=320&width=400"
                  alt="Excelencia del cacao"
                  width={400}
                  height={320}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-bold mb-2">EXCELENCIA DEL CACAO GLOBAL</h3>
                  <p className="text-lg opacity-90">Premios y reconocimientos</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rueda de Negocios Section (formerly Conference) */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
                  Plataforma B2B Oficial
                </span>
                <div className="text-3xl font-bold text-gray-900 mt-2">Rueda de Negocios 2025</div>
              </div>

              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">🤝</span>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">RUEDA DE NEGOCIOS</h2>
              <p className="text-lg text-gray-700 mb-6">
                La Rueda de Negocios de Cacaos de Venezuela 2025 es el epicentro para conectar productores, exportadores
                y compradores internacionales. Con más de 500 reuniones B2B programadas, este evento garantiza
                oportunidades reales para expandir tu negocio y acceder a mercados globales.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/placeholder.svg?height=40&width=60"
                    alt="Bandera de Venezuela"
                    width={60}
                    height={40}
                    className="rounded"
                  />
                  <span className="text-sm font-semibold text-gray-700">VENEZUELA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Image
                    src="/placeholder.svg?height=40&width=60"
                    alt="Taste Venezuela"
                    width={60}
                    height={40}
                    className="rounded"
                  />
                  <span className="text-sm font-semibold text-gray-700">Taste Venezuela</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Rueda de Negocios de Cacaos de Venezuela</h3>
              <p className="text-gray-400">La plataforma B2B más importante de la industria cacaotera venezolana</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/asistir" className="hover:text-orange-400">
                    Participar
                  </Link>
                </li>
                <li>
                  <Link href="/exhibir" className="hover:text-orange-400">
                    Exhibir
                  </Link>
                </li>
                <li>
                  <Link href="/rueda-negocios" className="hover:text-orange-400">
                    Rueda de Negocios
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-orange-400">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Información</h4>
              <ul className="space-y-2 text-gray-400">
                <li>2025</li>
                <li>Mérida, Venezuela</li>
                <li>Hotel El Serrano</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
