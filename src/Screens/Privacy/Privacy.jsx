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
            Last Updated: October 1, 2025
          </p>

          <div className="space-y-6 text-[17px] leading-relaxed font-Inter text-gray-800">
            {/* 1. Introduction */}
            <div>
              <h2 className="font-semibold text-[19px]">1. Introduction</h2>
              <p>
                Welcome to Newlista (“we,” “us,” “our”). We are committed to respecting your privacy and protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit or use www.newlista.com (the “Site”), including your rights under the California Consumer Privacy Act (CCPA/CPRA) and other applicable laws.
              </p>
              <p>
                By using Newlista, you consent to the data practices described in this policy.
              </p>
            </div>

            {/* 2. What Information We Collect */}
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

            {/* 3. Cookies & Tracking */}
            <div>
              <h2 className="font-semibold text-[19px]">3. Cookies & Tracking Technologies</h2>
              <p>
                Newlista uses cookies and similar tracking technologies to improve user experience,
                support website functionality, and analyze usage trends.
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <span className="font-medium">Essential Cookies –</span> Required for site
                  functionality, such as maintaining login sessions and security. These are always
                  active.
                </li>
                <li>
                  <span className="font-medium">Analytics Cookies –</span> We use Google Analytics
                  and similar tools to understand user behavior and improve performance. These may
                  collect information such as your IP address, device type, and browsing activity.
                </li>
                <li>
                  <span className="font-medium">Advertising & Personalization Cookies –</span> If
                  enabled, these may be used to deliver relevant content, remember your preferences,
                  or support retargeting/advertising campaigns.
                </li>
              </ul>
              <h2 className="font-semibold text-[15px] mt-2">Your Choices: </h2>
              <ul className="list-disc pl-6 mt-2">
                <li>Users in the United States may opt out of analytics and advertising cookies via the cookie consent banner or browser settings. </li>
                <li>Visitors from the European Union (EU), European Economic Area (EEA), or other regions with similar privacy laws will be asked to provide explicit consent before non-essential cookies (analytics or advertising) are placed on your device. </li>
              </ul>
              <p>You may disable or withdraw consent at any time through your browser settings. Please note that some features of the Site may not function properly without cookies. </p>

            </div>

            {/* 4. How We Use */}
            <div>
              <h2 className="font-semibold text-[19px]">4. How We Use Your Information</h2>
              <p>We use your information to: </p>
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

            {/* 5. Communications Consent */}
            <div>
              <h2 className="font-semibold text-[19px]">
                5. Communications Consent (CAN-SPAM / TCPA Compliance)
              </h2>
              <p>
                By signing up, you consent to receive emails from Newlista about your account, new
                features, and investor-related opportunities. If you provide a phone number, you may
                also receive SMS messages. You may opt out at any time via the unsubscribe link or
                by replying "STOP" to SMS messages.
              </p>
            </div>

            {/* 6. Disclosure */}
            <div>
              <h2 className="font-semibold text-[19px]">6. Disclosure of Information</h2>
              <p>
                We do not sell or rent your personal information. However, we may disclose it under
                these circumstances:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  To service providers assisting with our operations (e.g., hosting, payment
                  processing, analytics)
                </li>
                <li>If required by law or legal process</li>
                <li>In the event of a merger, acquisition, or sale of assets</li>
                <li>
                  To enforce our Terms of Use or protect the rights, safety, or security of Newlista
                  or its users
                </li>
              </ul>
              <p className="mt-2 font-medium">SMS Communications:</p>
              <p>
                Newlista does not send commercial SMS messages at this time. If SMS messaging is
                implemented in the future, it will comply with all applicable laws. Newlista is not
                responsible for SMS compliance by third parties. Users opting in are responsible for
                accurate information and permissions required under law.
              </p>
            </div>

            {/* 7. Third-Party */}
            <div>
              <h2 className="font-semibold text-[19px]">7. Third-Party Services and Links</h2>
              <p>
                Newlista may contain links to third-party websites. We are not responsible for their privacy practices or content. Please review their privacy policies before providing them with any information. 
              </p>
            </div>

            {/* 8. Data Retention */}
            <div>
              <h2 className="font-semibold text-[19px]">8. Data Retention and Deletion</h2>
              <p>
                We retain user information for as long as necessary to provide the service and meet
                legal obligations. If you wish to delete your account or request data deletion,
                contact us at:{" "}
                <a className="text-blue-600 underline" href="mailto:privacy@newlista.com">
                  privacy@newlista.com
                </a>
                .
              </p>
            </div>

            {/* 9. Rights */}
            <div>
              <h2 className="font-semibold text-[19px]">
                9. Your Rights Under CPRA/CCPA (California Residents)
              </h2>
              <p>If you are a California resident, you have the right to:</p>
              <ul className="list-disc pl-6">
                <li>Request access to the personal information we collect</li>
                <li>Request correction or deletion of your data</li>
                <li>
                  Opt-out of the sale or sharing of your personal information (note: we do not sell
                  personal data)
                </li>
                <li>Request information about how your data is shared with third parties</li>
              </ul>
              <p>
                You may exercise these rights by contacting us at{" "}
                <a className="text-blue-600 underline" href="mailto:privacy@newlista.com">
                  privacy@newlista.com
                </a>
                .
              </p>
            </div>

            {/* 10. Children */}
            <div>
              <h2 className="font-semibold text-[19px]">10. Children’s Privacy (COPPA)</h2>
              <p>
                Newlista is not intended for users under the age of 18. We do not knowingly collect
                personal data from children under 13. If you believe we have collected such
                information, contact us immediately at{" "}
                <a
                  className="text-blue-600 underline ml-1"
                  href="mailto:compliance@newlista.com"
                >
                  compliance@newlista.com
                </a>{" "}
                and we will delete it.
              </p>
            </div>

            {/* 11. Security */}
            <div>
              <h2 className="font-semibold text-[19px]">11. Security of Your Information</h2>
              <p>
                We implement appropriate administrative, technical, and physical safeguards to
                protect your data. However, no system is completely secure. Users are responsible
                for keeping login credentials confidential.
              </p>
            </div>

            {/* 12. Accessibility */}
            <div>
              <h2 className="font-semibold text-[19px]">12. ADA & Accessibility</h2>
              <p>
                Newlista is committed to providing a platform that is accessible to all users. If
                you experience any accessibility barriers while using our platform, please contact
                us at{" "}
                <a className="text-blue-600 underline ml-1" href="mailto:support@newlista.com">
                  support@newlista.com
                </a>
                .
              </p>
            </div>

            {/* 13. International Use */}
            <div>
              <h2 className="font-semibold text-[19px]">13. International Use</h2>
              <p>
                Newlista is intended for use by U.S. residents only. If you access the platform from
                outside the U.S., you do so at your own risk and are responsible for complying with
                local laws.
              </p>
            </div>

            {/* 14. Changes */}
            <div>
              <h2 className="font-semibold text-[19px]">14. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page, and your continued use of Newlista constitutes your acceptance of those
                changes.
              </p>
            </div>

            {/* 15. Contact */}
            <div>
              <h2 className="font-semibold text-[19px]">15. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to make a request regarding
                your data, please contact:
              </p>
              <ul className="list-none pl-0 mt-2">
                <li>Newlista</li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:privacy@newlista.com"
                    className="text-blue-600 underline"
                  >
                    privacy@newlista.com
                  </a>
                </li>
                <li>
                  Website:{" "}
                  <a
                    href="https://www.newlista.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    www.newlista.com
                  </a>
                </li>
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
