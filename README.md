# 🎓 TrackMyGrad - Student Academic Tracking System

A comprehensive web application built with Next.js for students to track their academic progress, manage schedules, monitor attendance, and analyze performance metrics in real-time.

## 🌟 Features

- **📊 Academic Progress Tracking**: Monitor CGPA, credits, and semester performance
- **📅 Smart Scheduling**: Access timetables, exam schedules, and academic calendars
- **📚 Course Management**: View course outlines, syllabus, and assignment tracking
- **📈 Performance Analytics**: Detailed insights into academic performance and attendance
- **🔔 Smart Notifications**: Never miss assignments or important deadlines
- **📱 Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **🎨 Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **🌙 Dark/Light Mode**: Theme switching capability

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Animations**: [Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📋 Prerequisites

Before setting up the project, ensure you have the following installed on your system:

### 1. Node.js Installation

#### For Linux (Ubuntu/Debian):
```bash
# Update package index
sudo apt update

# Install Node.js (Latest LTS version recommended)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

#### For macOS:
```bash
# Using Homebrew
brew install node

# Or download from official website: https://nodejs.org/
```

#### For Windows:
1. Download the installer from [nodejs.org](https://nodejs.org/)
2. Run the installer and follow the setup wizard
3. Verify installation in Command Prompt:
   ```cmd
   node --version
   npm --version
   ```

### 2. pnpm Installation

After installing Node.js, install pnpm globally:

```bash
# Install pnpm globally
npm install -g pnpm

# Verify installation
pnpm --version
```

Alternative installation methods:
```bash
# Using npm
npm install -g pnpm

# Using Homebrew (macOS)
brew install pnpm

# Using PowerShell (Windows)
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Pravat006/student-academic-tracking-ui.git
cd student-academic-tracking
```

### 2. Install Dependencies

```bash
# Install all project dependencies
pnpm install
```

This will install all the dependencies listed in `package.json` including:
- Next.js and React
- Tailwind CSS and PostCSS
- shadcn/ui components
- TypeScript and type definitions
- Development tools and utilities

### 3. Environment Setup

Create a `.env.local` file in the root directory (if needed for environment variables):

```bash
# Create environment file
touch .env.local
```

Add any required environment variables:
```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=https://your-api-url.com
# DATABASE_URL=your-database-connection-string
```

### 4. Run the Development Server

```bash
# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will auto-reload when you make changes to the code.

## 📁 Project Structure

```
student-academic-tracking/
├── app/                          # Next.js App Router pages
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── dashboard/               # Dashboard pages
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── academic/            # Academic tracking
│   │   ├── general-info/        # General information
│   │   └── home/                # Dashboard home
│   ├── login/                   # Authentication pages
│   └── register/
├── components/                   # Reusable components
│   ├── ui/                      # shadcn/ui components
│   ├── auth-guard.tsx           # Authentication guard
│   ├── dashboard.tsx            # Dashboard component
│   ├── sidebar.tsx              # Navigation sidebar
│   └── ...
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions and contexts
│   ├── auth-context.tsx         # Authentication context
│   ├── student-context.tsx      # Student data context
│   └── utils.ts                 # Utility functions
├── public/                      # Static assets
├── styles/                      # Additional styles
├── components.json              # shadcn/ui configuration
├── next.config.mjs              # Next.js configuration
├── package.json                 # Project dependencies
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## 🧩 Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Package management
pnpm install      # Install dependencies
pnpm add <pkg>    # Add new dependency
pnpm remove <pkg> # Remove dependency
```

## 🎨 UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) components. To add new components:

```bash
# Add a new shadcn/ui component
npx shadcn-ui@latest add <component-name>

# Example: Add a new button component
npx shadcn-ui@latest add button
```

Available components in this project:
- Accordion, Alert Dialog, Avatar, Badge
- Button, Card, Calendar, Chart
- Dialog, Dropdown Menu, Form, Input
- Navigation Menu, Popover, Select, Table
- Tabs, Toast, Tooltip, and more...

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS v4 with custom configuration. Styles are defined in:
- `app/globals.css` - Global styles and CSS variables
- `postcss.config.mjs` - PostCSS configuration

### Next.js
Configuration is handled in `next.config.mjs`:
- ESLint and TypeScript build error handling
- Image optimization settings
- Custom build configurations

### TypeScript
TypeScript configuration in `tsconfig.json` with:
- Path mapping for imports (`@/` prefix)
- Strict type checking
- Modern JavaScript features

## 📱 Features Overview

### Dashboard
- **Academic Overview**: SGPA tracking, credit progression
- **Quick Actions**: Access to frequently used features
- **Performance Charts**: Visual representation of academic data

### Academic Tracking
- **Marks Management**: Track marks across subjects
- **Attendance Monitoring**: Subject-wise attendance tracking
- **Assignment Tracking**: Manage assignment submissions
- **Timetable**: View class schedules
- **Course Outlines**: Access syllabus and course materials

### General Information
- **Student Profile**: Personal information management
- **Academic Calendar**: Important dates and events
- **News & Updates**: Academic announcements
- **Contact Information**: Faculty and administrative contacts
- **Exam Papers**: Access to previous year papers
- **Form Status**: Track application statuses
- **Grievance System**: Submit and track complaints

## 🚀 Deployment

### Build for Production

```bash
# Create optimized production build
pnpm build

# Start production server
pnpm start
```

### Deploy to Vercel (Recommended)

1. Push your code to a Git repository
2. Connect your repository to [Vercel](https://vercel.com/)
3. Vercel will automatically deploy your application

### Deploy to Other Platforms

The application can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Heroku
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use meaningful component and variable names
- Implement proper error handling

### Component Structure
- Keep components small and focused
- Use custom hooks for shared logic
- Implement proper props interfaces
- Follow React best practices

### Styling
- Use Tailwind CSS utility classes
- Leverage shadcn/ui components
- Maintain consistent spacing and colors
- Ensure responsive design

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**:
   ```bash
   # Kill process on port 3000
   npx kill-port 3000
   # Or use a different port
   pnpm dev -p 3001
   ```

2. **Module not found errors**:
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   ```

3. **Build errors**:
   ```bash
   # Clear Next.js cache
   rm -rf .next
   pnpm build
   ```

### Getting Help

- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [shadcn/ui documentation](https://ui.shadcn.com/)
- Search existing [GitHub issues](https://github.com/Pravat006/student-academic-tracking-ui/issues)
- Create a new issue if you find a bug

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Pravat Kumar Sahoo**
- GitHub: [@Pravat006](https://github.com/Pravat006)
- Repository: [student-academic-tracking-ui](https://github.com/Pravat006/student-academic-tracking-ui)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [shadcn](https://twitter.com/shadcn) for the beautiful UI components
- [Vercel](https://vercel.com/) for hosting and deployment platform
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

⭐ If you find this project helpful, please consider giving it a star on GitHub!