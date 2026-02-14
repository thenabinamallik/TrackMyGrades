"use client"

import { createContext, useContext, type ReactNode } from "react"

interface StudentData {
  id: string
  name: string
  registrationNumber: string
  email: string
  phone: string
  avatar: string
  course: string
  year: string
  semester: string
  cgpa: number
  totalCredits: number
  completedCredits: number
  attendanceRate: number
  achievements: number
  department: string
  advisor: string
  enrollmentDate: string
  expectedGraduation: string
}

const studentData: StudentData = {
  id: "STU2024001",
  name: "Priyanka Nayak",
  registrationNumber: "2201214069",
  email: "pn522072@fmail.com",
  phone: "+91 9938099181",
  avatar: "/student-avatar.png",
  course: "Computer Science Engineering",
  year: "4th Year",
  semester: "Fall 2025",
  cgpa: 8.5,
  totalCredits: 80,
  completedCredits: 120,
  attendanceRate: 92,
  achievements: 12,
  department: "Computer Science",
  advisor: "Sangita Biswal",
  enrollmentDate: "August 2022",
  expectedGraduation: "May 2026",
}

const StudentContext = createContext<StudentData | undefined>(undefined)

export function StudentProvider({ children }: { children: ReactNode }) {
  return <StudentContext.Provider value={studentData}>{children}</StudentContext.Provider>
}

export function useStudent() {
  const context = useContext(StudentContext)
  if (context === undefined) {
    throw new Error("useStudent must be used within a StudentProvider")
  }
  return context
}
