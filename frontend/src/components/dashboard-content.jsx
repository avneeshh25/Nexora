"use client"
import { useSidebar } from "@/components/sidebar-provider"
import { cn } from "@/lib/utils"
import DashboardOverview from "@/components/dashboard-overview"
import ApiUsage from "@/components/api-usage"
import UserManagement from "@/components/user-management"
import ApiKeys from "@/components/api-keys"
import Settings from "@/components/settings"

export default function DashboardContent({ activeTab }) {
  const { isOpen, isMobile } = useSidebar()

  return (
    <main
      className={cn(
        "flex-1 transition-all duration-300",
        isMobile && isOpen ? "ml-0 opacity-50" : "ml-0 opacity-100"
      )}
    >
      <div className="h-full p-4 md:p-6 overflow-y-auto">
        {activeTab === "overview" && <DashboardOverview />}
        {activeTab === "api-usage" && <ApiUsage />}
        {activeTab === "users" && <UserManagement />}
        {activeTab === "api-keys" && <ApiKeys />}
        {activeTab === "settings" && <Settings />}
      </div>
    </main>
  )
}
