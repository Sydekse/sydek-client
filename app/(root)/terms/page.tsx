"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/careers/hero-section";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        variant="left"
        contentClassName="max-w-3xl"
        leadingAccessory={
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        }
        title="Terms of Service"
        highlightedWord="Service"
      />

      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8 space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  Welcome to Sydek. These Terms of Service govern your use of our website and services provided by
                  Sydek, Inc. By accessing our website or using our services, you agree to these terms. Please read them
                  carefully.
                </p>
                <p className="text-muted-foreground">
                  These terms constitute a legally binding agreement between you and Sydek. If you do not agree with
                  these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Definitions</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>"Sydek,"</strong> "we," "our," or "us" refers to Sydek, Inc.
                  </li>
                  <li>
                    <strong>"Services"</strong> refers to all services, products, and platforms provided by Sydek.
                  </li>
                  <li>
                    <strong>"User,"</strong> "you," or "your" refers to any individual or entity using our Services.
                  </li>
                  <li>
                    <strong>"Content"</strong> refers to all information, data, text, software, music, audio,
                    photographs, graphics, video, messages, or other materials.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. Account Registration</h2>
                <p className="text-muted-foreground mb-4">
                  To access certain features of our Services, you may need to register for an account. You agree to
                  provide accurate, current, and complete information during the registration process and to update such
                  information to keep it accurate, current, and complete.
                </p>
                <p className="text-muted-foreground">
                  You are responsible for safeguarding your password and for all activities that occur under your
                  account. You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. User Conduct</h2>
                <p className="text-muted-foreground mb-4">You agree not to use the Services to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Impersonate any person or entity</li>
                  <li>Interfere with or disrupt the Services or servers</li>
                  <li>Collect or store personal data about other users without their express consent</li>
                  <li>
                    Post or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory,
                    or otherwise objectionable
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  All content, features, and functionality of the Services, including but not limited to all
                  information, software, text, displays, images, video, and audio, and the design, selection, and
                  arrangement thereof, are owned by Sydek, its licensors, or other providers of such material and are
                  protected by copyright, trademark, patent, trade secret, and other intellectual property or
                  proprietary rights laws.
                </p>
                <p className="text-muted-foreground">
                  You may not modify, reproduce, distribute, create derivative works or adaptations of, publicly display
                  or in any way exploit any of the content in whole or in part except as expressly authorized by us.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  In no event shall Sydek, its directors, employees, partners, agents, suppliers, or affiliates, be
                  liable for any indirect, incidental, special, consequential or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your
                  access to or use of or inability to access or use the Services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                  revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                  What constitutes a material change will be determined at our sole discretion.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms, please contact us at{" "}
                  <Link href="mailto:legal@sydek.com" className="text-secondary hover:underline">
                    legal@sydek.com
                  </Link>
                  .
                </p>
              </section>

              <div className="border-t pt-4">
                <p className="text-sm text-muted-foreground">Last updated: March 1, 2025</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Have questions about our terms or need assistance?</p>
              <Button asChild className="bg-secondary hover:bg-secondary/90">
                <Link href="/company/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}