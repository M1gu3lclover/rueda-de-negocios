"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckCircle, XCircle, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const suites = [
  {
    id: 1,
    name: "Suite Estándar",
    price: "$120/noche",
    image: "/placeholder.svg?height=300&width=400",
    features: {
      area: "30 m²",
      beds: "1 Cama Queen",
      bathroom: "Baño privado",
      wifi: true,
      minibar: false,
      balcony: false,
      breakfast: false,
      view: "Ciudad",
    },
    description: "Cómoda suite con todo lo esencial para una estancia agradable.",
    popular: false,
  },
  {
    id: 2,
    name: "Suite Ejecutiva",
    price: "$180/noche",
    image: "/placeholder.svg?height=300&width=400",
    features: {
      area: "45 m²",
      beds: "1 Cama King o 2 Camas Dobles",
      bathroom: "Baño privado con bañera",
      wifi: true,
      minibar: true,
      balcony: false,
      breakfast: true,
      view: "Montaña",
    },
    description: "Espaciosa suite ideal para viajeros de negocios, con área de trabajo.",
    popular: true,
  },
  {
    id: 3,
    name: "Suite Presidencial",
    price: "$350/noche",
    image: "/placeholder.svg?height=300&width=400",
    features: {
      area: "80 m²",
      beds: "1 Cama King + Sala de Estar",
      bathroom: "Baño de lujo con jacuzzi",
      wifi: true,
      minibar: true,
      balcony: true,
      breakfast: true,
      view: "Panorámica",
    },
    description: "Lujosa suite con vistas espectaculares y todas las comodidades premium.",
    popular: false,
  },
]

export default function SuiteComparator() {
  const [selectedSuites, setSelectedSuites] = useState([])

  const toggleSuiteSelection = (suiteId) => {
    setSelectedSuites((prevSelected) => {
      if (prevSelected.includes(suiteId)) {
        return prevSelected.filter((id) => id !== suiteId)
      } else {
        if (prevSelected.length < 2) {
          return [...prevSelected, suiteId]
        } else {
          // Optionally, replace the oldest selected suite if more than 2 are attempted
          return [...prevSelected.slice(1), suiteId]
        }
      }
    })
  }

  const getSuiteById = (id) => suites.find((suite) => suite.id === id)

  const suite1 = selectedSuites.length > 0 ? getSuiteById(selectedSuites[0]) : null
  const suite2 = selectedSuites.length > 1 ? getSuiteById(selectedSuites[1]) : null

  const allFeatures = Array.from(new Set(suites.flatMap((s) => Object.keys(s.features))))

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Compara Nuestras Suites</h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Selecciona hasta dos suites para ver sus características lado a lado y elige la perfecta para tu estancia.
      </p>

      {/* Suite Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {suites.map((suite) => (
          <Card
            key={suite.id}
            className={`cursor-pointer transition-all duration-200 ${
              selectedSuites.includes(suite.id) ? "ring-2 ring-blue-500 scale-105" : "hover:shadow-lg"
            }`}
            onClick={() => toggleSuiteSelection(suite.id)}
          >
            <CardHeader className="relative p-0">
              <Image
                src={suite.image || "/placeholder.svg"}
                alt={suite.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {suite.popular && (
                <Badge className="absolute top-3 left-3 bg-yellow-500 text-yellow-900">
                  <Star className="w-3 h-3 mr-1" />
                  Popular
                </Badge>
              )}
            </CardHeader>
            <CardContent className="p-4 text-center">
              <CardTitle className="text-xl font-semibold mb-1">{suite.name}</CardTitle>
              <p className="text-lg font-bold text-blue-600">{suite.price}</p>
              <p className="text-sm text-gray-500 mt-2">{suite.description}</p>
              <Button variant={selectedSuites.includes(suite.id) ? "default" : "outline"} className="mt-4 w-full">
                {selectedSuites.includes(suite.id) ? "Seleccionada" : "Seleccionar para Comparar"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Comparison Table */}
      {(suite1 || suite2) && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-left font-semibold text-gray-700 border-b">Característica</th>
                <th className="p-4 text-center font-semibold text-gray-700 border-b">
                  {suite1 ? suite1.name : "Suite 1"}
                </th>
                <th className="p-4 text-center font-semibold text-gray-700 border-b">
                  {suite2 ? suite2.name : "Suite 2"}
                </th>
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((featureKey) => (
                <tr key={featureKey} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium capitalize">{featureKey.replace(/([A-Z])/g, " $1").trim()}</td>
                  <td className="p-4 text-center">
                    {suite1 && typeof suite1.features[featureKey] === "boolean" ? (
                      suite1.features[featureKey] ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                      )
                    ) : (
                      suite1?.features[featureKey] || "-"
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {suite2 && typeof suite2.features[featureKey] === "boolean" ? (
                      suite2.features[featureKey] ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                      )
                    ) : (
                      suite2?.features[featureKey] || "-"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-4">¿Listo para reservar?</h3>
        <p className="text-gray-700 mb-6">
          Asegura tu estancia en el Hotel Serrano durante la Rueda de Negocios de Cacaos de Venezuela.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg">Reservar Ahora</Button>
      </div>
    </div>
  )
}
