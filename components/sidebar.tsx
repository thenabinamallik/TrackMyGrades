"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useStudent } from "@/lib/student-context";
import { LayoutDashboard, Info, GraduationCap, Menu, X } from "lucide-react";
import { LogoutButton } from "@/components/logout-button";

const navigationItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "General Information",
    href: "/dashboard/general-info",
    icon: Info,
  },
  {
    title: "Academic",
    href: "/dashboard/academic",
    icon: GraduationCap,
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const student = useStudent();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      <div
        className={cn(
          "flex h-screen flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300 z-50",
          isCollapsed ? "w-16" : "w-64",
          "fixed lg:relative",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          className
        )}
      >
        {/* Header */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <h1 className="text-xl font-bold text-sidebar-foreground">
                TrackMyGrad
              </h1>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex h-8 w-8"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {navigationItems.map((item) => {
            // Check if current path matches exactly or is a sub-route of this item
            const isActive =
              pathname === item.href ||
              (pathname.startsWith(item.href + "/") &&
                item.href !== "/dashboard") ||
              (item.href === "/dashboard" && pathname === "/dashboard");

            return (
              <Button
                key={item.title}
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full gap-3 h-10",
                  isCollapsed ? "justify-center px-2" : "justify-start",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
                asChild
                onClick={() => setIsMobileOpen(false)}
              >
                <Link href={item.href}>
                  <item.icon className="h-4 w-4 shrink-0" />
                  {!isCollapsed && <span>{item.title}</span>}
                </Link>
              </Button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg bg-sidebar-accent/10",
              isCollapsed && "justify-center"
            )}
          >
            {student ? (
              <>
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarImage
                    src={student.avatar || "/placeholder.svg"}
                    alt={student.name}
                  />
                  <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground">
                    {student.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {!isCollapsed && (
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-sidebar-foreground truncate">
                      {student.name}
                    </p>
                    <p className="text-xs text-sidebar-foreground/70 truncate">
                      {student.registrationNumber}
                    </p>
                    <p className="text-xs text-sidebar-foreground/70 truncate">
                      {student.email}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <>
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarImage src="/placeholder.svg" alt="Student avatar" />
                  <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground">
                    --
                  </AvatarFallback>
                </Avatar>
                {!isCollapsed && (
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-sidebar-foreground truncate">
                      Loading...
                    </p>
                    <p className="text-xs text-sidebar-foreground/70 truncate">
                      Please wait
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
          {!isCollapsed && (
            <div className="mt-2">
              <LogoutButton />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
