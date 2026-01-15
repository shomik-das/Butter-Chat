import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    subdomain: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Signup data:", formData)
  }

  return (
    <div className="min-h-screen bg-background flex">

      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col p-6 lg:p-8">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src="/icons/message.svg"
            alt="ButterChat"
            className="w-9 h-9"
          />
          <span className="text-primary text-2xl font-medium">
            ButterChat
          </span>
        </div>

        {/* CENTERED FORM */}
        <div className="flex-1 p-16 flex items-center justify-center">
          <div className="w-full max-w-md">
            <Card className="bg-transparent border-0 shadow-none">

              {/* Header */}
              <div className="flex flex-col items-center gap-2 mb-6">
                <h1 className="text-primary text-3xl font-bold text-center">
                  Create your account
                </h1>
                <p className="text-muted-foreground text-xl text-center">
                  Fill in the form below to create your account.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 mb-6"
              >
                {/* Company Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-primary font-bold">
                    Company Name
                  </label>
                  <Input
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="XYZ Corporation"
                  />
                </div>

                {/* Subdomain */}
                <div className="flex flex-col gap-1">
                  <label className="text-primary font-bold">
                    Subdomain
                  </label>
                  <div className="flex overflow-hidden rounded-lg border border-border">
                    <Input
                      name="subdomain"
                      value={formData.subdomain}
                      onChange={handleChange}
                      placeholder="xyzcorp"
                      className="rounded-r-none border-0"
                    />
                    <Button
                      type="button"
                      className="rounded-l-none text-sm border-l"
                    >
                      .butterchat.io
                    </Button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-primary font-bold">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="user@xyzcorp.com"
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1">
                  <label className="text-primary font-bold">
                    Password
                  </label>
                  <Input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••••••"
                  />
                  <p className="text-muted-foreground text-sm">
                    Must be at least 8 characters
                  </p>
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col gap-1">
                  <label className="text-primary font-bold">
                    Confirm Password
                  </label>
                  <Input
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••••••"
                  />
                </div>

                <Button className="rounded-lg">
                  Create Account
                </Button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-4">
                <Separator className="flex-1" />
                <span className="text-md text-muted-foreground">
                  Or continue with
                </span>
                <Separator className="flex-1" />
              </div>

              {/* Social buttons */}
              <div className="flex gap-4 mb-4">
                <Button variant="outline" className="flex-1 rounded-xl">
                  <img src="/icons/facebook.svg" alt="Facebook" className="h-5 w-5" />
                </Button>
                <Button variant="outline" className="flex-1 rounded-xl">
                  <img src="/icons/google.svg" alt="Google" className="h-5 w-5" />
                </Button>
                <Button variant="outline" className="flex-1 rounded-xl">
                  <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
                </Button>
              </div>

              {/* Footer */}
              <p className="text-center text-muted-foreground mb-4">
                Already have an account?{" "}
                <Link to="/login" className="underline">
                  Sign in
                </Link>
              </p>

              <Separator className="mb-4" />

              <p className="text-center text-muted-foreground text-sm">
                By clicking continue, you agree to our{" "}
                <span className="underline cursor-pointer">Terms</span> and{" "}
                <span className="underline cursor-pointer">
                  Privacy Policy
                </span>.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden lg:flex w-1/2 p-4">
        <img
          src="/auth/signup.jpg"
          alt="Signup"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  )
}
