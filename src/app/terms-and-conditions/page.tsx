"use client"

import { Button, Footer } from "@/components";
import React from "react";

const Terms = () => {
  return (
    <section className="mx-auto max-w-4xl px-5 mt-20">
      <div className="privacy-section">
        <h1 className="text-3xl font-semibold mb-6">Terms of Use</h1>
        <p className="text-sm opacity-80 mb-8">
          Last updated: August 19, 2025
        </p>

        <div className="space-y-6 text-sm leading-relaxed opacity-90">
          <p>
            Welcome to Moments. By using our app, you agree to these Terms of
            Use. Please read them carefully.
          </p>

          <h2 className="text-xl font-medium mt-8">Eligibility</h2>
          <p>
            You must be at least 13 years old to use Moments. By creating an
            account, you confirm that you meet this requirement.
          </p>

          <h2 className="text-xl font-medium mt-8">Your Responsibilities</h2>
          <ul className="list-disc ml-6">
            <li>Use Moments only for lawful purposes</li>
            <li>Do not upload content that is harmful, illegal, or abusive</li>
            <li>You are responsible for the photos and captions you share</li>
          </ul>

          <h2 className="text-xl font-medium mt-8">Our Rights</h2>
          <p>
            We may remove content or suspend accounts that violate these terms
            or our policies. We may update the app or this agreement at any
            time.
          </p>

          <h2 className="text-xl font-medium mt-8">Limitation of Liability</h2>
          <p>
            Moments is provided “as is.” To the fullest extent permitted by law,
            we disclaim all warranties and are not liable for damages arising
            from your use of the app.
          </p>

          <h2 className="text-xl font-medium mt-8">Contact</h2>
          <p>
            Questions? Email{" "}
            <a href="mailto:ramiljiwani@gmail.com.app" className="underline">
              ramiljiwani@gmail.com
            </a>
          </p>
        </div>
        <div className="mt-8">
        <Button variant="outline" href="/terms-and-conditions.pdf">
            Download Full Terms and Conditions
        </Button>
        </div>
      </div>
       <div className="p-4"></div>
        <Footer/>
    </section>
  );
};

export default Terms;
