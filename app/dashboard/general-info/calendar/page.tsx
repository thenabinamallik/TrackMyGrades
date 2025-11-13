import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"

const academicEvents = [
  {
    date: "2024-12-15",
    title: "Database Systems Final Exam",
    type: "exam",
    time: "10:00 AM - 1:00 PM",
    location: "Hall A, Block 3",
    status: "upcoming",
  },
  {
    date: "2024-12-18",
    title: "Web Development Project Presentation",
    type: "presentation",
    time: "2:00 PM - 5:00 PM",
    location: "Lab 201, IT Block",
    status: "upcoming",
  },
  {
    date: "2024-12-20",
    title: "Winter Break Begins",
    type: "holiday",
    time: "All Day",
    location: "Campus Wide",
    status: "upcoming",
  },
  {
    date: "2024-12-25",
    title: "Christmas Holiday",
    type: "holiday",
    time: "All Day",
    location: "Campus Closed",
    status: "upcoming",
  },
  {
    date: "2025-01-15",
    title: "Spring Semester Registration",
    type: "registration",
    time: "9:00 AM - 5:00 PM",
    location: "Academic Office",
    status: "upcoming",
  },
  {
    date: "2025-01-20",
    title: "Spring Semester Begins",
    type: "academic",
    time: "8:00 AM",
    location: "All Departments",
    status: "upcoming",
  },
]

const getEventTypeColor = (type: string) => {
  switch (type) {
    case "exam":
      return "bg-red-500"
    case "presentation":
      return "bg-blue-500"
    case "holiday":
      return "bg-green-500"
    case "registration":
      return "bg-purple-500"
    case "academic":
      return "bg-orange-500"
    default:
      return "bg-gray-500"
  }
}

const getEventTypeBadge = (type: string) => {
  switch (type) {
    case "exam":
      return "destructive"
    case "presentation":
      return "default"
    case "holiday":
      return "secondary"
    case "registration":
      return "outline"
    case "academic":
      return "secondary"
    default:
      return "secondary"
  }
}

export default function AcademicCalendarPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Academic Calendar</h1>
            <p className="text-muted-foreground">Important dates, exams, and holidays for the academic year</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar Overview */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Events
                </CardTitle>
                <CardDescription>Important academic dates and deadlines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {academicEvents.map((event, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg border">
                      <div className={`w-3 h-3 rounded-full mt-2 ${getEventTypeColor(event.type)}`} />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-foreground">{event.title}</h3>
                          <Badge variant={getEventTypeBadge(event.type) as any}>{event.type}</Badge>
                        </div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {new Date(event.date).toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Exams</span>
                      <Badge variant="destructive">2</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Presentations</span>
                      <Badge variant="default">1</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Holidays</span>
                      <Badge variant="secondary">2</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Important Dates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Registration Deadline</p>
                      <p className="text-muted-foreground">January 15, 2025</p>
                    </div>
                    <div>
                      <p className="font-medium">Semester End</p>
                      <p className="text-muted-foreground">May 20, 2025</p>
                    </div>
                    <div>
                      <p className="font-medium">Summer Break</p>
                      <p className="text-muted-foreground">May 21 - August 15</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
