import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const { registrationNumber, password } = await request.json()

    const [rows]: any = await db.query(
      "SELECT registration_number, name, email, branch FROM students WHERE registration_number = ? AND password = ?",
      [registrationNumber, password]
    )

    if (rows.length === 0) {
      return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
    }

    const user = rows[0]
    return NextResponse.json({ success: true, user })
  } catch (error) {
    console.error("Login API error:", error)
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 })
  }
}
