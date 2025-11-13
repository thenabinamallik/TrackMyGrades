"use client"

import type React from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

interface AuthGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
}

export default function AuthGuard({ children, requireAuth = true }: AuthGuardProps) {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    console.log("AuthGuard useEffect:", { isLoading, isAuthenticated, requireAuth })

    if (!isLoading) {
      if (requireAuth && !isAuthenticated) {
        console.log("Redirecting to / - not authenticated")
        router.push("/")
      } else if (!requireAuth && isAuthenticated) {
        console.log("Redirecting to /dashboard - already authenticated")
        router.push("/dashboard")
      }
    }
  }, [isAuthenticated, isLoading, requireAuth, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-liner-to-br from-background via-background to-accent/5 flex items-center justify-center">
        <Card className="p-8 shadow-lg border-0">
          <CardContent className="flex flex-col items-center space-y-4">
            <GraduationCap className="h-12 w-12 text-accent animate-pulse" />
            <div className="text-lg font-medium">Loading...</div>
            <div className="text-sm text-muted-foreground">Please wait while we verify your session</div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (requireAuth && !isAuthenticated) {
    return null // Will redirect to landing
  }

  if (!requireAuth && isAuthenticated) {
    return null // Will redirect to dashboard
  }

  return <>{children}</>
}

export { AuthGuard }
