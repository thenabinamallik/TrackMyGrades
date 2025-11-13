import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BookOpen, Download, Search, Calendar } from "lucide-react"

const syllabusData = [
  {
    id: 1,
    courseCode: "CS401",
    courseName: "Database Systems",
    credits: 3,
    semester: "Fall 2024",
    instructor: "Dr. Sarah Mitchell",
    description: "Advanced database concepts including normalization, query optimization, and transaction management.",
    topics: [
      "Database Design and Normalization",
      "SQL Advanced Queries",
      "Transaction Management",
      "Query Optimization",
      "NoSQL Databases",
    ],
    assessment: {
      midterm: 30,
      final: 40,
      assignments: 20,
      participation: 10,
    },
    downloadUrl: "#",
  },
  {
    id: 2,
    courseCode: "CS302",
    courseName: "Data Structures & Algorithms",
    credits: 4,
    semester: "Fall 2024",
    instructor: "Prof. Michael Chen",
    description: "Comprehensive study of data structures and algorithmic problem-solving techniques.",
    topics: [
      "Arrays and Linked Lists",
      "Stacks and Queues",
      "Trees and Graphs",
      "Sorting and Searching",
      "Dynamic Programming",
    ],
    assessment: {
      midterm: 25,
      final: 35,
      assignments: 25,
      participation: 15,
    },
    downloadUrl: "#",
  },
  {
    id: 3,
    courseCode: "CS350",
    courseName: "Web Development",
    credits: 3,
    semester: "Fall 2024",
    instructor: "Dr. Emily Rodriguez",
    description: "Modern web development using HTML, CSS, JavaScript, and popular frameworks.",
    topics: ["HTML5 and CSS3", "JavaScript ES6+", "React.js Framework", "Node.js and Express", "Database Integration"],
    assessment: {
      midterm: 20,
      final: 30,
      assignments: 35,
      participation: 15,
    },
    downloadUrl: "#",
  },
  {
    id: 4,
    courseCode: "CS420",
    courseName: "Machine Learning",
    credits: 3,
    semester: "Fall 2024",
    instructor: "Dr. James Wilson",
    description: "Introduction to machine learning algorithms and their practical applications.",
    topics: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Neural Networks",
      "Deep Learning Basics",
      "Model Evaluation",
    ],
    assessment: {
      midterm: 25,
      final: 35,
      assignments: 30,
      participation: 10,
    },
    downloadUrl: "#",
  },
]

export default function SyllabusPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Course Syllabus</h1>
            <p className="text-muted-foreground">Access detailed course information and curriculum</p>
          </div>

          {/* Search */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input placeholder="Search by course code, name, or instructor..." />
                </div>
                <Button>Search</Button>
              </div>
            </CardContent>
          </Card>

          {/* Syllabus Cards */}
          <div className="space-y-6">
            {syllabusData.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl flex items-center gap-3">
                        <BookOpen className="h-6 w-6 text-accent" />
                        {course.courseCode} - {course.courseName}
                      </CardTitle>
                      <CardDescription className="mt-2 flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {course.semester}
                        </span>
                        <span>{course.instructor}</span>
                        <Badge variant="secondary">{course.credits} Credits</Badge>
                      </CardDescription>
                    </div>
                    <Button asChild>
                      <a href={course.downloadUrl} download>
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Course Description and Topics */}
                    <div>
                      <h4 className="font-semibold mb-2">Course Description</h4>
                      <p className="text-muted-foreground mb-4">{course.description}</p>

                      <h4 className="font-semibold mb-2">Key Topics</h4>
                      <ul className="space-y-1">
                        {course.topics.map((topic, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Assessment Breakdown */}
                    <div>
                      <h4 className="font-semibold mb-3">Assessment Breakdown</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                          <span className="text-sm">Midterm Exam</span>
                          <Badge variant="outline">{course.assessment.midterm}%</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                          <span className="text-sm">Final Exam</span>
                          <Badge variant="outline">{course.assessment.final}%</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                          <span className="text-sm">Assignments</span>
                          <Badge variant="outline">{course.assessment.assignments}%</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                          <span className="text-sm">Participation</span>
                          <Badge variant="outline">{course.assessment.participation}%</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Stats */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Semester Overview</CardTitle>
              <CardDescription>Your current course load summary</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-accent">{syllabusData.length}</p>
                  <p className="text-sm text-muted-foreground">Total Courses</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-accent">
                    {syllabusData.reduce((sum, course) => sum + course.credits, 0)}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Credits</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-accent">4</p>
                  <p className="text-sm text-muted-foreground">Instructors</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-accent">Fall 2024</p>
                  <p className="text-sm text-muted-foreground">Semester</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
