"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Activity,
    BookOpen,
    Calendar,
    Clock,
    GraduationCap,
    BarChart3,
    Bell,
    Award,
    CheckCircle,
    AlertCircle
} from "lucide-react"

export default function DashboardPage() {
    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <div className="flex items-center space-x-2">
                    <Button>Download Report</Button>
                </div>
            </div>

            {/* Academic Overview Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Current CGPA</CardTitle>
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">8.67</div>
                        <p className="text-xs text-muted-foreground">+0.2 from last semester</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Attendance</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">86.5%</div>
                        <p className="text-xs text-muted-foreground">Last 30 days</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Credits Completed</CardTitle>
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">78/120</div>
                        <p className="text-xs text-muted-foreground">65% of program completed</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">2 due this week</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity and Calendar Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="md:col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100">
                                    <CheckCircle className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Assignment Submitted: Data Structures Lab 4</p>
                                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-100">
                                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Quiz Result: Algorithms - 85%</p>
                                    <p className="text-sm text-muted-foreground">Yesterday</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100">
                                    <Award className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Course Completed: Introduction to AI</p>
                                    <p className="text-sm text-muted-foreground">2 days ago</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-100">
                                    <Bell className="h-5 w-5 text-purple-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Reminder: Database Project due in 3 days</p>
                                    <p className="text-sm text-muted-foreground">3 days ago</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-3">
                    <CardHeader>
                        <CardTitle>Upcoming Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100">
                                    <Calendar className="h-5 w-5 text-red-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">Database Systems Mid-term</p>
                                    <p className="text-xs text-muted-foreground">Tomorrow, 10:00 AM - 12:00 PM</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100">
                                    <BookOpen className="h-5 w-5 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">Software Engineering Project Presentation</p>
                                    <p className="text-xs text-muted-foreground">Wed, 2:00 PM - 4:00 PM</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100">
                                    <Clock className="h-5 w-5 text-green-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">Computer Networks Lab</p>
                                    <p className="text-xs text-muted-foreground">Thu, 9:00 AM - 11:00 AM</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-100">
                                    <GraduationCap className="h-5 w-5 text-purple-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">Department Meeting</p>
                                    <p className="text-xs text-muted-foreground">Fri, 3:30 PM - 5:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
