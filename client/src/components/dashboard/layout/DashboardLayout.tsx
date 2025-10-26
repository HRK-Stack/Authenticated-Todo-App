import { useState } from "react"
import { Sidebar } from "./Sidebar"
import { Topbar } from "./Topbar"

export function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("all")

  // Placeholder content area for now
  const renderContent = () => {
    switch (activeTab) {
      case "create":
        return <p className="text-lg font-medium">Create Task Section</p>
      case "update":
        return <p className="text-lg font-medium">Update Task Section</p>
      case "delete":
        return <p className="text-lg font-medium">Delete Task Section</p>
      default:
        return <p className="text-lg font-medium">All Tasks Section</p>
    }
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar (collapsible) */}
      <Sidebar onTabChange={setActiveTab} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col transition-all duration-300">
        <Topbar />
        <main className="flex-1 p-6 bg-muted/40 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}
