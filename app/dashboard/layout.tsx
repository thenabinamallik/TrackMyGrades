import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { StudentProvider } from "@/lib/student-context"
import AuthGuard from "@/components/auth-guard"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AuthGuard requireAuth={true}>
            <StudentProvider>
                <div className="flex h-screen bg-background">
                    <Sidebar />
                    <main className="flex-1 overflow-auto lg:ml-0 ml-0">
                        <div className="lg:ml-0 ml-0 pt-16 lg:pt-0">{children}</div>
                    </main>
                </div>
            </StudentProvider>
        </AuthGuard>
    )
}
