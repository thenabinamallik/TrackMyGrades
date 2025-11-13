# TrackMyGradeds (Student Academic Tracking System)

## 1. Summary
TrackMyGrades is a web application for students to track academic progress, manage schedules, monitor attendance, and analyze performance. It is built with Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui. Primary user is a student; optional admin manages academic content.

## 2. Goals
- Provide a single dashboard for CGPA/SGPA, credits, and semester performance.
- Offer academic scheduling: timetable, exam schedule, calendar.
- Enable course and assignment tracking with simple forms.
- Visualize performance and attendance analytics.
- Deliver responsive, accessible UI with dark/light theme.
- Support local demo mode and remote API mode via NEXT_PUBLIC_API_URL.

## 3. Non-Goals
- Comprehensive LMS features (grading workflows, plagiarism checks).
- Real-time collaboration.
- Complex role-based permissions beyond Student and Admin.
- Native mobile apps.

## 4. Users and Personas
- Student (primary): Needs quick view of academics, schedules, assignments, attendance, trends, and reminders.
- Admin (optional, future): Curates course outlines, academic calendar, exam schedules, notices.

## 5. Problem & Value
Students struggle to track dispersed academic info. TrackMyGrad consolidates academics, schedules, and analytics into a simple, mobile-friendly dashboard with reminders.

## 6. Scope

### MVP (v1.0)
- Auth: Email/password login/register, session persistence.
- Dashboard: Snapshot of CGPA/SGPA, credit completed, upcoming items.
- Academic Tracking:
  - Courses: list and details (outline/syllabus).
  - Marks and grade inputs per subject.
  - Attendance per subject.
  - Assignments: list, due dates, completion status.
- Scheduling: Timetable, exam schedule, academic calendar.
- Analytics: Basic charts for grades and attendance trends.
- Notifications: In-app reminders for due assignments and exams.
- General Info: Student profile; contacts; news/announcements.
- UI/UX: Responsive, shadcn/ui components, Tailwind, dark/light mode.
- Demo mode (mock data) and Connected mode (REST API).

### Later (v1.1+)
- Exports (CSV/PDF) for grades and attendance.
- Push/web notifications.
- Multi-institution/program support.
- Grievance system, form status tracking, previous exam papers.
- Role: Admin screens for content management.
- Calendar sync (Google/ICS).

## 7. User Stories & Acceptance Criteria

### Authentication
- As a student, I can register/login with email and password.
  - Given valid credentials, when I submit the form, then I am redirected to Dashboard and session persists on refresh.
  - Given invalid credentials, I see clear validation errors with no crash.
- As a student, I can log out from any page.
  - On logout, I return to Login and session is cleared.

### Dashboard
- As a student, I see CGPA/SGPA, completed credits, and upcoming items.
  - Metrics load within 1s after data is available.
  - Empty states show guidance when no data exists.

### Academic Tracking
- Courses
  - I can view a list of my courses with code, name, credits.
  - I can open a course to view outline/syllabus.
- Marks
  - I can add/edit assessments (type, score, weight) per course.
  - CGPA/SGPA auto-updates based on entered/received grades.
- Attendance
  - I can mark attendance per course (present/absent/late).
  - Attendance % per course is visible and charted.
- Assignments
  - I can add assignments with title, course, due date, status, notes.
  - Upcoming assignments appear in Dashboard “Upcoming”.

### Scheduling
- Timetable
  - I can view weekly timetable by day; responsive grid on mobile.
- Exam Schedule
  - I can view exam dates, times, and locations.
- Academic Calendar
  - I can view term start/end, holidays, and important dates.

### Analytics
- I can view charts for grade trends and attendance trends.
  - Charts render with accessible color contrast and legends.
  - Tooltips expose exact values.

### Notifications
- I receive in-app reminders for assignments due within 72/24 hours and exam dates.
  - Dismiss and “snooze” actions available.

### General Info
- Profile
  - I can view/edit basic profile fields (name, email, program, semester).
- Contacts & News
  - I can view faculty/administration contacts and latest announcements.

### Theming and Accessibility
- I can switch between dark and light modes and preference persists.
- All interactive elements are keyboard accessible with visible focus.
- Color contrast meets WCAG AA.

## 8. Functional Requirements

- Client App
  - Next.js App Router pages for dashboard, academic, general info, auth.
  - State via React Context for auth and student data.
  - Forms use React Hook Form + Zod with inline error messages.
  - Charts with Recharts.
- Data Modes
  - Demo Mode: local mock data; persists to localStorage for session only.
  - Connected Mode: uses NEXT_PUBLIC_API_URL, JWT/session cookie, REST endpoints.
- Notifications
  - In-app notification center and toast alerts.
  - Scheduled checks on page load and at 15-min intervals.

## 9. Non-Functional Requirements

- Performance
  - TTI under 3s on 3G for first load; route transition under 1s.
  - Lighthouse Performance ≥ 80 on mid-tier device.
- Reliability
  - Graceful error boundaries; offline/failed requests show retries and fallback UI.
- Security/Privacy
  - HTTPS-only API; tokens stored in httpOnly cookies when available.
  - PII limited to profile; no sensitive academic decisions automated.
- Accessibility
  - WCAG 2.1 AA; semantic HTML, ARIA where needed.
- Compatibility
  - Latest Chrome, Firefox, Safari, Edge; mobile Safari/Chrome.
- i18n (later)
  - Copy externalized to support future localization.

## 10. Data Model (Conceptual)

- Student: id, name, email, program, semester, avatar, preferences.
- Course: id, code, name, credits, semester, outline, faculty.
- Enrollment: studentId, courseId, status, year/term.
- Assessment: id, courseId, type, title, weight, score, maxScore, date.
- Assignment: id, courseId, title, dueDate, status, notes.
- Attendance: id, courseId, date, status (present/absent/late), notes.
- Exam: id, courseId, date, time, location, seat.
- Announcement: id, title, body, createdAt, tags.
- Contact: id, name, role, email, phone, office.

Note: In Demo Mode these live in memory/localStorage; in Connected Mode they are fetched via API.

## 11. API (Connected Mode — illustrative)

- Auth: POST /auth/register, POST /auth/login, POST /auth/logout, GET /auth/me
- Student: GET/PUT /students/me
- Courses: GET /students/me/courses, GET /courses/:id
- Assessments: GET/POST/PUT/DELETE /courses/:id/assessments
- Assignments: GET/POST/PUT/DELETE /students/me/assignments
- Attendance: GET/POST /courses/:id/attendance
- Exams: GET /students/me/exams
- Announcements: GET /announcements
- Contacts: GET /contacts

Headers: Authorization: Bearer <token> or cookie-based session.

## 12. Navigation IA

- Public: Login, Register
- Authenticated:
  - Dashboard
  - Academic
    - Courses
    - Marks & Grades
    - Attendance
    - Assignments
    - Timetable
    - Exams
  - General
    - Profile
    - Calendar
    - News/Announcements
    - Contacts
    - (Later) Exam Papers, Forms, Grievances
  - Settings (Theme, Preferences)

## 13. Tech & Constraints
- Next.js 14 (App Router), React, TypeScript.
- Tailwind CSS v4, shadcn/ui, Lucide icons, Recharts.
- pnpm package manager.
- Optional REST backend configured via NEXT_PUBLIC_API_URL.
- Prefer server components for data-fetch pages; client components for forms/charts.

### Frontend Tech Stack
- Framework/runtime: Next.js 14 (App Router, React 18, React Server Components), Node.js 18+
- Language: TypeScript (strict)
- Styling: Tailwind CSS v4, PostCSS, tailwindcss-animate
- UI components: shadcn/ui (Radix UI primitives)
- Icons: Lucide React
- State management: React Context (AuthContext, StudentContext); localStorage for Demo Mode
- Forms & validation: React Hook Form + Zod
- Charts: Recharts
- Routing & layout: App Router with nested layouts and route groups; protected routes via auth-guard
- Data fetching: fetch/Next.js caching; REST via NEXT_PUBLIC_API_URL; mock data fallback in Demo Mode
- Theming: Dark/Light via CSS variables and theme provider
- Build & dev: SWC compiler; pnpm scripts (dev, build, start, lint)
- Linting/formatting: ESLint, Prettier
- DX/tooling: TypeScript path alias (@/), shadcn/ui CLI
- Performance: Code-splitting and dynamic import for heavy charts; next/image for optimized media
- Accessibility: Radix-based components, keyboard navigation, WCAG AA targets

## 14. Configuration & Environments
- .env.local:
  - NEXT_PUBLIC_API_URL=
  - NEXT_PUBLIC_DEMO_MODE=true|false
- Scripts:
  - pnpm dev, build, start, lint.
- Deployment: Vercel recommended; Node.js runtime 18+.

## 15. Analytics & Metrics

Success metrics:
- D7 retention ≥ 30% (demo mode).
- Average session duration ≥ 3 min.
- Time to find a due assignment ≤ 10s (usability test).
- Error rate on form submissions ≤ 1%.
- Lighthouse Accessibility ≥ 90.

Product analytics events:
- Auth events (login_success, register_success).
- Feature usage (view_dashboard, add_assignment, update_attendance, add_assessment).
- Notification interactions (notif_show, notif_dismiss, notif_snooze).
- Theme_toggle.

## 16. Milestones

- M1 (Week 1–2): Project scaffolding, auth, layout, theming, demo data.
- M2 (Week 3): Dashboard metrics, Courses, Assessments, SGPA/CGPA calc.
- M3 (Week 4): Attendance, Assignments, Timetable.
- M4 (Week 5): Exams, Calendar, Announcements, Contacts.
- M5 (Week 6): Analytics charts, Notifications, Accessibility pass, QA.
- M6 (Week 7): Connected Mode API integration (optional), docs, release.

## 17. Risks & Mitigations
- No backend available: Provide robust Demo Mode with mock data; abstract data layer.
- Data accuracy for CGPA: Validate calculation rules per institution; configurable grading scales.
- Performance regressions: Add Lighthouse checks in CI; lazy-load heavy charts.

## 18. REST API Specification (Required Endpoints)

Auth
- POST /auth/register — body: { name, email, password }
- POST /auth/login — body: { email, password } → { accessToken, refreshToken? }
- POST /auth/logout — clears session/cookies
- POST /auth/refresh — refresh token to new access token
- GET /auth/me — current user profile

Student Profile
- GET /students/me
- PATCH /students/me — body: { name?, phone?, avatarUrl?, preferences? }
- PUT /students/me/avatar — multipart/form-data

Courses & Enrollment
- GET /students/me/courses — enrolled courses
- POST /enrollments — body: { courseId }
- DELETE /enrollments/:id
- GET /courses/:id
- GET /courses/:id/syllabus — returns file metadata
- GET /courses/:id/syllabus/download — file stream

Assessments, Grades, CGPA
- GET /courses/:id/assessments
- POST /courses/:id/assessments — body: { type, title, weight, score?, maxScore, date }
- PUT /assessments/:id
- DELETE /assessments/:id
- GET /students/me/summary — { sgpaByTerm[], cgpa, creditsCompleted }

Assignments
- GET /students/me/assignments?status=&courseId=&dueFrom=&dueTo=
- POST /students/me/assignments — body: { courseId, title, dueDate, status, notes? }
- PUT /assignments/:id
- PATCH /assignments/:id/status — body: { status }
- DELETE /assignments/:id

Attendance
- GET /courses/:id/attendance?from=&to=
- POST /courses/:id/attendance — body: { date, status, notes? }
- PUT /attendance/:id
- DELETE /attendance/:id
- GET /students/me/attendance/summary — per-course %

Timetable, Calendar, Exams
- GET /students/me/timetable?week=YYYY-Www
- GET /students/me/exams
- GET /calendar/events?from=&to= — academic events (holidays, deadlines)

Announcements, News
- GET /announcements?limit=&offset=&tag=
- GET /announcements/:id

Contacts, Departments
- GET /contacts
- GET /departments

Exam Papers
- GET /exam-papers?courseId=&year=&type=midterm|final|sample
- GET /exam-papers/:id
- GET /exam-papers/:id/download — file stream

Forms & Approvals
- GET /forms — user-submitted forms
- POST /forms — body: { type, payload }
- GET /forms/:id
- PATCH /forms/:id — body: { status, reviewerNotes? }

Grievances
- GET /grievances
- POST /grievances — body: { type, subject, description, attachments? }
- GET /grievances/:id
- PATCH /grievances/:id — body: { status, resolution?, updatedBy }

Notifications
- GET /notifications
- PATCH /notifications/:id — body: { read: true, snoozedUntil? }

Search
- GET /search?q= — searches courses, assignments, announcements

Common
- All protected routes require Authorization: Bearer <token> or session cookies.
- Pagination via ?limit=&offset=; sorting via ?sort=field:asc|desc.
- Timestamps in ISO 8601; IDs are UUIDs.
