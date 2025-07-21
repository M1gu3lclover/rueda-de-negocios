"use client"

import { SelectItem } from "@/components/ui/select"

import { SelectContent } from "@/components/ui/select"

import { SelectValue } from "@/components/ui/select"

import { SelectTrigger } from "@/components/ui/select"

import { Select } from "@/components/ui/select"

import { Input } from "@/components/ui/input"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Plus, Search, X } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Cacao Criollo Fino de Aroma",
    description: "Cacao de alta calidad, ideal para chocolatería fina.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Cacao en Grano",
    origin: "Mérida",
  },
  {
    id: 2,
    name: "Pasta de Cacao 100%",
    description: "Pura pasta de cacao, base para chocolates y bebidas.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Productos Procesados",
    origin: "Miranda",
  },
  {
    id: 3,
    name: "Nibs de Cacao Tostado",
    description: "Fragmentos de cacao tostado, crujientes y llenos de sabor.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Productos Procesados",
    origin: "Sucre",
  },
  {
    id: 4,
    name: "Manteca de Cacao Pura",
    description: "Grasa natural del cacao, esencial para la textura del chocolate.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Ingredientes",
    origin: "Amazonas",
  },
  {
    id: 5,
    name: "Chocolate Oscuro 70% Origen Único",
    description: "Barra de chocolate con alto porcentaje de cacao de una sola finca.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Chocolates",
    origin: "Carabobo",
  },
  {
    id: 6,
    name: "Cacao en Polvo Natural",
    description: "Polvo de cacao sin alcalinizar, ideal para repostería y bebidas.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Ingredientes",
    origin: "Delta Amacuro",
  },
  {
    id: 7,
    name: "Bombones Artesanales de Cacao",
    description: "Selección de bombones rellenos con sabores venezolanos.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Chocolates",
    origin: "Nacional",
  },
  {
    id: 8,
    name: "Licor de Cacao",
    description: "Bebida espirituosa a base de cacao, perfecta para cócteles.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Bebidas",
    origin: "Lara",
  },
]

const categories = ["Todos", "Cacao en Grano", "Productos Procesados", "Ingredientes", "Chocolates", "Bebidas"]
const origins = ["Todos", "Mérida", "Miranda", "Sucre", "Amazonas", "Carabobo", "Delta Amacuro", "Lara", "Nacional"]

export default function ProductGallery() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedOrigin, setSelectedOrigin] = useState("Todos")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory
    const matchesOrigin = selectedOrigin === "Todos" || product.origin === selectedOrigin
    return matchesSearch && matchesCategory && matchesOrigin
  })

  const openModal = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedProduct(null)
    setIsModalOpen(false)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Galería de Productos de Cacaos de Venezuela</h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Explora la diversidad y calidad de los productos derivados del cacao venezolano.
      </p>

      {/* Filters and Search */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-1/3">
          <Input
            type="text"
            placeholder="Buscar productos..."
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
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedOrigin} onValueChange={setSelectedOrigin}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Origen" />
            </SelectTrigger>
            <SelectContent>
              {origins.map((origin) => (
                <SelectItem key={origin} value={origin}>
                  {origin}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 text-xl py-10">No se encontraron productos.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => openModal(product)}
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2 truncate">{product.description}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{product.category}</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">{product.origin}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Product Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[800px] p-0">
          {selectedProduct && (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-l-lg"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h2>
                <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Categoría:</span> {selectedProduct.category}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Origen:</span> {selectedProduct.origin}
                  </p>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Contactar Proveedor
                </Button>
              </div>
            </div>
          )}
          <Button variant="ghost" size="icon" className="absolute top-4 right-4 rounded-full" onClick={closeModal}>
            <X className="w-5 h-5" />
            <span className="sr-only">Cerrar</span>
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
