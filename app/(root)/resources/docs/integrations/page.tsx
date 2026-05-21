import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Code, Server, Globe } from "lucide-react"
import { HeroSection } from "@/components/careers/hero-section"

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        variant="left"
        contentClassName="max-w-4xl"
        leadingAccessory={
          <Link
            href="/resources/docs"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Documentation
          </Link>
        }
        title="Integrations"
        subtitle="Connect Sydek with your favorite tools and services"
      />

      {/* Content */}
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="api">API</TabsTrigger>
                <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
                <TabsTrigger value="partners">Partner Integrations</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <h2>Integration Overview</h2>
                  <p>
                    Sydek offers multiple ways to integrate with your existing tools and workflows. Whether you're
                    looking to connect via our API, set up webhooks for real-time updates, or use one of our pre-built
                    integrations with popular services, we've got you covered.
                  </p>

                  <h3>Integration Methods</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mt-6 mb-8">
                    {[
                      {
                        icon: <Code className="h-8 w-8 text-secondary" />,
                        title: "REST API",
                        description: "Programmatically access and manipulate your Sydek data",
                      },
                      {
                        icon: <Server className="h-8 w-8 text-secondary" />,
                        title: "Webhooks",
                        description: "Receive real-time notifications when events occur in your Sydek account",
                      },
                      {
                        icon: <Globe className="h-8 w-8 text-secondary" />,
                        title: "Partner Integrations",
                        description: "Connect Sydek with popular third-party services",
                      },
                    ].map((method, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <div className="mb-2">{method.icon}</div>
                          <CardTitle>{method.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{method.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <h3>Popular Integrations</h3>
                  <p>
                    Sydek integrates with a wide range of popular tools and services to enhance your workflow and
                    productivity.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 not-prose mt-6">
                    {[
                      { name: "Slack", logo: "/placeholder.svg?height=60&width=60" },
                      { name: "GitHub", logo: "/placeholder.svg?height=60&width=60" },
                      { name: "Jira", logo: "/placeholder.svg?height=60&width=60" },
                      { name: "Salesforce", logo: "/placeholder.svg?height=60&width=60" },
                      { name: "Google Workspace", logo: "/placeholder.svg?height=60&width=60" },
                      { name: "Microsoft 365", logo: "/placeholder.svg?height=60&width=60" },
                      { name: "Zapier", logo: "/placeholder.svg?height=60&width=60" },
                      { name: "Stripe", logo: "/placeholder.svg?height=60&width=60" },
                    ].map((integration, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-shadow"
                      >
                        <Image
                          src={integration.logo || "/placeholder.svg"}
                          alt={integration.name}
                          width={60}
                          height={60}
                          className="mb-2"
                        />
                        <span className="text-sm font-medium">{integration.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="api" className="space-y-6">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <h2>API Documentation</h2>
                  <p>
                    Our RESTful API allows you to programmatically access and manipulate your Sydek data. Use it to
                    build custom integrations, automate workflows, or extend Sydek's functionality.
                  </p>

                  <h3>Authentication</h3>
                  <p>
                    All API requests require authentication using an API key. You can generate an API key in your
                    account settings.
                  </p>

                  <div className="bg-muted p-4 rounded-md">
                    <pre className="text-sm">
                      <code>
                        curl -X GET "https://api.sydek.com/v1/projects" \ -H "Authorization: Bearer YOUR_API_KEY"
                      </code>
                    </pre>
                  </div>

                  <h3>Rate Limiting</h3>
                  <p>
                    API requests are limited to 100 requests per minute per API key. If you exceed this limit, you'll
                    receive a 429 Too Many Requests response.
                  </p>

                  <h3>Common Endpoints</h3>
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th>Endpoint</th>
                        <th>Description</th>
                        <th>Method</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <code>/v1/projects</code>
                        </td>
                        <td>List all projects</td>
                        <td>GET</td>
                      </tr>
                      <tr>
                        <td>
                          <code>/v1/projects/{"{id}"}</code>
                        </td>
                        <td>Get a specific project</td>
                        <td>GET</td>
                      </tr>
                      <tr>
                        <td>
                          <code>/v1/projects</code>
                        </td>
                        <td>Create a new project</td>
                        <td>POST</td>
                      </tr>
                      <tr>
                        <td>
                          <code>/v1/users</code>
                        </td>
                        <td>List all users</td>
                        <td>GET</td>
                      </tr>
                      <tr>
                        <td>
                          <code>/v1/tasks</code>
                        </td>
                        <td>List all tasks</td>
                        <td>GET</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="mt-8">
                    <Button asChild className="bg-secondary hover:bg-secondary/90">
                      <Link href="/resources/docs/developer-guide/api-reference">
                        View Full API Reference
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="webhooks" className="space-y-6">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <h2>Webhooks</h2>
                  <p>
                    Webhooks allow you to receive real-time notifications when events occur in your Sydek account.
                    Instead of polling our API for changes, webhooks push data to your specified endpoint as events
                    happen.
                  </p>

                  <h3>Setting Up Webhooks</h3>
                  <p>To set up a webhook, you'll need to:</p>
                  <ol>
                    <li>Create an endpoint on your server to receive webhook events</li>
                    <li>Configure the webhook in your Sydek account settings</li>
                    <li>Specify which events you want to receive notifications for</li>
                  </ol>

                  <h3>Webhook Payload</h3>
                  <p>
                    When an event occurs, Sydek will send a POST request to your endpoint with a JSON payload containing
                    information about the event.
                  </p>

                  <div className="bg-muted p-4 rounded-md">
                    <pre className="text-sm">
                      <code>{`{
  "event": "project.created",
  "timestamp": "2025-03-09T12:34:56Z",
  "data": {
    "id": "proj_123456",
    "name": "New Project",
    "description": "Project description",
    "created_by": "user_789012",
    "created_at": "2025-03-09T12:34:56Z"
  }
}`}</code>
                    </pre>
                  </div>

                  <h3>Available Events</h3>
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th>Event</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <code>project.created</code>
                        </td>
                        <td>A new project has been created</td>
                      </tr>
                      <tr>
                        <td>
                          <code>project.updated</code>
                        </td>
                        <td>A project has been updated</td>
                      </tr>
                      <tr>
                        <td>
                          <code>project.deleted</code>
                        </td>
                        <td>A project has been deleted</td>
                      </tr>
                      <tr>
                        <td>
                          <code>task.created</code>
                        </td>
                        <td>A new task has been created</td>
                      </tr>
                      <tr>
                        <td>
                          <code>task.updated</code>
                        </td>
                        <td>A task has been updated</td>
                      </tr>
                      <tr>
                        <td>
                          <code>task.completed</code>
                        </td>
                        <td>A task has been marked as completed</td>
                      </tr>
                      <tr>
                        <td>
                          <code>user.invited</code>
                        </td>
                        <td>A new user has been invited</td>
                      </tr>
                      <tr>
                        <td>
                          <code>user.joined</code>
                        </td>
                        <td>A user has joined the workspace</td>
                      </tr>
                    </tbody>
                  </table>

                  <h3>Security Considerations</h3>
                  <p>
                    To ensure that webhook requests are coming from Sydek, we include a signature in the
                    <code>X-Sydek-Signature</code> header. You should verify this signature before processing the
                    webhook.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="partners" className="space-y-6">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <h2>Partner Integrations</h2>
                  <p>
                    Sydek integrates with a wide range of popular tools and services to enhance your workflow and
                    productivity. These pre-built integrations allow you to connect Sydek with your favorite tools with
                    minimal setup.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
                    {[
                      {
                        name: "Slack",
                        logo: "/placeholder.svg?height=80&width=80",
                        description:
                          "Get notifications in Slack when events occur in Sydek, and create tasks directly from Slack messages.",
                        setupLink: "#",
                      },
                      {
                        name: "GitHub",
                        logo: "/placeholder.svg?height=80&width=80",
                        description:
                          "Link GitHub repositories to Sydek projects, sync issues, and automate workflows based on GitHub events.",
                        setupLink: "#",
                      },
                      {
                        name: "Jira",
                        logo: "/placeholder.svg?height=80&width=80",
                        description:
                          "Sync Jira issues with Sydek tasks, update statuses automatically, and streamline project management.",
                        setupLink: "#",
                      },
                      {
                        name: "Salesforce",
                        logo: "/placeholder.svg?height=80&width=80",
                        description:
                          "Connect Sydek with Salesforce to sync customer data, automate tasks, and enhance your CRM workflow.",
                        setupLink: "#",
                      },
                    ].map((integration, index) => (
                      <Card key={index}>
                        <CardHeader className="flex flex-row items-center gap-4">
                          <Image
                            src={integration.logo || "/placeholder.svg"}
                            alt={integration.name}
                            width={80}
                            height={80}
                            className="rounded-md"
                          />
                          <div>
                            <CardTitle>{integration.name}</CardTitle>
                            <CardDescription>Integration</CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{integration.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button asChild variant="outline" className="w-full">
                            <Link href={integration.setupLink}>
                              Setup Guide
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>

                  <h3 className="mt-8">Custom Integrations with Zapier</h3>
                  <p>
                    In addition to our direct integrations, you can use Zapier to connect Sydek with thousands of other
                    apps and services without writing any code.
                  </p>

                  <div className="bg-muted p-6 rounded-lg not-prose flex flex-col md:flex-row items-center gap-6 mt-6">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Zapier"
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                    <div>
                      <h4 className="text-xl font-bold mb-2">Connect Sydek to 3,000+ apps with Zapier</h4>
                      <p className="text-muted-foreground mb-4">
                        Automate your workflows by connecting Sydek to the apps you use every day, without writing a
                        single line of code.
                      </p>
                      <Button asChild className="bg-secondary hover:bg-secondary/90">
                        <Link href="#">
                          Explore Zapier Integrations
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
    </div>
  )
}

