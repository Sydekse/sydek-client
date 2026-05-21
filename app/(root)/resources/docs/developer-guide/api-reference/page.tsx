import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Code, Copy, ExternalLink, Lock, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { HeroSection } from "@/components/careers/hero-section"

// Sample API endpoints for display
const endpoints = [
  {
    method: "GET",
    path: "/api/v1/projects",
    description: "Retrieve a list of all projects accessible to the authenticated user",
    authentication: "Required",
    parameters: [
      { name: "page", type: "integer", required: false, description: "Page number for pagination (default: 1)" },
      {
        name: "limit",
        type: "integer",
        required: false,
        description: "Number of results per page (default: 20, max: 100)",
      },
      {
        name: "status",
        type: "string",
        required: false,
        description: "Filter by project status (active, archived, all)",
      },
    ],
    responses: [
      {
        code: "200",
        description: "Success",
        example:
          '{\n  "data": [\n    {\n      "id": "proj_123abc",\n      "name": "Mobile App Redesign",\n      "description": "Revamp of iOS and Android applications",\n      "status": "active",\n      "created_at": "2025-01-15T10:30:45Z"\n    }\n  ],\n  "meta": {\n    "total": 42,\n    "page": 1,\n    "pages": 3\n  }\n}',
      },
      {
        code: "401",
        description: "Unauthorized",
        example: '{\n  "error": "unauthorized",\n  "message": "Authentication required"\n}',
      },
      {
        code: "403",
        description: "Forbidden",
        example: '{\n  "error": "forbidden",\n  "message": "Insufficient permissions to access projects"\n}',
      },
    ],
  },
  {
    method: "POST",
    path: "/api/v1/projects",
    description: "Create a new project",
    authentication: "Required",
    parameters: [],
    requestBody:
      '{\n  "name": "New Product Launch",\n  "description": "Campaign for Q3 product launch",\n  "team_id": "team_456def",\n  "template_id": "tpl_789ghi" // Optional\n}',
    responses: [
      {
        code: "201",
        description: "Created",
        example:
          '{\n  "data": {\n    "id": "proj_987xyz",\n    "name": "New Product Launch",\n    "description": "Campaign for Q3 product launch",\n    "status": "active",\n    "created_at": "2025-03-10T14:25:30Z"\n  }\n}',
      },
      {
        code: "400",
        description: "Bad Request",
        example:
          '{\n  "error": "validation_error",\n  "message": "Validation failed",\n  "details": {\n    "name": ["is required", "must be between 3 and 50 characters"]\n  }\n}',
      },
      {
        code: "401",
        description: "Unauthorized",
        example: '{\n  "error": "unauthorized",\n  "message": "Authentication required"\n}',
      },
    ],
  },
  {
    method: "GET",
    path: "/api/v1/projects/{project_id}",
    description: "Retrieve a specific project by ID",
    authentication: "Required",
    parameters: [
      { name: "project_id", type: "string", required: true, description: "Unique identifier of the project" },
    ],
    responses: [
      {
        code: "200",
        description: "Success",
        example:
          '{\n  "data": {\n    "id": "proj_123abc",\n    "name": "Mobile App Redesign",\n    "description": "Revamp of iOS and Android applications",\n    "status": "active",\n    "created_at": "2025-01-15T10:30:45Z",\n    "updated_at": "2025-02-20T09:15:30Z",\n    "team": {\n      "id": "team_456def",\n      "name": "Product Design"\n    }\n  }\n}',
      },
      {
        code: "404",
        description: "Not Found",
        example: '{\n  "error": "not_found",\n  "message": "Project not found"\n}',
      },
    ],
  },
]

export default function APIReferencePage() {
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
                Developer Guide
              </span>
            </div>
          </div>
        }
        title="API Reference"
        subtitle={
          <>
            <p className="text-xl md:text-xl">
              Comprehensive documentation for the Sydek API, including endpoints, parameters, and response formats.
            </p>
            <div className="relative mt-6 max-w-xl">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-muted-foreground" />
              <Input placeholder="Search API endpoints..." className="pl-10" />
            </div>
          </>
        }
      />

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            {/* Sidebar */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="lg:sticky lg:top-32">
                <h3 className="text-lg font-semibold mb-4">API Resources</h3>
                <nav className="space-y-1">
                  <a href="#introduction" className="block py-2 px-3 bg-secondary/10 text-secondary rounded-md">
                    Introduction
                  </a>
                  <a href="#authentication" className="block py-2 px-3 text-muted-foreground hover:bg-muted rounded-md">
                    Authentication
                  </a>
                  <a href="#rate-limits" className="block py-2 px-3 text-muted-foreground hover:bg-muted rounded-md">
                    Rate Limits
                  </a>
                  <a href="#pagination" className="block py-2 px-3 text-muted-foreground hover:bg-muted rounded-md">
                    Pagination
                  </a>
                  <a href="#errors" className="block py-2 px-3 text-muted-foreground hover:bg-muted rounded-md">
                    Error Handling
                  </a>

                  <h4 className="font-medium text-muted-foreground mt-6 mb-2 px-3">Endpoints</h4>

                  <a href="#projects" className="block py-2 px-3 text-muted-foreground hover:bg-muted rounded-md">
                    Projects
                  </a>
                  <a href="#tasks" className="block py-2 px-3 text-muted-foreground hover:bg-muted rounded-md">
                    Tasks
                  </a>
                  <a href="#users" className="block py-2 px-3 text-muted-foreground hover:bg-muted rounded-md">
                    Users
                  </a>
                  <a href="#teams" className="block py-2 px-3 text-muted-foreground hover:bg-muted rounded-md">
                    Teams
                  </a>
                  <a href="#files" className="block py-2 px-3 text-muted-foreground hover:bg-muted rounded-md">
                    Files
                  </a>
                  <a href="#webhooks" className="block py-2 px-3 text-muted-foreground hover:bg-muted rounded-md">
                    Webhooks
                  </a>
                </nav>

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">SDK Libraries</h4>
                  <p className="text-sm text-muted-foreground mb-4">Use our official SDKs for easier integration</p>
                  <div className="space-y-2">
                    <a href="#" className="block text-sm text-secondary hover:underline flex items-center">
                      JavaScript/TypeScript
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                    <a href="#" className="block text-sm text-secondary hover:underline flex items-center">
                      Python
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                    <a href="#" className="block text-sm text-secondary hover:underline flex items-center">
                      Ruby
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                    <a href="#" className="block text-sm text-secondary hover:underline flex items-center">
                      PHP
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 order-1 lg:order-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 id="introduction" className="scroll-mt-24">
                  Introduction
                </h2>
                <p>
                  The Sydek API is a RESTful interface that allows developers to interact with the Sydek platform
                  programmatically. Our API provides comprehensive access to resources such as projects, tasks, users,
                  teams, and files, enabling you to build custom integrations and automate workflows.
                </p>

                <div className="bg-muted p-4 rounded-md my-8">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <Code className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Base URL</h4>
                      <code className="bg-background p-2 rounded block">https://api.sydek.com/v1</code>
                      <p className="text-sm text-muted-foreground mt-2">
                        All API endpoints are relative to this base URL. We currently support API version 1 (v1).
                      </p>
                    </div>
                  </div>
                </div>

                <h2 id="authentication" className="scroll-mt-24 mt-12">
                  Authentication
                </h2>
                <p>
                  To access the Sydek API, you need to authenticate your requests using API keys. Each request must
                  include your API key in the Authorization header.
                </p>

                <div className="bg-muted p-4 rounded-md my-4">
                  <h4 className="font-medium mb-2">API Key Authentication</h4>
                  <div className="bg-background p-3 rounded">
                    <code>Authorization: Bearer your_api_key_here</code>
                  </div>
                </div>

                <p>
                  You can create and manage API keys in your account settings. We recommend using different API keys for
                  different applications or environments (development, staging, production).
                </p>

                <div className="flex bg-secondary/10 p-4 rounded-md my-4">
                  <Lock className="h-6 w-6 text-secondary flex-shrink-0 mr-3" />
                  <div>
                    <h4 className="font-medium mb-1">Security Note</h4>
                    <p className="text-sm">
                      Never expose your API keys in client-side code or public repositories. Always store them securely
                      and transmit them over HTTPS only.
                    </p>
                  </div>
                </div>

                <h2 id="rate-limits" className="scroll-mt-24 mt-12">
                  Rate Limits
                </h2>
                <p>
                  To ensure the stability of our services, the Sydek API implements rate limiting. The current limits
                  are:
                </p>

                <ul>
                  <li>
                    <strong>Free accounts:</strong> 60 requests per minute
                  </li>
                  <li>
                    <strong>Professional accounts:</strong> 120 requests per minute
                  </li>
                  <li>
                    <strong>Enterprise accounts:</strong> 300 requests per minute
                  </li>
                </ul>

                <p>
                  When you exceed the rate limit, the API will return a 429 Too Many Requests response. The response
                  headers will include information about when you can retry (Retry-After header).
                </p>

                <div className="bg-muted p-4 rounded-md my-4">
                  <h4 className="font-medium mb-2">Rate Limit Headers</h4>
                  <div className="bg-background p-3 rounded">
                    <code>X-RateLimit-Limit: 120</code>
                    <br />
                    <code>X-RateLimit-Remaining: 45</code>
                    <br />
                    <code>X-RateLimit-Reset: 1628801927</code>
                  </div>
                </div>

                <h2 id="pagination" className="scroll-mt-24 mt-12">
                  Pagination
                </h2>
                <p>
                  List endpoints in the API support pagination to allow you to navigate through large collections of
                  resources. You can control pagination using the <code>page</code> and <code>limit</code> query
                  parameters.
                </p>

                <div className="bg-muted p-4 rounded-md my-4">
                  <h4 className="font-medium mb-2">Example Request</h4>
                  <div className="bg-background p-3 rounded">
                    <code>GET /api/v1/projects?page=2&limit=50</code>
                  </div>
                </div>

                <p>
                  Paginated responses include metadata that provides information about the current page, total number of
                  items, and available pages:
                </p>

                <div className="bg-background p-3 rounded my-4">
                  <pre>
                    <code className="text-sm">{`{
  "data": [...], // Array of items for the current page
  "meta": {
    "total": 327,    // Total number of items
    "page": 2,       // Current page
    "pages": 7,      // Total number of pages
    "limit": 50      // Items per page
  }
}`}</code>
                  </pre>
                </div>

                <h2 id="errors" className="scroll-mt-24 mt-12">
                  Error Handling
                </h2>
                <p>
                  The API uses conventional HTTP response codes to indicate the success or failure of a request. In
                  general:
                </p>

                <ul>
                  <li>Codes in the 2xx range indicate success.</li>
                  <li>
                    Codes in the 4xx range indicate an error that was caused by the provided information (e.g., a
                    required parameter was missing).
                  </li>
                  <li>Codes in the 5xx range indicate an error with our servers.</li>
                </ul>

                <div className="bg-background p-3 rounded my-4">
                  <pre>
                    <code className="text-sm">{`{
  "error": "validation_error",
  "message": "Invalid input parameters",
  "details": {
    "name": ["is required", "must be between 3 and 100 characters"],
    "start_date": ["must be a valid date in ISO 8601 format"]
  }
}`}</code>
                  </pre>
                </div>

                <h2 id="projects" className="scroll-mt-24 mt-12">
                  Project Endpoints
                </h2>
                <p>These endpoints allow you to manage projects within the Sydek platform.</p>

                {endpoints.map((endpoint, index) => (
                  <div key={index} className="border rounded-lg mt-8 overflow-hidden">
                    <div className="flex items-center p-4 border-b bg-muted">
                      <span
                        className={`px-2 py-1 rounded text-xs font-bold mr-3 ${
                          endpoint.method === "GET"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                            : endpoint.method === "POST"
                              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                              : endpoint.method === "PUT"
                                ? "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
                                : endpoint.method === "DELETE"
                                  ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                                  : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        }`}
                      >
                        {endpoint.method}
                      </span>
                      <code className="font-semibold">{endpoint.path}</code>
                      <div className="ml-auto flex items-center space-x-2">
                        <button className="p-1 text-muted-foreground hover:text-foreground" title="Copy Path">
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="mb-3">{endpoint.description}</p>
                      <div className="mb-4">
                        <span className="text-sm font-medium block mb-2">Authentication:</span>
                        <span
                          className={`text-sm px-2 py-1 rounded ${
                            endpoint.authentication === "Required"
                              ? "bg-secondary/10 text-secondary"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {endpoint.authentication}
                        </span>
                      </div>

                      {endpoint.parameters.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">Parameters:</h4>
                          <div className="border rounded-md overflow-hidden">
                            <table className="min-w-full divide-y">
                              <thead className="bg-muted">
                                <tr>
                                  <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Name
                                  </th>
                                  <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Type
                                  </th>
                                  <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Required
                                  </th>
                                  <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Description
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="bg-background divide-y">
                                {endpoint.parameters.map((param, paramIndex) => (
                                  <tr key={paramIndex}>
                                    <td className="px-4 py-2 text-sm">
                                      <code>{param.name}</code>
                                    </td>
                                    <td className="px-4 py-2 text-sm text-muted-foreground">{param.type}</td>
                                    <td className="px-4 py-2 text-sm">
                                      {param.required ? (
                                        <span className="text-secondary">Yes</span>
                                      ) : (
                                        <span className="text-muted-foreground">No</span>
                                      )}
                                    </td>
                                    <td className="px-4 py-2 text-sm">{param.description}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {endpoint.requestBody && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">Request Body:</h4>
                          <div className="bg-background p-3 rounded-md overflow-auto">
                            <pre>
                              <code className="text-sm">{endpoint.requestBody}</code>
                            </pre>
                          </div>
                        </div>
                      )}

                      <div>
                        <h4 className="text-sm font-medium mb-2">Responses:</h4>
                        <div className="space-y-3">
                          {endpoint.responses.map((response, responseIndex) => (
                            <div key={responseIndex} className="border rounded-md overflow-hidden">
                              <div className="px-4 py-2 bg-muted border-b">
                                <span
                                  className={`inline-block px-2 py-1 text-xs font-medium rounded mr-2 ${
                                    response.code.startsWith("2")
                                      ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                                      : response.code.startsWith("4")
                                        ? "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
                                        : response.code.startsWith("5")
                                          ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                                          : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                                  }`}
                                >
                                  {response.code}
                                </span>
                                <span className="text-sm">{response.description}</span>
                              </div>
                              <div className="bg-background p-3 overflow-auto">
                                <pre>
                                  <code className="text-sm">{response.example}</code>
                                </pre>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex items-center justify-between mt-12 pt-6 border-t">
                  <Button variant="outline" asChild>
                    <Link href="/resources/docs">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Documentation
                    </Link>
                  </Button>
                  <Button asChild className="bg-secondary hover:bg-secondary/90">
                    <Link href="/resources/docs/developer-guide/sdk-documentation">
                      Next: SDK Documentation
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
              <Link href="/resources/docs/developer-guide/sdk-documentation" className="group">
                <div className="bg-background rounded-xl border overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">
                      SDK Documentation
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Learn how to use our official client libraries for various programming languages.
                    </p>
                    <span className="text-secondary text-sm font-medium">Read More</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/docs/developer-guide/best-practices" className="group">
                <div className="bg-background rounded-xl border overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">
                      API Best Practices
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Recommendations for optimizing your API usage and integration strategies.
                    </p>
                    <span className="text-secondary text-sm font-medium">Read More</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/docs/client-guide/project-management" className="group">
                <div className="bg-background rounded-xl border overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">
                      Project Management
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Understanding project structure and management for API integrations.
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

