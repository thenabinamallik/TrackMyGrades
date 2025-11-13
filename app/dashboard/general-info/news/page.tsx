import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, Calendar, User, Pin, ExternalLink } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "Winter Break Schedule Announced",
    content:
      "The university has announced the winter break schedule. Classes will be suspended from December 20, 2024, to January 15, 2025. All students are advised to complete their pending assignments before the break.",
    type: "announcement",
    priority: "high",
    date: "2024-12-01",
    author: "Academic Office",
    pinned: true,
  },
  {
    id: 2,
    title: "New Library Hours During Finals",
    content:
      "The library will extend its hours during the final examination period. From December 10-20, the library will be open 24/7 to support students during their preparation.",
    type: "notice",
    priority: "medium",
    date: "2024-11-28",
    author: "Library Administration",
    pinned: false,
  },
  {
    id: 3,
    title: "Spring 2025 Course Registration Opens",
    content:
      "Course registration for Spring 2025 semester will begin on January 15, 2025. Students are advised to meet with their academic advisors before registration to plan their course schedule.",
    type: "registration",
    priority: "high",
    date: "2024-11-25",
    author: "Registrar Office",
    pinned: true,
  },
  {
    id: 4,
    title: "Campus WiFi Maintenance",
    content:
      "The IT department will perform routine maintenance on the campus WiFi network on December 5, 2024, from 2:00 AM to 6:00 AM. Internet services may be intermittent during this period.",
    type: "maintenance",
    priority: "low",
    date: "2024-11-20",
    author: "IT Department",
    pinned: false,
  },
  {
    id: 5,
    title: "Student Health Services Update",
    content:
      "The Student Health Center has updated its operating hours. Starting December 1, 2024, the center will be open Monday-Friday 8:00 AM to 6:00 PM, and Saturday 9:00 AM to 2:00 PM.",
    type: "health",
    priority: "medium",
    date: "2024-11-18",
    author: "Health Services",
    pinned: false,
  },
  {
    id: 6,
    title: "Career Fair 2025 Registration",
    content:
      "Registration is now open for the Spring 2025 Career Fair scheduled for March 15-16, 2025. Over 100 companies will participate. Students can register through the career services portal.",
    type: "event",
    priority: "medium",
    date: "2024-11-15",
    author: "Career Services",
    pinned: false,
  },
]

const getTypeColor = (type: string) => {
  switch (type) {
    case "announcement":
      return "default"
    case "notice":
      return "secondary"
    case "registration":
      return "destructive"
    case "maintenance":
      return "outline"
    case "health":
      return "secondary"
    case "event":
      return "default"
    default:
      return "secondary"
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

export default function NewsPage() {
  const pinnedNews = newsItems.filter((item) => item.pinned)
  const regularNews = newsItems.filter((item) => !item.pinned)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">News & Notices</h1>
            <p className="text-muted-foreground">
              Stay updated with the latest announcements and important information
            </p>
          </div>

          {/* Pinned News */}
          {pinnedNews.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Pin className="h-5 w-5 text-accent" />
                Pinned Announcements
              </h2>
              <div className="space-y-4">
                {pinnedNews.map((item) => (
                  <Card key={item.id} className="border-l-4 border-l-accent">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant={getTypeColor(item.type) as any}>{item.type}</Badge>
                          <span className={`text-xs font-medium ${getPriorityColor(item.priority)}`}>
                            {item.priority.toUpperCase()}
                          </span>
                        </div>
                        <Pin className="h-4 w-4 text-accent" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {item.author}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{item.content}</p>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Regular News */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Recent News & Notices
            </h2>
            <div className="space-y-4">
              {regularNews.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant={getTypeColor(item.type) as any}>{item.type}</Badge>
                        <span className={`text-xs font-medium ${getPriorityColor(item.priority)}`}>
                          {item.priority.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {item.author}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{item.content}</p>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* News Statistics */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>News Overview</CardTitle>
              <CardDescription>Summary of recent announcements by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-blue-600">2</p>
                  <p className="text-sm text-muted-foreground">Announcements</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-green-600">1</p>
                  <p className="text-sm text-muted-foreground">Registration</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-orange-600">1</p>
                  <p className="text-sm text-muted-foreground">Events</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-purple-600">2</p>
                  <p className="text-sm text-muted-foreground">Other</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
