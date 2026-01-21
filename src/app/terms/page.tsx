import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "HAKA Global Terms of Service - Terms and conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-md md:max-w-4xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="h-1 w-12 bg-primary rounded-full mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-gray-200 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Last updated: January 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              By accessing and using the HAKA Global website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our website or services.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              These Terms of Service apply to all visitors, users, and others who access or use our services, including our strategic advisory and investment services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              2. Description of Services
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              HAKA Global provides strategic advisory and investment services, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-4">
              <li>Strategic advisory and positioning services</li>
              <li>C-Level and executive advisory</li>
              <li>Personal and corporate affairs consultation</li>
              <li>Non-market strategy development</li>
              <li>Investment advisory and management</li>
              <li>AI-driven strategic intelligence</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The specific scope of services will be defined in individual engagement agreements between HAKA Global and clients.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              When using our website and services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Provide accurate and complete information when requested</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Not interfere with or disrupt our services</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              All content on the HAKA Global website, including text, graphics, logos, images, and software, is the property of HAKA Global or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              5. Confidentiality
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              HAKA Global operates with discretion as a core principle. We maintain strict confidentiality regarding all client information and engagements.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Any confidential information shared between parties during the course of our engagement shall be protected and not disclosed to third parties without explicit written consent, except as required by law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              6. Disclaimer of Warranties
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Our website and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. HAKA Global makes no representations or warranties of any kind, express or implied, regarding:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>The operation or availability of our website</li>
              <li>The accuracy or completeness of any information</li>
              <li>The results that may be obtained from using our services</li>
              <li>The suitability of our services for your particular needs</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              To the fullest extent permitted by applicable law, HAKA Global shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-4">
              <li>Loss of profits, revenue, or data</li>
              <li>Business interruption</li>
              <li>Loss of goodwill or reputation</li>
              <li>Any other intangible losses</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              This limitation applies regardless of the legal theory under which such damages are sought.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              8. Investment Disclaimer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Information provided on our website regarding investments is for general informational purposes only and does not constitute financial, investment, tax, or legal advice.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Past performance is not indicative of future results. All investments involve risk, including the potential loss of principal. You should consult with qualified professionals before making any investment decisions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              9. Indemnification
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              You agree to indemnify, defend, and hold harmless HAKA Global and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys&apos; fees, arising out of or in any way connected with your access to or use of our website and services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              10. Governing Law
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of Spain, without regard to its conflict of law provisions. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Madrid, Spain.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              11. Severability
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms of Service shall otherwise remain in full force and effect.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the &quot;Last updated&quot; date. Your continued use of our website and services after any such changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              13. Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
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
