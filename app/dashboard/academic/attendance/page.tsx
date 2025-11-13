import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { UserCheck, Calendar, TrendingUp, AlertTriangle } from "lucide-react"

const attendanceData = {
  overall: {
    totalClasses: 180,
    attendedClasses: 165,
    percentage: 91.7,
    requiredPercentage: 75,
    status: "good",
  },
  monthlyTrend: [
    { month: "August", percentage: 95.2 },
    { month: "September", percentage: 93.8 },
    { month: "October", percentage: 89.4 },
    { month: "November", percentage: 88.9 },
    { month: "December", percentage: 91.7 },
  ],
  recentRecords: [
    {
      date: "2024-12-09",
      subject: "Database Systems",
      status: "present",
      time: "9:00 AM - 10:30 AM",
      type: "Lecture",
    },
    {
      date: "2024-12-09",
      subject: "Data Structures & Algorithms",
      status: "present",
      time: "11:00 AM - 12:30 PM",
      type: "Lecture",
    },
    {
      date: "2024-12-09",
      subject: "Web Development",
      status: "present",
      time: "2:00 PM - 3:30 PM",
      type: "Lab",
    },
    {
      date: "2024-12-08",
      subject: "Machine Learning",
      status: "absent",
      time: "10:00 AM - 11:30 AM",
      type: "Lecture",
    },
    {
      date: "2024-12-08",
      subject: "Database Systems",
      status: "present",
      time: "1:00 PM - 2:30 PM",
      type: "Lab",
    },
    {
      date: "2024-12-08",
      subject: "Software Engineering",
      status: "present",
      time: "3:00 PM - 4:30 PM",
      type: "Lecture",
    },
  ],
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "present":
      return "default"
    case "absent":
      return "destructive"
    case "late":
      return "secondary"
    default:
      return "outline"
  }
}

const getAttendanceStatus = (percentage: number) => {
  if (percentage >= 90) return { status: "excellent", color: "text-green-600", bg: "bg-green-50" }
  if (percentage >= 80) return { status: "good", color: "text-blue-600", bg: "bg-blue-50" }
  if (percentage >= 75) return { status: "satisfactory", color: "text-orange-600", bg: "bg-orange-50" }
  return { status: "poor", color: "text-red-600", bg: "bg-red-50" }
}

export default function AttendancePage() {
  const attendanceStatus = getAttendanceStatus(attendanceData.overall.percentage)
  const classesNeeded = Math.max(
    0,
    Math.ceil(
      (attendanceData.overall.requiredPercentage * attendanceData.overall.totalClasses -
        100 * attendanceData.overall.attendedClasses) /
        (100 - attendanceData.overall.requiredPercentage),
    ),
  )

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Attendance Status</h1>
            <p className="text-muted-foreground">Your overall attendance summary and recent records</p>
          </div>

          {/* Overall Attendance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className={attendanceStatus.bg}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Overall Attendance</CardTitle>
                <UserCheck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${attendanceStatus.color}`}>
                  {attendanceData.overall.percentage}%
                </div>
                <p className="text-xs text-muted-foreground capitalize">{attendanceStatus.status}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Classes Attended</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {attendanceData.overall.attendedClasses}/{attendanceData.overall.totalClasses}
                </div>
                <p className="text-xs text-muted-foreground">This semester</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Required Minimum</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{attendanceData.overall.requiredPercentage}%</div>
                <p className="text-xs text-muted-foreground">University requirement</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Classes Needed</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{classesNeeded}</div>
                <p className="text-xs text-muted-foreground">To maintain 75%</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Attendance Progress */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Attendance Progress</CardTitle>
                <CardDescription>Your attendance percentage over the semester</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Current Progress</span>
                    <span className="text-sm text-muted-foreground">
                      {attendanceData.overall.attendedClasses} / {attendanceData.overall.totalClasses} classes
                    </span>
                  </div>
                  <Progress value={attendanceData.overall.percentage} className="h-3" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h4 className="font-semibold mb-2">Monthly Trend</h4>
                      <div className="space-y-2">
                        {attendanceData.monthlyTrend.map((month, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-sm">{month.month}</span>
                            <Badge variant="outline">{month.percentage}%</Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50">
                      <h4 className="font-semibold mb-2">Attendance Analysis</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Best Month:</span>
                          <span className="font-medium">August (95.2%)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Improvement Needed:</span>
                          <span className="font-medium">November (88.9%)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Current Trend:</span>
                          <span className="font-medium text-green-600">Improving</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Attendance Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Attendance Guidelines</CardTitle>
                <CardDescription>University attendance policies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-sm font-medium">Excellent (90%+)</span>
                    </div>
                    <p className="text-xs text-green-600">Eligible for all benefits</p>
                  </div>

                  <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-sm font-medium">Good (80-89%)</span>
                    </div>
                    <p className="text-xs text-blue-600">Meets all requirements</p>
                  </div>

                  <div className="p-3 rounded-lg bg-orange-50 border border-orange-200">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-orange-500" />
                      <span className="text-sm font-medium">Satisfactory (75-79%)</span>
                    </div>
                    <p className="text-xs text-orange-600">Minimum requirement met</p>
                  </div>

                  <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="text-sm font-medium">Poor (&lt;75%)</span>
                    </div>
                    <p className="text-xs text-red-600">May affect exam eligibility</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Attendance Records */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Recent Attendance Records</CardTitle>
              <CardDescription>Your attendance for the past few days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {attendanceData.recentRecords.map((record, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col">
                        <span className="font-medium">{record.subject}</span>
                        <span className="text-sm text-muted-foreground">
                          {new Date(record.date).toLocaleDateString()} • {record.time}
                        </span>
                      </div>
                      <Badge variant="outline">{record.type}</Badge>
                    </div>
                    <Badge variant={getStatusColor(record.status) as any}>{record.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
