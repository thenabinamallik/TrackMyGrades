import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart3, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react"

const subjectAttendance = [
  {
    code: "CS401",
    name: "Database Systems",
    totalClasses: 36,
    attendedClasses: 34,
    percentage: 94.4,
    status: "excellent",
    recentTrend: "stable",
    classesCanMiss: 5,
  },
  {
    code: "CS302",
    name: "Data Structures & Algorithms",
    totalClasses: 40,
    attendedClasses: 36,
    percentage: 90.0,
    status: "excellent",
    recentTrend: "improving",
    classesCanMiss: 6,
  },
  {
    code: "CS350",
    name: "Web Development",
    totalClasses: 32,
    attendedClasses: 30,
    percentage: 93.8,
    status: "excellent",
    recentTrend: "stable",
    classesCanMiss: 5,
  },
  {
    code: "CS420",
    name: "Machine Learning",
    totalClasses: 36,
    attendedClasses: 31,
    percentage: 86.1,
    status: "good",
    recentTrend: "declining",
    classesCanMiss: 2,
  },
  {
    code: "CS380",
    name: "Software Engineering",
    totalClasses: 36,
    attendedClasses: 34,
    percentage: 94.4,
    status: "excellent",
    recentTrend: "improving",
    classesCanMiss: 5,
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "excellent":
      return { color: "text-green-600", bg: "bg-green-50", border: "border-green-200" }
    case "good":
      return { color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" }
    case "satisfactory":
      return { color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" }
    case "poor":
      return { color: "text-red-600", bg: "bg-red-50", border: "border-red-200" }
    default:
      return { color: "text-gray-600", bg: "bg-gray-50", border: "border-gray-200" }
  }
}

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case "improving":
      return <TrendingUp className="h-4 w-4 text-green-600" />
    case "declining":
      return <AlertTriangle className="h-4 w-4 text-red-600" />
    case "stable":
      return <CheckCircle className="h-4 w-4 text-blue-600" />
    default:
      return <CheckCircle className="h-4 w-4 text-gray-600" />
  }
}

export default function AttendanceSubjectPage() {
  const averageAttendance = (
    subjectAttendance.reduce((sum, subject) => sum + subject.percentage, 0) / subjectAttendance.length
  ).toFixed(1)

  const excellentSubjects = subjectAttendance.filter((s) => s.status === "excellent").length
  const goodSubjects = subjectAttendance.filter((s) => s.status === "good").length
  const concernSubjects = subjectAttendance.filter((s) => s.percentage < 80).length

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Subject-wise Attendance</h1>
            <p className="text-muted-foreground">Detailed attendance breakdown for each subject</p>
          </div>

          {/* Summary Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">{averageAttendance}%</div>
                <p className="text-xs text-muted-foreground">Across all subjects</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Excellent Performance</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{excellentSubjects}</div>
                <p className="text-xs text-muted-foreground">Subjects (90%+)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Good Performance</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{goodSubjects}</div>
                <p className="text-xs text-muted-foreground">Subjects (80-89%)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Need Attention</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">{concernSubjects}</div>
                <p className="text-xs text-muted-foreground">Subjects (&lt;80%)</p>
              </CardContent>
            </Card>
          </div>

          {/* Subject-wise Breakdown */}
          <div className="space-y-6">
            {subjectAttendance.map((subject) => {
              const statusStyle = getStatusColor(subject.status)
              return (
                <Card key={subject.code} className={`${statusStyle.border}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">
                          {subject.code} - {subject.name}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {subject.attendedClasses} out of {subject.totalClasses} classes attended
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className={`text-3xl font-bold ${statusStyle.color}`}>{subject.percentage}%</div>
                        <Badge variant="outline" className="mt-1 capitalize">
                          {subject.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Progress Bar and Details */}
                      <div className="lg:col-span-2">
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Attendance Progress</span>
                            <span className="text-sm text-muted-foreground">
                              {subject.attendedClasses}/{subject.totalClasses}
                            </span>
                          </div>
                          <Progress value={subject.percentage} className="h-3" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className={`p-4 rounded-lg ${statusStyle.bg}`}>
                            <h4 className="font-semibold mb-2">Current Status</h4>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span>Attendance:</span>
                                <span className="font-medium">{subject.percentage}%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Classes Missed:</span>
                                <span className="font-medium">{subject.totalClasses - subject.attendedClasses}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Can Miss:</span>
                                <span className="font-medium">{subject.classesCanMiss} more</span>
                              </div>
                            </div>
                          </div>

                          <div className="p-4 rounded-lg bg-muted/50">
                            <h4 className="font-semibold mb-2">Trend Analysis</h4>
                            <div className="flex items-center gap-2 mb-2">
                              {getTrendIcon(subject.recentTrend)}
                              <span className="text-sm font-medium capitalize">{subject.recentTrend}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {subject.recentTrend === "improving"
                                ? "Your attendance is getting better"
                                : subject.recentTrend === "declining"
                                  ? "Consider attending more classes"
                                  : "Maintaining consistent attendance"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Recommendations */}
                      <div>
                        <h4 className="font-semibold mb-3">Recommendations</h4>
                        <div className="space-y-3">
                          {subject.percentage >= 90 ? (
                            <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                              <div className="flex items-center gap-2 mb-1">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span className="text-sm font-medium text-green-700">Excellent!</span>
                              </div>
                              <p className="text-xs text-green-600">
                                Keep up the great work. You're well above requirements.
                              </p>
                            </div>
                          ) : subject.percentage >= 80 ? (
                            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                              <div className="flex items-center gap-2 mb-1">
                                <TrendingUp className="h-4 w-4 text-blue-600" />
                                <span className="text-sm font-medium text-blue-700">Good Progress</span>
                              </div>
                              <p className="text-xs text-blue-600">You're doing well. Try to maintain this level.</p>
                            </div>
                          ) : (
                            <div className="p-3 rounded-lg bg-orange-50 border border-orange-200">
                              <div className="flex items-center gap-2 mb-1">
                                <AlertTriangle className="h-4 w-4 text-orange-600" />
                                <span className="text-sm font-medium text-orange-700">Needs Improvement</span>
                              </div>
                              <p className="text-xs text-orange-600">
                                Focus on attending more classes to meet requirements.
                              </p>
                            </div>
                          )}

                          <div className="text-xs text-muted-foreground">
                            <p className="mb-1">
                              <strong>To maintain 75%:</strong> Don't miss more than {subject.classesCanMiss} classes
                            </p>
                            <p>
                              <strong>To reach 90%:</strong>{" "}
                              {subject.percentage >= 90
                                ? "Already achieved!"
                                : `Attend ${Math.ceil((90 * subject.totalClasses - 100 * subject.attendedClasses) / 10)} more classes`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Overall Analysis */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Overall Analysis</CardTitle>
              <CardDescription>Summary of your attendance performance across all subjects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-lg bg-green-50">
                  <div className="text-2xl font-bold text-green-600 mb-1">{excellentSubjects}</div>
                  <p className="text-sm text-green-600 mb-2">Excellent Subjects</p>
                  <p className="text-xs text-muted-foreground">90% or above attendance</p>
                </div>

                <div className="text-center p-4 rounded-lg bg-blue-50">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{goodSubjects}</div>
                  <p className="text-sm text-blue-600 mb-2">Good Subjects</p>
                  <p className="text-xs text-muted-foreground">80-89% attendance</p>
                </div>

                <div className="text-center p-4 rounded-lg bg-orange-50">
                  <div className="text-2xl font-bold text-orange-600 mb-1">{concernSubjects}</div>
                  <p className="text-sm text-orange-600 mb-2">Need Attention</p>
                  <p className="text-xs text-muted-foreground">Below 80% attendance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
