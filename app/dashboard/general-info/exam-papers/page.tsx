import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { FileText, Download, Search, Calendar, BookOpen } from "lucide-react"

const examPapers = [
  {
    id: 1,
    title: "Database Systems Final Exam",
    subject: "Database Systems",
    type: "Final Exam",
    year: "2023",
    semester: "Fall",
    date: "December 15, 2023",
    pages: 8,
    downloadUrl: "#",
  },
  {
    id: 2,
    title: "Data Structures Midterm",
    subject: "Data Structures & Algorithms",
    type: "Midterm",
    year: "2023",
    semester: "Fall",
    date: "October 20, 2023",
    pages: 6,
    downloadUrl: "#",
  },
  {
    id: 3,
    title: "Web Development Project Guidelines",
    subject: "Web Development",
    type: "Project",
    year: "2023",
    semester: "Fall",
    date: "September 15, 2023",
    pages: 12,
    downloadUrl: "#",
  },
  {
    id: 4,
    title: "Machine Learning Quiz 2",
    subject: "Machine Learning",
    type: "Quiz",
    year: "2023",
    semester: "Spring",
    date: "April 10, 2023",
    pages: 4,
    downloadUrl: "#",
  },
  {
    id: 5,
    title: "Software Engineering Final",
    subject: "Software Engineering",
    type: "Final Exam",
    year: "2023",
    semester: "Spring",
    date: "May 18, 2023",
    pages: 10,
    downloadUrl: "#",
  },
  {
    id: 6,
    title: "Computer Networks Practical",
    subject: "Computer Networks",
    type: "Practical",
    year: "2022",
    semester: "Fall",
    date: "November 25, 2022",
    pages: 5,
    downloadUrl: "#",
  },
]

const getTypeColor = (type: string) => {
  switch (type) {
    case "Final Exam":
      return "destructive"
    case "Midterm":
      return "default"
    case "Quiz":
      return "secondary"
    case "Project":
      return "outline"
    case "Practical":
      return "secondary"
    default:
      return "secondary"
  }
}

export default function ExamPapersPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Examination Papers & Question Papers</h1>
            <p className="text-muted-foreground">Download sample papers, past exams, and study materials</p>
          </div>

          {/* Search and Filter */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search Papers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input placeholder="Search by subject, type, or year..." />
                </div>
                <Button>Search</Button>
              </div>
            </CardContent>
          </Card>

          {/* Papers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examPapers.map((paper) => (
              <Card key={paper.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <Badge variant={getTypeColor(paper.type) as any}>{paper.type}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{paper.title}</CardTitle>
                  <CardDescription>{paper.subject}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {paper.semester} {paper.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      <span>{paper.pages} pages</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Date: {paper.date}</div>
                  </div>
                  <Button className="w-full" asChild>
                    <a href={paper.downloadUrl} download>
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Statistics */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Paper Statistics</CardTitle>
              <CardDescription>Overview of available examination papers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-red-600">2</p>
                  <p className="text-sm text-muted-foreground">Final Exams</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-blue-600">1</p>
                  <p className="text-sm text-muted-foreground">Midterms</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-green-600">1</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
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
