"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Mail, CheckCircle } from "lucide-react"
import { HeroSection } from "@/components/careers/hero-section"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password reset request
    console.log("Password reset requested for:", email)
    setIsSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        variant="left"
        contentClassName="max-w-md"
        leadingAccessory={
          <Link href="/auth" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Login
          </Link>
        }
        title="Reset Your Password"
        highlightedWord="Password"
        subtitle="Enter your email address and we'll send you a link to reset your password."
        belowContent={
          <div className="mx-auto w-full max-w-md pb-12">
            {!isSubmitted ? (
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6 space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                    Send Reset Link
                  </Button>
                </form>
              </div>
            ) : (
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="mb-2 text-xl font-semibold">Check Your Email</h2>
                  <p className="mb-6 text-muted-foreground">
                    We've sent a password reset link to <strong>{email}</strong>. Please check your inbox and follow the
                    instructions to reset your password.
                  </p>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full" onClick={() => setIsSubmitted(false)}>
                      Try a different email
                    </Button>
                    <Link href="/auth" className="block text-center text-sm text-secondary hover:underline">
                      Return to login
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        }
      />
    </div>
  )
}

