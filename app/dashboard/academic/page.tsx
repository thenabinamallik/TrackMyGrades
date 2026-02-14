"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, BookOpen, BarChart3, FileText, UserCheck, FileX, Upload, Download } from "lucide-react"

export default function AcademicPage() {
  const [activeTab, setActiveTab] = useState("timetable")

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Academic Management</h1>
        <p className="text-muted-foreground">Access your academic information, grades, and attendance records</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-6">
          <TabsTrigger value="timetable" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="hidden sm:inline">Timetable</span>
          </TabsTrigger>
          <TabsTrigger value="course-outline" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Courses</span>
          </TabsTrigger>
          <TabsTrigger value="marks" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:inline">Marks</span>
          </TabsTrigger>
          <TabsTrigger value="assignments" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Assignments</span>
          </TabsTrigger>
          <TabsTrigger value="attendance" className="flex items-center gap-2">
            <UserCheck className="h-4 w-4" />
            <span className="hidden sm:inline">Attendance</span>
          </TabsTrigger>
          <TabsTrigger value="attendance-subject" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:inline">Subject Wise</span>
          </TabsTrigger>
          <TabsTrigger value="leave" className="flex items-center gap-2">
            <FileX className="h-4 w-4" />
            <span className="hidden sm:inline">Leave</span>
          </TabsTrigger>
        </TabsList>

        {/* Timetable Tab */}
        <TabsContent value="timetable" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Weekly Timetable - Fall 2024
              </CardTitle>
              <CardDescription>Your class schedule for the current semester</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-medium">Time</th>
                      <th className="text-left p-3 font-medium">Monday</th>
                      <th className="text-left p-3 font-medium">Tuesday</th>
                      <th className="text-left p-3 font-medium">Wednesday</th>
                      <th className="text-left p-3 font-medium">Thursday</th>
                      <th className="text-left p-3 font-medium">Friday</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        time: "9:00 - 10:00",
                        mon: "Data Structures",
                        tue: "Computer Networks",
                        wed: "Database Systems",
                        thu: "Software Engineering",
                        fri: "Operating Systems",
                      },
                      {
                        time: "10:00 - 11:00",
                        mon: "Mathematics",
                        tue: "Physics",
                        wed: "Data Structures Lab",
                        thu: "Computer Networks",
                        fri: "Database Systems",
                      },
                      { time: "11:00 - 12:00", mon: "Break", tue: "Break", wed: "Break", thu: "Break", fri: "Break" },
                      {
                        time: "12:00 - 1:00",
                        mon: "Software Engineering",
                        tue: "Operating Systems",
                        wed: "Mathematics",
                        thu: "Physics",
                        fri: "Software Engineering Lab",
                      },
                      { time: "1:00 - 2:00", mon: "Lunch", tue: "Lunch", wed: "Lunch", thu: "Lunch", fri: "Lunch" },
                      {
                        time: "2:00 - 3:00",
                        mon: "Database Lab",
                        tue: "Networks Lab",
                        wed: "Operating Systems",
                        thu: "Data Structures",
                        fri: "Free Period",
                      },
                    ].map((row, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="p-3 font-medium text-muted-foreground">{row.time}</td>
                        <td className="p-3">{row.mon}</td>
                        <td className="p-3">{row.tue}</td>
                        <td className="p-3">{row.wed}</td>
                        <td className="p-3">{row.thu}</td>
                        <td className="p-3">{row.fri}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Course Outline Tab */}
        <TabsContent value="course-outline" className="space-y-6">
          <div className="grid gap-6">
            {[
              {
                code: "CS301",
                name: "Data Structures & Algorithms",
                credits: 4,
                instructor: "Dr. Sarah Wilson",
                description:
                  "Comprehensive study of data structures, algorithms, and their applications in computer science.",
                topics: [
                  "Arrays and Linked Lists",
                  "Stacks and Queues",
                  "Trees and Graphs",
                  "Sorting Algorithms",
                  "Dynamic Programming",
                ],
              },
              {
                code: "CS302",
                name: "Computer Networks",
                credits: 3,
                instructor: "Dr. Michael Brown",
                description: "Introduction to computer networking concepts, protocols, and network programming.",
                topics: [
                  "OSI Model",
                  "TCP/IP Protocol Suite",
                  "Network Security",
                  "Wireless Networks",
                  "Network Programming",
                ],
              },
              {
                code: "CS303",
                name: "Database Management Systems",
                credits: 4,
                instructor: "Dr. Emily Davis",
                description: "Design and implementation of database systems, SQL, and database administration.",
                topics: [
                  "Relational Model",
                  "SQL Queries",
                  "Database Design",
                  "Normalization",
                  "Transaction Management",
                ],
              },
            ].map((course, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>
                        {course.code} - {course.name}
                      </CardTitle>
                      <CardDescription>
                        {course.credits} Credits • Instructor: {course.instructor}
                      </CardDescription>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Syllabus
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Course Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Assessment Marks Tab */}
        <TabsContent value="marks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Assessment Marks - Fall 2024
              </CardTitle>
              <CardDescription>Your academic performance by subject</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { subject: "Data Structures", midterm: 85, assignments: 92, final: 88, total: 88.5, grade: "A" },
                  { subject: "Computer Networks", midterm: 78, assignments: 85, final: 82, total: 81.5, grade: "B+" },
                  { subject: "Database Systems", midterm: 92, assignments: 89, final: 91, total: 90.7, grade: "A" },
                  {
                    subject: "Software Engineering",
                    midterm: 80,
                    assignments: 88,
                    final: 85,
                    total: 84.3,
                    grade: "B+",
                  },
                  { subject: "Operating Systems", midterm: 87, assignments: 90, final: 89, total: 88.7, grade: "A" },
                ].map((subject, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium">{subject.subject}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">{subject.total}%</span>
                        <Badge variant={subject.grade.startsWith("A") ? "default" : "secondary"}>{subject.grade}</Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Mid-term:</span>
                        <div className="font-medium">{subject.midterm}%</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Assignments:</span>
                        <div className="font-medium">{subject.assignments}%</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Final:</span>
                        <div className="font-medium">{subject.final}%</div>
                      </div>
                    </div>
                    <Progress value={subject.total} className="mt-3" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Assignments Tab */}
        <TabsContent value="assignments" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Assignments</CardTitle>
                <CardDescription>Assignments due for submission</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    subject: "Data Structures",
                    title: "Binary Tree Implementation",
                    due: "2024-09-20",
                    status: "pending",
                  },
                  { subject: "Database Systems", title: "ER Diagram Design", due: "2024-09-25", status: "pending" },
                  {
                    subject: "Software Engineering",
                    title: "Requirements Analysis",
                    due: "2024-09-30",
                    status: "pending",
                  },
                ].map((assignment, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium">{assignment.title}</h4>
                        <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                      </div>
                      <Badge variant="destructive">Due {assignment.due}</Badge>
                    </div>
                    <Button size="sm" className="w-full mt-2">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Submission
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Submitted Assignments</CardTitle>
                <CardDescription>Your assignment submission history</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    subject: "Computer Networks",
                    title: "Network Protocol Analysis",
                    submitted: "2024-09-10",
                    grade: "A",
                    score: 95,
                  },
                  {
                    subject: "Operating Systems",
                    title: "Process Scheduling",
                    submitted: "2024-09-05",
                    grade: "B+",
                    score: 87,
                  },
                  {
                    subject: "Data Structures",
                    title: "Sorting Algorithms",
                    submitted: "2024-08-30",
                    grade: "A",
                    score: 92,
                  },
                ].map((assignment, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium">{assignment.title}</h4>
                        <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="default">{assignment.grade}</Badge>
                        <p className="text-sm text-muted-foreground mt-1">{assignment.score}%</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">Submitted: {assignment.submitted}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Attendance Status Tab */}
        <TabsContent value="attendance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                Overall Attendance Summary
              </CardTitle>
              <CardDescription>Your attendance record for Fall 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-3xl font-bold text-green-600">87.5%</div>
                  <div className="text-sm text-muted-foreground">Overall Attendance</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-3xl font-bold">105</div>
                  <div className="text-sm text-muted-foreground">Classes Attended</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-3xl font-bold text-red-600">15</div>
                  <div className="text-sm text-muted-foreground">Classes Missed</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Recent Attendance</h3>
                {[
                  { date: "2024-09-16", subject: "Data Structures", status: "present", time: "9:00 AM" },
                  { date: "2024-09-16", subject: "Computer Networks", status: "present", time: "10:00 AM" },
                  { date: "2024-09-15", subject: "Database Systems", status: "absent", time: "9:00 AM" },
                  { date: "2024-09-15", subject: "Software Engineering", status: "present", time: "12:00 PM" },
                  { date: "2024-09-14", subject: "Operating Systems", status: "present", time: "2:00 PM" },
                ].map((record, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${record.status === "present" ? "bg-green-500" : "bg-red-500"}`}
                      />
                      <div>
                        <div className="font-medium">{record.subject}</div>
                        <div className="text-sm text-muted-foreground">
                          {record.date} • {record.time}
                        </div>
                      </div>
                    </div>
                    <Badge variant={record.status === "present" ? "default" : "destructive"}>{record.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Subject-wise Attendance Tab */}
        <TabsContent value="attendance-subject" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Subject-wise Attendance
              </CardTitle>
              <CardDescription>Detailed attendance percentage by subject</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { subject: "Data Structures", attended: 22, total: 24, percentage: 91.7 },
                  { subject: "Computer Networks", attended: 18, total: 22, percentage: 81.8 },
                  { subject: "Database Systems", attended: 20, total: 23, percentage: 87.0 },
                  { subject: "Software Engineering", attended: 19, total: 21, percentage: 90.5 },
                  { subject: "Operating Systems", attended: 26, total: 30, percentage: 86.7 },
                ].map((subject, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium">{subject.subject}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{subject.percentage}%</div>
                        <div className="text-sm text-muted-foreground">
                          {subject.attended}/{subject.total} classes
                        </div>
                      </div>
                    </div>
                    <Progress value={subject.percentage} className="mb-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Attended: {subject.attended}</span>
                      <span>Missed: {subject.total - subject.attended}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Leave Application Tab */}
        <TabsContent value="leave" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Apply for Leave</CardTitle>
                <CardDescription>Submit a new leave application</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="leave-type">Leave Type</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Medical Leave</option>
                    <option>Personal Leave</option>
                    <option>Emergency Leave</option>
                    <option>Academic Leave</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from-date">From Date</Label>
                    <Input id="from-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to-date">To Date</Label>
                    <Input id="to-date" type="date" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Leave</Label>
                  <Textarea
                    id="reason"
                    placeholder="Please provide detailed reason for your leave application"
                    rows={4}
                  />
                </div>
                <Button className="w-full">Submit Leave Application</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Leave History</CardTitle>
                <CardDescription>Your previous leave applications and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "LV001",
                      type: "Medical Leave",
                      from: "2024-08-15",
                      to: "2024-08-17",
                      status: "approved",
                      days: 3,
                    },
                    {
                      id: "LV002",
                      type: "Personal Leave",
                      from: "2024-09-01",
                      to: "2024-09-01",
                      status: "approved",
                      days: 1,
                    },
                    {
                      id: "LV003",
                      type: "Emergency Leave",
                      from: "2024-09-10",
                      to: "2024-09-12",
                      status: "pending",
                      days: 3,
                    },
                  ].map((leave) => (
                    <div key={leave.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{leave.type}</span>
                        <Badge
                          variant={
                            leave.status === "approved"
                              ? "default"
                              : leave.status === "pending"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {leave.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div>
                          Duration: {leave.from} to {leave.to} ({leave.days} days)
                        </div>
                        <div>Application ID: {leave.id}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
