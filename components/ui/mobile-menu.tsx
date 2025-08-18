"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden p-2 text-gray-700 hover:text-orange-600" aria-label="Abrir menú">
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-64">
        <SheetHeader className="flex flex-row items-center justify-between px-4 py-2 border-b">
          <SheetTitle className="text-lg font-bold">Menú</SheetTitle>
          <button onClick={() => setOpen(false)} aria-label="Cerrar menú">
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </SheetHeader>
        <nav className="flex flex-col gap-2 px-4 py-4">
          <Link href="/asistir" className="py-2 px-3 rounded hover:bg-orange-50 font-medium" onClick={() => setOpen(false)}>Participar</Link>
          <Link href="/exhibir" className="py-2 px-3 rounded hover:bg-orange-50 font-medium" onClick={() => setOpen(false)}>Exhibir</Link>
          <Link href="/rueda-negocios" className="py-2 px-3 rounded hover:bg-orange-50 font-medium" onClick={() => setOpen(false)}>Rueda de Negocios</Link>
          <Link href="/eventos" className="py-2 px-3 rounded hover:bg-orange-50 font-medium" onClick={() => setOpen(false)}>Eventos</Link>
          <Link href="/hotel-viaje" className="py-2 px-3 rounded hover:bg-orange-50 font-medium" onClick={() => setOpen(false)}>Hotel/Viaje</Link>
          <Link href="/patrocinadores" className="py-2 px-3 rounded hover:bg-orange-50 font-medium" onClick={() => setOpen(false)}>Patrocinadores</Link>
          <Link href="/galeria" className="py-2 px-3 rounded hover:bg-orange-50 font-medium" onClick={() => setOpen(false)}>Galería</Link>
          <Link href="/registro" className="py-2 px-3 rounded bg-orange-600 text-white font-semibold shadow hover:bg-orange-700 transition-colors border-2 border-orange-600" onClick={() => setOpen(false)}>Registro</Link>
          <Link href="/login" className="py-2 px-3 rounded border-2 border-orange-600 text-orange-700 bg-white hover:bg-orange-50 font-semibold" onClick={() => setOpen(false)}>Login</Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
