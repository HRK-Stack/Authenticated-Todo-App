import { useAuth } from "@/context/AuthContext"

export function Topbar() {
  const { user } = useAuth()

  return (
    <header className="sticky top-0 w-full bg-background border-b shadow-sm p-4 text-center z-20">
      <h1 className="text-lg md:text-xl font-semibold">
        Welcome, <span className="text-primary">{user?.name || "User"}</span> 👋
      </h1>
    </header>
  )
}
