"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Eye, FileText } from "lucide-react";
import { HeroSection } from "@/components/careers/hero-section";

export default function PrivacyPolicyPage() {
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
        title="Privacy Policy"
        highlightedWord="Policy"
      />

      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8 space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  At Sydek, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
                  and safeguard your information when you visit our website or use our services. Please read this
                  privacy policy carefully. By continuing to use our services, you consent to the practices described in
                  this policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary/10 p-2 rounded-lg flex-shrink-0">
                      <FileText className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Personal Information</h3>
                      <p className="text-muted-foreground text-sm">
                        We may collect personal information that you voluntarily provide when registering for our
                        services, including name, email address, phone number, and company details.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-accent/10 p-2 rounded-lg flex-shrink-0">
                      <Eye className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Usage Data</h3>
                      <p className="text-muted-foreground text-sm">
                        We automatically collect certain information when you visit, use, or navigate our website. This
                        information may include IP address, browser type, device type, pages viewed, and other
                        diagnostic data.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We may use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Providing, operating, and maintaining our services</li>
                  <li>Improving and personalizing the user experience</li>
                  <li>Understanding how our services are being used</li>
                  <li>Developing new products, services, and features</li>
                  <li>Communicating with you about our services</li>
                  <li>Providing customer support</li>
                  <li>Ensuring the security of our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information from unauthorized access, disclosure, alteration, or destruction. However, no method of
                  transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
                  security.
                </p>
                <div className="bg-muted p-4 rounded-lg flex items-start gap-3">
                  <Shield className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    We regularly review our security practices and procedures to ensure the highest level of protection
                    for your data. All data is encrypted in transit and at rest using industry-standard encryption
                    protocols.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Third-Party Disclosure</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties unless we
                  provide you with advance notice. This does not include trusted third parties who assist us in
                  operating our website, conducting our business, or servicing you, so long as those parties agree to
                  keep this information confidential.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  Depending on your location, you may have certain rights regarding your personal information,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>The right to access the personal information we have about you</li>
                  <li>The right to request correction of inaccurate data</li>
                  <li>The right to request deletion of your data</li>
                  <li>The right to object to or restrict processing of your data</li>
                  <li>The right to data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Cookie Policy</h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain
                  information. Cookies are files with a small amount of data that may include an anonymous unique
                  identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                  sent.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this
                  Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <Link href="mailto:privacy@sydek.com" className="text-secondary hover:underline">
                    privacy@sydek.com
                  </Link>
                  .
                </p>
              </section>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">Last updated: March 1, 2025</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Have questions about your privacy or need to update your preferences?
              </p>
              <Button asChild className="bg-secondary hover:bg-secondary/90">
                <Link href="/company/contact">Contact Our Privacy Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

