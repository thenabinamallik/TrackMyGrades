// /lib/data.ts

export interface User {
  registrationNumber: string
  name: string
  email: string
  branch: string
  password: string
}

export interface StudentData {
  id: string
  name: string
  registrationNumber: string
  email: string
  phone: string
  avatar: string
  course: string
  year: string
  semester: string
  cgpa: number
  totalCredits: number
  completedCredits: number
  attendanceRate: number
  achievements: number
  department: string
  advisor: string
  enrollmentDate: string
  expectedGraduation: string
}

// Initial Dummy Users (auth data)
export let USERS: User[] = [
  {
    registrationNumber: "2201214069",
    name: "Priyanka Nayak",
    email: "pn522072@gmail.com",
    branch: "Computer Science",
    password: "cse",
  },
  {
    registrationNumber: "2201214070",
    name: "Amit Kumar",
    email: "amit.kumar@gmail.com",
    branch: "Electronics",
    password: "ece",
  },
  {
    registrationNumber: "2201214071",
    name: "Sneha Das",
    email: "sneha.das@gmail.com",
    branch: "Mechanical",
    password: "mech",
  },
]

// Student Profiles
export let STUDENTS: StudentData[] = [
  {
    id: "STU2024001",
    name: "Priyanka Nayak",
    registrationNumber: "2201214069",
    email: "pn522072@gmail.com",
    phone: "+91 9938099181",
    avatar: "/student-avatar.png",
    course: "Computer Science Engineering",
    year: "4th Year",
    semester: "Fall 2025",
    cgpa: 8.5,
    totalCredits: 80,
    completedCredits: 120,
    attendanceRate: 92,
    achievements: 12,
    department: "Computer Science",
    advisor: "Sangita Biswal",
    enrollmentDate: "August 2022",
    expectedGraduation: "May 2026",
  },
  {
    id: "STU2024002",
    name: "Amit Kumar",
    registrationNumber: "2201214070",
    email: "amit.kumar@gmail.com",
    phone: "+91 9876543210",
    avatar: "/student-avatar.png",
    course: "Electronics Engineering",
    year: "3rd Year",
    semester: "Spring 2025",
    cgpa: 7.9,
    totalCredits: 70,
    completedCredits: 90,
    attendanceRate: 88,
    achievements: 8,
    department: "Electronics",
    advisor: "Dr. Anjali Sahoo",
    enrollmentDate: "August 2022",
    expectedGraduation: "May 2026",
  },
  {
    id: "STU2024003",
    name: "Sneha Das",
    registrationNumber: "2201214071",
    email: "sneha.das@gmail.com",
    phone: "+91 9911223344",
    avatar: "/student-avatar.png",
    course: "Mechanical Engineering",
    year: "2nd Year",
    semester: "Fall 2025",
    cgpa: 8.2,
    totalCredits: 60,
    completedCredits: 60,
    attendanceRate: 90,
    achievements: 5,
    department: "Mechanical",
    advisor: "Prof. R. Pradhan",
    enrollmentDate: "August 2023",
    expectedGraduation: "May 2027",
  },
]

export function addUserAndStudent(user: User) {
  USERS.push(user)
  STUDENTS.push({
    id: `STU${Date.now()}`,
    name: user.name,
    registrationNumber: user.registrationNumber,
    email: user.email,
    phone: "+91 9999999999",
    avatar: "/student-avatar.png",
    course: `${user.branch} Engineering`,
    year: "1st Year",
    semester: "Fall 2025",
    cgpa: 0,
    totalCredits: 0,
    completedCredits: 0,
    attendanceRate: 0,
    achievements: 0,
    department: user.branch,
    advisor: "To Be Assigned",
    enrollmentDate: "August 2025",
    expectedGraduation: "May 2029",
  })
}
