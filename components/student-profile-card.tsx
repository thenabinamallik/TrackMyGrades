"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useStudent } from "@/lib/student-context"
import { GraduationCap, Mail, Phone, Calendar, Award, TrendingUp } from "lucide-react"

interface StudentProfileCardProps {
  variant?: "compact" | "detailed"
  className?: string
}

export function StudentProfileCard({ variant = "detailed", className }: StudentProfileCardProps) {
  const student = useStudent()

  if (variant === "compact") {
    return (
      <Card className={className}>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
              <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground">
                {student.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold truncate">{student.name}</h3>
              <p className="text-sm text-muted-foreground truncate">{student.registrationNumber}</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {student.year}
                </Badge>
                <span className="text-xs text-muted-foreground">CGPA: {student.cgpa}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          Student Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Basic Info */}
        <div className="flex items-start gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
            <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground text-lg">
              {student.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <div>
              <h3 className="text-xl font-semibold">{student.name}</h3>
              <p className="text-muted-foreground">{student.registrationNumber}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">{student.course}</Badge>
              <Badge variant="secondary">{student.year}</Badge>
              <Badge variant="outline">{student.semester}</Badge>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{student.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{student.phone}</span>
          </div>
        </div>

        {/* Academic Progress */}
        <div className="space-y-4">
          <h4 className="font-medium flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Academic Progress
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>CGPA</span>
                <span className="font-medium">{student.cgpa}/4.0</span>
              </div>
              <Progress value={(student.cgpa / 4.0) * 100} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Credits</span>
                <span className="font-medium">
                  {student.completedCredits}/{student.totalCredits}
                </span>
              </div>
              <Progress value={(student.completedCredits / student.totalCredits) * 100} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Attendance</span>
                <span className="font-medium">{student.attendanceRate}%</span>
              </div>
              <Progress value={student.attendanceRate} />
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{student.achievements} Achievements</span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>Enrolled: {student.enrollmentDate}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
              <span>Expected Graduation: {student.expectedGraduation}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm">
              <span className="text-muted-foreground">Department: </span>
              <span className="font-medium">{student.department}</span>
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">Academic Advisor: </span>
              <span className="font-medium">{student.advisor}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
