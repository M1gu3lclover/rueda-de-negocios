"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, MapPin, Building, Tag } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const expositores = [
  {
    id: 1,
    nombre: "Hacienda El Recreo",
    logo: "/placeholder.svg?height=80&width=120",
    descripcion: "Productores de cacao fino de aroma en el estado Mérida.",
    ubicacion: "Mérida, Venezuela",
    productos: ["Cacao en Grano", "Nibs de Cacao"],
    categoria: "Productores",
  },
  {
    id: 2,
    nombre: "Chocolates Venezuela",
    logo: "/placeholder.svg?height=80&width=120",
    descripcion: "Fabricantes de chocolate artesanal con cacao 100% venezolano.",
    ubicacion: "Caracas, Venezuela",
    productos: ["Barras de Chocolate", "Bombones"],
    categoria: "Chocolateros",
  },
  {
    id: 3,
    nombre: "Cacao Export Global",
    logo: "/placeholder.svg?height=80&width=120",
    descripcion: "Empresa líder en la exportación de cacao venezolano a mercados internacionales.",
    ubicacion: "La Guaira, Venezuela",
    productos: ["Cacao en Grano", "Pasta de Cacao"],
    categoria: "Exportadores",
  },
  {
    id: 4,
    nombre: "TecnoCacao Solutions",
    logo: "/placeholder.svg?height=80&width=120",
    descripcion: "Proveedores de maquinaria y tecnología para el procesamiento de cacao.",
    ubicacion: "Valencia, Venezuela",
    productos: ["Maquinaria", "Consultoría"],
    categoria: "Tecnología",
  },
  {
    id: 5,
    nombre: "Fundación Cacao Sostenible",
    logo: "/placeholder.svg?height=80&width=120",
    descripcion: "Organización dedicada a promover prácticas sostenibles en el cultivo de cacao.",
    ubicacion: "Barinas, Venezuela",
    productos: ["Programas de Capacitación", "Certificaciones"],
    categoria: "ONG/Servicios",
  },
  {
    id: 6,
    nombre: "Inversiones Cacaoteras del Sur",
    logo: "/placeholder.svg?height=80&width=120",
    descripcion: "Grupo inversor enfocado en proyectos de desarrollo cacaotero.",
    ubicacion: "Puerto Ordaz, Venezuela",
    productos: ["Inversión", "Financiamiento"],
    categoria: "Inversores",
  },
]

const categorias = ["Todos", "Productores", "Chocolateros", "Exportadores", "Tecnología", "ONG/Servicios", "Inversores"]
const ubicaciones = ["Todos", "Mérida", "Caracas", "La Guaira", "Valencia", "Barinas", "Puerto Ordaz"]

export default function ExpositoresSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedUbicacion, setSelectedUbicacion] = useState("Todos")

  const filteredExpositores = expositores.filter((expositor) => {
    const matchesSearch = expositor.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todos" || expositor.categoria === selectedCategory
    const matchesUbicacion = selectedUbicacion === "Todos" || expositor.ubicacion.includes(selectedUbicacion)
    return matchesSearch && matchesCategory && matchesUbicacion
  })

  return (
  <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Lista de Expositores de Cacaos de Venezuela</h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Descubre las empresas líderes y los innovadores de la industria cacaotera venezolana que participarán en nuestra
        Rueda de Negocios.
      </p>

      {/* Filters and Search */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-1/3">
          <Input
            type="text"
            placeholder="Buscar expositor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-md w-full"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-2/3 justify-end">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              {categorias.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedUbicacion} onValueChange={setSelectedUbicacion}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Ubicación" />
            </SelectTrigger>
            <SelectContent>
              {ubicaciones.map((ubicacion) => (
                <SelectItem key={ubicacion} value={ubicacion}>
                  {ubicacion}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Expositores Grid */}
      {filteredExpositores.length === 0 ? (
        <div className="text-center text-gray-500 text-xl py-10">No se encontraron expositores.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExpositores.map((expositor) => (
            <Card key={expositor.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center text-center">
                <Image
                  src={expositor.logo || "/placeholder.svg"}
                  alt={`${expositor.nombre} logo`}
                  width={120}
                  height={80}
                  className="object-contain mb-4"
                />
                <CardTitle className="text-xl font-semibold">{expositor.nombre}</CardTitle>
                <Badge variant="secondary" className="mt-2">
                  <Building className="w-3 h-3 mr-1" />
                  {expositor.categoria}
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-3">{expositor.descripcion}</p>
                <div className="flex items-center justify-center text-sm text-gray-500 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {expositor.ubicacion}
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {expositor.productos.map((producto, idx) => (
                    <Badge key={idx} variant="outline">
                      <Tag className="w-3 h-3 mr-1" />
                      {producto}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
