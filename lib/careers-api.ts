import type { JobApplicationFormData } from "@/components/careers/types";

export type VacancyApplyHighlightDto = {
  title: string;
  description: string;
};

export type VacancyDto = {
  id: string;
  title: string;
  slug: string;
  departments: string[];
  employmentTypes: string[];
  location: string;
  salaryRange: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  status: string;
  applySidebarIntro?: string;
  applySidebarHighlights?: VacancyApplyHighlightDto[];
};

const apiBase =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  process.env.NEXT_PUBLIC_SCOPING_API_BASE_URL ??
  "http://localhost:8080";

export async function listVacancies(
  status: "public" | "published" | "all" | (string & {}) = "public"
): Promise<VacancyDto[]> {
  const response = await fetch(
    `${apiBase}/v1/careers/vacancies?status=${encodeURIComponent(status)}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to load vacancies");
  }
  const data = await response.json();
  return (data.vacancies ?? []) as VacancyDto[];
}

export async function getVacancyBySlug(slug: string): Promise<VacancyDto | null> {
  const response = await fetch(`${apiBase}/v1/careers/vacancies/${encodeURIComponent(slug)}`, {
    cache: "no-store",
  });
  if (response.status === 404) {
    return null;
  }
  if (!response.ok) {
    throw new Error("Failed to load vacancy");
  }
  return (await response.json()) as VacancyDto;
}

export async function uploadResume(file: File): Promise<string> {
  const fd = new FormData();
  fd.append("file", file);
  const response = await fetch(`${apiBase}/v1/careers/uploads/resume`, {
    method: "POST",
    body: fd,
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(
      typeof payload.error === "string" ? payload.error : "Failed to upload resume"
    );
  }
  const url = typeof payload.url === "string" ? payload.url : "";
  if (!url) {
    throw new Error("Upload succeeded but no URL was returned");
  }
  return url;
}

export async function submitApplication(
  slug: string,
  form: JobApplicationFormData,
  resumeUrl?: string
) {
  const response = await fetch(`${apiBase}/v1/careers/vacancies/${encodeURIComponent(slug)}/apply`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      slug,
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      location: form.location,
      linkedinUrl: form.linkedin,
      portfolioUrl: form.portfolio,
      experienceYears: Number(form.experience || 0),
      coverLetter: form.coverLetter,
      salaryExpectation: form.salary,
      earliestStartDate: form.startDate,
      workAuthorizations: form.workAuth,
      resumeUrl: resumeUrl ?? "",
    }),
  });

  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(
      typeof payload.message === "string"
        ? payload.message
        : typeof payload.error === "string"
          ? payload.error
          : "Failed to submit application"
    );
  }

  return response.json() as Promise<{ applicationId: string; vacancyId: string }>;
}
