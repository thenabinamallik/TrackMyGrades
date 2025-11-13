"use client"

import { useState, Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useStudent } from "@/lib/student-context"
import { TabContentSkeleton } from "@/components/loading-skeleton"
import {
  Calendar,
  User,
  FileText,
  Bell,
  BookOpen,
  MessageSquare,
  FileCheck,
  Phone,
  Download,
  Search,
  Edit,
  Save,
  CalendarIcon,
  Clock,
  Mail,
  Building,
} from "lucide-react"

function GeneralInfoContent() {
  const [activeTab, setActiveTab] = useState("calendar")
  const [isEditing, setIsEditing] = useState(false)
  const student = useStudent()

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">General Information</h1>
        <p className="text-muted-foreground">Access important academic information and resources</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-6 h-auto">
          <TabsTrigger value="profile" className="flex items-center gap-2 p-3">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Profile</span>
          </TabsTrigger>
          <TabsTrigger value="calendar" className="flex items-center gap-2 p-3">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Calendar</span>
          </TabsTrigger>
          <TabsTrigger value="exam-papers" className="flex items-center gap-2 p-3">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Exams</span>
          </TabsTrigger>
          <TabsTrigger value="news" className="flex items-center gap-2 p-3">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">News</span>
          </TabsTrigger>
          <TabsTrigger value="syllabus" className="flex items-center gap-2 p-3">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Syllabus</span>
          </TabsTrigger>
          <TabsTrigger value="grievance" className="flex items-center gap-2 p-3">
            <MessageSquare className="h-4 w-4" />
            <span className="hidden sm:inline">Grievance</span>
          </TabsTrigger>
          {/* <TabsTrigger value="form-status" className="flex items-center gap-2 p-3">
            <FileCheck className="h-4 w-4" />
            <span className="hidden sm:inline">Forms</span>
          </TabsTrigger> */}
          <TabsTrigger value="contact" className="flex items-center gap-2 p-3">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Contact</span>
          </TabsTrigger>
        </TabsList>

        {/* Academic Calendar Tab */}
        <TabsContent value="calendar" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                Academic Calendar 2024-25
              </CardTitle>
              <CardDescription>Important dates, exams, and holidays</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
                  { date: "2024-09-15", event: "Mid-term Examinations Begin", type: "exam" },
                  { date: "2024-09-25", event: "Mid-term Examinations End", type: "exam" },
                  { date: "2024-10-02", event: "Gandhi Jayanti Holiday", type: "holiday" },
                  { date: "2024-10-15", event: "Assignment Submission Deadline", type: "deadline" },
                  { date: "2024-11-01", event: "Diwali Break Begins", type: "holiday" },
                  { date: "2024-11-05", event: "Classes Resume", type: "academic" },
                  { date: "2024-12-01", event: "Final Examinations Begin", type: "exam" },
                  { date: "2024-12-15", event: "Final Examinations End", type: "exam" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-medium text-muted-foreground min-w-20">{item.date}</div>
                      <div className="font-medium">{item.event}</div>
                    </div>
                    <Badge
                      variant={item.type === "exam" ? "destructive" : item.type === "holiday" ? "secondary" : "default"}
                    >
                      {item.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          {student ? (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Student Profile
                    </CardTitle>
                    <CardDescription>Manage your personal information</CardDescription>
                  </div>
                  <Button
                    variant={isEditing ? "default" : "outline"}
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center gap-2"
                  >
                    {isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                    {isEditing ? "Save" : "Edit"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={student.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && <Button variant="outline">Change Photo</Button>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue={student.name} disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-number">Registration Number</Label>
                    <Input id="reg-number" defaultValue={student.registrationNumber} disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue={student.email} disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue={student.phone} disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course">Course</Label>
                    <Input id="course" defaultValue={student.course} disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Academic Year</Label>
                    <Input id="year" defaultValue={student.year} disabled />
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Loading student information...</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Exam Papers Tab */}
        <TabsContent value="exam-papers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Examination Papers & Question Papers
              </CardTitle>
              <CardDescription>Download sample papers and past examinations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search papers..." className="pl-10" />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { subject: "Data Structures", type: "Mid-term", year: "2024", semester: "Fall" },
                  { subject: "Computer Networks", type: "Final", year: "2023", semester: "Spring" },
                  { subject: "Database Systems", type: "Mid-term", year: "2024", semester: "Fall" },
                  { subject: "Software Engineering", type: "Final", year: "2023", semester: "Fall" },
                  { subject: "Operating Systems", type: "Mid-term", year: "2024", semester: "Spring" },
                ].map((paper, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div>
                      <h3 className="font-medium">{paper.subject}</h3>
                      <p className="text-sm text-muted-foreground">
                        {paper.type} Exam • {paper.semester} {paper.year}
                      </p>
                    </div>
                    <Button size="sm" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* News Tab */}
        <TabsContent value="news" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                News & Notices
              </CardTitle>
              <CardDescription>Latest announcements and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Mid-term Examination Schedule Released",
                    content:
                      "The mid-term examination schedule for Fall 2024 has been published. Please check your individual timetables.",
                    date: "2024-09-10",
                    priority: "high",
                  },
                  {
                    title: "Library Extended Hours During Exams",
                    content:
                      "The university library will remain open 24/7 during the examination period from September 15-25.",
                    date: "2024-09-08",
                    priority: "medium",
                  },
                  {
                    title: "New Course Registration Opens",
                    content:
                      "Registration for Spring 2025 courses will begin on October 1st. Students are advised to consult with their advisors.",
                    date: "2024-09-05",
                    priority: "medium",
                  },
                  {
                    title: "Campus WiFi Maintenance",
                    content:
                      "WiFi services will be temporarily unavailable on September 12th from 2:00 AM to 6:00 AM for maintenance.",
                    date: "2024-09-03",
                    priority: "low",
                  },
                ].map((notice, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium">{notice.title}</h3>
                        <Badge
                          variant={
                            notice.priority === "high"
                              ? "destructive"
                              : notice.priority === "medium"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {notice.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{notice.content}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {notice.date}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Syllabus Tab */}
        <TabsContent value="syllabus" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Course Syllabus
              </CardTitle>
              <CardDescription>Download course syllabus and curriculum details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { course: "Data Structures & Algorithms", code: "CS301", credits: 4, semester: "Fall 2024" },
                  { course: "Computer Networks", code: "CS302", credits: 3, semester: "Fall 2024" },
                  { course: "Database Management Systems", code: "CS303", credits: 4, semester: "Fall 2024" },
                  { course: "Software Engineering", code: "CS304", credits: 3, semester: "Fall 2024" },
                  { course: "Operating Systems", code: "CS305", credits: 4, semester: "Fall 2024" },
                ].map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div>
                      <h3 className="font-medium">{course.course}</h3>
                      <p className="text-sm text-muted-foreground">
                        {course.code} • {course.credits} Credits • {course.semester}
                      </p>
                    </div>
                    <Button size="sm" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Grievance Tab */}
        <TabsContent value="grievance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Submit New Grievance</CardTitle>
                <CardDescription>Report any academic or administrative issues</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="grievance-type">Grievance Type</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Academic Issue</option>
                    <option>Administrative Issue</option>
                    <option>Facility Issue</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description of the issue" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description</Label>
                  <Textarea id="description" placeholder="Provide detailed information about your grievance" rows={4} />
                </div>
                <Button className="w-full">Submit Grievance</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Grievances</CardTitle>
                <CardDescription>Track the status of your submitted grievances</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: "GRV001", subject: "Library Book Issue", status: "resolved", date: "2024-08-15" },
                    { id: "GRV002", subject: "Grade Discrepancy", status: "in-progress", date: "2024-09-01" },
                    { id: "GRV003", subject: "Hostel Maintenance", status: "pending", date: "2024-09-10" },
                  ].map((grievance) => (
                    <div key={grievance.id} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{grievance.subject}</span>
                        <Badge
                          variant={
                            grievance.status === "resolved"
                              ? "default"
                              : grievance.status === "in-progress"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {grievance.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        ID: {grievance.id} • Submitted: {grievance.date}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Form Status Tab */}
        <TabsContent value="form-status" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="h-5 w-5" />
                Online Form Approval Status
              </CardTitle>
              <CardDescription>Track the status of your submitted forms and applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "FORM001",
                    type: "Course Registration",
                    status: "approved",
                    submittedDate: "2024-08-20",
                    approvedDate: "2024-08-22",
                  },
                  {
                    id: "FORM002",
                    type: "Library Card Renewal",
                    status: "approved",
                    submittedDate: "2024-08-25",
                    approvedDate: "2024-08-26",
                  },
                  {
                    id: "FORM003",
                    type: "Transcript Request",
                    status: "pending",
                    submittedDate: "2024-09-05",
                    approvedDate: null,
                  },
                  {
                    id: "FORM004",
                    type: "Hostel Room Change",
                    status: "rejected",
                    submittedDate: "2024-09-01",
                    approvedDate: "2024-09-03",
                  },
                  {
                    id: "FORM005",
                    type: "Fee Payment Extension",
                    status: "pending",
                    submittedDate: "2024-09-10",
                    approvedDate: null,
                  },
                ].map((form) => (
                  <div key={form.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-medium">{form.type}</h3>
                        <p className="text-sm text-muted-foreground">Form ID: {form.id}</p>
                      </div>
                      <Badge
                        variant={
                          form.status === "approved"
                            ? "default"
                            : form.status === "pending"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {form.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Submitted:</span>
                        <div>{form.submittedDate}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          {form.status === "approved"
                            ? "Approved:"
                            : form.status === "rejected"
                              ? "Rejected:"
                              : "Status:"}
                        </span>
                        <div>{form.approvedDate || "Pending review"}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact Tab */}
        <TabsContent value="contact" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Academic Departments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    dept: "Computer Science",
                    phone: "+1 (555) 101-1001",
                    email: "cs@university.edu",
                    head: "Dr. Sarah Wilson",
                  },
                  {
                    dept: "Mathematics",
                    phone: "+1 (555) 101-1002",
                    email: "math@university.edu",
                    head: "Dr. Michael Brown",
                  },
                  {
                    dept: "Physics",
                    phone: "+1 (555) 101-1003",
                    email: "physics@university.edu",
                    head: "Dr. Emily Davis",
                  },
                ].map((dept, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <h3 className="font-medium mb-2">{dept.dept} Department</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3" />
                        Head: {dept.head}
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-3 w-3" />
                        {dept.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-3 w-3" />
                        {dept.email}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Important Contacts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    service: "Student Services",
                    phone: "+1 (555) 100-1000",
                    email: "students@university.edu",
                    hours: "9 AM - 5 PM",
                  },
                  {
                    service: "Academic Office",
                    phone: "+1 (555) 100-2000",
                    email: "academic@university.edu",
                    hours: "8 AM - 6 PM",
                  },
                  { service: "IT Support", phone: "+1 (555) 100-3000", email: "support@university.edu", hours: "24/7" },
                  {
                    service: "Library",
                    phone: "+1 (555) 100-4000",
                    email: "library@university.edu",
                    hours: "7 AM - 11 PM",
                  },
                ].map((contact, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <h3 className="font-medium mb-2">{contact.service}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Phone className="h-3 w-3" />
                        {contact.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-3 w-3" />
                        {contact.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        {contact.hours}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default function GeneralInfoPage() {
  return (
    <Suspense fallback={<TabContentSkeleton />}>
      <GeneralInfoContent />
    </Suspense>
  )
}
