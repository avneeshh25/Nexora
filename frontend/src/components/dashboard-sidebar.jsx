"use client"
import { useSidebar } from "@/components/sidebar-provider"
import { cn } from "@/lib/utils"
import { BarChart3, Users, Settings, Home, Key, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardSidebar({ activeTab, setActiveTab }) {
  const { isOpen, toggle, isMobile } = useSidebar()

  const navItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "api-usage", label: "API Usage", icon: BarChart3 },
    { id: "users", label: "User Management", icon: Users },
    { id: "api-keys", label: "API Keys", icon: Key },
    { id: "settings", label: "Settings", icon: Settings }
  ]

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={toggle} />
      )}

      <aside
        className={cn(
          "bg-sidebar h-screen flex flex-col border-r transition-all duration-300 z-50",
          isOpen ? "w-64" : "w-0",
          isMobile ? "fixed" : "relative"
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <h1
            className={cn(
              "font-bold text-xl transition-opacity",
              isOpen ? "opacity-100" : "opacity-0"
            )}
          >
            Admin Dashboard
          </h1>
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggle}>
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navItems.map(item => (
              <li key={item.id}>
                <Button
                  variant={activeTab === item.id ? "secondary" : "ghost"}
                  className={cn("w-full justify-start", !isOpen && "hidden")}
                  onClick={() => setActiveTab(item.id)}
                >
                  <item.icon className="mr-2 h-5 w-5" />
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t">
          <div className={cn("flex items-center gap-3", !isOpen && "hidden")}>
            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-muted-foreground">admin@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile toggle button */}
      {isMobile && !isOpen && (
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg"
          onClick={toggle}
        >
          <Menu className="h-5 w-5" />
        </Button>
      )}
    </>
  )
}
