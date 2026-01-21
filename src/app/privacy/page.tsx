import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "HAKA Global Privacy Policy - How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-md md:max-w-4xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="h-1 w-12 bg-primary rounded-full mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-gray-200 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Last updated: January 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              HAKA Global (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We operate with discretion and confidentiality as core principles. Your trust is essential to our business, and we take the protection of your personal information seriously.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-gray-200 mb-3">
              Personal Information
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-4">
              <li>Contact us through our website or email</li>
              <li>Subscribe to our newsletter</li>
              <li>Request our advisory or investment services</li>
              <li>Engage in business communications with us</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              This information may include your name, email address, phone number, organization name, and any other information you choose to provide.
            </p>
            
            <h3 className="text-lg font-semibold text-slate-900 dark:text-gray-200 mb-3">
              Automatically Collected Information
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When you visit our website, we may automatically collect certain information about your device, including your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing our website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Send you newsletters and updates (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and prevent fraud</li>
              <li>Maintain the security of our systems</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We may use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              5. Information Sharing and Disclosure
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations or respond to lawful requests</li>
              <li>To protect our rights, property, or safety</li>
              <li>With trusted service providers who assist in operating our website and conducting our business, under strict confidentiality agreements</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              6. Data Retention
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. When personal information is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              7. Data Security
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              8. Your Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              9. International Data Transfers
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. We ensure appropriate safeguards are in place for such transfers in accordance with applicable law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              11. Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <p className="text-slate-900 dark:text-gray-200 font-semibold mb-2">HAKA Global</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Email: info@hakaglobal.com</p>
              <Link
                href="/contact"
                className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1 mt-2"
                tabIndex={0}
              >
                Contact Us
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
