"use client"

import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen, Clock, TrendingUp, Calendar, Award, Target, Users } from "lucide-react"
import { StudentProfileCard } from "@/components/student-profile-card"
import { useStudent } from "@/lib/student-context"
import { DashboardSkeleton } from "@/components/loading-skeleton"
import AuthGuard from "@/components/auth-guard"

const studentStats = {
    currentSemester: "Fall 2024",
    cgpa: 3.75,
    totalCredits: 120,
    completedCredits: 90,
    attendanceRate: 92,
    upcomingExams: 3,
    pendingAssignments: 5,
    achievements: 12,
}

const recentActivities = [
    { type: "assignment", title: "Data Structures Assignment 3", status: "submitted", date: "2 hours ago" },
    { type: "exam", title: "Database Systems Midterm", status: "scheduled", date: "Tomorrow 10:00 AM" },
    { type: "grade", title: "Web Development Project", status: "graded", date: "1 day ago", grade: "A-" },
    { type: "attendance", title: "Machine Learning Lecture", status: "present", date: "2 days ago" },
]

const upcomingEvents = [
    { title: "Database Systems Exam", date: "Dec 15, 2024", type: "exam" },
    { title: "Project Presentation", date: "Dec 18, 2024", type: "presentation" },
    { title: "Winter Break Starts", date: "Dec 20, 2024", type: "holiday" },
]

export function DashboardContent() {
    const student = useStudent()

    if (!student) {
        return <div>Loading...</div>
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-background via-background to-accent/5">
            <div className="container mx-auto p-6 space-y-6">
                {/* Header with Student Profile */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold">Welcome back, {student.name}!</h1>
                        <p className="text-muted-foreground mt-1">
                            Here's your academic dashboard for {studentStats.currentSemester}
                        </p>
                    </div>
                    <StudentProfileCard />
                </div>

                {/* Key Metrics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-linear-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">CGPA</CardTitle>
                            <TrendingUp className="h-4 w-4 text-green-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-700 dark:text-green-300">{studentStats.cgpa}</div>
                            <p className="text-xs text-green-600 dark:text-green-400">Current semester GPA: 3.8</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Credits Progress</CardTitle>
                            <BookOpen className="h-4 w-4 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                                {studentStats.completedCredits}/{studentStats.totalCredits}
                            </div>
                            <Progress value={(studentStats.completedCredits / studentStats.totalCredits) * 100} className="mt-2" />
                            <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">75% completed</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Attendance</CardTitle>
                            <Users className="h-4 w-4 text-purple-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                                {studentStats.attendanceRate}%
                            </div>
                            <Progress value={studentStats.attendanceRate} className="mt-2" />
                            <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">This semester</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-linear-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
                            <Calendar className="h-4 w-4 text-orange-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">
                                {studentStats.pendingAssignments}
                            </div>
                            <p className="text-xs text-orange-600 dark:text-orange-400">assignments due</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Activities */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Clock className="h-5 w-5" />
                                Recent Activities
                            </CardTitle>
                            <CardDescription>Your latest academic activities and updates</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recentActivities.map((activity, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`w-2 h-2 rounded-full ${activity.status === "submitted"
                                                    ? "bg-green-500"
                                                    : activity.status === "scheduled"
                                                        ? "bg-blue-500"
                                                        : activity.status === "graded"
                                                            ? "bg-purple-500"
                                                            : "bg-gray-500"
                                                    }`}
                                            />
                                            <div>
                                                <p className="text-sm font-medium">{activity.title}</p>
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="outline" className="text-xs">
                                                        {activity.status}
                                                    </Badge>
                                                    {activity.grade && (
                                                        <Badge variant="default" className="text-xs bg-green-100 text-green-800">
                                                            {activity.grade}
                                                        </Badge>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-xs text-muted-foreground">{activity.date}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Upcoming Events */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="h-5 w-5" />
                                Upcoming Events
                            </CardTitle>
                            <CardDescription>Important dates and deadlines</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {upcomingEvents.map((event, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                                        <div
                                            className={`w-3 h-3 rounded-full ${event.type === "exam"
                                                ? "bg-red-500"
                                                : event.type === "presentation"
                                                    ? "bg-blue-500"
                                                    : "bg-green-500"
                                                }`}
                                        />
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">{event.title}</p>
                                            <p className="text-xs text-muted-foreground">{event.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Performance Overview */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Award className="h-5 w-5" />
                            Academic Overview
                        </CardTitle>
                        <CardDescription>Your academic journey at a glance</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-4 rounded-lg bg-muted/50">
                                <GraduationCap className="h-8 w-8 mx-auto mb-2 text-accent" />
                                <p className="text-2xl font-bold">{student.semester}</p>
                                <p className="text-sm text-muted-foreground">Current Semester</p>
                            </div>
                            <div className="text-center p-4 rounded-lg bg-muted/50">
                                <Award className="h-8 w-8 mx-auto mb-2 text-accent" />
                                <p className="text-2xl font-bold">{student.achievements}</p>
                                <p className="text-sm text-muted-foreground">Achievements Earned</p>
                            </div>
                            <div className="text-center p-4 rounded-lg bg-muted/50">
                                <Target className="h-8 w-8 mx-auto mb-2 text-accent" />
                                <p className="text-2xl font-bold">{studentStats.upcomingExams}</p>
                                <p className="text-sm text-muted-foreground">Upcoming Exams</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default function DashboardHomePage() {
    return (
        <AuthGuard requireAuth={true}>
            <Suspense fallback={<DashboardSkeleton />}>
                <DashboardContent />
            </Suspense>
        </AuthGuard>
    )
}
