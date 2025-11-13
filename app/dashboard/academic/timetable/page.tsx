import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, User, Calendar } from "lucide-react"

const weeklySchedule = {
  Monday: [
    {
      time: "9:00 AM - 10:30 AM",
      subject: "Database Systems",
      code: "CS401",
      instructor: "Dr. Sarah Mitchell",
      room: "Lab 201, IT Block",
      type: "Lecture",
    },
    {
      time: "11:00 AM - 12:30 PM",
      subject: "Data Structures & Algorithms",
      code: "CS302",
      instructor: "Prof. Michael Chen",
      room: "Room 301, IT Block",
      type: "Lecture",
    },
    {
      time: "2:00 PM - 3:30 PM",
      subject: "Web Development",
      code: "CS350",
      instructor: "Dr. Emily Rodriguez",
      room: "Lab 101, IT Block",
      type: "Lab",
    },
  ],
  Tuesday: [
    {
      time: "10:00 AM - 11:30 AM",
      subject: "Machine Learning",
      code: "CS420",
      instructor: "Dr. James Wilson",
      room: "Room 401, IT Block",
      type: "Lecture",
    },
    {
      time: "1:00 PM - 2:30 PM",
      subject: "Database Systems",
      code: "CS401",
      instructor: "Dr. Sarah Mitchell",
      room: "Lab 201, IT Block",
      type: "Lab",
    },
    {
      time: "3:00 PM - 4:30 PM",
      subject: "Software Engineering",
      code: "CS380",
      instructor: "Prof. Lisa Thompson",
      room: "Room 201, IT Block",
      type: "Lecture",
    },
  ],
  Wednesday: [
    {
      time: "9:00 AM - 10:30 AM",
      subject: "Data Structures & Algorithms",
      code: "CS302",
      instructor: "Prof. Michael Chen",
      room: "Lab 301, IT Block",
      type: "Lab",
    },
    {
      time: "11:00 AM - 12:30 PM",
      subject: "Web Development",
      code: "CS350",
      instructor: "Dr. Emily Rodriguez",
      room: "Room 101, IT Block",
      type: "Lecture",
    },
    {
      time: "2:00 PM - 3:30 PM",
      subject: "Machine Learning",
      code: "CS420",
      instructor: "Dr. James Wilson",
      room: "Lab 401, IT Block",
      type: "Lab",
    },
  ],
  Thursday: [
    {
      time: "10:00 AM - 11:30 AM",
      subject: "Database Systems",
      code: "CS401",
      instructor: "Dr. Sarah Mitchell",
      room: "Room 201, IT Block",
      type: "Lecture",
    },
    {
      time: "1:00 PM - 2:30 PM",
      subject: "Software Engineering",
      code: "CS380",
      instructor: "Prof. Lisa Thompson",
      room: "Lab 201, IT Block",
      type: "Lab",
    },
    {
      time: "3:00 PM - 4:30 PM",
      subject: "Data Structures & Algorithms",
      code: "CS302",
      instructor: "Prof. Michael Chen",
      room: "Room 301, IT Block",
      type: "Tutorial",
    },
  ],
  Friday: [
    {
      time: "9:00 AM - 10:30 AM",
      subject: "Machine Learning",
      code: "CS420",
      instructor: "Dr. James Wilson",
      room: "Room 401, IT Block",
      type: "Lecture",
    },
    {
      time: "11:00 AM - 12:30 PM",
      subject: "Web Development",
      code: "CS350",
      instructor: "Dr. Emily Rodriguez",
      room: "Lab 101, IT Block",
      type: "Project Work",
    },
    {
      time: "2:00 PM - 3:30 PM",
      subject: "Software Engineering",
      code: "CS380",
      instructor: "Prof. Lisa Thompson",
      room: "Room 201, IT Block",
      type: "Seminar",
    },
  ],
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "Lecture":
      return "default"
    case "Lab":
      return "secondary"
    case "Tutorial":
      return "outline"
    case "Project Work":
      return "secondary"
    case "Seminar":
      return "outline"
    default:
      return "secondary"
  }
}

export default function TimetablePage() {
  const days = Object.keys(weeklySchedule) as Array<keyof typeof weeklySchedule>

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Weekly Timetable</h1>
            <p className="text-muted-foreground">Your class schedule for Fall 2024 semester</p>
          </div>

          {/* Current Week Info */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Current Week
              </CardTitle>
              <CardDescription>December 9 - December 13, 2024 • Fall 2024 Semester</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <p className="text-lg font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Courses</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <p className="text-lg font-bold">18</p>
                  <p className="text-sm text-muted-foreground">Classes/Week</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <p className="text-lg font-bold">27</p>
                  <p className="text-sm text-muted-foreground">Hours/Week</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <p className="text-lg font-bold">4</p>
                  <p className="text-sm text-muted-foreground">Instructors</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Schedule */}
          <div className="space-y-6">
            {days.map((day) => (
              <Card key={day}>
                <CardHeader>
                  <CardTitle className="text-xl">{day}</CardTitle>
                  <CardDescription>{weeklySchedule[day].length} classes scheduled</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {weeklySchedule[day].map((classItem, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-lg border bg-muted/20">
                        <div className="flex-shrink-0">
                          <div className="flex items-center gap-2 text-sm font-medium">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            {classItem.time}
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{classItem.subject}</h3>
                            <Badge variant="outline">{classItem.code}</Badge>
                            <Badge variant={getTypeColor(classItem.type) as any}>{classItem.type}</Badge>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {classItem.instructor}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {classItem.room}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Schedule Summary */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Schedule Summary</CardTitle>
              <CardDescription>Overview of your weekly academic schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Class Types Distribution</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Lectures</span>
                      <Badge variant="default">8</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Labs</span>
                      <Badge variant="secondary">6</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Tutorials</span>
                      <Badge variant="outline">2</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Others</span>
                      <Badge variant="secondary">2</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Daily Schedule</h4>
                  <div className="space-y-2">
                    {days.map((day) => (
                      <div key={day} className="flex justify-between items-center">
                        <span className="text-sm">{day}</span>
                        <Badge variant="outline">{weeklySchedule[day].length} classes</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
