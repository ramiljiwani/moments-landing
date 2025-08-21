"use client"

import { Button, Footer } from "@/components";
import { Link } from "lucide-react";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="mx-auto max-w-4xl px-5 mt-20">
      <div className="privacy-section">
        <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
        <p className="text-sm opacity-80 mb-8">
          Last updated: August 19, 2025
        </p>

        <div className="space-y-6 text-sm leading-relaxed opacity-90">
          <p>
            Moments (“we,” “us,” “our”) is a private, invite-only photo sharing
            app. This Privacy Policy explains how we collect, use, share, and
            protect your personal information, and what rights you have.
          </p>

          <h2 className="text-xl font-medium mt-8">What Information We Collect</h2>
          <ul className="list-disc ml-6">
            <li>Account details: email, username, profile photo</li>
            <li>Event content: photos, captions, likes</li>
            <li>Device/app info, IP address, crash logs</li>
            <li>Advertising identifiers (with consent where required)</li>
          </ul>

          <h2 className="text-xl font-medium mt-8">How We Use Your Information</h2>
          <p>
            We process information to operate the app, improve performance,
            provide ads via Google AdMob, and ensure safety. Where required, we
            rely on your consent or other lawful bases.
          </p>

          <h2 className="text-xl font-medium mt-8">Sharing</h2>
          <p>
            We share data with service providers like Firebase and AdMob, and
            with event members you choose to share content with. We do not sell
            your data.
          </p>

          <h2 className="text-xl font-medium mt-8">Your Rights</h2>
          <p>
            Depending on where you live (EU/EEA/UK, Canada, U.S. states), you
            may have rights to access, delete, correct, port, or opt-out of
            certain processing. Contact us at{" "}
            <a href="mailto:ramiljiwani@gmail.com" className="underline">
              ramiljiwani@gmail.com
            </a>{" "}
            to exercise these rights.
          </p>

          <h2 className="text-xl font-medium mt-8">Contact</h2>
          <p>
            Privacy Officer:{" Ramil Jiwani "}
            <a href="mailto:ramiljiwani@gmail.com" className="underline">
              ramiljiwani@gmail.com
            </a>
          </p>
        </div>
        <div className="mt-8">
          <Button variant="outline" href="/privacy-policy.pdf">
              Download Full Privacy Policy
          </Button>
        </div>
      </div>
      <div className="p-4"></div>
      <Footer/>
    </section>
  );
};
