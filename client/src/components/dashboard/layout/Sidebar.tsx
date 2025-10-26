import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"
import { Menu, X } from "lucide-react"

export function Sidebar({ onTabChange }: { onTabChange: (tab: string) => void }) {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <>
      {/* Floating hamburger button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-40 bg-background border rounded-md shadow-sm md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Sidebar drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-background border-r shadow-lg z-50 flex flex-col justify-between p-5 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation buttons */}
        <nav className="space-y-3">
          {["all", "create", "update", "delete"].map((tab) => (
            <Button
              key={tab}
              variant="ghost"
              className="w-full justify-start capitalize text-base"
              onClick={() => {
                onTabChange(tab)
                setIsOpen(false)
              }}
            >
              {tab === "all" ? "All Tasks" : `${tab} Task`}
            </Button>
          ))}
        </nav>

        {/* Footer logout */}
        <div className="border-t pt-4 mt-6">
          <Button
            variant="destructive"
            className="w-full"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </aside>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Desktop Sidebar*/}
      <aside className="hidden md:flex flex-col justify-evenly w-60 border-r bg-background p-5 h-screen">
        <nav className="space-y-9 h-[70%] flex flex-col justify-center ">
          {["all", "create", "update", "delete"].map((tab) => (
            <Button
              key={tab}
              variant="ghost"
              className="w-full justify-start capitalize text-base"
              onClick={() => onTabChange(tab)}
            >
              {tab === "all" ? "All Tasks" : `${tab} Task`}
            </Button>
          ))}
        </nav>
        <div className="border-t pt-4 mt-6">
          <Button variant="destructive" className="w-full" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </aside>
    </>
  )
}
