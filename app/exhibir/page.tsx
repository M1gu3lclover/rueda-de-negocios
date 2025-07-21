import ExhibirSection from "@/components/exhibir-section"
import Navigation from "@/components/navigation"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function ExhibirPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <Linkedin className="w-4 h-4" />
            <Facebook className="w-4 h-4" />
            <Instagram className="w-4 h-4" />
            <Twitter className="w-4 h-4" />
            <Youtube className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-orange-400">Cacaos de Venezuela</span>
            <span className="text-orange-400">Rueda de Negocios Global</span>
            <span className="text-orange-400">Excelencia del Cacao</span>
            <span className="text-orange-400">Innovación Cacaotera</span>
          </div>
          <div className="text-right">
            <span className="text-orange-400">15-17 MARZO 2026 | Mérida, Venezuela</span>
          </div>
        </div>
      </div>

      {/* Header (using Navigation component) */}
      <Navigation />

      <ExhibirSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
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
                <li>15-17 Marzo 2026</li>
                <li>Mérida, Venezuela</li>
                <li>Centro de Convenciones</li>
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
