import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { VacancyApplyHighlightDto } from "@/lib/careers-api";

const DEFAULT_HIGHLIGHTS: VacancyApplyHighlightDto[] = [
  { title: "Competitive Salary", description: "We offer above-market compensation" },
  { title: "Flexible Work", description: "Remote and hybrid options available" },
  { title: "Growth Opportunities", description: "Clear path for advancement" },
  { title: "Comprehensive Benefits", description: "Health, retirement, and more" },
];

export function ApplyAboutSidebar({
  jobTitle,
  intro,
  highlights,
}: {
  jobTitle: string;
  intro?: string | null;
  highlights?: VacancyApplyHighlightDto[] | null;
}) {
  const items =
    highlights && highlights.length > 0 ? highlights : DEFAULT_HIGHLIGHTS;

  return (
    <div className="space-y-8">
      <div className="bg-background rounded-xl border p-6">
        <h3 className="text-xl font-semibold mb-4">About This Position</h3>
        {intro?.trim() ? (
          <p className="text-muted-foreground mb-4">{intro.trim()}</p>
        ) : (
          <p className="text-muted-foreground mb-4">
            You're applying for the{" "}
            <span className="font-medium text-foreground">{jobTitle}</span> position at Sydek.
          </p>
        )}
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={`${item.title}-${i}`} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-muted/30 rounded-xl p-6 border">
        <h3 className="text-xl font-semibold mb-4">Application Tips</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Tailor your resume to highlight relevant experience</li>
          <li>• Be specific about your achievements in your cover letter</li>
          <li>• Provide concrete examples of your skills and expertise</li>
          <li>• Double-check all information before submitting</li>
          <li>• Follow up if you haven't heard back within two weeks</li>
        </ul>
      </div>

      <div className="bg-secondary/10 rounded-xl p-6 border border-secondary/20">
        <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
        <p className="text-muted-foreground mb-4">
          If you have any questions about the application process or the position, please don't
          hesitate to contact us.
        </p>
        <Button asChild variant="outline" className="w-full">
          <Link href="/company/contact">Contact Recruiting Team</Link>
        </Button>
      </div>
    </div>
  );
}
