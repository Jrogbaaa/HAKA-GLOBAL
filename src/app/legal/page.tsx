import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "HAKA Global Legal Notice - Company registration, address, and legal information.",
};

export default function LegalPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-md md:max-w-4xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="h-1 w-12 bg-primary rounded-full mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-gray-200 mb-4">
            Legal Notice
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Last updated: January 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              1. Website Operator
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              This website is operated by:
            </p>
            <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-gray-800 mb-4">
              <p className="text-slate-900 dark:text-gray-200 font-semibold mb-2">Haka Sport Academy SL</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">C/Galileo 5</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">28015 Madrid, Spain</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
                <span className="font-medium text-slate-900 dark:text-gray-200">Tax ID (CIF):</span> B88494398
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              2. Company Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Haka Sport Academy SL is a limited liability company (Sociedad Limitada) registered in Spain. The company operates under the commercial name HAKA Global, providing strategic advisory and investment services.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Company Type: Sociedad Limitada (SL)</li>
              <li>Registered Office: C/Galileo 5, 28015 Madrid, Spain</li>
              <li>Tax Identification Number (CIF): B88494398</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              3. Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              For any inquiries regarding this legal notice or our services, you may contact us through the following channels:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-4">
              <li>Email: info@hakaglobal.com</li>
              <li>Address: C/Galileo 5, 28015 Madrid, Spain</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              You may also reach us through our contact form for business inquiries.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              All content on this website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, is the property of Haka Sport Academy SL or its content suppliers and is protected by Spanish and international intellectual property laws.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The HAKA Global name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Haka Sport Academy SL. You must not use such marks without our prior written permission.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Any reliance you place on such information is strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, arising out of or in connection with the use of this website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              6. Applicable Law and Jurisdiction
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              This legal notice shall be governed by and construed in accordance with the laws of Spain. Any disputes arising in connection with this legal notice shall be subject to the exclusive jurisdiction of the courts of Madrid, Spain.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              If any provision of this legal notice is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              7. Related Policies
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Please also review our other policies that govern your use of this website:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-primary hover:underline"
                  tabIndex={0}
                >
                  Privacy Policy
                </Link>
                {" "}- How we collect, use, and protect your personal information
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-primary hover:underline"
                  tabIndex={0}
                >
                  Terms of Service
                </Link>
                {" "}- Terms and conditions for using our website and services
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-200 mb-4">
              8. Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              If you have any questions about this Legal Notice, please contact us:
            </p>
            <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <p className="text-slate-900 dark:text-gray-200 font-semibold mb-2">Haka Sport Academy SL</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">C/Galileo 5, 28015 Madrid, Spain</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">CIF: B88494398</p>
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
