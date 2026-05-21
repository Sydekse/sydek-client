import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Check, Clock, Users, FileText, Share2 } from "lucide-react"
import { HeroSection } from "@/components/careers/hero-section"

export default function ProjectManagementPage() {
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
                Client Guide
              </span>
            </div>
          </div>
        }
        title="Project Management"
        subtitle="Learn how to efficiently create, organize, and manage your projects on the Sydek platform."
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
                  <a href="#creating-projects" className="block text-muted-foreground hover:text-secondary">
                    Creating Projects
                  </a>
                  <a href="#project-structure" className="block text-muted-foreground hover:text-secondary">
                    Project Structure
                  </a>
                  <a href="#task-management" className="block text-muted-foreground hover:text-secondary">
                    Task Management
                  </a>
                  <a href="#team-collaboration" className="block text-muted-foreground hover:text-secondary">
                    Team Collaboration
                  </a>
                  <a href="#timeline-planning" className="block text-muted-foreground hover:text-secondary">
                    Timeline Planning
                  </a>
                  <a href="#document-sharing" className="block text-muted-foreground hover:text-secondary">
                    Document Sharing
                  </a>
                  <a href="#reporting" className="block text-muted-foreground hover:text-secondary">
                    Reporting
                  </a>
                  <a href="#best-practices" className="block text-muted-foreground hover:text-secondary">
                    Best Practices
                  </a>
                </nav>

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Project Templates</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Save time by using our pre-built project templates for common workflows.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="#">Browse Templates</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 order-1 lg:order-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 id="creating-projects" className="scroll-mt-24">
                  Creating Projects
                </h2>
                <p>
                  Projects are the foundation of your work in Sydek. They help you organize tasks, collaborate with team
                  members, track progress, and deliver results on time. Creating a well-structured project is the first
                  step to successful project management.
                </p>

                <h3>How to Create a New Project</h3>
                <ol>
                  <li>
                    <strong>Navigate to the Projects Dashboard</strong>
                    <p>From your Sydek dashboard, click on "Projects" in the main navigation menu.</p>
                  </li>
                  <li>
                    <strong>Click "Create Project"</strong>
                    <p>Look for the "Create Project" button in the top-right corner of the Projects dashboard.</p>
                  </li>
                  <li>
                    <strong>Fill Out the Project Details</strong>
                    <p>
                      Enter a descriptive name, select a category, set a timeline, and add a brief description
                      explaining the project's purpose.
                    </p>
                  </li>
                  <li>
                    <strong>Choose a Template (Optional)</strong>
                    <p>
                      Select from one of our pre-built templates to get started quickly, or create a custom project from
                      scratch.
                    </p>
                  </li>
                  <li>
                    <strong>Invite Team Members</strong>
                    <p>
                      Add team members who will be working on the project and assign their roles (administrators,
                      editors, or viewers).
                    </p>
                  </li>
                  <li>
                    <strong>Configure Additional Settings</strong>
                    <p>
                      Set up any additional preferences, such as notification settings, privacy level, and integration
                      options.
                    </p>
                  </li>
                  <li>
                    <strong>Create the Project</strong>
                    <p>Click "Create Project" to finalize and launch your new project workspace.</p>
                  </li>
                </ol>

                <div className="bg-muted p-6 rounded-lg my-8">
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-medium mb-2">Pro Tip: Project Naming Conventions</h4>
                      <p className="text-muted-foreground">
                        Establish a consistent naming convention for your projects to make them easier to find and
                        understand. Consider including key information like client name, project type, and year (e.g.,
                        "Acme Corp - Website Redesign 2025").
                      </p>
                    </div>
                  </div>
                </div>

                <h2 id="project-structure" className="scroll-mt-24 mt-12">
                  Project Structure
                </h2>
                <p>
                  A well-organized project structure helps team members quickly understand their responsibilities and
                  how different components of the project fit together.
                </p>

                <h3>Key Project Components</h3>
                <ul>
                  <li>
                    <strong>Overview</strong>
                    <p>A high-level summary of the project's goals, timeline, key stakeholders, and current status.</p>
                  </li>
                  <li>
                    <strong>Task Lists</strong>
                    <p>
                      Organized lists of tasks grouped by phase, feature, department, or any structure that makes sense
                      for your team.
                    </p>
                  </li>
                  <li>
                    <strong>Timeline</strong>
                    <p>
                      A visual representation of the project schedule, including milestones, deadlines, and
                      dependencies.
                    </p>
                  </li>
                  <li>
                    <strong>Files & Documents</strong>
                    <p>
                      A central repository for all project-related files, including briefs, contracts, design assets,
                      and deliverables.
                    </p>
                  </li>
                  <li>
                    <strong>Team</strong>
                    <p>
                      A directory of all team members involved in the project, along with their roles and contact
                      information.
                    </p>
                  </li>
                  <li>
                    <strong>Discussions</strong>
                    <p>A dedicated space for project-related conversations, feedback, and decision-making.</p>
                  </li>
                  <li>
                    <strong>Reports</strong>
                    <p>Analytics and insights about project progress, resource allocation, and team performance.</p>
                  </li>
                </ul>

                <div className="bg-secondary/10 p-6 rounded-lg my-8">
                  <h4 className="text-lg font-medium mb-2">Custom Sections</h4>
                  <p className="text-muted-foreground mb-4">
                    You can customize your project structure by adding or removing sections that are relevant to your
                    specific needs. To manage sections:
                  </p>
                  <ol className="text-muted-foreground">
                    <li>Go to Project Settings by clicking the gear icon in the top-right corner</li>
                    <li>Select "Project Structure" from the menu</li>
                    <li>Enable or disable sections as needed</li>
                    <li>Drag and drop to reorder sections based on priority</li>
                    <li>Create custom sections for unique requirements</li>
                  </ol>
                </div>

                <h2 id="task-management" className="scroll-mt-24 mt-12">
                  Task Management
                </h2>
                <p>
                  Tasks are the building blocks of your project. Breaking down your project into manageable tasks helps
                  track progress, distribute workload, and ensure nothing falls through the cracks.
                </p>

                <h3>Creating and Organizing Tasks</h3>
                <p>In Sydek, you can create tasks in multiple ways:</p>

                <ul>
                  <li>Click the "Add Task" button in any task list</li>
                  <li>Use the quick-add feature by pressing "T" anywhere in the project</li>
                  <li>Import tasks from a spreadsheet or another project</li>
                  <li>Convert discussion comments into actionable tasks</li>
                </ul>

                <p>Each task can include:</p>

                <ul>
                  <li>
                    <strong>Title and Description:</strong> A clear summary of what needs to be done
                  </li>
                  <li>
                    <strong>Assignee(s):</strong> The team member(s) responsible for completing the task
                  </li>
                  <li>
                    <strong>Due Date:</strong> When the task should be completed
                  </li>
                  <li>
                    <strong>Priority Level:</strong> How important or urgent the task is
                  </li>
                  <li>
                    <strong>Status:</strong> The current state (To Do, In Progress, Review, Done)
                  </li>
                  <li>
                    <strong>Subtasks:</strong> Smaller components that make up the main task
                  </li>
                  <li>
                    <strong>Attachments:</strong> Relevant files or documents
                  </li>
                  <li>
                    <strong>Comments:</strong> Discussions and updates about the task
                  </li>
                  <li>
                    <strong>Custom Fields:</strong> Additional information specific to your workflow
                  </li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <div className="bg-muted rounded-lg p-5">
                    <h4 className="font-medium mb-3 flex items-center">
                      <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 p-1.5 rounded mr-2">
                        <Clock className="h-4 w-4" />
                      </span>
                      Task Views
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Switch between List, Board, Timeline, and Calendar views to visualize your tasks in different
                      formats depending on your needs.
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-5">
                    <h4 className="font-medium mb-3 flex items-center">
                      <span className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 p-1.5 rounded mr-2">
                        <Users className="h-4 w-4" />
                      </span>
                      Workload Management
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Monitor team workload to ensure balanced distribution of tasks and prevent burnout or bottlenecks.
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-5">
                    <h4 className="font-medium mb-3 flex items-center">
                      <span className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 p-1.5 rounded mr-2">
                        <FileText className="h-4 w-4" />
                      </span>
                      Task Templates
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Create templates for recurring tasks to save time and maintain consistency across your projects.
                    </p>
                  </div>
                </div>

                <h2 id="team-collaboration" className="scroll-mt-24 mt-12">
                  Team Collaboration
                </h2>
                <p>
                  Effective collaboration is essential for project success. Sydek provides various tools and features to
                  facilitate seamless teamwork, regardless of where team members are located.
                </p>

                <h3>Managing Project Teams</h3>
                <ul>
                  <li>
                    <strong>Adding Team Members</strong>
                    <p>Invite team members by email or username. You can invite individuals or entire teams at once.</p>
                  </li>
                  <li>
                    <strong>Assigning Roles</strong>
                    <p>
                      Define who can view, edit, or administer the project by assigning appropriate permission levels.
                    </p>
                  </li>
                  <li>
                    <strong>Organizing Teams</strong>
                    <p>
                      Group members into functional teams (e.g., Design, Development, Marketing) to streamline task
                      assignment and communication.
                    </p>
                  </li>
                </ul>

                <h3>Communication Tools</h3>
                <ul>
                  <li>
                    <strong>Project Discussions</strong>
                    <p>Centralized threads for project-wide discussions, announcements, and updates.</p>
                  </li>
                  <li>
                    <strong>Task Comments</strong>
                    <p>
                      Focused conversations about specific tasks, where you can mention team members, share files, and
                      track decisions.
                    </p>
                  </li>
                  <li>
                    <strong>Real-Time Chat</strong>
                    <p>Instant messaging for quick questions and informal discussions.</p>
                  </li>
                  <li>
                    <strong>@Mentions</strong>
                    <p>Tag specific team members to draw their attention to important information or requests.</p>
                  </li>
                  <li>
                    <strong>Video Meetings</strong>
                    <p>
                      Schedule and join video calls directly from the project workspace for face-to-face discussions.
                    </p>
                  </li>
                </ul>

                <div className="bg-secondary/10 p-6 rounded-lg my-8">
                  <div className="flex">
                    <Share2 className="h-6 w-6 text-secondary mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium mb-2">External Collaboration</h4>
                      <p className="text-muted-foreground">
                        Need to collaborate with clients or external partners? You can invite them as guest users with
                        limited access to specific projects or sections. Go to Project Settings &gt; Sharing to manage
                        external access.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 id="timeline-planning" className="scroll-mt-24 mt-12">
                  Timeline Planning
                </h2>
                <p>
                  A well-defined timeline helps keep your project on track and ensures everyone understands key
                  deadlines and milestones.
                </p>

                <h3>Creating Project Timelines</h3>
                <ol>
                  <li>
                    <strong>Set Project Start and End Dates</strong>
                    <p>Define the overall timeframe for your project in Project Settings.</p>
                  </li>
                  <li>
                    <strong>Identify Key Milestones</strong>
                    <p>Add important checkpoints that mark significant progress or deliverables in your project.</p>
                  </li>
                  <li>
                    <strong>Break Down into Phases</strong>
                    <p>Divide your project into logical phases or sprints to make it more manageable.</p>
                  </li>
                  <li>
                    <strong>Assign Task Durations</strong>
                    <p>Estimate how long each task will take to complete and set due dates accordingly.</p>
                  </li>
                  <li>
                    <strong>Establish Dependencies</strong>
                    <p>Connect related tasks to show which ones must be completed before others can begin.</p>
                  </li>
                </ol>

                <h3>Timeline Views</h3>
                <p>Sydek offers several ways to visualize your project timeline:</p>

                <ul>
                  <li>
                    <strong>Gantt Chart</strong>
                    <p>
                      A horizontal bar chart showing project tasks against time, with dependencies and progress
                      indicators.
                    </p>
                  </li>
                  <li>
                    <strong>Calendar View</strong>
                    <p>A traditional calendar showing tasks and milestones on their respective dates.</p>
                  </li>
                  <li>
                    <strong>Timeline List</strong>
                    <p>A chronological list of all project events, deadlines, and milestones.</p>
                  </li>
                </ul>

                <div className="bg-muted p-6 rounded-lg my-8">
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-medium mb-2">Timeline Management Tips</h4>
                      <p className="text-muted-foreground">
                        Always add buffer time between dependent tasks to account for unexpected delays. Consider using
                        time tracking features to compare estimated vs. actual time spent on tasks to improve future
                        planning.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 id="document-sharing" className="scroll-mt-24 mt-12">
                  Document Sharing
                </h2>
                <p>
                  Effective document management is crucial for keeping all project-related files organized, accessible,
                  and up-to-date.
                </p>

                <h3>File Management Features</h3>
                <ul>
                  <li>
                    <strong>Central Repository</strong>
                    <p>Store all project files in one place, organized by folders or categories.</p>
                  </li>
                  <li>
                    <strong>Version Control</strong>
                    <p>Track document revisions and access previous versions when needed.</p>
                  </li>
                  <li>
                    <strong>File Preview</strong>
                    <p>View documents, images, and other files without downloading them.</p>
                  </li>
                  <li>
                    <strong>Collaborative Editing</strong>
                    <p>Work on documents simultaneously with team members in real-time.</p>
                  </li>
                  <li>
                    <strong>Comments and Annotations</strong>
                    <p>Add feedback directly to specific parts of documents.</p>
                  </li>
                  <li>
                    <strong>File Linking</strong>
                    <p>Connect documents to relevant tasks or discussions for better context.</p>
                  </li>
                </ul>

                <h3>Best Practices for Document Management</h3>
                <ol>
                  <li>
                    <strong>Establish a Folder Structure</strong>
                    <p>Create a logical hierarchy of folders based on project phases, document types, or teams.</p>
                  </li>
                  <li>
                    <strong>Use Descriptive File Names</strong>
                    <p>
                      Adopt a consistent naming convention that includes key information like version number and date.
                    </p>
                  </li>
                  <li>
                    <strong>Add Metadata</strong>
                    <p>Tag files with relevant information to make them easier to find and filter.</p>
                  </li>
                  <li>
                    <strong>Set Permissions</strong>
                    <p>Control who can view, edit, or share specific documents based on their role in the project.</p>
                  </li>
                </ol>

                <h2 id="reporting" className="scroll-mt-24 mt-12">
                  Reporting
                </h2>
                <p>
                  Tracking and reporting on project progress helps stakeholders stay informed and allows for timely
                  adjustments when needed.
                </p>

                <h3>Available Reports</h3>
                <ul>
                  <li>
                    <strong>Project Overview</strong>
                    <p>A high-level summary of project status, progress, upcoming milestones, and potential risks.</p>
                  </li>
                  <li>
                    <strong>Task Status</strong>
                    <p>
                      Breakdown of tasks by status (e.g., Not Started, In Progress, Complete) with completion
                      percentages.
                    </p>
                  </li>
                  <li>
                    <strong>Team Workload</strong>
                    <p>Analysis of task distribution across team members and their current capacity.</p>
                  </li>
                  <li>
                    <strong>Time Tracking</strong>
                    <p>Reports on time spent on various tasks, compared against estimates.</p>
                  </li>
                  <li>
                    <strong>Budget Tracking</strong>
                    <p>
                      Financial reports showing planned vs. actual expenditure (available on Professional and Enterprise
                      plans).
                    </p>
                  </li>
                </ul>

                <h3>Creating Custom Reports</h3>
                <p>You can create personalized reports tailored to your specific needs:</p>
                <ol>
                  <li>Go to the Reports section in your project</li>
                  <li>Click "Create Custom Report"</li>
                  <li>Select the metrics and dimensions you want to include</li>
                  <li>Choose your preferred visualization (charts, tables, etc.)</li>
                  <li>Set up automated report delivery if needed</li>
                </ol>

                <h2 id="best-practices" className="scroll-mt-24 mt-12">
                  Best Practices
                </h2>
                <p>
                  Based on our experience with thousands of successful projects, here are some recommendations for
                  effective project management in Sydek:
                </p>

                <ul>
                  <li>
                    <strong>Start with a Kick-off Meeting</strong>
                    <p>Begin each project with a team meeting to align on goals, roles, and expectations.</p>
                  </li>
                  <li>
                    <strong>Establish Communication Protocols</strong>
                    <p>Define how and when team members should communicate (e.g., daily stand-ups, weekly updates).</p>
                  </li>
                  <li>
                    <strong>Break Down Large Tasks</strong>
                    <p>
                      Divide complex tasks into smaller, manageable subtasks that can be completed in a few hours or
                      days.
                    </p>
                  </li>
                  <li>
                    <strong>Use Templates</strong>
                    <p>Save time by creating templates for recurring projects or tasks.</p>
                  </li>
                  <li>
                    <strong>Regular Reviews</strong>
                    <p>Schedule weekly or bi-weekly project reviews to assess progress and address any issues.</p>
                  </li>
                  <li>
                    <strong>Document Decisions</strong>
                    <p>Keep a record of important decisions and their rationale in the project discussions.</p>
                  </li>
                  <li>
                    <strong>Celebrate Milestones</strong>
                    <p>Acknowledge completed milestones to maintain team motivation and momentum.</p>
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
                    <Link href="/resources/docs/client-guide/communication-tools">
                      Next: Communication Tools
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
              <Link href="/resources/docs/client-guide/communication-tools" className="group">
                <div className="bg-background rounded-xl border overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">
                      Communication Tools
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Learn about the various communication features available for effective team collaboration.
                    </p>
                    <span className="text-secondary text-sm font-medium">Read More</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/docs/client-guide/reporting-features" className="group">
                <div className="bg-background rounded-xl border overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">
                      Reporting Features
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Discover how to generate insightful reports to track progress and performance.
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

