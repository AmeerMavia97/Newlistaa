import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import MiniFooter from "../../Components/Footer/MiniFooter";
import Footer from "../../Components/Footer/Footer";

const Accessibility = () => {
  return (
    <>
      <section className="px-6 sm:px-16 md:px-20 py-20 sm:py-24 md:py-32 text-[#1E1E1E]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[32px] md:text-[43px] 2xl:text-[48px] font-bold font-Urbanist mb-6">
            Accessibility Statement 
          </h1>
          <p className="text-sm sm:text-base text-gray-700 mb-8">
            Last Updated: October 1, 2025
          </p>

          <div className="space-y-6 text-[17px] leading-relaxed font-Inter text-gray-800">
            {/* 1. Introduction */}
            <div>
              <h2 className="font-semibold text-[19px]">Our Commitment</h2>
              <p>
                Newlista is committed to providing a digital platform that is accessible to all users, including those with disabilities. We continually strive to improve the user experience and apply recognized accessibility standards to the extent reasonably practicable, including the Web Content Accessibility Guidelines (WCAG) 2.1, Levels A and AA, and the Americans with Disabilities Act (ADA). 
              </p>
            </div>

            {/* 2. What Information We Collect */}
            <div>
              <h2 className="font-semibold text-[19px]">Our Efforts </h2>
              <ul className="list-disc pl-6">
                <li>We design and maintain Newlista following best practices for accessibility. </li>
                <li>We regularly review the platform to identify and address potential accessibility barriers. </li>
                <li>Some features may rely on third-party tools or integrations outside our control; however, we make commercially reasonable efforts to work with vendors that support accessibility. </li>
                <li>We conduct periodic audits using internal testing and assistive technologies such as screen readers (e.g., JAWS, NVDA, VoiceOver) to improve accessibility. </li>
              </ul>
            </div>

            {/* 3. Cookies & Tracking */}
            <div>
              <h2 className="font-semibold text-[19px]">Feedback & Assistance</h2>
              <p>
                If you experience difficulty accessing any part of Newlista, don't hesitate to get in touch with us at: <strong>support@newlista.com</strong>
              </p>
              <p>When contacting us, please provide:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Your name and contact information
                </li>
                <li>
                  The webpage or feature where you experienced difficulty
                </li>
                <li>
                  A brief description of the issue 
                </li>
              </ul>
              <p>We will make reasonable efforts to provide the information, content, or service you need in an accessible format. </p>
              <h2 className="font-semibold text-[15px] mt-2">Accessibility Portal  </h2>
              <p>To facilitate transparency and continuous improvement, Newlista maintains an <strong>Accessibility Portal</strong> where users can view:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Accessibility audits and reports</li>
                <li>Updates on ongoing accessibility improvements  </li>
                <li>Guidance on using assistive technologies with our platform  </li>
              </ul>
              <p>You can access the portal here: <strong>[insert link to accessibility portal]</strong>  </p>

            </div>

            {/* 4. How We Use */}
            <div>
              <h2 className="font-semibold text-[19px]">Third-Party Content</h2>
              <p>Certain links or features may direct you to third-party websites or services. We cannot guarantee that these third-party sites comply with accessibility laws or standards. </p>
             
            </div>

            {/* 5. Communications Consent */}
            <div>
              <h2 className="font-semibold text-[19px]">
                Ongoing Commitment
              </h2>
              <p>
               While we cannot guarantee that every part of Newlista will be fully accessible to every user, we are committed to listening, learning, and making continuous improvements to enhance accessibility for all. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accessibility;
