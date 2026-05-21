import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Briefcase, Clock, DollarSign } from "lucide-react"
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { JobCardProps } from "./types"

export function JobCard({ job }: JobCardProps) {
  const applicationsOpen = !job.status || job.status === "published"

  const deptLabel =
    job.departments?.length ? job.departments.join(" · ") : job.department ?? ""
  const empLabel =
    job.employmentTypes?.length ? job.employmentTypes.join(" · ") : job.employmentType ?? ""

  return (
    <AccordionItem
      value={`job-${job.title.toLowerCase().replace(/\s+/g, "-")}`}
      className="border bg-background rounded-lg overflow-hidden shadow-sm"
    >
      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left">
          <div>
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-muted-foreground">{deptLabel}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
            <div className="flex items-center text-xs bg-muted/50 px-2 py-1 rounded">
              <MapPin className="h-3 w-3 mr-1" />
              {job.location}
            </div>
            <div className="flex items-center text-xs bg-muted/50 px-2 py-1 rounded">
              <Briefcase className="h-3 w-3 mr-1" />
              {empLabel}
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-secondary mr-2" />
            <div>
              <p className="text-sm font-medium">Location</p>
              <p className="text-sm text-muted-foreground">{job.location}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-secondary mr-2" />
            <div>
              <p className="text-sm font-medium">Job Type</p>
              <p className="text-sm text-muted-foreground">{empLabel}</p>
            </div>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-secondary mr-2" />
            <div>
              <p className="text-sm font-medium">Salary Range</p>
              <p className="text-sm text-muted-foreground">{job.salaryRange}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Job Description</h4>
          <p className="text-muted-foreground">{job.description}</p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Responsibilities</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {job.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Requirements</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {job.requirements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {!applicationsOpen && job.status === "archived" && (
          <p className="mb-4 text-sm font-medium text-muted-foreground">
            This position is closed to new applications.
          </p>
        )}

        {applicationsOpen ? (
          <Link href={`/company/careers/apply/${job.slug}`}>
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <Button type="button" disabled variant="secondary" className="opacity-80">
            Applications closed
          </Button>
        )}
      </AccordionContent>
    </AccordionItem>
  )
}