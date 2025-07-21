"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Users, Building, MapPin, Award, Camera, Handshake, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"

const participacionItems = [
	{ href: "/asistir", label: "Asistir", icon: Users },
	{ href: "/exhibir", label: "Exhibir", icon: Building },
	{ href: "/expositores", label: "Lista de Expositores", icon: Users },
]

const negociosItems = [
	{ href: "/rueda-negocios", label: "Rueda de Negocios", icon: Handshake },
	{ href: "/eventos", label: "Eventos de Networking", icon: Award },
]

const informacionItems = [
	{ href: "/hotel-viaje", label: "Hotel/Viaje", icon: MapPin },
	{ href: "/patrocinadores", label: "Patrocinadores", icon: Award },
	{ href: "/acerca-de", label: "Acerca De", icon: Building },
	{ href: "/galeria", label: "Galería", icon: Camera },
]

export default function Navigation() {
	const pathname = usePathname()

	return (
		<header className="bg-white shadow sticky top-0 z-40">
			<div className="container mx-auto px-4 flex items-center justify-between h-16">
				{/* Logo basado en texto - evitar imagen remota */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/MDN.png" // imagen del logo ...
            alt="Logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-xl font-extrabold text-orange-700 whitespace-nowrap">
            Rueda&nbsp;<span className="text-gray-900">de</span>&nbsp;Negocios
          </span>
        </Link>

				{/* Menú principal (desktop) */}
				<nav className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
					<Link href="/asistir" className="hover:text-orange-600">
						Participar
					</Link>
					<Link href="/exhibir" className="hover:text-orange-600">
						Exhibir
					</Link>
					<DropdownMenu>
						<DropdownMenuTrigger className="flex items-center space-x-1 hover:text-orange-600 font-medium transition-colors text-sm px-3 py-2 rounded-md hover:bg-gray-50">
							<Handshake className="w-4 h-4" />
							<span>Rueda de Negocios</span>
							<ChevronDown className="w-3 h-3" />
						</DropdownMenuTrigger>
						<DropdownMenuContent align="start" className="w-48">
							{negociosItems.map((item) => (
								<DropdownMenuItem key={item.href} asChild>
									<Link
										href={item.href}
										className={cn(
											"flex items-center space-x-2 w-full",
											pathname === item.href && "bg-orange-50 text-orange-600",
										)}
									>
										<item.icon className="w-4 h-4" />
										<span>{item.label}</span>
									</Link>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
					<DropdownMenu>
						<DropdownMenuTrigger className="flex items-center space-x-1 hover:text-orange-600 font-medium transition-colors text-sm px-3 py-2 rounded-md hover:bg-gray-50">
							<Building className="w-4 h-4" />
							<span>Información</span>
							<ChevronDown className="w-3 h-3" />
						</DropdownMenuTrigger>
						<DropdownMenuContent align="start" className="w-48">
							{informacionItems.map((item) => (
								<DropdownMenuItem key={item.href} asChild>
									<Link
										href={item.href}
										className={cn(
											"flex items-center space-x-2 w-full",
											pathname === item.href && "bg-orange-50 text-orange-600",
										)}
									>
										<item.icon className="w-4 h-4" />
										<span>{item.label}</span>
									</Link>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
					<Link href="/registro" className="hover:text-orange-600">
						Registro
					</Link>
				</nav>

				{/* Ícono hamburguesa para mobile (sin funcionalidad aún) */}
				<button className="md:hidden p-2 text-gray-700 hover:text-orange-600" aria-label="Abrir menú">
					<Menu className="w-6 h-6" />
				</button>
			</div>
		</header>
	)
}
