import Image from "next/image";
import { HeroSection } from "@/components/careers/hero-section";
import { BenefitsSection } from "@/components/careers/benefits-section";
import { JobListing } from "@/components/careers/job-listing";
import { listVacancies } from "@/lib/careers-api";
import type { Job } from "@/components/careers/types";

const fallbackJobOpenings: Job[] = [
  {
    slug: "senior-frontend-developer",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA (Hybrid)",
    employmentType: "Full-time",
    salaryRange: "$120,000 - $150,000",
    description:
      "We're looking for a Senior Frontend Developer to join our team and help build beautiful, responsive, and performant user interfaces for our clients.",
    responsibilities: [
      "Design and implement user interfaces using modern frontend frameworks",
      "Collaborate with designers, product managers, and backend developers",
      "Write clean, maintainable, and well-tested code",
      "Optimize applications for maximum speed and scalability",
      "Stay up-to-date with emerging trends and technologies",
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Proficiency in JavaScript, TypeScript, React, and Next.js",
      "Strong understanding of web standards and best practices",
      "Experience with responsive design and cross-browser compatibility",
      "Excellent problem-solving and communication skills",
    ],
  },
  {
    slug: "backend-engineer",
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote",
    employmentType: "Full-time",
    salaryRange: "$110,000 - $140,000",
    description:
      "We're seeking a talented Backend Engineer to develop and maintain robust server-side applications and APIs for our digital solutions.",
    responsibilities: [
      "Design and implement scalable backend systems and APIs",
      "Optimize database queries and ensure data integrity",
      "Implement security and data protection measures",
      "Collaborate with frontend developers to integrate user-facing elements",
      "Participate in code reviews and contribute to technical documentation",
    ],
    requirements: [
      "4+ years of experience in backend development",
      "Proficiency in Node.js, Python, or similar backend technologies",
      "Experience with database design and ORM frameworks",
      "Knowledge of API design principles and RESTful services",
      "Understanding of cloud services (AWS, Azure, or GCP)",
    ],
  },
  {
    slug: "ux-ui-designer",
    title: "UX/UI Designer",
    department: "Design",
    location: "San Francisco, CA (On-site)",
    employmentType: "Full-time",
    salaryRange: "$90,000 - $120,000",
    description:
      "Join our design team to create intuitive and engaging user experiences for web and mobile applications.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with developers to ensure design implementation",
      "Maintain design systems and component libraries",
      "Stay current with UX/UI trends and best practices",
    ],
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency in design tools like Figma, Sketch, or Adobe XD",
      "Strong portfolio demonstrating user-centered design process",
      "Understanding of accessibility standards and responsive design",
      "Excellent visual design skills and attention to detail",
    ],
  },
  {
    slug: "project-manager",
    title: "Project Manager",
    department: "Operations",
    location: "Remote",
    employmentType: "Full-time",
    salaryRange: "$100,000 - $130,000",
    description:
      "We're looking for an experienced Project Manager to lead digital projects from conception to completion, ensuring they are delivered on time and within budget.",
    responsibilities: [
      "Manage project scope, timeline, and resources",
      "Coordinate communication between clients and internal teams",
      "Track project progress and address any issues or roadblocks",
      "Create and maintain project documentation",
      "Conduct regular status meetings and provide updates to stakeholders",
    ],
    requirements: [
      "4+ years of experience in project management",
      "PMP certification or equivalent experience",
      "Strong understanding of software development lifecycle",
      "Excellent communication and leadership skills",
      "Experience with project management tools and methodologies",
    ],
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    employmentType: "Full-time",
    salaryRange: "$115,000 - $145,000",
    description:
      "Join our team as a DevOps Engineer to build and maintain our infrastructure, deployment pipelines, and monitoring systems.",
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage cloud infrastructure and containerization",
      "Monitor system performance and troubleshoot issues",
      "Implement security best practices and automation",
      "Collaborate with development teams to improve deployment processes",
    ],
    requirements: [
      "3+ years of experience in DevOps or similar role",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Knowledge of containerization and orchestration (Docker, Kubernetes)",
      "Familiarity with infrastructure as code (Terraform, CloudFormation)",
      "Strong scripting skills (Bash, Python, or similar)",
    ],
  },
  {
    slug: "marketing-specialist",
    title: "Marketing Specialist",
    department: "Marketing",
    location: "San Francisco, CA (Hybrid)",
    employmentType: "Full-time",
    salaryRange: "$80,000 - $100,000",
    description:
      "We're seeking a Marketing Specialist to help promote our services and generate leads through various digital marketing channels.",
    responsibilities: [
      "Develop and execute marketing campaigns across multiple channels",
      "Create engaging content for website, social media, and email",
      "Analyze marketing metrics and optimize campaigns",
      "Collaborate with sales team to generate and nurture leads",
      "Stay current with digital marketing trends and best practices",
    ],
    requirements: [
      "2+ years of experience in digital marketing",
      "Knowledge of SEO, SEM, and social media marketing",
      "Experience with marketing automation and CRM tools",
      "Strong analytical skills and data-driven approach",
      "Excellent written and verbal communication skills",
    ],
  },
];

export default async function CareersPage() {
  let jobOpenings = fallbackJobOpenings;
  try {
    const vacancies = await listVacancies("public");
    if (vacancies.length > 0) {
      jobOpenings = vacancies.map((item) => ({
        id: item.id,
        title: item.title,
        slug: item.slug,
        departments: item.departments,
        department: item.departments?.join(" · "),
        location: item.location,
        employmentTypes: item.employmentTypes,
        employmentType: item.employmentTypes?.join(" · "),
        salaryRange: item.salaryRange,
        description: item.description,
        responsibilities: item.responsibilities,
        requirements: item.requirements,
        status: item.status,
      }));
    }
  } catch {
    // Fallback to static vacancies if backend is unavailable.
  }

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Join Our Team"
        subtitle="Build your career at Sydek and help shape the future of digital experiences."
        highlightedWord="Team"
      />

      <BenefitsSection
        title="Why Join Sydek"
        description="At Sydek, we're building a team of passionate individuals who are excited about creating innovative digital solutions that make a difference. We believe in fostering a collaborative, inclusive, and growth-oriented environment where everyone can thrive."
        benefits={[
          {
            title: "Competitive Salary",
            description: "We offer above-market compensation packages",
          },
          {
            title: "Remote-Friendly",
            description: "Flexible work arrangements to suit your lifestyle",
          },
          {
            title: "Professional Growth",
            description:
              "Continuous learning and career development opportunities",
          },
          {
            title: "Inclusive Culture",
            description: "A diverse and supportive work environment",
          },
        ]}
        imageSrc="/placeholder.svg?height=600&width=800"
        imageAlt="Sydek Team"
      />

      <JobListing jobs={jobOpenings} />
    </div>
  );
}
