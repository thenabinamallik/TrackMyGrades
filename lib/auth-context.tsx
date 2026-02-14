"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

interface User {
  registrationNumber: string
  name: string
  email: string
  branch: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (registrationNumber: string, password: string) => Promise<boolean>
  logout: () => void
  register: (userData: {
    registrationNumber: string
    name: string
    branch: string
    email: string
    password: string
  }) => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = () => {
      try {
        const authStatus = localStorage.getItem("isAuthenticated")
        const userData = localStorage.getItem("studentData")

        if (authStatus === "true" && userData) {
          const parsedUser = JSON.parse(userData)
          setUser(parsedUser)
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.error("Error checking auth status:", error)
        // Clear invalid data
        localStorage.removeItem("isAuthenticated")
        localStorage.removeItem("studentData")
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (registrationNumber: string, password: string): Promise<boolean> => {
    try {
      console.log("Auth context login called with:", { registrationNumber, password })

      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (registrationNumber === "2201214069" && password === "cse") {
        const userData: User = {
          registrationNumber: "2201214069",
          name: "Priyanka Nayak",
          email: "pn522072@gmail.com",
          branch: "Computer Science",
        }

        console.log("Login successful, setting user data:", userData)

        setUser(userData)
        setIsAuthenticated(true)
        localStorage.setItem("isAuthenticated", "true")
        localStorage.setItem("studentData", JSON.stringify(userData))
        return true
      }

      console.log("Login failed - invalid credentials")
      return false
    } catch (error) {
      console.error("Login error:", error)
      return false
    }
  }

  const register = async (userData: {
    registrationNumber: string
    name: string
    branch: string
    email: string
    password: string
  }): Promise<boolean> => {
    try {

      await new Promise((resolve) => setTimeout(resolve, 1500))

      return true
    } catch (error) {
      console.error("Registration error:", error)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("studentData")
  }

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    register,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
