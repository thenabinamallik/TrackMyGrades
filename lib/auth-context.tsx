"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { USERS, addUserAndStudent } from "./db"

interface User {
  registrationNumber: string
  name: string
  email: string
  branch: string
  password: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (registrationNumber: string, password: string) => Promise<boolean>
  register: (userData: Omit<User, "password"> & { password: string }) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated")
    const userData = localStorage.getItem("studentData")

    if (authStatus === "true" && userData) {
      const parsedUser = JSON.parse(userData)
      setUser(parsedUser)
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const login = async (registrationNumber: string, password: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 600))

    const foundUser = USERS.find(
      (u) => u.registrationNumber === registrationNumber && u.password === password
    )

    if (foundUser) {
      setUser(foundUser)
      setIsAuthenticated(true)
      localStorage.setItem("isAuthenticated", "true")
      localStorage.setItem("studentData", JSON.stringify(foundUser))
      return true
    }

    return false
  }

  const register = async (userData: Omit<User, "password"> & { password: string }): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 800))

    const existing = USERS.find((u) => u.registrationNumber === userData.registrationNumber)
    if (existing) {
      console.warn("User already exists:", userData.registrationNumber)
      return false
    }

    addUserAndStudent(userData as User)
    setUser(userData as User)
    setIsAuthenticated(true)
    localStorage.setItem("isAuthenticated", "true")
    localStorage.setItem("studentData", JSON.stringify(userData))
    return true
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("studentData")
  }

  const value: AuthContextType = { user, isAuthenticated, isLoading, login, register, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within an AuthProvider")
  return context
}
