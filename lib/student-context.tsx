"use client"

import { createContext, useContext, type ReactNode, useEffect, useState } from "react"
import { STUDENTS, type StudentData } from "./db"
import { useAuth } from "./auth-context"

const StudentContext = createContext<StudentData | null>(null)

export function StudentProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [student, setStudent] = useState<StudentData | null>(null)

  useEffect(() => {
    if (user) {
      const data = STUDENTS.find((s) => s.registrationNumber === user.registrationNumber) || null
      setStudent(data)
    } else {
      setStudent(null)
    }
  }, [user])

  return <StudentContext.Provider value={student}>{children}</StudentContext.Provider>
}

export function useStudent() {
  const context = useContext(StudentContext)
  if (context === undefined) throw new Error("useStudent must be used within a StudentProvider")
  return context
}
