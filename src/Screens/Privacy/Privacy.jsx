import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import MiniFooter from "../../Components/Footer/MiniFooter";
import Footer from "../../Components/Footer/Footer";

const Privacy = () => {
  return (
    <>
      <Navbar />
      <section className="px-6 sm:px-16 md:px-20 py-20 sm:py-24 md:py-32 text-[#1E1E1E]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[32px] md:text-[43px] 2xl:text-[48px] font-bold font-Urbanist mb-6">
            Privacy Policy for Newlista
          </h1>
          <p className="text-sm sm:text-base text-gray-700 mb-8">
            Last Updated: July 22, 2025
          </p>

          <div className="space-y-6 text-[17px] leading-relaxed font-Inter text-gray-800">
            <div>
              <h2 className="font-semibold text-[19px]">1. Introduction</h2>
              <p>
                Welcome to Newlista (“we,” “us,” “our”). We are committed to
                respecting your privacy and protecting your personal
                information. This Privacy Policy outlines how we collect, use,
                disclose, and safeguard your information when you visit or use
                www.newlista.com (the “Site”), including your rights under the
                California Consumer Privacy Act (CCPA/CPRA) and other applicable
                laws.
              </p>
              <p>
                By using Newlista, you consent to the data practices described
                in this policy.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-[19px]">2. What Information We Collect</h2>
              <p className="font-medium">A. Information You Provide Directly:</p>
              <ul className="list-disc pl-6">
                <li>Full name, email address, phone number</li>
                <li>Investment preferences</li>
                <li>Location or property interests</li>
                <li>Account information (username, password)</li>
                <li>Payment and billing information (for paid features)</li>
                <li>Any data or documents you upload to your account</li>
                <li>Communications or inquiries sent to us</li>
              </ul>
              <p className="font-medium mt-2">B. Information Collected Automatically:</p>
              <ul className="list-disc pl-6">
                <li>IP address</li>
                <li>Browser and device information</li>
                <li>Pages visited, time spent on pages, click data</li>
                <li>Cookies, web beacons, and similar technologies</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-[19px]">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6">
                <li>Provide and manage your account</li>
                <li>Facilitate communication with other users (investor networking)</li>
                <li>Verify eligibility for investor-only access</li>
                <li>Enable property listing and viewing</li>
                <li>Process payments (for premium features or listing fees)</li>
                <li>Detect and prevent fraud or misuse</li>
                <li>Send email communications (updates, offers, alerts)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-[19px]">4. Communications Consent (CAN-SPAM / TCPA Compliance)</h2>
              <p>
                By signing up, you consent to receive emails from Newlista about your account,
                new features, and investor-related opportunities. If you provide a phone number,
                you may also receive SMS messages. You may opt out at any time via the unsubscribe
                link or by replying "STOP" to SMS messages.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-[19px]">5. Disclosure of Information</h2>
              <p>We do not sell or rent your personal information. However, we may disclose it under these circumstances:</p>
              <ul className="list-disc pl-6">
                <li>To service providers assisting with our operations (e.g., hosting, payment processing)</li>
                <li>If required by law or legal process</li>
                <li>In the event of a merger, acquisition, or sale of assets</li>
                <li>To enforce our Terms of Use or protect the rights, safety, or security of Newlista or its users</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-[19px]">6. Third-Party Services and Links</h2>
              <p>
                Newlista may contain links to third-party websites. We are not responsible for their
                privacy practices or content. Please review their privacy policies before providing
                them with any information.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-[19px]">7. Data Retention and Deletion</h2>
              <p>
                We retain user information for as long as necessary to provide the service and meet
                legal obligations. If you wish to delete your account or request data deletion,
                contact us at: <a className="text-blue-600 underline" href="mailto:privacy@newlista.com">privacy@newlista.com</a>.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-[19px]">8. Your Rights Under CPRA/CCPA (California Residents)</h2>
              <p>If you are a California resident, you have the right to:</p>
              <ul className="list-disc pl-6">
                <li>Request access to the personal information we collect</li>
                <li>Request correction or deletion of your data</li>
                <li>Opt-out of the sale or sharing of your personal information (note: we do not sell your data)</li>
              </ul>
              <p>Contact: <a className="text-blue-600 underline" href="mailto:privacy@newlista.com">privacy@newlista.com</a></p>
            </div>

            <div>
              <h2 className="font-semibold text-[19px]">9. Children’s Privacy (COPPA)</h2>
              <p>
                Newlista is not intended for users under the age of 18. We do not knowingly collect
                personal data from children under 13. If you believe we have collected such
                information, contact us immediately at
                <a className="text-blue-600 underline ml-1" href="mailto:compliance@newlista.com">compliance@newlista.com</a> and we will delete it.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-[19px]">10. Security of Your Information</h2>
              <p>
                We implement appropriate administrative, technical, and physical safeguards to
                protect your data. However, no system is completely secure. Users are responsible for
                keeping login credentials confidential.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-[19px]">11. ADA & Accessibility</h2>
              <p>
                Newlista is committed to providing a platform that is accessible to all users.
                If you experience any accessibility barriers while using our platform, please contact us at
                <a className="text-blue-600 underline ml-1" href="mailto:support@newlista.com">support@newlista.com</a>.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-[19px]">12. International Use</h2>
              <p>
                Newlista is intended for use by U.S. residents only. If you access the platform from
                outside the U.S., you do so at your own risk and are responsible for complying with
                local laws.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-[19px]">13. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page, and your continued use of Newlista constitutes your acceptance of those changes.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-[19px]">14. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to make a request regarding
                your data, please contact:
              </p>
              <ul className="list-none pl-0 mt-2">
                <li>Newlista</li>
                <li>Email: <a href="mailto:privacy@newlista.com" className="text-blue-600 underline">privacy@newlista.com</a></li>
                <li>Website: <a href="https://www.newlista.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">www.newlista.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <MiniFooter />
      <Footer />
    </>
  );
};

export default Privacy;
