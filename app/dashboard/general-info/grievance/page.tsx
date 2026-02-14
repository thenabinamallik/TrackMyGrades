import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Plus, Calendar, AlertCircle, CheckCircle, Clock } from "lucide-react"

const grievanceRecords = [
  {
    id: "GRV-2024-001",
    title: "Library Book Return Issue",
    category: "Library Services",
    status: "resolved",
    priority: "medium",
    submittedDate: "2024-11-15",
    resolvedDate: "2024-11-20",
    description: "Unable to return book due to system error showing book as already returned.",
    response: "Issue resolved. System error was fixed and late fees were waived.",
  },
  {
    id: "GRV-2024-002",
    title: "Incorrect Grade Posted",
    category: "Academic",
    status: "in-progress",
    priority: "high",
    submittedDate: "2024-11-28",
    resolvedDate: null,
    description: "Final grade for CS401 shows B+ but should be A- based on calculated scores.",
    response: "Under review by academic committee. Expected resolution within 5 business days.",
  },
  {
    id: "GRV-2024-003",
    title: "Parking Permit Issue",
    category: "Campus Services",
    status: "pending",
    priority: "low",
    submittedDate: "2024-12-01",
    resolvedDate: null,
    description: "Parking permit not working at Gate B despite valid registration.",
    response: null,
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "resolved":
      return "default"
    case "in-progress":
      return "secondary"
    case "pending":
      return "outline"
    default:
      return "secondary"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "resolved":
      return CheckCircle
    case "in-progress":
      return Clock
    case "pending":
      return AlertCircle
    default:
      return AlertCircle
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "text-red-600"
    case "medium":
      return "text-orange-600"
    case "low":
      return "text-green-600"
    default:
      return "text-gray-600"
  }
}

export default function GrievancePage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Grievance Management</h1>
            <p className="text-muted-foreground">Submit complaints and track their resolution status</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Submit New Grievance */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Submit New Grievance
                </CardTitle>
                <CardDescription>Fill out the form below to submit a new complaint or concern</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Grievance Title</Label>
                      <Input id="title" placeholder="Brief description of the issue" />
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="academic">Academic</SelectItem>
                          <SelectItem value="library">Library Services</SelectItem>
                          <SelectItem value="campus">Campus Services</SelectItem>
                          <SelectItem value="financial">Financial</SelectItem>
                          <SelectItem value="housing">Housing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="priority">Priority Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="description">Detailed Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Please provide a detailed description of your grievance..."
                      rows={4}
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1">Submit Grievance</Button>
                    <Button variant="outline">Save as Draft</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Grievance Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Total Submitted</span>
                      <Badge variant="outline">3</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Resolved</span>
                      <Badge variant="default">1</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">In Progress</span>
                      <Badge variant="secondary">1</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Pending</span>
                      <Badge variant="outline">1</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Grievance Officer</p>
                      <p className="text-muted-foreground">Dr. Patricia Adams</p>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">grievance@university.edu</p>
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-muted-foreground">Mon-Fri 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Grievance History */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Your Grievance History
              </CardTitle>
              <CardDescription>Track the status of your submitted grievances</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {grievanceRecords.map((grievance) => {
                  const StatusIcon = getStatusIcon(grievance.status)
                  return (
                    <div key={grievance.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{grievance.title}</h3>
                          <p className="text-sm text-muted-foreground">ID: {grievance.id}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={getStatusColor(grievance.status) as any} className="flex items-center gap-1">
                            <StatusIcon className="h-3 w-3" />
                            {grievance.status}
                          </Badge>
                          <span className={`text-xs font-medium ${getPriorityColor(grievance.priority)}`}>
                            {grievance.priority.toUpperCase()}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-muted-foreground">Category: {grievance.category}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Submitted: {new Date(grievance.submittedDate).toLocaleDateString()}
                          </p>
                          {grievance.resolvedDate && (
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <CheckCircle className="h-3 w-3" />
                              Resolved: {new Date(grievance.resolvedDate).toLocaleDateString()}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div>
                          <p className="text-sm font-medium">Description:</p>
                          <p className="text-sm text-muted-foreground">{grievance.description}</p>
                        </div>
                        {grievance.response && (
                          <div>
                            <p className="text-sm font-medium">Response:</p>
                            <p className="text-sm text-muted-foreground">{grievance.response}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
