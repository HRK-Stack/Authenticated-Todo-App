
import { LoginForm } from "@/components/forms/login-form"

export function LoginPage() {
  return (
    <div className=" min-h-screen flex justify-center items-center ">
      <div className="flex flex-col gap-4 p-6 md:p-10 shadow-2xl w-xl rounded-2xl">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
