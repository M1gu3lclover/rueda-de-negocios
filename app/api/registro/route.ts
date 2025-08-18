import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { error } = await supabase.from("registros").insert([data])
    if (error) throw error
    return NextResponse.json({ success: true, message: "Registro exitoso" })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error en el registro" }, { status: 500 })
  }
}
