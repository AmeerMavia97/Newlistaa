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
            Last Updated: October 1, 2025
          </p>

          <div className="space-y-6 text-base sm:text-[17px] leading-relaxed font-Inter text-gray-800">
            <p>
              By accessing or using Newlista, you agree to be bound by the most recent version of these Terms of Use. We may update or modify these Terms from time to time. It is your responsibility to review them periodically. Continued use of the platform after changes are posted constitutes your acceptance of the revised Terms.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">
                1. Platform Purpose &amp; Eligibility
              </h2>
              <p>
                Newlista is a networking platform exclusively for bona fide real
                estate investors seeking off-market investment opportunities.
              </p>
              <p>By signing up, users agree: </p>
              <ul className="list-disc pl-6">
                <li>
                  They are real estate investors acting on their own behalf or for a legitimate investing entity.

                </li>
                <li>
                  Licensed brokers and agents may join only in their capacity as investors and not for the purpose of soliciting clients, marketing listings, or offering brokerage services. Any attempt to use the platform primarily for obtaining listings, representing other investors, or soliciting business in a brokerage capacity is strictly prohibited and may result in suspension or termination without refund.
                </li>
                <li>
                  They are not using Newlista to market, broker, wholesale, or solicit any services or products to other users.
                </li>
                <li>
                  Misuse or misrepresentation may result in suspension or permanent ban without refund.

                </li>
                <li>
                  We reserve the right to verify eligibility and enforce platform integrity.

                </li>
                <li>
                  Users must provide accurate, current, and complete information when registering and throughout their use of the platform. By creating an account, you represent and warrant that all information submitted is truthful and not misleading. You agree to promptly update your account details to maintain accuracy. Misrepresentation, use of false credentials, or impersonation of another person or entity is strictly prohibited and may result in immediate suspension or termination.

                </li>
                <li>
                  Users are responsible for ensuring their use of the platform complies with all applicable laws, including but not limited to securities, advertising, anti-spam, and Fair Housing laws.
                </li>
                <li>Accounts are personal and non-transferable. Each registered user is responsible for maintaining their own account and may not share, transfer, or allow access to it with other individuals or entities. Any attempt to transfer or share an account is grounds for immediate suspension or termination without refund. </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">
                2. Disclaimer &amp; Risk Acknowledgment
              </h2>
              <p>
                Newlista is not a licensed broker, dealer, investment advisor, or legal entity, and does not offer investment, tax, or legal advice. Nothing on this platform constitutes an offer, solicitation, or recommendation to buy or sell securities, real estate interests, or any other investment products.
              </p>
              <p>We do not form, arrange, or facilitate real estate syndications, joint ventures, or investment partnerships. Any discussions, negotiations, or agreements that occur between users are conducted independently and outside the scope of Newlista. </p>
              <p>All property listings are submitted by third parties and are not verified by Newlista. Users are solely responsible for verifying the accuracy, completeness, and legitimacy of any listings, as well as conducting their own due diligence and obtaining professional advice before making investment or business decisions. Users must also ensure that their listings and communications comply with applicable laws, including, but not limited to, the Fair Housing Act, FTC advertising standards, anti-spam regulations, and other relevant federal, state, and local requirements. </p>
              <p>Newlista does not screen, endorse, or guarantee the qualifications, financial capacity, or trustworthiness of any user. If you choose to connect, communicate, or transact with another user, whether through networking features, private messaging, or otherwise, you do so at your own risk. </p>
              <p>Newlista is not liable for any losses, disputes, failed transactions, or damages of any kind arising from user-to-user interactions, including but not limited to investment decisions, partnerships, joint ventures, or other business dealings initiated through the platform. </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">
                3. Syndication &amp; Legal Compliance Notice
              </h2>
              <p>
                Syndication discussions must occur off-platform and must fully comply with all applicable federal and state securities laws, including but not limited to regulations enforced by the U.S. Securities and Exchange Commission (SEC), state securities regulators, and the Federal Trade Commission (FTC).
              </p>

              <p>Newlista does not facilitate, promote, or participate in the sale of securities, investment contracts, or other regulated financial interests and does not verify users’ compliance with any securities or investment laws. </p>
              <p>Users are solely responsible for understanding and complying with all applicable securities, advertising, consumer protection, and anti-fraud laws before engaging in any investment-related discussions. </p>
              <p>We strongly encourage users to consult with a licensed real estate attorney or syndication specialist and to review the official SEC (www.sec.gov) and FTC (www.ftc.gov) websites for guidance. </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">
                4. Governing Law &amp; Jurisdiction
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to conflict of laws principles. 
              </p>
              <p>
               By using Newlista, you consent to the exclusive jurisdiction and venue of the courts located in Harris County, Texas, for any disputes not subject to arbitration, and you waive any objection to personal jurisdiction or venue in such courts. 
              </p>
              <p>
                All disputes arising under or relating to these Terms shall first be resolved through binding arbitration as defined in Section 5. The decision of the arbitrator shall be final and enforceable in any court of competent jurisdiction. 
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">
                5. Arbitration &amp; Class Action Waiver
              </h2>
              <p>
                By using Newlista, you agree that any disputes, claims, or controversies arising out of or relating to these Terms or your use of the platform shall be resolved exclusively through binding arbitration in accordance with the rules of a recognized arbitration provider (such as AAA or JAMS). All arbitration proceedings shall be conducted in Houston, Texas, unless the parties mutually agree to an alternative location. You acknowledge and agree that you will not require Newlista to travel outside Houston, Texas, for arbitration. 
              </p>
              <p>Further details regarding the arbitration process are set forth in the Newlista Arbitration Policy, which is incorporated by reference into these Terms of Use. The Arbitration Policy is available upon request and governs all aspects of arbitration, including administration, rules, costs, and location </p>
              <p>You waive any right to a jury trial, and you also waive the right to participate in a class action or class arbitration. </p>
              <p>Further details regarding the arbitration process, including fees, procedures, and location, are provided in our full arbitration policy. </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">6. User Conduct</h2>
              <p>Users agree to the following conduct standards while using Newlista: </p>
              <ul className="list-disc pl-6">
                <li>No harassing, spamming, or unsolicited promotions, in compliance with applicable anti-spam laws, including the CAN-SPAM Act. </li>
                <li> No offensive, discriminatory, or illegal content, and no advertising or listings that violate the Fair Housing Act, the Civil Rights Act, or other applicable federal, state, or local laws</li>
                <li>Users must comply with all applicable local real estate and investment laws</li>
                <li>
                  Users may not misrepresent their investment capacity, track record, business affiliations, or credentials when using the networking features of Newlista. Any false, misleading, or exaggerated claims of financial ability or professional qualifications may result in suspension or permanent removal from the platform. 

                </li>
                <li>
                   No scraping, crawling, automated bots, or other unauthorized data collection methods may be used to access, copy, or extract content, listings, or user information from the platform. Any unauthorized access, scraping, data mining, or use of automated means to extract information is strictly prohibited and may violate the Computer Fraud and Abuse Act (CFAA), the Digital Millennium Copyright Act (DMCA), and other applicable laws. This prohibition applies regardless of the violator’s location. By accessing or attempting to access the platform, all users and non-users agree that these Terms apply to them, and that any violation is subject to enforcement under the laws of the United States and the State of Texas. Newlista reserves the right to pursue claims against violators in any jurisdiction, domestic or international, to the fullest extent permitted by law, including injunctive relief, damages, and recovery of attorneys’ fees. 
                </li>
              </ul>
              <h2 className="font-semibold text-md sm:text-xl">Enforcement & Reporting: </h2>
              <p>
                Users may report any account or activity they believe violates these Terms, including harassment, spamming, misrepresentation, scraping, or solicitation. Newlista reserves the right, in its sole discretion, to:
              </p>
              <ul className="list-disc pl-6">
                <li>Investigate reported violations, </li>
                <li>Suspend or block accounts</li>
                <li>Remove content, and</li>
                <li> Terminate accounts for violations of these Terms, inappropriate conduct, or any activity that harms the platform or its users.</li>
              </ul>
              <p>Newlista is not liable for any user-to-user interactions, including harassment, misrepresentation, or other misconduct. Users acknowledge that they use the platform at their own risk and that Newlista is under no obligation to monitor or enforce compliance. However, we will act on reports in a commercially reasonable manner. </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">
                7. Intellectual Property &amp; Content Ownership
              </h2>
              <p>
                Users retain all rights to content they upload to Newlista. 
              </p>
              <p>By submitting content, you grant Newlista a non-exclusive, worldwide, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, adapt, publish, display, and create derivative works of such content in connection with operating, marketing, and improving the platform. This includes the right to feature your listings in search results, promotional materials, email campaigns, and partner channels. </p>
              <p>You represent and warrant that you have all necessary rights, licenses, and permissions to submit the content and that it does not infringe or violate the rights of any third party, including intellectual property, publicity, or privacy rights. </p>
              <p>Newlista complies with the Digital Millennium Copyright Act (DMCA) and will remove content that is reported to infringe third-party rights in accordance with DMCA procedures. </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">
                8. Privacy, Cookies, Data, and Communication Consent 
              </h2>
              <p>
                By registering, users agree to Newlista’s Privacy Policy (accessible via the link in the website footer). 
              </p>
              <h2 className="font-semibold text-md sm:text-xl">
                Cookies & Analytics 
              </h2>
               <ul className="list-disc pl-6">
                <li>Newlista uses essential cookies to operate the platform (such as login sessions and security). </li>
                <li>Non-essential cookies, including analytics (e.g., Google Analytics) and potential advertising/personalization cookies, may be used to track usage, improve platform performance, and enhance user experience. Users acknowledge that Newlista is operated and hosted in the United States. If you access the platform from outside the U.S., you consent to the transfer, storage, and processing of your personal information in the United States in accordance with our Privacy Policy. </li>
                <li>Users located in the European Union (EU), European Economic Area (EEA), or other regions with similar privacy laws will be asked to provide explicit consent before non-essential cookies are placed on their devices. </li>
                <li>U.S. users may opt out of non-essential cookies via the cookie banner or browser settings. </li>
                <li>By continuing to use Newlista after being presented with a cookie consent notice, you acknowledge and agree to the placement and use of cookies as described in our Privacy Policy. </li>
               </ul>
               <h2 className="font-semibold text-md sm:text-xl">
                Data & Communication Consent 
              </h2>
              <ul className="list-disc pl-6">
                <li>Users consent to receive digital communications from Newlista, including transactional emails, platform updates, and promotional messages. </li>
                <li>All email communications comply with the CAN-SPAM Act and include a clear opt-out option. </li>
                <li>For SMS or phone-based alerts (if applicable), users provide express consent in accordance with the Telephone Consumer Protection Act (TCPA). </li>
                <li>Consent to cookies, analytics, and communications is a condition of using Newlista and may be revoked in accordance with the opt-out procedures provided. </li>
                <li><span className="font-semibold !text-black">SMS Communications: <br /></span> Newlista does not send commercial SMS messages to users at this time. If SMS messaging is implemented in the future, it will comply with all applicable federal and state laws, including any bonding or registration requirements. Newlista is not responsible for compliance with such laws for any SMS messages sent by third-party users, service providers, or other entities. Users opting in to receive SMS messages are responsible for providing accurate contact information and for obtaining any necessary permissions under applicable law.  </li>
              </ul>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">
                9. Accessibility Statement
              </h2>
              <p>
               Newlista is committed to providing a platform that is accessible to users with disabilities in accordance with the Americans with Disabilities Act (ADA) and other applicable laws. 
              </p>
              <p>We strive to design our website and digital services in a manner that is consistent with recognized generally accessibility standards, such as the Web Content Accessibility Guidelines (WCAG), to the extent reasonably practicable. </p>
              <p>If you experience difficulty accessing any part of the platform, please contact us at support@newlista.com. Upon request, we will make reasonable efforts to provide the information, service, or communication you require in an accessible format. </p>
              <p>Please note that while we are continually working to improve accessibility, some content, features, or third-party integrations may not yet be fully compliant or may be outside of our control. In such cases, we will take commercially reasonable steps to assist you. </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">
                10. Children’s Online Privacy (COPPA)
              </h2>
              <p>
                This platform is intended exclusively for users aged 18 years or older. We do not knowingly collect or solicit personal information from anyone under the age of 13. If we learn that personal data from a child under 13 has been inadvertently collected without verified parental consent, we will promptly delete such information. 
              </p>
              <p>The Children’s Online Privacy Protection Act (COPPA) applies to any U.S. website that knowingly collects data from children under 13. Even though this platform is not directed to children and does not intentionally collect such data, we are still required to: </p>
              <ul className="list-disc pl-6">
                <li>State that our platform is not for children under 13,</li>
                <li>Affirm that we do not knowingly collect personal information from children under 13, and 
</li>
                <li>Delete any such data if it is inadvertently collected.</li>
              </ul>
              <p>By using this platform, you affirm that you are at least 18 years old and agree not to provide any personal information if you are under 18. </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">
                11. Payment, Subscriptions, and Refunds
              </h2>
              <p>
                Certain features of Newlista may require the payment of fees or subscription charges. By purchasing such services, you agree to provide accurate and complete billing information and authorize Newlista or its third-party payment processor to charge your selected payment method for all applicable fees, including any required sales or use taxes, service charges, or regulatory fees. 
              </p>
              <p>All payments are non-refundable, except as required by applicable law or expressly stated otherwise. Unless otherwise noted, subscriptions automatically renew at the end of each billing cycle at the then-current rate. You may cancel auto-renewal by updating your account settings prior to the renewal date; however, cancellation does not entitle you to a refund for the current billing period. </p>
              <p>You are solely responsible for paying any sales tax, use tax, or other transactional taxes imposed on your purchase. Newlista remains accountable for its own income taxes. </p>
              <p>Chargebacks, fraudulent payment disputes, or unpaid balances may result in account suspension or termination. You acknowledge and agree that Newlista is not responsible for any loss or damage arising from disputes with your payment method or payment processor. </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">
                12. Third-Party Services &amp; Integrations
              </h2>
              <p>
                Newlista may include features, links, or integrations provided by third parties, including but not limited to mapping providers, payment processors, analytics tools (e.g., Google Analytics), or other services. 
              </p>
               <ul className="list-disc pl-6">
                <li>Newlista does not control these third-party services and is not responsible or liable for their availability, accuracy, functionality, content, or security. </li>
                <li>Your use of any third-party service is subject to that provider’s terms and policies, and you assume all risks associated with such use. </li>
                <li>Users remain solely responsible for reviewing third-party providers’ privacy policies, cookie practices, and terms of service prior to use. </li>
                <li>By enabling cookies or analytics features, you acknowledge that third-party providers (such as Google) may collect data in accordance with their own policies. </li>
               </ul>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">
                13. Termination &amp; Survival
              </h2>
              <p>
               Newlista may, at its sole discretion, suspend, restrict, or terminate your account at any time for violations of these Terms, unlawful activity, or any conduct that harms the platform or its users. Upon termination, your right to use Newlista will immediately cease. 
              </p>
              <p>If your account is terminated due to a violation of these Terms, any prepaid fees are non-refundable, and you forfeit any remaining time on your subscription or membership. No credits or refunds will be issued for partial billing periods. </p>
              <p>The following provisions shall survive termination: intellectual property licenses granted to Newlista, disclaimers and limitations of liability, arbitration and dispute resolution provisions, obligations regarding payment and subscriptions, enforcement provisions, and any other obligations which by their nature are intended to survive termination. </p>
            </div>

            {/* Section 14 */}
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">
                14. Market Data &amp; Analytics
              </h2>
              <p>
               By posting listings or other content on Newlista, you grant Newlista a non-exclusive, worldwide, royalty-free license to collect, aggregate, and analyze such content, along with user interactions, for purposes including market research, analytics, platform improvements, investor resources, and industry reporting. 
              </p>
              <p>Any data collected will be anonymized and presented in aggregate form, and personally identifiable information will not be disclosed without your explicit consent. </p>
              <p>You retain all rights to the content you post, subject to the license granted to Newlista for the purposes described above. </p>
            </div>

            {/* Section 15 */}
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">
                15. Property Inspection, Meeting, and Health Risks
              </h2>
              <p>
                Users acknowledge that visiting properties, meeting with other users, or participating in business activities arranged through Newlista involves inherent risks, including but not limited to personal injury, illness, permanent disability, or death, as well as property damage. Such risks may arise from environmental hazards, unsafe conditions, industrial equipment, structural failures, hazardous materials, or the actions of other parties. 
              </p>
              <p>By using the platform and participating in property viewings, meetings, or business interactions, you assume all risks associated with these activities. You agree to release, indemnify, and hold harmless Newlista, its directors, officers, employees, agents, and affiliates from any and all claims, liabilities, damages, or expenses arising from or related to your participation, including injuries to yourself or others, property damage, or other losses, regardless of cause. </p>
              <p>Users are strongly encouraged to conduct proper due diligence, use appropriate safety precautions, and seek professional advice where applicable before visiting or interacting with any property or individual. </p>
            </div>

            {/* Section 16 */}
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">
                16. Copyright Infringement and DMCA Notice
              </h2>
              <p>
                Newlista respects the intellectual property rights of others and expects all users to do the same. .
              </p>
              <p>If you believe that content posted on Newlista infringes your copyright, you may submit a written notice to Newlista containing the following: </p>
              <ul className="list-disc pl-6">
                <li>Your name and contact information, </li>
                <li>A description of the copyrighted work claimed to be infringed, </li>
                <li>Identification of the material on Newlista that you claim infringes your copyright, </li>
                <li>A good-faith statement that you are authorized to act on behalf of the rights holder, and </li>
                <li>Your electronic or physical signature. </li>
              </ul>
              <p>Newlista will respond to valid DMCA notices in accordance with the Digital Millennium Copyright Act (DMCA), including removing or disabling access to infringing content. </p>
              <p>Accounts belonging to users who repeatedly infringe copyrights may be terminated at Newlista’s sole discretion. </p>
            </div>

            {/* Section 17 */}
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">
                17. California Residents’ Rights (CCPA/CPRA)
              </h2>
              <p>
                If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), including the right to: 
              </p>
              <ul className="list-disc pl-6">
                <li>Request access to the personal information we have collected about you, </li>
                <li>Request correction of inaccurate personal information, </li>
                <li>Request deletion of your personal information, </li>
                <li>Opt-out of the sale or sharing of your personal information (if applicable), and </li>
                <li>Obtain information about how your personal information is used, disclosed, or shared. </li>
              </ul>
              <p>To exercise any of these rights, please get in touch with us at privacy@newlista.com. We will respond in accordance with applicable law. </p>
            </div>

            {/* Section 18 */}
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">
                18. Liability &amp; Indemnification
              </h2>
              <p>
                By using Newlista, you acknowledge and agree that your access to and use of the platform, its features, listings, content, and third-party integrations is at your own risk. Newlista, its officers, directors, employees, agents, affiliates, and partners are not liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to: 
              </p>
              <ul className="list-disc pl-6">
                <li>Financial losses, investment losses, or lost opportunities, </li>
                <li>Personal injury, property damage, or death, </li>
                <li>Harassment, misrepresentation, or misconduct by other users, </li>
                <li>Errors, inaccuracies, or omissions in listings or content, and </li>
                <li>Any loss arising from third-party services, integrations, or links. </li>
              </ul>
              <p>You agree to indemnify, defend, and hold harmless Newlista and its affiliates from and against any and all claims, liabilities, damages, losses, or expenses, including reasonable attorneys’ fees, arising out of or related to: </p>
              <ul className="list-disc pl-6">
                <li>Your use of the platform or violation of these Terms, </li>
                <li>Your interactions with other users or third parties, </li>
                <li>Any content you submit, post, or transmit, and </li>
                <li>Any breach of applicable laws, rules, or regulations. </li>
              </ul>
              <p>This indemnification obligation survives the termination of your account and your use of Newlista. In no event shall Newlista’s total aggregate liability to you for all claims arising out of or relating to these Terms or your use of the platform exceed the total amount of subscription or service fees you have paid to Newlista in the twelve (12) months immediately preceding the event giving rise to the claim. </p>
              <p>Newlista reserves the right to update or modify these Terms of Use at any time. Changes will become effective upon posting to the platform, and continued use of Newlista after such changes constitutes acceptance of the revised Terms. </p>
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
