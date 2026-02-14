import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, GraduationCap, Edit } from "lucide-react"

const studentProfile = {
  name: "Alex Johnson",
  registrationNumber: "STU2024001",
  email: "alex.johnson@university.edu",
  phone: "+1 (555) 123-4567",
  address: "123 University Ave, College Town, CT 06511",
  dateOfBirth: "1998-05-15",
  program: "Bachelor of Science in Computer Science",
  semester: "7th Semester",
  year: "Senior Year",
  advisor: "Dr. Sarah Mitchell",
  emergencyContact: "Jane Johnson - +1 (555) 987-6543",
  bio: "Passionate computer science student with interests in web development, artificial intelligence, and software engineering. Active member of the Programming Club and volunteer tutor for junior students.",
}

export default function ProfilePage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Your Profile</h1>
            <p className="text-muted-foreground">Manage your personal information and academic details</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Overview</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src="/student-avatar.png" alt={studentProfile.name} />
                  <AvatarFallback className="text-lg">
                    {studentProfile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-1">{studentProfile.name}</h3>
                <p className="text-muted-foreground mb-2">{studentProfile.registrationNumber}</p>
                <Badge variant="secondary" className="mb-4">
                  {studentProfile.semester}
                </Badge>
                <Button className="w-full">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Personal Information */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
                <CardDescription>Your personal details and contact information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" defaultValue={studentProfile.name} />
                  </div>
                  <div>
                    <Label htmlFor="regNumber">Registration Number</Label>
                    <Input id="regNumber" defaultValue={studentProfile.registrationNumber} disabled />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue={studentProfile.email} />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue={studentProfile.phone} />
                  </div>
                  <div>
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" defaultValue={studentProfile.dateOfBirth} />
                  </div>
                  <div>
                    <Label htmlFor="emergency">Emergency Contact</Label>
                    <Input id="emergency" defaultValue={studentProfile.emergencyContact} />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" defaultValue={studentProfile.address} />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" defaultValue={studentProfile.bio} rows={3} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Academic Information */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Academic Information
                </CardTitle>
                <CardDescription>Your academic program and advisor details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="program">Program</Label>
                    <Input id="program" defaultValue={studentProfile.program} disabled />
                  </div>
                  <div>
                    <Label htmlFor="year">Academic Year</Label>
                    <Input id="year" defaultValue={studentProfile.year} disabled />
                  </div>
                  <div>
                    <Label htmlFor="advisor">Academic Advisor</Label>
                    <Input id="advisor" defaultValue={studentProfile.advisor} disabled />
                  </div>
                </div>
                <div className="flex justify-end mt-6 gap-3">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
