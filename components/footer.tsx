import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
  <footer className="bg-gray-900 text-white py-6 sm:py-12">
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
                <Link href="/asistir" className="hover:text-orange-400">Participar</Link>
              </li>
              <li>
                <Link href="/exhibir" className="hover:text-orange-400">Exhibir</Link>
              </li>
              <li>
                <Link href="/rueda-negocios" className="hover:text-orange-400">Rueda de Negocios</Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-orange-400">Contacto</Link>
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
  )
}
