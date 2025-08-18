import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    // Aquí puedes guardar en base de datos, enviar email, etc.
    // Por ejemplo, guardar en PostgreSQL usando Prisma o enviar a un webhook
    // await prisma.registro.create({ data })
    return NextResponse.json({ success: true, message: "Registro exitoso" })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error en el registro" }, { status: 500 })
  }
}
