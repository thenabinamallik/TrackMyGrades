import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, User, Building, GraduationCap, Heart, Wrench } from "lucide-react"

const contactSections = [
  {
    title: "Academic Departments",
    icon: GraduationCap,
    contacts: [
      {
        department: "Computer Science",
        head: "Subashis Misra",
        phone: "+91 8093708641",
        email: "subashismisra09@gmail.com",
        office: "cse-217",
        hours: "Mon-Fri 9:00 AM - 5:00 PM",
      },
      {
        department: "CSE",
        head: "Shibani Panigrahi",
        phone: "+91 6372657564",
        email: "shibanipanigrahi06@gmail.com",
        office: "cse, Room 201",
        hours: "Mon-Fri 8:30 AM - 4:30 PM",
      },
      {
        department: "MBA",
        head: "Sudhir sir",
        phone: "+91 9937161181 ",
        email: "sudhir21@gmail.com",
        office: "MBA Block, Room 301",
        hours: "Mon-Fri 9:00 AM - 5:00 PM",
      },
    ],
  },
  {
    title: "Administrative Offices",
    icon: Building,
    contacts: [
      {
        department: "Registrar Office",
        head: "Ms. Patricia Adams",
        phone: "+1 (555) 123-4570",
        email: "registrar@university.edu",
        office: "Admin Block, Room 101",
        hours: "Mon-Fri 8:00 AM - 6:00 PM",
      },
      {
        department: "Financial Aid",
        head: "Mr. James Wilson",
        phone: "+1 (555) 123-4571",
        email: "finaid@university.edu",
        office: "Admin Block, Room 201",
        hours: "Mon-Fri 9:00 AM - 5:00 PM",
      },
      {
        department: "Student Affairs",
        head: "Dr. Lisa Thompson",
        phone: "+1 (555) 123-4572",
        email: "studentaffairs@university.edu",
        office: "Student Center, Room 301",
        hours: "Mon-Fri 8:30 AM - 5:30 PM",
      },
    ],
  },
  {
    title: "Student Services",
    icon: Heart,
    contacts: [
      {
        department: "Health Services",
        head: "Dr. Robert Davis",
        phone: "+1 (555) 123-4573",
        email: "health@university.edu",
        office: "Health Center",
        hours: "Mon-Fri 8:00 AM - 6:00 PM, Sat 9:00 AM - 2:00 PM",
      },
      {
        department: "Counseling Center",
        head: "Dr. Maria Garcia",
        phone: "+1 (555) 123-4574",
        email: "counseling@university.edu",
        office: "Student Center, Room 201",
        hours: "Mon-Fri 9:00 AM - 5:00 PM",
      },
      {
        department: "Career Services",
        head: "Ms. Jennifer Brown",
        phone: "+1 (555) 123-4575",
        email: "careers@university.edu",
        office: "Career Center",
        hours: "Mon-Fri 8:30 AM - 5:00 PM",
      },
    ],
  },
  {
    title: "Campus Services",
    icon: Wrench,
    contacts: [
      {
        department: "IT Help Desk",
        head: "Mr. David Lee",
        phone: "+1 (555) 123-4576",
        email: "ithelp@university.edu",
        office: "IT Block, Room 101",
        hours: "Mon-Fri 7:00 AM - 10:00 PM, Sat-Sun 10:00 AM - 6:00 PM",
      },
      {
        department: "Library Services",
        head: "Ms. Susan White",
        phone: "+1 (555) 123-4577",
        email: "library@university.edu",
        office: "Main Library, Information Desk",
        hours: "Mon-Thu 7:00 AM - 12:00 AM, Fri 7:00 AM - 8:00 PM, Sat-Sun 10:00 AM - 10:00 PM",
      },
      {
        department: "Campus Security",
        head: "Chief Mark Johnson",
        phone: "+1 (555) 123-4578",
        email: "security@university.edu",
        office: "Security Office, Main Gate",
        hours: "24/7",
      },
    ],
  },
]

const emergencyContacts = [
  {
    service: "Campus Emergency",
    phone: "+1 (555) 911-0000",
    description: "24/7 emergency response",
  },
  {
    service: "Health Emergency",
    phone: "+1 (555) 911-0001",
    description: "Medical emergencies on campus",
  },
  {
    service: "Security Emergency",
    phone: "+1 (555) 911-0002",
    description: "Security incidents and safety concerns",
  },
]

export default function ContactPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Contact Details</h1>
            <p className="text-muted-foreground">Important contact information for departments and services</p>
          </div>

          {/* Emergency Contacts */}
          <Card className="mb-8 border-red-200 bg-red-50/50">
            <CardHeader>
              <CardTitle className="text-red-700 flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Emergency Contacts
              </CardTitle>
              <CardDescription className="text-red-600">Important numbers for emergency situations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="p-4 rounded-lg bg-white border border-red-200">
                    <h3 className="font-semibold text-red-700 mb-1">{contact.service}</h3>
                    <p className="text-xl font-bold text-red-600 mb-1">{contact.phone}</p>
                    <p className="text-sm text-red-600">{contact.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Sections */}
          <div className="space-y-8">
            {contactSections.map((section, sectionIndex) => (
              <Card key={sectionIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <section.icon className="h-5 w-5" />
                    {section.title}
                  </CardTitle>
                  <CardDescription>Contact information for {section.title.toLowerCase()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {section.contacts.map((contact, contactIndex) => (
                      <div key={contactIndex} className="p-4 rounded-lg border bg-muted/20">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold text-lg">{contact.department}</h3>
                          <Badge variant="outline">{section.title.split(" ")[0]}</Badge>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{contact.head}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <a href={`tel:${contact.phone}`} className="text-accent hover:underline">
                              {contact.phone}
                            </a>
                          </div>

                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <a href={`mailto:${contact.email}`} className="text-accent hover:underline">
                              {contact.email}
                            </a>
                          </div>

                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{contact.office}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{contact.hours}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* General Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>General University Information</CardTitle>
              <CardDescription>Main contact details and campus information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Main Campus</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>123 University Avenue, College Town, CT 06511</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>+1 (555) 123-4500</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>info@university.edu</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Campus Hours</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>6:00 AM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>8:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>10:00 AM - 9:00 PM</span>
                    </div>
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
