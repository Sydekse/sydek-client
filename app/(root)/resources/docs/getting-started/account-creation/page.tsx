import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Mail, User, Lock, Shield } from "lucide-react"
import { HeroSection } from "@/components/careers/hero-section"

export default function AccountCreationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        variant="left"
        contentClassName="max-w-4xl"
        leadingAccessory={
          <div className="space-y-4">
            <Link
              href="/resources/docs"
              className="inline-flex items-center text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Documentation
            </Link>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-secondary/10 px-2 py-1 text-xs font-medium text-secondary">
                Getting Started
              </span>
            </div>
          </div>
        }
        title="Account Creation"
        subtitle="Learn how to set up your Sydek account in just a few simple steps to access our full suite of developer and client tools."
      />

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            {/* Sidebar */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="lg:sticky lg:top-32">
                <h3 className="text-lg font-semibold mb-4">On This Page</h3>
                <nav className="space-y-2">
                  <a href="#prerequisites" className="block text-muted-foreground hover:text-secondary">
                    Prerequisites
                  </a>
                  <a href="#signup-process" className="block text-muted-foreground hover:text-secondary">
                    Signup Process
                  </a>
                  <a href="#account-verification" className="block text-muted-foreground hover:text-secondary">
                    Account Verification
                  </a>
                  <a href="#profile-setup" className="block text-muted-foreground hover:text-secondary">
                    Profile Setup
                  </a>
                  <a href="#security-settings" className="block text-muted-foreground hover:text-secondary">
                    Security Settings
                  </a>
                  <a href="#next-steps" className="block text-muted-foreground hover:text-secondary">
                    Next Steps
                  </a>
                </nav>

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Need Help?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our support team is available 24/7 to help you with any questions.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/company/contact">Contact Support</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 order-1 lg:order-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 id="prerequisites" className="scroll-mt-24">
                  Prerequisites
                </h2>
                <p>Before creating your Sydek account, ensure you have the following ready:</p>
                <ul>
                  <li>A valid email address that you regularly check</li>
                  <li>A strong password that meets our security requirements</li>
                  <li>If registering as a business, have your company details available</li>
                </ul>

                <h2 id="signup-process" className="scroll-mt-24 mt-12">
                  Signup Process
                </h2>
                <p>Creating your account is straightforward. Follow these steps to get started:</p>

                <ol>
                  <li>
                    <strong>Visit the Sign-up Page</strong>
                    <p>
                      Navigate to{" "}
                      <Link href="#" className="text-secondary hover:underline">
                        sydek.com/signup
                      </Link>{" "}
                      or click the "Sign Up" button in the top-right corner of the website.
                    </p>
                  </li>
                  <li>
                    <strong>Choose Your Account Type</strong>
                    <p>
                      Select whether you're signing up as a developer, client, or both. This helps us customize your
                      experience.
                    </p>
                  </li>
                  <li>
                    <strong>Enter Your Information</strong>
                    <p>
                      Fill in the required fields, including your name, email, and password. Make sure your password is
                      at least 8 characters long and includes a mix of letters, numbers, and special characters.
                    </p>
                  </li>
                  <li>
                    <strong>Accept Terms and Conditions</strong>
                    <p>
                      Review our terms of service and privacy policy, then check the box to indicate your agreement.
                    </p>
                  </li>
                  <li>
                    <strong>Complete Sign-up</strong>
                    <p>Click the "Create Account" button to submit your information and create your account.</p>
                  </li>
                </ol>

                <div className="bg-muted p-6 rounded-lg my-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded mr-4">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Example Signup Form</h4>
                      <div className="space-y-4 max-w-md">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-muted-foreground">First Name</label>
                            <div className="mt-1 p-2 border rounded bg-background">John</div>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                            <div className="mt-1 p-2 border rounded bg-background">Doe</div>
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Email</label>
                          <div className="mt-1 p-2 border rounded flex items-center bg-background">
                            <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                            john.doe@example.com
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Password</label>
                          <div className="mt-1 p-2 border rounded flex items-center bg-background">
                            <Lock className="h-4 w-4 text-muted-foreground mr-2" />
                            ••••••••••••
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 id="account-verification" className="scroll-mt-24 mt-12">
                  Account Verification
                </h2>
                <p>
                  After submitting your registration, we'll send a verification email to the address you provided. This
                  helps us confirm your identity and secure your account.
                </p>

                <ol>
                  <li>
                    <strong>Check Your Email</strong>
                    <p>
                      Look for an email from Sydek with the subject "Verify Your Sydek Account" in your inbox. If you
                      don't see it, check your spam or junk folder.
                    </p>
                  </li>
                  <li>
                    <strong>Click the Verification Link</strong>
                    <p>
                      Open the email and click the "Verify My Account" button or link inside. This will redirect you to
                      Sydek and confirm your email.
                    </p>
                  </li>
                  <li>
                    <strong>Confirmation</strong>
                    <p>
                      Once verified, you'll see a confirmation message and be redirected to complete your profile setup.
                    </p>
                  </li>
                </ol>

                <div className="bg-secondary/10 p-6 rounded-lg my-8">
                  <div className="flex">
                    <Shield className="h-6 w-6 text-secondary mr-4" />
                    <div>
                      <h4 className="text-lg font-medium mb-2">Security Tip</h4>
                      <p className="text-muted-foreground">
                        Verification links are valid for 24 hours. If your link expires, you can request a new one from
                        the login page by clicking "Resend Verification Email."
                      </p>
                    </div>
                  </div>
                </div>

                <h2 id="profile-setup" className="scroll-mt-24 mt-12">
                  Profile Setup
                </h2>
                <p>After verifying your email, you'll be prompted to set up your profile:</p>

                <ol>
                  <li>
                    <strong>Complete Your Personal Information</strong>
                    <p>
                      Add your job title, company (if applicable), and phone number to help us provide better support.
                    </p>
                  </li>
                  <li>
                    <strong>Upload a Profile Picture</strong>
                    <p>
                      Add a profile image to personalize your account. This helps team members identify you more easily
                      when collaborating.
                    </p>
                  </li>
                  <li>
                    <strong>Set Communication Preferences</strong>
                    <p>Choose which types of notifications you'd like to receive and how (email, in-app, SMS).</p>
                  </li>
                </ol>

                <h2 id="security-settings" className="scroll-mt-24 mt-12">
                  Security Settings
                </h2>
                <p>We recommend configuring these security settings as soon as your account is created:</p>

                <ul>
                  <li>
                    <strong>Enable Two-Factor Authentication</strong>
                    <p>
                      Add an extra layer of security by enabling 2FA in your account settings. We support both
                      authenticator apps and SMS verification.
                    </p>
                  </li>
                  <li>
                    <strong>Recovery Options</strong>
                    <p>
                      Set up account recovery options, including a backup email or phone number, to ensure you can
                      regain access if needed.
                    </p>
                  </li>
                </ul>

                <h2 id="next-steps" className="scroll-mt-24 mt-12">
                  Next Steps
                </h2>
                <p>Now that your account is created and secured, you're ready to start using Sydek:</p>

                <ul>
                  <li>
                    <strong>Explore the Platform</strong>
                    <p>
                      Take a quick tour of the dashboard to familiarize yourself with the interface and available
                      features.
                    </p>
                  </li>
                  <li>
                    <strong>Review the Documentation</strong>
                    <p>
                      Check out our{" "}
                      <Link
                        href="/resources/docs/getting-started/platform-overview"
                        className="text-secondary hover:underline"
                      >
                        Platform Overview
                      </Link>{" "}
                      to understand what you can do with Sydek.
                    </p>
                  </li>
                  <li>
                    <strong>Create Your First Project</strong>
                    <p>
                      Start using Sydek by creating a new project or joining an existing one you've been invited to.
                    </p>
                  </li>
                </ul>

                <div className="flex items-center justify-between mt-12 pt-6 border-t">
                  <Button variant="outline" asChild>
                    <Link href="/resources/docs">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Documentation
                    </Link>
                  </Button>
                  <Button asChild className="bg-secondary hover:bg-secondary/90">
                    <Link href="/resources/docs/getting-started/platform-overview">
                      Next: Platform Overview
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Resources</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/resources/docs/getting-started/platform-overview" className="group">
                <div className="bg-background rounded-xl border overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">
                      Platform Overview
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Learn about the key features and capabilities of the Sydek platform.
                    </p>
                    <span className="text-secondary text-sm font-medium">Read More</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/docs/getting-started/quick-start-guide" className="group">
                <div className="bg-background rounded-xl border overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">
                      Quick Start Guide
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Get up and running with your first Sydek project in less than 10 minutes.
                    </p>
                    <span className="text-secondary text-sm font-medium">Read More</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/docs/developer-guide/best-practices" className="group">
                <div className="bg-background rounded-xl border overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">
                      Security Best Practices
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Discover how to keep your account and projects secure while using Sydek.
                    </p>
                    <span className="text-secondary text-sm font-medium">Read More</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

