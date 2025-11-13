"use client"

import { GraduationCap, Calendar, BookOpen, TrendingUp } from "lucide-react"
import AuthGuard from "@/components/auth-guard"
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

const testimonials = [
  {
    quote: "TrackMyGrades has transformed how I manage my academics. The intuitive dashboard helps me stay on top of assignments and track my progress effortlessly.",
    student: "Aisha Khan",
    branch: "Computer Science",
    year: "3rd Year",
  },
  {
    quote: "The attendance tracking and deadline reminders have been a lifesaver. I've never missed an assignment since I started using <TrackMyGrades></TrackMyGrades>!",
    student: "Rahul Singh",
    branch: "Electrical Engineering",
    year: "2nd Year",
  },
  {
    quote: "As someone who struggled with organization, TrackMyGrades has been a game-changer for my academic life. Highly recommend to all students!",
    student: "Priya Sharma",
    branch: "Business Administration",
    year: "4th Year",
  },
]
export default function HomePage() {
  return (
    <AuthGuard requireAuth={false}>
      <div className="min-h-screen bg-linear-to-br from-background via-background to-accent/5">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">TrackMyGrades</span>
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
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight lg:text-5xl lg:leading-tight">
                Track Your Academic Journey with Ease
              </h1>
              <p className="text-xl text-muted-foreground">
                A comprehensive dashboard for students to monitor their academic progress, assignments, and schedule.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
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
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/5 rounded-lg -z-10"></div>
                <Card className="w-full overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src="/dashboard-preview.png"
                      alt="Dashboard Preview"
                      className="w-full h-auto"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/600x400/e2e8f0/94a3b8?text=Dashboard+Preview"
                      }}
                    />
                  </CardContent>
                </Card>
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

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">What Students Say</h2>
              <p className="text-xl text-muted-foreground">
                Hear from students who have transformed their academic experience with our platform.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <p className="mb-4 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-bold">{testimonial.student}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.branch}, {testimonial.year}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Preview */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
              <p className="text-xl text-muted-foreground">
                Get a glimpse of how TrackMyGrades can simplify your academic life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Intuitive Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  Our clean and intuitive dashboard gives you a quick overview of your academic status,
                  upcoming deadlines, and performance trends at a glance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span>Track your CGPA and semester-wise performance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Never miss important academic deadlines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span>Monitor assignment completion status</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src="/dashboard-metrics.png"
                      alt="Dashboard Metrics"
                      className="w-full h-auto"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/600x400/e2e8f0/94a3b8?text=Dashboard+Metrics"
                      }}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Academic Experience?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of students who are already using TrackMyGrades to stay on top of their academic journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started Now
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

        {/* Footer */}
        <footer className="border-t py-12 px-4 bg-muted/30">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">TrackMyGrades</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 TrackMyGrades. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </AuthGuard>
  )
}
