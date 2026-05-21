import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { JobCard } from "./job-card"
import type { JobListingProps } from "./types"

export function JobListing({ jobs }: JobListingProps) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Current <span className="text-gradient">Openings</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Find your perfect role and take the next step in your career
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search job openings..." className="pl-10 py-6 text-lg" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {jobs.map((job) => (
              <JobCard
                key={job.slug || job.title.toLowerCase().replace(/\s+/g, "-")}
                job={job}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}