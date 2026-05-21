import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, ChevronDown } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/careers/hero-section"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        sectionClassName="pb-20 md:pb-32"
        title="Transparent Pricing"
        highlightedWord="Pricing"
        subtitle="Choose the plan that's right for your business, with flexible options to scale as you grow."
      />

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="monthly" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                  <TabsTrigger value="annual">
                    Annual Billing{" "}
                    <span className="ml-1.5 rounded-full bg-secondary/10 px-2 py-0.5 text-xs text-secondary">
                      Save 20%
                    </span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="monthly" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Starter Plan */}
                  <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold">Starter</h3>
                      <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                        <span className="text-4xl font-extrabold tracking-tight">$99</span>
                        <span className="ml-1 text-xl font-semibold">/month</span>
                      </div>
                      <p className="mt-4 text-muted-foreground">
                        Perfect for small teams and startups getting started with digital solutions.
                      </p>
                    </div>
                    <div className="bg-muted/50 px-6 py-4">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Up to 5 team members</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>10GB storage</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Basic analytics</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Standard support</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Core platform features</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6">
                      <Button asChild className="w-full">
                        <Link href="/signup?plan=starter">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Professional Plan */}
                  <div className="rounded-xl border-2 border-secondary bg-card shadow-lg overflow-hidden relative">
                    <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                      Most Popular
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold">Professional</h3>
                      <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                        <span className="text-4xl font-extrabold tracking-tight">$249</span>
                        <span className="ml-1 text-xl font-semibold">/month</span>
                      </div>
                      <p className="mt-4 text-muted-foreground">
                        Ideal for growing businesses with expanding digital needs.
                      </p>
                    </div>
                    <div className="bg-muted/50 px-6 py-4">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Up to 20 team members</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>50GB storage</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Advanced analytics</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Priority support</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>All platform features</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>API access</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Custom integrations</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6">
                      <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
                        <Link href="/signup?plan=professional">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Enterprise Plan */}
                  <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold">Enterprise</h3>
                      <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                        <span className="text-4xl font-extrabold tracking-tight">Custom</span>
                      </div>
                      <p className="mt-4 text-muted-foreground">
                        Tailored solutions for large organizations with complex requirements.
                      </p>
                    </div>
                    <div className="bg-muted/50 px-6 py-4">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Unlimited team members</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Unlimited storage</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Custom analytics</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>24/7 premium support</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Dedicated account manager</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Custom development</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>On-premise deployment options</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>SLA guarantees</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6">
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/company/contact?inquiry=enterprise">
                          Contact Sales
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="annual" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Starter Plan Annual */}
                  <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold">Starter</h3>
                      <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                        <span className="text-4xl font-extrabold tracking-tight">$79</span>
                        <span className="ml-1 text-xl font-semibold">/month</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">Billed annually ($948/year)</p>
                      <p className="mt-4 text-muted-foreground">
                        Perfect for small teams and startups getting started with digital solutions.
                      </p>
                    </div>
                    <div className="bg-muted/50 px-6 py-4">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Up to 5 team members</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>10GB storage</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Basic analytics</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Standard support</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Core platform features</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6">
                      <Button asChild className="w-full">
                        <Link href="/signup?plan=starter-annual">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Professional Plan Annual */}
                  <div className="rounded-xl border-2 border-secondary bg-card shadow-lg overflow-hidden relative">
                    <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                      Most Popular
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold">Professional</h3>
                      <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                        <span className="text-4xl font-extrabold tracking-tight">$199</span>
                        <span className="ml-1 text-xl font-semibold">/month</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">Billed annually ($2,388/year)</p>
                      <p className="mt-4 text-muted-foreground">
                        Ideal for growing businesses with expanding digital needs.
                      </p>
                    </div>
                    <div className="bg-muted/50 px-6 py-4">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Up to 20 team members</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>50GB storage</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Advanced analytics</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Priority support</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>All platform features</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>API access</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Custom integrations</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6">
                      <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
                        <Link href="/signup?plan=professional-annual">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Enterprise Plan Annual */}
                  <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold">Enterprise</h3>
                      <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                        <span className="text-4xl font-extrabold tracking-tight">Custom</span>
                      </div>
                      <p className="mt-4 text-muted-foreground">
                        Tailored solutions for large organizations with complex requirements.
                      </p>
                    </div>
                    <div className="bg-muted/50 px-6 py-4">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Unlimited team members</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Unlimited storage</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Custom analytics</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>24/7 premium support</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Dedicated account manager</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>Custom development</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>On-premise deployment options</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>SLA guarantees</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6">
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/company/contact?inquiry=enterprise">
                          Contact Sales
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Feature <span className="text-gradient">Comparison</span>
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 px-6 text-left font-medium text-muted-foreground">Features</th>
                    <th className="py-4 px-6 text-center font-medium">Starter</th>
                    <th className="py-4 px-6 text-center font-medium">Professional</th>
                    <th className="py-4 px-6 text-center font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Team Members</td>
                    <td className="py-4 px-6 text-center">Up to 5</td>
                    <td className="py-4 px-6 text-center">Up to 20</td>
                    <td className="py-4 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Storage</td>
                    <td className="py-4 px-6 text-center">10GB</td>
                    <td className="py-4 px-6 text-center">50GB</td>
                    <td className="py-4 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Projects</td>
                    <td className="py-4 px-6 text-center">5</td>
                    <td className="py-4 px-6 text-center">Unlimited</td>
                    <td className="py-4 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">API Access</td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Custom Integrations</td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Analytics</td>
                    <td className="py-4 px-6 text-center">Basic</td>
                    <td className="py-4 px-6 text-center">Advanced</td>
                    <td className="py-4 px-6 text-center">Custom</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Support</td>
                    <td className="py-4 px-6 text-center">Standard</td>
                    <td className="py-4 px-6 text-center">Priority</td>
                    <td className="py-4 px-6 text-center">24/7 Premium</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Dedicated Account Manager</td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">SLA Guarantees</td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "Can I change plans later?",
                  answer:
                    "Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be available immediately, and you'll be billed the prorated amount for the remainder of your billing cycle. When downgrading, the changes will take effect at the start of your next billing cycle.",
                },
                {
                  question: "Is there a free trial available?",
                  answer:
                    "Yes, we offer a 14-day free trial on all our plans. No credit card is required to start your trial, and you'll have full access to all features included in your selected plan during the trial period.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit cards (Visa, Mastercard, American Express, Discover), as well as PayPal. For Enterprise plans, we also offer invoicing with net-30 payment terms.",
                },
                {
                  question: "Can I cancel my subscription at any time?",
                  answer:
                    "Yes, you can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to your plan until the end of your current billing cycle, but you won't be charged again.",
                },
                {
                  question: "Do you offer discounts for nonprofits or educational institutions?",
                  answer:
                    "Yes, we offer special pricing for qualified nonprofit organizations and educational institutions. Please contact our sales team for more information about our discount programs.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-card rounded-lg border overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                      <h3 className="text-lg font-semibold flex items-center">{faq.question}</h3>
                      <div className="ml-4">
                        <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                      </div>
                    </summary>
                    <div className="p-6 pt-0 border-t">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button asChild variant="outline">
                <Link href="/company/contact">
                  Contact Our Sales Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden">
            <div className="relative bg-gradient-to-r from-secondary via-accent to-tertiary p-12 text-center">
              <div className="absolute inset-0 bg-opacity-90 bg-grid-white/5"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Choose the plan that's right for your business and start transforming your digital experience today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="bg-white text-secondary hover:bg-white/90">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Schedule a Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

