"use client"

import React from "react"
import { GraduationCap, Calendar, BookOpen, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const features = [
    {
        icon: GraduationCap,
        title: "Academic Progress Tracking",
        description: "Monitor your CGPA, credits, and semester performance in real-time",
    },
    {
        icon: Calendar,
        title: "Smart Scheduling",
        description: "Access your timetable, exam schedules, and important academic dates",
    },
    {
        icon: BookOpen,
        title: "Course Management",
        description: "View course outlines, syllabus, and track assignment submissions",
    },
    {
        icon: TrendingUp,
        title: "Performance Analytics",
        description: "Detailed insights into your academic performance and attendance",
    },
]

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-background via-background to-accent/5">
            {/* Header */}
            <header className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <GraduationCap className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold">EduTrack</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href="/login">
                                <Button variant="ghost">Login</Button>
                            </Link>
                            <Link href="/register">
                                <Button>Get Started</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <div className="space-y-6 max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold leading-tight lg:text-5xl lg:leading-tight">
                            Track Your Academic Journey with Ease
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            A comprehensive dashboard for students to monitor their academic progress, assignments, and schedule.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href="/register">
                                <Button size="lg" className="w-full sm:w-auto">
                                    Get Started
                                </Button>
                            </Link>
                            <Link href="/login">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                    Login
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-muted/30">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-4">Everything You Need to Succeed</h2>
                        <p className="text-xl text-muted-foreground">
                            Our platform provides all the tools you need to stay organized and excel in your academic journey.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index}>
                                <CardContent className="pt-6">
                                    <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-primary/10">
                                        <feature.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t py-12 px-4 bg-muted/30">
                <div className="container mx-auto text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <GraduationCap className="h-6 w-6 text-primary" />
                        <span className="text-xl font-bold">EduTrack</span>
                    </div>
                    <p className="text-sm text-muted-foreground">© 2025 EduTrack. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default HomePage
