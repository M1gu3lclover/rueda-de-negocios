"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-6 text-orange-700">Acerca de la Rueda de Negocios</h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          La Rueda de Negocios de Cacaos de Venezuela es el evento B2B más importante de la industria cacaotera nacional. Nuestro objetivo es conectar productores, compradores, exportadores y aliados estratégicos para impulsar el desarrollo y la internacionalización del cacao venezolano.
        </p>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-700">Nuestra Misión</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Promover el crecimiento sostenible de la industria cacaotera venezolana, facilitando oportunidades de negocio, networking y capacitación para todos los actores del sector.
            </p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-700">¿A Quién Va Dirigido?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Productores y asociaciones de cacao</li>
              <li>Exportadores y compradores internacionales</li>
              <li>Chocolateros y procesadores</li>
              <li>Empresas de tecnología y servicios</li>
              <li>Instituciones académicas y gubernamentales</li>
              <li>Inversionistas y aliados estratégicos</li>
            </ul>
          </CardContent>
        </Card>
        <div className="text-center">
          <Image src="/MDN.png" alt="Logo Rueda de Negocios" width={120} height={120} className="mx-auto mb-4" />
          <p className="text-gray-500">Mérida, Venezuela &mdash; Edición 2026</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
