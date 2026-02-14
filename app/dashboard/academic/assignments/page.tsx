import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileText, Upload, Download, Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react"

const assignments = [
  {
    id: "ASSIGN-001",
    title: "Database Design Project",
    subject: "Database Systems (CS401)",
    dueDate: "2024-12-20",
    submittedDate: "2024-12-18",
    status: "submitted",
    grade: "A-",
    maxMarks: 100,
    obtainedMarks: 88,
    description: "Design and implement a complete database system for a library management system.",
    submissionFile: "library_db_design.pdf",
    feedback: "Excellent work on normalization and query optimization. Minor improvements needed in documentation.",
  },
  {
    id: "ASSIGN-002",
    title: "Algorithm Analysis Report",
    subject: "Data Structures & Algorithms (CS302)",
    dueDate: "2024-12-22",
    submittedDate: null,
    status: "pending",
    grade: null,
    maxMarks: 50,
    obtainedMarks: null,
    description: "Analyze time and space complexity of various sorting algorithms with empirical testing.",
    submissionFile: null,
    feedback: null,
  },
  {
    id: "ASSIGN-003",
    title: "React Web Application",
    subject: "Web Development (CS350)",
    dueDate: "2024-12-15",
    submittedDate: "2024-12-14",
    status: "graded",
    grade: "A",
    maxMarks: 100,
    obtainedMarks: 95,
    description: "Build a full-stack web application using React, Node.js, and MongoDB.",
    submissionFile: "react_app_project.zip",
    feedback: "Outstanding implementation with clean code and excellent user interface design.",
  },
  {
    id: "ASSIGN-004",
    title: "ML Model Implementation",
    subject: "Machine Learning (CS420)",
    dueDate: "2024-12-25",
    submittedDate: null,
    status: "overdue",
    grade: null,
    maxMarks: 75,
    obtainedMarks: null,
    description: "Implement and compare different machine learning algorithms on a given dataset.",
    submissionFile: null,
    feedback: null,
  },
  {
    id: "ASSIGN-005",
    title: "Software Requirements Document",
    subject: "Software Engineering (CS380)",
    dueDate: "2024-12-18",
    submittedDate: "2024-12-17",
    status: "submitted",
    grade: null,
    maxMarks: 60,
    obtainedMarks: null,
    description: "Create a comprehensive software requirements specification document.",
    submissionFile: "srs_document.pdf",
    feedback: null,
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "submitted":
      return "secondary"
    case "graded":
      return "default"
    case "pending":
      return "outline"
    case "overdue":
      return "destructive"
    default:
      return "secondary"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "submitted":
      return CheckCircle
    case "graded":
      return CheckCircle
    case "pending":
      return Clock
    case "overdue":
      return AlertCircle
    default:
      return Clock
  }
}

export default function AssignmentsPage() {
  const pendingAssignments = assignments.filter((a) => a.status === "pending" || a.status === "overdue").length
  const submittedAssignments = assignments.filter((a) => a.status === "submitted" || a.status === "graded").length
  const gradedAssignments = assignments.filter((a) => a.status === "graded").length

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Assignments</h1>
            <p className="text-muted-foreground">Manage your assignment submissions and track progress</p>
          </div>

          {/* Assignment Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Assignments</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{assignments.length}</div>
                <p className="text-xs text-muted-foreground">This semester</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">{pendingAssignments}</div>
                <p className="text-xs text-muted-foreground">Need submission</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Submitted</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{submittedAssignments}</div>
                <p className="text-xs text-muted-foreground">Completed</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Graded</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{gradedAssignments}</div>
                <p className="text-xs text-muted-foreground">With feedback</p>
              </CardContent>
            </Card>
          </div>

          {/* Assignment List */}
          <div className="space-y-6">
            {assignments.map((assignment) => {
              const StatusIcon = getStatusIcon(assignment.status)
              const isOverdue = assignment.status === "overdue"
              const daysUntilDue = Math.ceil(
                (new Date(assignment.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
              )

              return (
                <Card key={assignment.id} className={isOverdue ? "border-red-200 bg-red-50/50" : ""}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{assignment.title}</CardTitle>
                        <CardDescription className="mt-1">{assignment.subject}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        {assignment.grade && (
                          <Badge variant="default">
                            {assignment.obtainedMarks}/{assignment.maxMarks}
                          </Badge>
                        )}
                        <Badge variant={getStatusColor(assignment.status) as any} className="flex items-center gap-1">
                          <StatusIcon className="h-3 w-3" />
                          {assignment.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Assignment Details */}
                      <div className="lg:col-span-2">
                        <h4 className="font-semibold mb-2">Description</h4>
                        <p className="text-muted-foreground mb-4">{assignment.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                            {daysUntilDue > 0 && assignment.status === "pending" && (
                              <Badge variant="outline" className="text-xs">
                                {daysUntilDue} days left
                              </Badge>
                            )}
                          </div>
                          {assignment.submittedDate && (
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Submitted: {new Date(assignment.submittedDate).toLocaleDateString()}</span>
                            </div>
                          )}
                        </div>

                        {assignment.feedback && (
                          <div>
                            <h4 className="font-semibold mb-2">Instructor Feedback</h4>
                            <p className="text-sm text-muted-foreground p-3 rounded-lg bg-muted/50">
                              {assignment.feedback}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Submission Section */}
                      <div>
                        <h4 className="font-semibold mb-3">Submission</h4>
                        {assignment.status === "pending" || assignment.status === "overdue" ? (
                          <div className="space-y-3">
                            <div>
                              <Label htmlFor={`file-${assignment.id}`}>Upload File</Label>
                              <Input id={`file-${assignment.id}`} type="file" />
                            </div>
                            <Button className="w-full">
                              <Upload className="h-4 w-4 mr-2" />
                              Submit Assignment
                            </Button>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {assignment.submissionFile && (
                              <div className="p-3 rounded-lg bg-muted/50">
                                <p className="text-sm font-medium mb-1">Submitted File:</p>
                                <p className="text-sm text-muted-foreground">{assignment.submissionFile}</p>
                              </div>
                            )}
                            <Button variant="outline" className="w-full bg-transparent">
                              <Download className="h-4 w-4 mr-2" />
                              Download Submission
                            </Button>
                            {assignment.status === "submitted" && (
                              <Button variant="outline" className="w-full bg-transparent">
                                <Upload className="h-4 w-4 mr-2" />
                                Resubmit
                              </Button>
                            )}
                          </div>
                        )}

                        {assignment.grade && (
                          <div className="mt-4 p-3 rounded-lg bg-green-50 border border-green-200">
                            <div className="text-center">
                              <p className="text-sm text-green-600 mb-1">Grade</p>
                              <p className="text-2xl font-bold text-green-700">{assignment.grade}</p>
                              <p className="text-sm text-green-600">
                                {assignment.obtainedMarks}/{assignment.maxMarks} marks
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
