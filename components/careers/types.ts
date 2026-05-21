export interface Job {
  id?: string
  title: string
  slug: string
  /** Multi-select labels, joined for display */
  departments?: string[]
  /** @deprecated use employmentTypes */
  department?: string
  location: string
  employmentTypes?: string[]
  /** @deprecated use employmentTypes */
  employmentType?: string
  salaryRange: string
  description: string
  responsibilities: string[]
  requirements: string[]
  /** published = open to apply; archived = listed but closed; draft omitted from public API */
  status?: string
}

export interface JobApplicationFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  linkedin: string
  portfolio: string
  experience: string
  coverLetter: string
  salary: string
  startDate: string
  workAuth: string[]
  terms: boolean
}

export interface Benefit {
  title: string
  description: string
}

export interface HeroSectionProps {
  title: string
  subtitle: string
  gradientClassName?: string
  highlightedWord?: string
}

export interface JobListingProps {
  jobs: Job[]
}

export interface JobCardProps {
  job: Job
}

export interface ApplicationFormProps {
  jobTitle: string
  jobSlug: string
}

export interface BenefitCardProps {
  benefit: Benefit
}