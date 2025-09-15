import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import MiniFooter from "../../Components/Footer/MiniFooter";
import Footer from "../../Components/Footer/Footer";
// IMAGES
import AddPropertyBanner from "../../assets/AddPropertyBanner.jpg";

// BACKGORUND
const BannerBackground = {
  backgroundImage: `url(${AddPropertyBanner})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundBlendMode: "black",
  backgroundColor: "#000000d1",
  backgroundBlendMode: "color"
};


const sections = [
  { id: "intro", label: "1. Introduction" },
  { id: "collect", label: "2. What Information We Collect" },
  { id: "cookies", label: "3. Cookies & Tracking Technologies" },
  { id: "use", label: "4. How We Use Your Information" },
  { id: "comms", label: "5. Communications Consent (CAN-SPAM / TCPA Compliance)" },
  { id: "disclosure", label: "6. Disclosure of Information" },
  { id: "thirdparty", label: "7. Third-Party Services and Links" },
  { id: "retention", label: "8. Data Retention and Deletion" },
  { id: "rights", label: "9. Your Rights Under CPRA/CCPA (California Residents)" },
  { id: "children", label: "10. Children’s Privacy (COPPA)" },
  { id: "security", label: "11. Security of Your Information" },
  { id: "accessibility", label: "12. ADA & Accessibility" },
  { id: "intl", label: "13. International Use" },
  { id: "changes", label: "14. Changes to This Privacy Policy" },
  { id: "contact", label: "15. Contact Us" },
];

const Privacy = () => {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    // simple scrollspy
    const observers = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: [0, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <section
        style={BannerBackground}
        className="flex items-center justify-center"
      >
        <div className="py-22 text-center flex flex-col justify-center items-center">
          
          <h1 className="text-white font-Urbanist text-5xl font-bold">Privacy Policy</h1>
            <p className="font-Urbanist w-[80%] text-[17px]  rounded-[10px]  text-[#f2f2f2] font-[500] mt-4 text-center">
            We are committed to respecting your
                      privacy and protecting your personal information
          </p>
          <h1 className=" font-Urbanist text-[15px] w-max px-10 rounded-[10px] py-3 bg-[#ffffff27] text-[#f2f2f2] font-semibold mt-4 text-center">Last Update: October 1, 2025 </h1>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F7FAFF] to-white">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(600px_300px_at_20%_10%,#C7E3FF_0%,transparent_60%),radial-gradient(500px_300px_at_80%_0%,#E8D9FF_0%,transparent_60%)]" />
        <div className="relative  px-6 sm:px-10 md:px-12 lg:px-16 pt-16 pb-10 sm:pt-20 md:pt-20">

          <div>
           
          </div>
          <h1 className="font-Urbanist text-3xl sm:text-4xl md:text-[44px] font-extrabold tracking-tight text-[#111]">
            Privacy Policy for Newlista
          </h1>
        
          <p className="mt-4 font-Inter text-sm sm:text-[14px] text-gray-600">
            Last Updated: October 1, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="scroll-smooth">
        <div className=" px-6 sm:px-10 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="grid grid-cols-12 gap-6 lg:gap-10">
            {/* Sidebar / TOC */}
            <aside className="col-span-12 lg:col-span-4 xl:col-span-3">
              <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur px-4 py-4 sm:px-5 sm:py-5 shadow-sm">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-700">
                  On this page
                </h3>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`block rounded-lg px-3 py-2 text-[13px] sm:text-sm transition-colors ${active === s.id
                          ? "bg-blue-50 text-blue-700 font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Card */}
            <div className="col-span-12 lg:col-span-8 xl:col-span-9">
              <div className="rounded-3xl border border-gray-200 bg-white shadow-sm">
                <div className="p-6 sm:p-8 md:p-10 text-[16.5px] leading-relaxed font-Inter text-gray-800">
                  {/* 1. Introduction */}
                  <section id="intro" className="scroll-mt-28">
                    <h2 className="text-[20px] font-semibold text-[#111]">1. Introduction</h2>
                    <p className="mt-2">
                      Welcome to Newlista (“we,” “us,” “our”). We are committed to respecting your
                      privacy and protecting your personal information. This Privacy Policy outlines
                      how we collect, use, disclose, and safeguard your information when you visit or
                      use www.newlista.com (the “Site”), including your rights under the California
                      Consumer Privacy Act (CCPA/CPRA) and other applicable laws.
                    </p>
                    <p className="mt-2">
                      By using Newlista, you consent to the data practices described in this policy.
                    </p>
                    <hr className="my-8 border-gray-200" />
                  </section>

                  {/* 2. What Information We Collect */}
                  <section id="collect" className="scroll-mt-28">
                    <h2 className="text-[20px] font-semibold text-[#111]">
                      2. What Information We Collect
                    </h2>
                    <p className="mt-2 font-medium">A. Information You Provide Directly:</p>
                    <ul className="mt-1 list-disc pl-6 space-y-1">
                      <li>Full name, email address, phone number</li>
                      <li>Investment preferences</li>
                      <li>Location or property interests</li>
                      <li>Account information (username, password)</li>
                      <li>Payment and billing information (for paid features)</li>
                      <li>Any data or documents you upload to your account</li>
                      <li>Communications or inquiries sent to us</li>
                    </ul>
                    <p className="mt-4 font-medium">B. Information Collected Automatically:</p>
                    <ul className="mt-1 list-disc pl-6 space-y-1">
                      <li>IP address</li>
                      <li>Browser and device information</li>
                      <li>Pages visited, time spent on pages, click data</li>
                      <li>Cookies, web beacons, and similar technologies</li>
                    </ul>
                    <hr className="my-8 border-gray-200" />
                  </section>

                  {/* 3. Cookies & Tracking */}
                  <section id="cookies" className="scroll-mt-28">
                    <h2 className="text-[20px] font-semibold text-[#111]">
                      3. Cookies & Tracking Technologies
                    </h2>
                    <p className="mt-2">
                      Newlista uses cookies and similar tracking technologies to improve user
                      experience, support website functionality, and analyze usage trends.
                    </p>
                    <ul className="mt-2 list-disc pl-6 space-y-1">
                      <li>
                        <span className="font-medium">Essential Cookies –</span> Required for site
                        functionality, such as maintaining login sessions and security. These are
                        always active.
                      </li>
                      <li>
                        <span className="font-medium">Analytics Cookies –</span> We use Google
                        Analytics and similar tools to understand user behavior and improve
                        performance. These may collect information such as your IP address, device
                        type, and browsing activity.
                      </li>
                      <li>
                        <span className="font-medium">Advertising & Personalization Cookies –</span>{" "}
                        If enabled, these may be used to deliver relevant content, remember your
                        preferences, or support retargeting/advertising campaigns.
                      </li>
                    </ul>
                    <h3 className="mt-4 text-[16px] font-semibold">Your Choices:</h3>
                    <ul className="mt-2 list-disc pl-6 space-y-1">
                      <li>
                        Users in the United States may opt out of analytics and advertising cookies
                        via the cookie consent banner or browser settings.
                      </li>
                      <li>
                        Visitors from the European Union (EU), European Economic Area (EEA), or
                        other regions with similar privacy laws will be asked to provide explicit
                        consent before non-essential cookies (analytics or advertising) are placed on
                        your device.
                      </li>
                    </ul>
                    <p className="mt-2">
                      You may disable or withdraw consent at any time through your browser settings.
                      Please note that some features of the Site may not function properly without
                      cookies.
                    </p>
                    <hr className="my-8 border-gray-200" />
                  </section>

                  {/* 4. How We Use */}
                  <section id="use" className="scroll-mt-28">
                    <h2 className="text-[20px] font-semibold text-[#111]">
                      4. How We Use Your Information
                    </h2>
                    <p className="mt-2">We use your information to:</p>
                    <ul className="mt-1 list-disc pl-6 space-y-1">
                      <li>Provide and manage your account</li>
                      <li>Facilitate communication with other users (investor networking)</li>
                      <li>Verify eligibility for investor-only access</li>
                      <li>Enable property listing and viewing</li>
                      <li>Process payments (for premium features or listing fees)</li>
                      <li>Detect and prevent fraud or misuse</li>
                      <li>Send email communications (updates, offers, alerts)</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                    <hr className="my-8 border-gray-200" />
                  </section>

                  {/* 5. Communications Consent */}
                  <section id="comms" className="scroll-mt-28">
                    <h2 className="text-[20px] font-semibold text-[#111]">
                      5. Communications Consent (CAN-SPAM / TCPA Compliance)
                    </h2>
                    <p className="mt-2">
                      By signing up, you consent to receive emails from Newlista about your account,
                      new features, and investor-related opportunities. If you provide a phone
                      number, you may also receive SMS messages. You may opt out at any time via the
                      unsubscribe link or by replying "STOP" to SMS messages.
                    </p>
                    <hr className="my-8 border-gray-200" />
                  </section>

                  {/* 6. Disclosure */}
                  <section id="disclosure" className="scroll-mt-28">
                    <h2 className="text-[20px] font-semibold text-[#111]">
                      6. Disclosure of Information
                    </h2>
                    <p className="mt-2">
                      We do not sell or rent your personal information. However, we may disclose it
                      under these circumstances:
                    </p>
                    <ul className="mt-1 list-disc pl-6 space-y-1">
                      <li>
                        To service providers assisting with our operations (e.g., hosting, payment
                        processing, analytics)
                      </li>
                      <li>If required by law or legal process</li>
                      <li>In the event of a merger, acquisition, or sale of assets</li>
                      <li>
                        To enforce our Terms of Use or protect the rights, safety, or security of
                        Newlista or its users
                      </li>
                    </ul>
                    <p className="mt-3 font-medium">SMS Communications:</p>
                    <p className="mt-1">
                      Newlista does not send commercial SMS messages at this time. If SMS messaging
                      is implemented in the future, it will comply with all applicable laws. Newlista
                      is not responsible for SMS compliance by third parties. Users opting in are
                      responsible for accurate information and permissions required under law.
                    </p>
                    <hr className="my-8 border-gray-200" />
                  </section>

                  {/* 7. Third-Party */}
                  <section id="thirdparty" className="scroll-mt-28">
                    <h2 className="text-[20px] font-semibold text-[#111]">
                      7. Third-Party Services and Links
                    </h2>
                    <p className="mt-2">
                      Newlista may contain links to third-party websites. We are not responsible for
                      their privacy practices or content. Please review their privacy policies before
                      providing them with any information.
                    </p>
                    <hr className="my-8 border-gray-200" />
                  </section>

                  {/* 8. Data Retention */}
                  <section id="retention" className="scroll-mt-28">
                    <h2 className="text-[20px] font-semibold text-[#111]">
                      8. Data Retention and Deletion
                    </h2>
                    <p className="mt-2">
                      We retain user information for as long as necessary to provide the service and
                      meet legal obligations. If you wish to delete your account or request data
                      deletion, contact us at:{" "}
                      <a className="text-blue-600 underline" href="mailto:privacy@newlista.com">
                        privacy@newlista.com
                      </a>
                      .
                    </p>
                    <hr className="my-8 border-gray-200" />
                  </section>

                  {/* 9. Rights */}
                  <section id="rights" className="scroll-mt-28">
                    <h2 className="text-[20px] font-semibold text-[#111]">
                      9. Your Rights Under CPRA/CCPA (California Residents)
                    </h2>
                    <p className="mt-2">If you are a California resident, you have the right to:</p>
                    <ul className="mt-1 list-disc pl-6 space-y-1">
                      <li>Request access to the personal information we collect</li>
                      <li>Request correction or deletion of your data</li>
                      <li>
                        Opt-out of the sale or sharing of your personal information (note: we do not
                        sell personal data)
                      </li>
                      <li>Request information about how your data is shared with third parties</li>
                    </ul>
                    <p className="mt-2">
                      You may exercise these rights by contacting us at{" "}
                      <a className="text-blue-600 underline" href="mailto:privacy@newlista.com">
                        privacy@newlista.com
                      </a>
                      .
                    </p>
                    <hr className="my-8 border-gray-200" />
                  </section>

                  {/* 10. Children */}
                  <section id="children" className="scroll-mt-28">
                    <h2 className="text-[20px] font-semibold text-[#111]">
                      10. Children’s Privacy (COPPA)
                    </h2>
                    <p className="mt-2">
                      Newlista is not intended for users under the age of 18. We do not knowingly
                      collect personal data from children under 13. If you believe we have collected
                      such information, contact us immediately at{" "}
                      <a
                        className="text-blue-600 underline ml-1"
                        href="mailto:compliance@newlista.com"
                      >
                        compliance@newlista.com
                      </a>{" "}
                      and we will delete it.
                    </p>
                    <hr className="my-8 border-gray-200" />
                  </section>

                  {/* 11. Security */}
                  <section id="security" className="scroll-mt-28">
                    <h2 className="text-[20px] font-semibold text-[#111]">
                      11. Security of Your Information
                    </h2>
                    <p className="mt-2">
                      We implement appropriate administrative, technical, and physical safeguards to
                      protect your data. However, no system is completely secure. Users are
                      responsible for keeping login credentials confidential.
                    </p>
                    <hr className="my-8 border-gray-200" />
                  </section>

                  {/* 12. Accessibility */}
                  <section id="accessibility" className="scroll-mt-28">
                    <h2 className="text-[20px] font-semibold text-[#111]">
                      12. ADA & Accessibility
                    </h2>
                    <p className="mt-2">
                      Newlista is committed to providing a platform that is accessible to all users.
                      If you experience any accessibility barriers while using our platform, please
                      contact us at{" "}
                      <a className="text-blue-600 underline ml-1" href="mailto:support@newlista.com">
                        support@newlista.com
                      </a>
                      .
                    </p>
                    <hr className="my-8 border-gray-200" />
                  </section>

                  {/* 13. International Use */}
                  <section id="intl" className="scroll-mt-28">
                    <h2 className="text-[20px] font-semibold text-[#111]">13. International Use</h2>
                    <p className="mt-2">
                      Newlista is intended for use by U.S. residents only. If you access the
                      platform from outside the U.S., you do so at your own risk and are responsible
                      for complying with local laws.
                    </p>
                    <hr className="my-8 border-gray-200" />
                  </section>

                  {/* 14. Changes */}
                  <section id="changes" className="scroll-mt-28">
                    <h2 className="text-[20px] font-semibold text-[#111]">
                      14. Changes to This Privacy Policy
                    </h2>
                    <p className="mt-2">
                      We may update this Privacy Policy from time to time. Any changes will be
                      posted on this page, and your continued use of Newlista constitutes your
                      acceptance of those changes.
                    </p>
                    <hr className="my-8 border-gray-200" />
                  </section>

                  {/* 15. Contact */}
                  <section id="contact" className="scroll-mt-28">
                    <h2 className="text-[20px] font-semibold text-[#111]">15. Contact Us</h2>
                    <p className="mt-2">
                      If you have questions about this Privacy Policy or wish to make a request
                      regarding your data, please contact:
                    </p>
                    <ul className="mt-2 list-none pl-0 space-y-1">
                      <li>Newlista</li>
                      <li>
                        Email:{" "}
                        <a href="mailto:privacy@newlista.com" className="text-blue-600 underline">
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
                  </section>
                </div>
              </div>

              {/* Back to top */}
              <div className="mt-6 flex justify-end">
                <a
                  href="#intro"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                >
                  ↑ Back to top
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
