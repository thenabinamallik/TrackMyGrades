import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileX, Plus, Calendar, CheckCircle, XCircle, Clock, User } from "lucide-react"

const leaveApplications = [
  {
    id: "LEAVE-2024-001",
    type: "Medical Leave",
    startDate: "2024-12-10",
    endDate: "2024-12-12",
    days: 3,
    reason: "Fever and flu symptoms. Doctor advised rest.",
    status: "approved",
    appliedDate: "2024-12-08",
    approvedBy: "Dr. Sarah Mitchell",
    approvedDate: "2024-12-09",
    comments: "Medical certificate received. Leave approved.",
    attachments: ["medical_certificate.pdf"],
  },
  {
    id: "LEAVE-2024-002",
    type: "Personal Leave",
    startDate: "2024-12-20",
    endDate: "2024-12-22",
    days: 3,
    reason: "Family wedding ceremony.",
    status: "pending",
    appliedDate: "2024-12-05",
    approvedBy: null,
    approvedDate: null,
    comments: "Application under review.",
    attachments: [],
  },
  {
    id: "LEAVE-2024-003",
    type: "Emergency Leave",
    startDate: "2024-11-15",
    endDate: "2024-11-15",
    days: 1,
    reason: "Family emergency - hospitalization.",
    status: "approved",
    appliedDate: "2024-11-14",
    approvedBy: "Academic Committee",
    approvedDate: "2024-11-14",
    comments: "Emergency leave approved immediately.",
    attachments: ["emergency_proof.pdf"],
  },
  {
    id: "LEAVE-2024-004",
    type: "Academic Leave",
    startDate: "2024-11-28",
    endDate: "2024-11-29",
    days: 2,
    reason: "Attending academic conference.",
    status: "rejected",
    appliedDate: "2024-11-25",
    approvedBy: "Dr. Sarah Mitchell",
    approvedDate: "2024-11-26",
    comments: "Conference not directly related to current coursework.",
    attachments: ["conference_invitation.pdf"],
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "approved":
      return "default"
    case "rejected":
      return "destructive"
    case "pending":
      return "secondary"
    default:
      return "outline"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "approved":
      return CheckCircle
    case "rejected":
      return XCircle
    case "pending":
      return Clock
    default:
      return Clock
  }
}

export default function LeavePage() {
  const totalApplications = leaveApplications.length
  const approvedApplications = leaveApplications.filter((app) => app.status === "approved").length
  const pendingApplications = leaveApplications.filter((app) => app.status === "pending").length
  const totalLeaveDays = leaveApplications
    .filter((app) => app.status === "approved")
    .reduce((sum, app) => sum + app.days, 0)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Leave Application</h1>
            <p className="text-muted-foreground">Submit leave requests and track their approval status</p>
          </div>

          {/* Leave Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                <FileX className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalApplications}</div>
                <p className="text-xs text-muted-foreground">This semester</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Approved</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{approvedApplications}</div>
                <p className="text-xs text-muted-foreground">Applications</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">{pendingApplications}</div>
                <p className="text-xs text-muted-foreground">Awaiting approval</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Leave Days Taken</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{totalLeaveDays}</div>
                <p className="text-xs text-muted-foreground">Days approved</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* New Leave Application */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Submit New Leave Application
                </CardTitle>
                <CardDescription>Fill out the form below to request leave</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="leaveType">Leave Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select leave type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="medical">Medical Leave</SelectItem>
                          <SelectItem value="personal">Personal Leave</SelectItem>
                          <SelectItem value="emergency">Emergency Leave</SelectItem>
                          <SelectItem value="academic">Academic Leave</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="duration">Duration</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="half-day">Half Day</SelectItem>
                          <SelectItem value="full-day">Full Day</SelectItem>
                          <SelectItem value="multiple">Multiple Days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="startDate">Start Date</Label>
                      <Input id="startDate" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="endDate">End Date</Label>
                      <Input id="endDate" type="date" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="reason">Reason for Leave</Label>
                    <Textarea
                      id="reason"
                      placeholder="Please provide a detailed reason for your leave request..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="attachment">Supporting Documents (Optional)</Label>
                    <Input id="attachment" type="file" multiple />
                    <p className="text-xs text-muted-foreground mt-1">
                      Upload medical certificates, invitations, or other supporting documents
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1">Submit Application</Button>
                    <Button variant="outline">Save as Draft</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Leave Guidelines */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Leave Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Medical Leave</p>
                      <p className="text-muted-foreground">Requires medical certificate</p>
                    </div>
                    <div>
                      <p className="font-medium">Personal Leave</p>
                      <p className="text-muted-foreground">Apply 3 days in advance</p>
                    </div>
                    <div>
                      <p className="font-medium">Emergency Leave</p>
                      <p className="text-muted-foreground">Can be applied retrospectively</p>
                    </div>
                    <div>
                      <p className="font-medium">Academic Leave</p>
                      <p className="text-muted-foreground">For conferences/competitions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Processing Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Medical Leave:</span>
                      <span>1-2 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Personal Leave:</span>
                      <span>2-3 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergency Leave:</span>
                      <span>Same day</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Academic Leave:</span>
                      <span>3-5 days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Leave Application History */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileX className="h-5 w-5" />
                Leave Application History
              </CardTitle>
              <CardDescription>Track the status of your submitted leave applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaveApplications.map((application) => {
                  const StatusIcon = getStatusIcon(application.status)
                  return (
                    <div key={application.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{application.type}</h3>
                          <p className="text-sm text-muted-foreground">ID: {application.id}</p>
                        </div>
                        <Badge variant={getStatusColor(application.status) as any} className="flex items-center gap-1">
                          <StatusIcon className="h-3 w-3" />
                          {application.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-muted-foreground">Duration</p>
                          <p className="font-medium">
                            {new Date(application.startDate).toLocaleDateString()} -{" "}
                            {new Date(application.endDate).toLocaleDateString()}
                          </p>
                          <p className="text-sm text-muted-foreground">{application.days} day(s)</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Applied Date</p>
                          <p className="font-medium flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(application.appliedDate).toLocaleDateString()}
                          </p>
                        </div>
                        {application.approvedBy && (
                          <div>
                            <p className="text-sm text-muted-foreground">Processed By</p>
                            <p className="font-medium flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {application.approvedBy}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <div>
                          <p className="text-sm font-medium">Reason:</p>
                          <p className="text-sm text-muted-foreground">{application.reason}</p>
                        </div>
                        {application.comments && (
                          <div>
                            <p className="text-sm font-medium">Comments:</p>
                            <p className="text-sm text-muted-foreground">{application.comments}</p>
                          </div>
                        )}
                        {application.attachments.length > 0 && (
                          <div>
                            <p className="text-sm font-medium">Attachments:</p>
                            <div className="flex gap-2 mt-1">
                              {application.attachments.map((attachment, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {attachment}
                                </Badge>
                              ))}
                            </div>
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
