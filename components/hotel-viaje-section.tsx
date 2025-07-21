"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Plane, Hotel, Car, Utensils, Wifi, Star, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import HotelVirtualTour from "./hotel-virtual-tour"
import SuiteComparator from "./suite-comparator"

export default function HotelViajeSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-yellow-500 text-yellow-900">
              <Hotel className="w-4 h-4 mr-1" />
              Tu Estancia en Mérida
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hotel y Viaje para la Rueda de Negocios</h1>
            <p className="text-xl mb-8 text-blue-100">
              Planifica tu viaje y alojamiento para la Rueda de Negocios de Cacaos de Venezuela 2026
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="flex flex-col items-center">
                <Hotel className="w-8 h-8 mb-2 text-blue-200" />
                <h3 className="font-semibold">Hotel Oficial</h3>
                <p className="text-sm text-blue-100">Tarifas especiales para asistentes</p>
              </div>
              <div className="flex flex-col items-center">
                <Plane className="w-8 h-8 mb-2 text-blue-200" />
                <h3 className="font-semibold">Opciones de Vuelo</h3>
                <p className="text-sm text-blue-100">Conexiones nacionales e internacionales</p>
              </div>
              <div className="flex flex-col items-center">
                <Car className="w-8 h-8 mb-2 text-blue-200" />
                <h3 className="font-semibold">Transporte Local</h3>
                <p className="text-sm text-blue-100">Movilidad fácil en Mérida</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hotel Oficial */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hotel Serrano: Socio Oficial</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Disfruta de una estancia cómoda y conveniente en nuestro hotel oficial, con tarifas preferenciales para
              los participantes de la Rueda de Negocios.
            </p>
          </div>

          <Card className="max-w-5xl mx-auto overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/HotelSerrano.jpg" // Replace with actual hotel image
                  alt="Hotel Serrano"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <CardTitle className="text-3xl font-bold">Hotel El Serrano Mérida</CardTitle>
                <p className="text-gray-700">
                  Ubicado estratégicamente en el area industrial del estado Mérida, el Hotel Serrano ofrece una experiencia de
                  lujo con todas las comodidades para tu viaje de negocios.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    <span>Av. Los Proceres, Mérida, Venezuela</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-2 text-blue-600" />
                    <span>+58 XX XXX XXX</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-2 text-blue-600" />
                    <span>reservas@hotelserrano.com</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                  <div className="flex items-center">
                    <Utensils className="w-4 h-4 mr-2 text-blue-500" />
                    Restaurante Gourmet
                  </div>
                  <div className="flex items-center">
                    <Wifi className="w-4 h-4 mr-2 text-blue-500" />
                    Wi-Fi de Alta Velocidad
                  </div>
                  <div className="flex items-center">
                    <Hotel className="w-4 h-4 mr-2 text-blue-500" />
                    Piscina 
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-blue-500" />
                    Servicio 3 Estrellas
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Reservar con Tarifa Especial</Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>

      {/* Virtual Tour Section */}
      <HotelVirtualTour />

      {/* Suite Comparator Section */}
      <SuiteComparator />

      {/* Opciones de Viaje */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Opciones de Viaje a Mérida</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Información útil para planificar tu llegada a la ciudad de Mérida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plane className="w-6 h-6 text-blue-600" />
                  Vuelos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  El aeropuerto más cercano es el Aeropuerto Alberto Carnevalli (MRD) en Mérida, con vuelos nacionales.
                  Para vuelos internacionales, se recomienda llegar al Aeropuerto Internacional Simón Bolívar (CCS) en
                  Caracas y luego tomar un vuelo de conexión o transporte terrestre a Mérida.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Vuelos directos desde Caracas a Mérida.</li>
                  <li>Aerolíneas recomendadas: Conviasa, Laser Airlines.</li>
                  <li>Tiempo de vuelo Caracas-Mérida: ~1 hora.</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Buscar Vuelos
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="w-6 h-6 text-blue-600" />
                  Transporte Terrestre
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Mérida es accesible por carretera desde varias ciudades de Venezuela. Si llegas a Caracas, puedes
                  optar por un autobús de lujo o un servicio de taxi privado. El viaje es escénico pero largo.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Autobuses de lujo desde las principales ciudades.</li>
                  <li>Servicios de taxi y alquiler de vehículos disponibles.</li>
                  <li>Tiempo de viaje Caracas-Mérida: ~8-10 horas.</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Ver Opciones de Transporte
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Planifica tu Viaje sin Preocupaciones</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Asegura tu alojamiento y transporte para la Rueda de Negocios de Cacaos de Venezuela 2026
          </p>
          <Link href="/registro">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Reservar Ahora
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
