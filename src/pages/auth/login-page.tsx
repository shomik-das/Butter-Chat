import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 flex flex-col p-6 lg:p-8 justify-center items-center">
        {/* Logo */}
        <div className="self-stretch flex items-center gap-2 mb-8 lg:mb-16">
          <div className="w-9 h-9 relative">
            <img
              src="/icons/message.svg"
              alt="Message"
              className="w-full h-full"
            />
          </div>
          <span className="text-primary text-2xl font-medium">ButterChat</span>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-md">
          <Card className="w-full bg-transparent border-0 shadow-none">
            {/* Header */}
            <div className="flex flex-col items-center gap-2.5 mb-6">
              <h1 className="text-primary text-3xl font-bold text-center">
                Login to your account
              </h1>
              <p className="text-gray-500 text-xl text-center">
                Login to your account.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
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
                <div className="flex items-center justify-between">
                  <label className="text-primary font-bold">Password</label>
                  <span className="text-base text-primary font-normal cursor-pointer">
                    Forgot password?
                  </span>
                </div>
                <Input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••••••"
                />
                <p className="text-gray-500 text-sm">
                  Must be at least 8 characters
                </p>
              </div>

              <Button className="rounded-lg">Create Account</Button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-4">
              <Separator className="flex-1" />
              <span className="text-primary text-xl">Or continue with</span>
              <Separator className="flex-1" />
            </div>

            {/* Social buttons */}
            <div className="flex gap-4 mb-4">
              <Button variant="outline" className="flex-1 rounded-xl">
                <img
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  className="h-5 w-5"
                />
              </Button>

              <Button variant="outline" className="flex-1 rounded-xl">
                <img src="/icons/google.svg" alt="Google" className="h-5 w-5" />
              </Button>

              <Button variant="outline" className="flex-1 rounded-xl">
                <img
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="h-5 w-5"
                />
              </Button>
            </div>
            {/* Footer */}
            <p className="text-center text-xl font-normal text-gray-500 mb-4">
              Don’t have an account?{" "}
              <span className="underline cursor-pointer">Sign Up</span>
            </p>

            <Separator className="mb-4" />

            <p className="text-center text-gray-500 text-sm">
              By clicking continue, you agree to our{" "}
              <span className="underline cursor-pointer">Terms</span> and{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>.
            </p>
          </Card>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden lg:flex w-1/2 overflow-hidden rounded-2xl m-4">
        <img
          src="/auth/login.jpg"
          alt="Modern architecture"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
