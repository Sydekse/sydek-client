"use client";

import type React from "react";

import { useState } from "react";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import { HeroSection } from "@/components/careers/hero-section";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}

      <HeroSection
        title="Get in Touch"
        highlightedWord="Touch"
        subtitle="Have a question or want to work together? We'd love to hear from you."
      />

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <ContactInfo />

            <div id="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground">
              Visit our office to meet the team in person.
            </p>
          </div>

          {/* Map Section - Updated with interactive map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Sydek+IT+Solution,Addis+Ababa,Ethiopia&zoom=17"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[400px]"
                title="Sydek Office Location"
              ></iframe>
              <div className="mt-4 text-center">
                <Link
                  href="https://maps.app.goo.gl/4ayQTJ4fuUrXAkES8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Open in Google Maps</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
