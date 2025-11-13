import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Calendar, User, Clock, Download, CheckCircle } from "lucide-react"

const courseOutlines = [
  {
    code: "CS401",
    name: "Database Systems",
    instructor: "Dr. Sarah Mitchell",
    credits: 3,
    semester: "Fall 2024",
    description: "Advanced database concepts including design, implementation, and optimization.",
    prerequisites: ["CS201 - Data Structures", "CS202 - Algorithms"],
    learningOutcomes: [
      "Design normalized database schemas",
      "Write complex SQL queries",
      "Understand transaction management",
      "Implement database optimization techniques",
    ],
    modules: [
      {
        week: "1-2",
        title: "Database Fundamentals",
        topics: ["ER Modeling", "Relational Model", "Database Design"],
        status: "completed",
        progress: 100,
      },
      {
        week: "3-4",
        title: "SQL and Query Processing",
        topics: ["Basic SQL", "Advanced Queries", "Joins and Subqueries"],
        status: "completed",
        progress: 100,
      },
      {
        week: "5-6",
        title: "Normalization",
        topics: ["1NF, 2NF, 3NF", "BCNF", "Denormalization"],
        status: "completed",
        progress: 100,
      },
      {
        week: "7-8",
        title: "Transaction Management",
        topics: ["ACID Properties", "Concurrency Control", "Recovery"],
        status: "current",
        progress: 60,
      },
      {
        week: "9-10",
        title: "Query Optimization",
        topics: ["Query Plans", "Indexing", "Performance Tuning"],
        status: "upcoming",
        progress: 0,
      },
      {
        week: "11-12",
        title: "NoSQL Databases",
        topics: ["Document Stores", "Key-Value Stores", "Graph Databases"],
        status: "upcoming",
        progress: 0,
      },
    ],
    assessment: {
      midterm: 30,
      final: 40,
      assignments: 20,
      participation: 10,
    },
  },
  {
    code: "CS302",
    name: "Data Structures & Algorithms",
    instructor: "Prof. Michael Chen",
    credits: 4,
    semester: "Fall 2024",
    description: "Comprehensive study of data structures and algorithmic problem-solving techniques.",
    prerequisites: ["CS101 - Programming Fundamentals"],
    learningOutcomes: [
      "Implement fundamental data structures",
      "Analyze algorithm complexity",
      "Design efficient algorithms",
      "Solve complex programming problems",
    ],
    modules: [
      {
        week: "1-2",
        title: "Arrays and Linked Lists",
        topics: ["Static Arrays", "Dynamic Arrays", "Singly/Doubly Linked Lists"],
        status: "completed",
        progress: 100,
      },
      {
        week: "3-4",
        title: "Stacks and Queues",
        topics: ["Stack Operations", "Queue Variants", "Applications"],
        status: "completed",
        progress: 100,
      },
      {
        week: "5-6",
        title: "Trees",
        topics: ["Binary Trees", "BST", "AVL Trees", "Tree Traversals"],
        status: "completed",
        progress: 100,
      },
      {
        week: "7-8",
        title: "Graphs",
        topics: ["Graph Representation", "BFS/DFS", "Shortest Paths"],
        status: "current",
        progress: 75,
      },
      {
        week: "9-10",
        title: "Sorting Algorithms",
        topics: ["Comparison Sorts", "Non-comparison Sorts", "Analysis"],
        status: "upcoming",
        progress: 0,
      },
      {
        week: "11-12",
        title: "Dynamic Programming",
        topics: ["Memoization", "Tabulation", "Classic Problems"],
        status: "upcoming",
        progress: 0,
      },
    ],
    assessment: {
      midterm: 25,
      final: 35,
      assignments: 25,
      participation: 15,
    },
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "default"
    case "current":
      return "secondary"
    case "upcoming":
      return "outline"
    default:
      return "outline"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return CheckCircle
    case "current":
      return Clock
    case "upcoming":
      return Calendar
    default:
      return Calendar
  }
}

export default function CourseOutlinePage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Course Outline</h1>
            <p className="text-muted-foreground">Detailed course structures and learning modules</p>
          </div>

          {/* Course Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{courseOutlines.length}</div>
                <p className="text-xs text-muted-foreground">This semester</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Credits</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {courseOutlines.reduce((sum, course) => sum + course.credits, 0)}
                </div>
                <p className="text-xs text-muted-foreground">Credit hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {Math.round(
                    courseOutlines.reduce(
                      (sum, course) =>
                        sum +
                        course.modules.reduce((moduleSum, module) => moduleSum + module.progress, 0) /
                          course.modules.length,
                      0,
                    ) / courseOutlines.length,
                  )}
                  %
                </div>
                <p className="text-xs text-muted-foreground">Course completion</p>
              </CardContent>
            </Card>
          </div>

          {/* Course Details */}
          <div className="space-y-8">
            {courseOutlines.map((course) => (
              <Card key={course.code}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">
                        {course.code} - {course.name}
                      </CardTitle>
                      <CardDescription className="mt-2 flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {course.instructor}
                        </span>
                        <Badge variant="outline">{course.credits} Credits</Badge>
                        <span>{course.semester}</span>
                      </CardDescription>
                    </div>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download Outline
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Course Information */}
                    <div className="lg:col-span-2">
                      <div className="space-y-6">
                        {/* Description */}
                        <div>
                          <h4 className="font-semibold mb-2">Course Description</h4>
                          <p className="text-muted-foreground">{course.description}</p>
                        </div>

                        {/* Prerequisites */}
                        <div>
                          <h4 className="font-semibold mb-2">Prerequisites</h4>
                          <div className="flex flex-wrap gap-2">
                            {course.prerequisites.map((prereq, index) => (
                              <Badge key={index} variant="outline">
                                {prereq}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Learning Outcomes */}
                        <div>
                          <h4 className="font-semibold mb-2">Learning Outcomes</h4>
                          <ul className="space-y-1">
                            {course.learningOutcomes.map((outcome, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Course Modules */}
                        <div>
                          <h4 className="font-semibold mb-4">Course Modules</h4>
                          <div className="space-y-4">
                            {course.modules.map((module, index) => {
                              const StatusIcon = getStatusIcon(module.status)
                              return (
                                <div key={index} className="border rounded-lg p-4">
                                  <div className="flex items-start justify-between mb-2">
                                    <div>
                                      <h5 className="font-medium">
                                        Week {module.week}: {module.title}
                                      </h5>
                                      <div className="flex flex-wrap gap-1 mt-1">
                                        {module.topics.map((topic, topicIndex) => (
                                          <Badge key={topicIndex} variant="secondary" className="text-xs">
                                            {topic}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <Badge
                                      variant={getStatusColor(module.status) as any}
                                      className="flex items-center gap-1"
                                    >
                                      <StatusIcon className="h-3 w-3" />
                                      {module.status}
                                    </Badge>
                                  </div>
                                  <div className="mt-3">
                                    <div className="flex justify-between items-center mb-1">
                                      <span className="text-xs text-muted-foreground">Progress</span>
                                      <span className="text-xs text-muted-foreground">{module.progress}%</span>
                                    </div>
                                    <Progress value={module.progress} className="h-2" />
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Assessment Breakdown */}
                    <div>
                      <h4 className="font-semibold mb-4">Assessment Breakdown</h4>
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

                      {/* Course Progress */}
                      <div className="mt-6 p-4 rounded-lg bg-muted/50">
                        <h5 className="font-semibold mb-3">Overall Progress</h5>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent mb-2">
                            {Math.round(
                              course.modules.reduce((sum, module) => sum + module.progress, 0) / course.modules.length,
                            )}
                            %
                          </div>
                          <Progress
                            value={
                              course.modules.reduce((sum, module) => sum + module.progress, 0) / course.modules.length
                            }
                            className="mb-2"
                          />
                          <p className="text-xs text-muted-foreground">Course completion</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
