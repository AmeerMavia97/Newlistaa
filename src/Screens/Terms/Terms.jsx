import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import MiniFooter from "../../Components/Footer/MiniFooter";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <>
      <Navbar />
      <section className="px-6 sm:px-16 md:px-20 py-20 sm:py-24 md:py-32 text-[#1E1E1E]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[32px] md:text-[43px] 2xl:text-[48px] font-bold font-Urbanist mb-6">
            Terms of Use
          </h1>
          <p className="text-base sm:text-[17px] text-gray-700 mb-8">
            Last Updated: July 22, 2025
          </p>

          <div className="space-y-6 text-base sm:text-[17px] leading-relaxed font-Inter text-gray-800">
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">1. Platform Purpose & Eligibility</h2>
              <p>
                Newlista is a networking platform exclusively for bona fide real estate investors seeking off-market investment opportunities.
              </p>
              <ul className="list-disc pl-6">
                <li>They are real estate investors acting on their own behalf or for a legitimate investing entity.</li>
                <li>They are not using Newlista to market, broker, wholesale, or solicit any services or products to other users.</li>
                <li>Misuse or misrepresentation may result in suspension or permanent ban without refund.</li>
                <li>We reserve the right to verify eligibility and enforce platform integrity.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-lg sm:text-xl">2. Disclaimer & Risk Acknowledgment</h2>
              <p>Newlista is not a licensed broker, dealer, investment advisor, or legal entity offering investment advice.</p>
              <ul className="list-disc pl-6">
                <li>We do not form or facilitate real estate syndications.</li>
                <li>All property listings are submitted by third parties and are not verified by Newlista.</li>
                <li>Users are solely responsible for verifying any listings and conducting due diligence.</li>
                <li>Newlista is not liable for decisions made based on listing content or user communications.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-lg sm:text-xl">3. Syndication & Legal Compliance Notice</h2>
              <p>
                Syndication discussions must occur off-platform in compliance with SEC and FTC guidelines.
                Newlista does not facilitate, promote, or participate in the sale of securities or investment interests.
                Users are encouraged to consult with a licensed real estate attorney or syndication specialist.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg sm:text-xl">4. Governing Law & Jurisdiction</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to conflict of laws.
                Any disputes must be resolved in the courts of Harris County, Texas, or through arbitration as defined below.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg sm:text-xl">5. Arbitration & Class Action Waiver</h2>
              <p>
                By using Newlista, you agree to resolve disputes through binding arbitration, waiving any right to a jury trial or class action.
                Details will be provided in our full arbitration policy.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg sm:text-xl">6. User Conduct</h2>
              <ul className="list-disc pl-6">
                <li>No harassing, spamming, or unsolicited promotions.</li>
                <li>No offensive, discriminatory, or illegal content.</li>
                <li>Users must comply with the Fair Housing Act, the Civil Rights Act, and all applicable local real estate laws.</li>
                <li>Accounts violating conduct terms may be terminated.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-lg sm:text-xl">7. Intellectual Property & Content Ownership</h2>
              <p>
                Users retain rights to content they upload.
                By submitting content, you grant Newlista a non-exclusive, worldwide, royalty-free license to use, display, and promote your content on the platform.
                You are responsible for ensuring your content does not infringe third-party rights.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg sm:text-xl">8. Privacy, Data, and Communication Consent</h2>
              <p>
                By registering, users agree to our <Link className="text-blue-600 underline" to={"/privacy-policy"}>Privacy Policy</Link>.
                Users consent to receive digital communications, including transactional emails and platform updates.
                For SMS or phone-based alerts (if applicable), consent is required per the TCPA.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg sm:text-xl">9. Accessibility Statement</h2>
              <p>
                Newlista aims to be accessible to all users.
                We strive to comply with WCAG standards and offer accessibility support.
                If you encounter issues, please contact us at <a className="text-blue-600 underline" href="mailto:support@newlista.com">support@newlista.com</a>.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg sm:text-xl">10. Children’s Online Privacy (COPPA)</h2>
              <p>
                This platform is intended solely for users who are 18 years of age or older. We do not knowingly collect or solicit personal information from anyone under the age of 13. If we learn that we have inadvertently collected personal data from a child under 13 without verified parental consent, we will delete that information promptly.
              </p>
              <p>
                The Children’s Online Privacy Protection Act (COPPA) requires platforms to:
              </p>
              <ul className="list-disc pl-6">
                <li>State that our platform is not for children under 13</li>
                <li>Affirm that we do not knowingly collect personal information from them</li>
                <li>Delete any such data if it is inadvertently collected</li>
              </ul>
              <p>By using this platform, you affirm that you are at least 18 years old.</p>
            </div>

            <div>
              <h2 className="font-semibold text-lg sm:text-xl">11. Infectious Disease and Property Inspection Risks</h2>
              <p>
                Exposure to disease-causing organisms and contaminated objects during property inspections or meetings with other parties poses risks, including illness, permanent disability, or death.
                By using the platform and participating in property viewings or business meetings, you agree to release and hold harmless Newlista.com, its directors, officers, agents, and affiliates from all claims and liability arising from such exposure or contact.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg sm:text-xl">12. Copyright Infringement and DMCA Notice</h2>
              <p>
                Newlista respects the intellectual property rights of others and expects its users to do the same.
                If you believe content on Newlista infringes your copyright, please provide us with a written notice including your name, contact details, a description of the alleged infringement, and a good-faith statement that you are authorized to act on behalf of the rights holder.
              </p>
              <p>
                We reserve the right to remove content found to be infringing and to terminate repeat infringers’ accounts.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg sm:text-xl">13. California Residents’ Rights (CCPA/CPRA)</h2>
              <p>
                If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), including the right to request access to, correction of, or deletion of your personal data.
                To exercise your rights, please contact us at <a className="text-blue-600 underline" href="mailto:privacy@newlista.com">privacy@newlista.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <MiniFooter />
      <Footer />
    </>
  );
};

export default Terms;
