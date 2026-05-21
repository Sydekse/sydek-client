"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { HeroSection } from "@/components/careers/hero-section";

export default function PartnerApplyPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    companySize: "",
    partnershipType: "",
    partnershipTier: "",
    businessDescription: "",
    partnershipGoals: "",
    agreeTerms: false,
    agreePrivacy: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    // Show success message or redirect
    alert("Application submitted successfully! We'll be in touch soon.")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        leadingAccessory={
          <Link
            href="/company/partners"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mx-auto lg:mx-0"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Partners
          </Link>
        }
        title="Apply to the Partner Program"
        highlightedWord="Partner Program"
        subtitle="Join our global network of partners and grow your business while delivering exceptional solutions to clients."
      />

      {/* Application Form */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="border shadow-lg">
              <CardHeader>
                <CardTitle>Partner Program Application</CardTitle>
                <CardDescription>
                  Please provide the following information to apply for the Sydek Partner Program.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Company Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Company Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name *</Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="website">Company Website *</Label>
                        <Input
                          id="website"
                          name="website"
                          type="url"
                          value={formData.website}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companySize">Company Size *</Label>
                      <RadioGroup
                        value={formData.companySize}
                        onValueChange={(value) => handleRadioChange("companySize", value)}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1-10" id="size-1" />
                          <Label htmlFor="size-1">1-10 employees</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="11-50" id="size-2" />
                          <Label htmlFor="size-2">11-50 employees</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="51-200" id="size-3" />
                          <Label htmlFor="size-3">51-200 employees</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="201-500" id="size-4" />
                          <Label htmlFor="size-4">201-500 employees</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="501+" id="size-5" />
                          <Label htmlFor="size-5">501+ employees</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Contact Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contactName">Contact Name *</Label>
                        <Input
                          id="contactName"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactEmail">Contact Email *</Label>
                        <Input
                          id="contactEmail"
                          name="contactEmail"
                          type="email"
                          value={formData.contactEmail}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactPhone">Contact Phone</Label>
                      <Input
                        id="contactPhone"
                        name="contactPhone"
                        type="tel"
                        value={formData.contactPhone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Partnership Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Partnership Details</h3>

                    <div className="space-y-2">
                      <Label>Partnership Type *</Label>
                      <RadioGroup
                        value={formData.partnershipType}
                        onValueChange={(value) => handleRadioChange("partnershipType", value)}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="technology" id="type-1" />
                          <Label htmlFor="type-1">Technology Partner</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="service" id="type-2" />
                          <Label htmlFor="type-2">Service Partner</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="reseller" id="type-3" />
                          <Label htmlFor="type-3">Reseller Partner</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label>Partnership Tier *</Label>
                      <RadioGroup
                        value={formData.partnershipTier}
                        onValueChange={(value) => handleRadioChange("partnershipTier", value)}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="silver" id="tier-1" />
                          <Label htmlFor="tier-1">Silver Partner</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="gold" id="tier-2" />
                          <Label htmlFor="tier-2">Gold Partner</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="platinum" id="tier-3" />
                          <Label htmlFor="tier-3">Platinum Partner</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessDescription">Business Description *</Label>
                      <Textarea
                        id="businessDescription"
                        name="businessDescription"
                        value={formData.businessDescription}
                        onChange={handleChange}
                        placeholder="Tell us about your business, products, and services"
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="partnershipGoals">Partnership Goals *</Label>
                      <Textarea
                        id="partnershipGoals"
                        name="partnershipGoals"
                        value={formData.partnershipGoals}
                        onChange={handleChange}
                        placeholder="What do you hope to achieve through this partnership?"
                        rows={4}
                        required
                      />
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Terms and Conditions</h3>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({ ...prev, agreeTerms: checked as boolean }))
                          }
                          className="mt-1"
                        />
                        <Label htmlFor="agreeTerms" className="text-sm font-normal">
                          I agree to the{" "}
                          <Link href="/terms" className="text-secondary hover:text-secondary/80 transition-colors">
                            Partner Program Terms and Conditions
                          </Link>
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="agreePrivacy"
                          name="agreePrivacy"
                          checked={formData.agreePrivacy}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({ ...prev, agreePrivacy: checked as boolean }))
                          }
                          className="mt-1"
                        />
                        <Label htmlFor="agreePrivacy" className="text-sm font-normal">
                          I agree to the{" "}
                          <Link href="/privacy" className="text-secondary hover:text-secondary/80 transition-colors">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90"
                    disabled={!formData.agreeTerms || !formData.agreePrivacy}
                  >
                    Submit Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partner Program Benefits</h2>
            <p className="text-lg text-muted-foreground">
              Join our partner program and unlock a range of exclusive benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Business Growth",
                description: "Expand your business with new revenue streams and access to our global customer base.",
                benefits: [
                  "Revenue sharing opportunities",
                  "Joint marketing initiatives",
                  "Lead sharing and referrals",
                  "Co-branded marketing materials",
                ],
              },
              {
                title: "Technical Resources",
                description: "Access exclusive technical resources to enhance your expertise and service delivery.",
                benefits: [
                  "Priority technical support",
                  "Advanced product training",
                  "Early access to new features",
                  "Developer resources and APIs",
                ],
              },
              {
                title: "Partner Support",
                description: "Receive dedicated support to ensure your success as a Sydek partner.",
                benefits: [
                  "Dedicated partner manager",
                  "Partner portal access",
                  "Regular business reviews",
                  "Partner community access",
                ],
              },
            ].map((category, index) => (
              <Card key={index} className="text-left">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

