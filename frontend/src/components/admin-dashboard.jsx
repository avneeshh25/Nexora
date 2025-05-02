"use client"

import { useState } from "react"
import { SidebarProvider } from "@/components/sidebar-provider"
import DashboardSidebar from "@/components/dashboard-sidebar"
import DashboardContent from "@/components/dashboard-content"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-muted/40">
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <DashboardContent activeTab={activeTab} />
      </div>
    </SidebarProvider>
  )
}
