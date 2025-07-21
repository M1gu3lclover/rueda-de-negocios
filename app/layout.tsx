import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Rueda de Negocios de Cacaos de Venezuela 2026",
  description: "La rueda de negocios más importante del cacao venezolano",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      {/* body sin fuente remota */}
      <body className="antialiased font-sans">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
