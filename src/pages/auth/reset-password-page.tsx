import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password for:", email);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* ✅ LOGO — ALWAYS TOP LEFT */}
      <div className="absolute top-8 left-8 flex items-center gap-2">
        <img src="/icons/message.svg" alt="ButterChat" className="w-9 h-9" />
        <span className="text-primary text-2xl font-medium">ButterChat</span>
      </div>

      {/* LEFT SIDE */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <Card className="bg-transparent border-0 shadow-none">
            {/* Header */}
            <div className="flex flex-col items-center gap-2 mb-6">
              <h1 className="text-primary text-3xl font-bold">
                Reset Password
              </h1>
              <p className="text-muted-foreground text-center">
                Enter your email and we'll send you instructions to reset your
                password
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-primary font-bold">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@xyzcorp.com"
                />
              </div>

              <Button className="rounded-lg">Send password reset link</Button>
            </form>

            {/* 🔙 Back to login */}
            <Link to="/login" className="mt-4 flex items-center justify-center gap-2 text-xl text-muted-foreground hover:text-primary cursor-pointer">
              <ArrowLeft size={16} />
              Back to login
            </Link>
          </Card>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden lg:flex w-1/2 p-4">
        <img
          src="/auth/reset.jpg"
          alt="Reset"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
