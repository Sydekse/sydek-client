"use client"

import type React from "react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2, FileText, Loader2, Upload, X } from "lucide-react"
import { submitApplication, uploadResume } from "@/lib/careers-api"
import { cn } from "@/lib/utils"
import type { ApplicationFormProps, JobApplicationFormData } from "./types"

type ResumeUploadState = "idle" | "uploading" | "ready" | "error"

export function ApplicationForm({ jobTitle, jobSlug }: ApplicationFormProps) {
  const resumeInputRef = useRef<HTMLInputElement>(null)
  const lastResumeFileRef = useRef<File | null>(null)
  const [resumeFileName, setResumeFileName] = useState<string | null>(null)
  const [resumeUrl, setResumeUrl] = useState<string | null>(null)
  const [resumeUploadState, setResumeUploadState] = useState<ResumeUploadState>("idle")
  const [resumeUploadError, setResumeUploadError] = useState("")
  const [formData, setFormData] = useState<JobApplicationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    portfolio: "",
    experience: "",
    coverLetter: "",
    salary: "",
    startDate: "",
    workAuth: [],
    terms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, value: string) => {
    setFormData((prev) => {
      const currentValues = prev[name as keyof typeof prev] as string[]
      if (Array.isArray(currentValues)) {
        if (currentValues.includes(value)) {
          return { ...prev, [name]: currentValues.filter((v) => v !== value) }
        } else {
          return { ...prev, [name]: [...currentValues, value] }
        }
      }
      return prev
    })
  }

  const handleTermsChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, terms: checked }))
  }

  const clearResume = () => {
    lastResumeFileRef.current = null
    setResumeFileName(null)
    setResumeUrl(null)
    setResumeUploadState("idle")
    setResumeUploadError("")
    if (resumeInputRef.current) {
      resumeInputRef.current.value = ""
    }
  }

  const startResumeUpload = async (file: File) => {
    lastResumeFileRef.current = file
    setResumeFileName(file.name)
    setResumeUrl(null)
    setResumeUploadError("")
    setResumeUploadState("uploading")
    try {
      const url = await uploadResume(file)
      setResumeUrl(url)
      setResumeUploadState("ready")
    } catch (err) {
      setResumeUploadState("error")
      setResumeUploadError(err instanceof Error ? err.message : "Failed to upload resume")
    }
  }

  const handleResumeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      void startResumeUpload(file)
    }
  }

  const handleResumeDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const file = e.dataTransfer.files?.[0]
    if (file) {
      void startResumeUpload(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError("")
    setIsSubmitted(false)
    setIsSubmitting(true)
    try {
      await submitApplication(jobSlug, formData, resumeUrl ?? undefined)
      setIsSubmitted(true)
      clearResume()
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        portfolio: "",
        experience: "",
        coverLetter: "",
        salary: "",
        startDate: "",
        workAuth: [],
        terms: false,
      })
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Failed to submit application")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-background rounded-xl border shadow-lg p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Application Form</h2>
      <form className="space-y-8" onSubmit={handleSubmit}>
        {isSubmitted && (
          <div className="rounded-md border border-green-500/40 bg-green-500/10 p-3 text-sm text-green-700">
            Application submitted successfully for {jobTitle}. Our team will review it shortly.
          </div>
        )}
        {submitError && (
          <div className="rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
            {submitError}
          </div>
        )}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Personal Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Current Location</Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, State/Province, Country"
              required
            />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Professional Information</h3>

          <div className="space-y-2">
            <Label htmlFor="resume">Resume/CV</Label>
            <input
              ref={resumeInputRef}
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx,.rtf,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="sr-only"
              onChange={handleResumeInputChange}
              disabled={resumeUploadState === "uploading"}
            />
            <div
              role="region"
              aria-busy={resumeUploadState === "uploading"}
              aria-live="polite"
              aria-label="Resume upload"
              className={cn(
                "border-2 border-dashed rounded-lg p-4 sm:p-6 transition-colors",
                resumeUploadState === "uploading" && "border-secondary/60 bg-muted/20",
                resumeUploadState === "ready" && "border-green-500/40 bg-green-500/5",
                resumeUploadState === "error" && "border-destructive/50 bg-destructive/5",
                resumeUploadState === "idle" && "border-muted-foreground/25"
              )}
              onDragOver={(e) => {
                if (resumeUploadState === "uploading") return
                e.preventDefault()
                e.stopPropagation()
              }}
              onDrop={(e) => {
                e.preventDefault()
                e.stopPropagation()
                if (resumeUploadState === "uploading") return
                handleResumeDrop(e)
              }}
            >
              {resumeUploadState === "uploading" && (
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 py-2">
                  <div className="flex justify-center sm:justify-end">
                    <Loader2 className="h-10 w-10 text-secondary animate-spin shrink-0" aria-hidden />
                  </div>
                  <div className="text-center sm:text-left min-w-0">
                    <p className="text-sm font-medium text-foreground">Uploading your resume</p>
                    <p className="text-xs text-muted-foreground truncate mt-1">{resumeFileName}</p>
                    <p className="text-xs text-muted-foreground mt-1">Stay on this page until upload finishes.</p>
                  </div>
                </div>
              )}

              {resumeUploadState === "ready" && resumeFileName && (
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-start gap-3 min-w-0 justify-center sm:justify-start">
                    <CheckCircle2
                      className="h-10 w-10 text-green-600 dark:text-green-500 shrink-0 mt-0.5"
                      aria-hidden
                    />
                    <div className="text-center sm:text-left min-w-0">
                      <p className="text-sm font-medium text-foreground">Resume uploaded</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-1 justify-center sm:justify-start truncate">
                        <FileText className="h-3.5 w-3.5 shrink-0" aria-hidden />
                        <span className="truncate">{resumeFileName}</span>
                      </p>
                      <p className="text-xs text-green-700 dark:text-green-400 mt-1">
                        It will be attached when you submit the application.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 justify-center sm:justify-end shrink-0">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto"
                      onClick={() => resumeInputRef.current?.click()}
                    >
                      Replace file
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="w-full sm:w-auto text-muted-foreground"
                      onClick={clearResume}
                    >
                      <X className="h-4 w-4 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
              )}

              {resumeUploadState === "error" && (
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="text-center sm:text-left min-w-0">
                    <p className="text-sm font-medium text-destructive">Upload failed</p>
                    <p className="text-xs text-muted-foreground mt-1 break-words">{resumeUploadError}</p>
                    {resumeFileName && (
                      <p className="text-xs text-muted-foreground mt-1 truncate">{resumeFileName}</p>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 justify-center sm:justify-end shrink-0">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto"
                      onClick={() => {
                        if (lastResumeFileRef.current) {
                          void startResumeUpload(lastResumeFileRef.current)
                        }
                      }}
                    >
                      Try again
                    </Button>
                    <Button type="button" variant="ghost" size="sm" className="w-full sm:w-auto" onClick={clearResume}>
                      Choose different file
                    </Button>
                  </div>
                </div>
              )}

              {resumeUploadState === "idle" && (
                <>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-center sm:text-left">
                    <div className="flex justify-center sm:justify-start mb-3 sm:mb-0">
                      <div className="rounded-full bg-muted p-3">
                        <Upload className="h-8 w-8 text-muted-foreground" aria-hidden />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 space-y-2">
                      <p className="text-sm text-foreground">
                        Drag and drop your resume here, or{" "}
                        <button
                          type="button"
                          className="text-secondary font-medium underline underline-offset-2 hover:text-secondary/90"
                          onClick={() => resumeInputRef.current?.click()}
                        >
                          browse
                        </button>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Accepted formats: PDF, DOC, DOCX, RTF — max 5MB
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center sm:justify-start">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto"
                      onClick={() => resumeInputRef.current?.click()}
                    >
                      Browse files
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
            <Input
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/username"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="portfolio">Portfolio/Website (Optional)</Label>
            <Input
              id="portfolio"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              placeholder="https://yourwebsite.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Years of Relevant Experience</Label>
            <Input
              id="experience"
              name="experience"
              type="number"
              min="0"
              value={formData.experience}
              onChange={handleChange}
              placeholder="5"
              required
            />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Additional Information</h3>

          <div className="space-y-2">
            <Label htmlFor="coverLetter">Cover Letter</Label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              className="min-h-[150px]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="salary">Salary Expectations (Optional)</Label>
            <Input
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="e.g., $80,000 - $100,000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="startDate">Earliest Start Date</Label>
            <Input
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Work Authorization</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {[
                "I am authorized to work in the country of the job location",
                "I require visa sponsorship",
                "I am open to relocation",
                "I prefer remote work",
              ].map((option, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Checkbox
                    id={`option-${index}`}
                    checked={formData.workAuth.includes(option)}
                    onCheckedChange={(checked) => {
                      if (typeof checked === "boolean" && checked) {
                        handleCheckboxChange("workAuth", option)
                      } else if (checked === false) {
                        setFormData((prev) => ({
                          ...prev,
                          workAuth: prev.workAuth.filter((item) => item !== option),
                        }))
                      }
                    }}
                  />
                  <label
                    htmlFor={`option-${index}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={formData.terms}
            onCheckedChange={(checked) => {
              if (typeof checked === "boolean") {
                handleTermsChange(checked)
              }
            }}
            required
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the privacy policy and terms of application
            </label>
            <p className="text-sm text-muted-foreground">
              We'll handle your information according to our privacy policy.
            </p>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-secondary hover:bg-secondary/90"
          disabled={isSubmitting || resumeUploadState === "uploading"}
        >
          {resumeUploadState === "uploading"
            ? "Wait for resume upload..."
            : isSubmitting
              ? "Submitting..."
              : "Submit Application"}
        </Button>
      </form>
    </div>
  )
}