import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart3, TrendingUp, Award, Target } from "lucide-react"

const subjectMarks = [
  {
    code: "CS401",
    name: "Database Systems",
    credits: 3,
    midterm: { score: 85, total: 100, weight: 30 },
    final: { score: 88, total: 100, weight: 40 },
    assignments: { score: 92, total: 100, weight: 20 },
    participation: { score: 95, total: 100, weight: 10 },
    overall: 88.5,
    grade: "A-",
    gpa: 3.7,
  },
  {
    code: "CS302",
    name: "Data Structures & Algorithms",
    credits: 4,
    midterm: { score: 78, total: 100, weight: 25 },
    final: { score: 82, total: 100, weight: 35 },
    assignments: { score: 89, total: 100, weight: 25 },
    participation: { score: 90, total: 100, weight: 15 },
    overall: 83.25,
    grade: "B+",
    gpa: 3.3,
  },
  {
    code: "CS350",
    name: "Web Development",
    credits: 3,
    midterm: { score: 92, total: 100, weight: 20 },
    final: { score: 90, total: 100, weight: 30 },
    assignments: { score: 95, total: 100, weight: 35 },
    participation: { score: 88, total: 100, weight: 15 },
    overall: 91.85,
    grade: "A",
    gpa: 4.0,
  },
  {
    code: "CS420",
    name: "Machine Learning",
    credits: 3,
    midterm: { score: 80, total: 100, weight: 25 },
    final: { score: 85, total: 100, weight: 35 },
    assignments: { score: 87, total: 100, weight: 30 },
    participation: { score: 92, total: 100, weight: 10 },
    overall: 84.65,
    grade: "B+",
    gpa: 3.3,
  },
  {
    code: "CS380",
    name: "Software Engineering",
    credits: 3,
    midterm: { score: 88, total: 100, weight: 25 },
    final: { score: 86, total: 100, weight: 35 },
    assignments: { score: 91, total: 100, weight: 25 },
    participation: { score: 94, total: 100, weight: 15 },
    overall: 88.15,
    grade: "A-",
    gpa: 3.7,
  },
]

const getGradeColor = (grade: string) => {
  switch (grade) {
    case "A":
      return "bg-green-500"
    case "A-":
      return "bg-green-400"
    case "B+":
      return "bg-blue-500"
    case "B":
      return "bg-blue-400"
    case "B-":
      return "bg-yellow-500"
    default:
      return "bg-gray-500"
  }
}

const calculateSemesterGPA = () => {
  const totalCredits = subjectMarks.reduce((sum, subject) => sum + subject.credits, 0)
  const totalGradePoints = subjectMarks.reduce((sum, subject) => sum + subject.gpa * subject.credits, 0)
  return (totalGradePoints / totalCredits).toFixed(2)
}

export default function MarksPage() {
  const semesterGPA = calculateSemesterGPA()
  const totalCredits = subjectMarks.reduce((sum, subject) => sum + subject.credits, 0)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Assessment Marks</h1>
            <p className="text-muted-foreground">Your academic performance and grades by subject</p>
          </div>

          {/* Semester Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Semester GPA</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">{semesterGPA}</div>
                <p className="text-xs text-muted-foreground">Out of 4.0</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Credits</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalCredits}</div>
                <p className="text-xs text-muted-foreground">This semester</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {(subjectMarks.reduce((sum, subject) => sum + subject.overall, 0) / subjectMarks.length).toFixed(1)}%
                </div>
                <p className="text-xs text-muted-foreground">Across all subjects</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Subjects</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{subjectMarks.length}</div>
                <p className="text-xs text-muted-foreground">Enrolled courses</p>
              </CardContent>
            </Card>
          </div>

          {/* Subject-wise Marks */}
          <div className="space-y-6">
            {subjectMarks.map((subject) => (
              <Card key={subject.code}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        {subject.code} - {subject.name}
                      </CardTitle>
                      <CardDescription>{subject.credits} Credits</CardDescription>
                    </div>
                    <div className="text-right">
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-white font-semibold ${getGradeColor(subject.grade)}`}
                      >
                        {subject.grade}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">GPA: {subject.gpa}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Assessment Breakdown */}
                    <div>
                      <h4 className="font-semibold mb-4">Assessment Breakdown</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm">Midterm Exam ({subject.midterm.weight}%)</span>
                            <Badge variant="outline">
                              {subject.midterm.score}/{subject.midterm.total}
                            </Badge>
                          </div>
                          <Progress value={(subject.midterm.score / subject.midterm.total) * 100} />
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm">Final Exam ({subject.final.weight}%)</span>
                            <Badge variant="outline">
                              {subject.final.score}/{subject.final.total}
                            </Badge>
                          </div>
                          <Progress value={(subject.final.score / subject.final.total) * 100} />
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm">Assignments ({subject.assignments.weight}%)</span>
                            <Badge variant="outline">
                              {subject.assignments.score}/{subject.assignments.total}
                            </Badge>
                          </div>
                          <Progress value={(subject.assignments.score / subject.assignments.total) * 100} />
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm">Participation ({subject.participation.weight}%)</span>
                            <Badge variant="outline">
                              {subject.participation.score}/{subject.participation.total}
                            </Badge>
                          </div>
                          <Progress value={(subject.participation.score / subject.participation.total) * 100} />
                        </div>
                      </div>
                    </div>

                    {/* Overall Performance */}
                    <div>
                      <h4 className="font-semibold mb-4">Overall Performance</h4>
                      <div className="text-center p-6 rounded-lg bg-muted/50">
                        <div className="text-4xl font-bold text-accent mb-2">{subject.overall}%</div>
                        <p className="text-muted-foreground mb-4">Overall Score</p>
                        <Progress value={subject.overall} className="mb-4" />
                        <div className="flex justify-center gap-4 text-sm">
                          <div>
                            <p className="font-medium">Grade</p>
                            <p className="text-muted-foreground">{subject.grade}</p>
                          </div>
                          <div>
                            <p className="font-medium">GPA</p>
                            <p className="text-muted-foreground">{subject.gpa}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Grade Distribution */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Grade Distribution</CardTitle>
              <CardDescription>Your performance across all subjects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {["A", "A-", "B+", "B", "B-"].map((grade) => {
                  const count = subjectMarks.filter((subject) => subject.grade === grade).length
                  return (
                    <div key={grade} className="text-center p-4 rounded-lg bg-muted/50">
                      <div
                        className={`w-8 h-8 rounded-full ${getGradeColor(grade)} mx-auto mb-2 flex items-center justify-center text-white font-bold`}
                      >
                        {grade}
                      </div>
                      <p className="text-2xl font-bold">{count}</p>
                      <p className="text-sm text-muted-foreground">Subjects</p>
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
