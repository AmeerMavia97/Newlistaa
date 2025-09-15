// IMAGES
import AddPropertyBanner from "../../assets/AddPropertyBanner.jpg";

// BACKGORUND
const BannerBackground = {
  backgroundImage: `url(${AddPropertyBanner})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundBlendMode: "black",
  backgroundColor: "#0009",
  backgroundBlendMode: "color"
};

const Accessibility = () => {
  return (
    <>
      <section
        style={BannerBackground}
        className="flex items-center justify-center"
      >
        <div className="py-22">
          <h1 className="text-white font-Urbanist text-5xl font-bold"> Accessibility</h1>
        </div>
      </section>
      <section className="px-6 sm:px-16 md:px-20 py-20 sm:py-24 md:py-24 text-[#1E1E1E]">
        <div className="">
          <h1 className="text-[32px] md:text-[43px] 2xl:text-[48px] font-bold font-Urbanist mb-3">
          Accessibility Statement
          </h1>
          <p className="text-sm sm:text-base font-semibold text-gray-700 mb-5">
            Last Updated: October 1, 2025
          </p>

          <div className="space-y-7 text-[17px] leading-relaxed font-Inter text-gray-800">
            {/* 1. Introduction */}
            <div>
              <h2 className="font-bold text-black text-[27px] font-Urbanist">Our Commitment</h2>
              <p className="text-[15px]  leading-[22px]">
                Newlista is committed to providing a digital platform that is accessible to all users, including those with disabilities. We continually strive to improve the user experience and apply recognized accessibility standards to the extent reasonably practicable, including the Web Content Accessibility Guidelines (WCAG) 2.1, Levels A and AA, and the Americans with Disabilities Act (ADA).
              </p>
            </div>

            {/* 2. What Information We Collect */}
            <div>
              <h2 className="font-bold text-black text-[27px] font-Urbanist">Our Efforts </h2>
              <ul className="list-disc space-y-2 pl-5 pt-2 text-[15px]  leading-[22px]">
                <li>We design and maintain Newlista following best practices for accessibility. </li>
                <li>We regularly review the platform to identify and address potential accessibility barriers. </li>
                <li>Some features may rely on third-party tools or integrations outside our control; however, we make commercially reasonable efforts to work with vendors that support accessibility. </li>
                <li>We conduct periodic audits using internal testing and assistive technologies such as screen readers (e.g., JAWS, NVDA, VoiceOver) to improve accessibility. </li>
              </ul>
            </div>

            {/* 3. Cookies & Tracking */}
            <div>
              <h2 className="font-bold text-black text-[27px] font-Urbanist">Feedback & Assistance</h2>
              <p className="text-[15px]  leading-[22px] mt-2">
                If you experience difficulty accessing any part of Newlista, don't hesitate to get in touch with us at: <strong>support@newlista.com</strong>
              </p>
              <p className="text-[18px] my-4  leading-[22px] text-black font-semibold">When contacting us, please provide:</p>
              <ul className="list-disc space-y-2 pl-6 mt-2 text-[15px]  leading-[22px]">
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
              <p className="text-[15px]  leading-[22px] my-4">We will make reasonable efforts to provide the information, content, or service you need in an accessible format. </p>
              <h2 className="font-bold text-black text-[27px] font-Urbanist mt-3">Accessibility Portal  </h2>
              <p className="text-[15px]  leading-[22px] mt-2">To facilitate transparency and continuous improvement, Newlista maintains an <strong>Accessibility Portal</strong> where users can view:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2 text-[15px]  leading-[22px]">
                <li>Accessibility audits and reports</li>
                <li>Updates on ongoing accessibility improvements  </li>
                <li>Guidance on using assistive technologies with our platform  </li>
              </ul>
              <p className="text-[15px]  leading-[22px] mt-4" >You can access the portal here: <strong>[insert link to accessibility portal]</strong>  </p>

            </div>

            {/* 4. How We Use */}
            <div>
              <h2 className="font-bold text-black text-[27px] font-Urbanist">Third-Party Content</h2>
              <p className="text-[15px]  leading-[22px] mt-2">Certain links or features may direct you to third-party websites or services. We cannot guarantee that these third-party sites comply with accessibility laws or standards. </p>

            </div>

            {/* 5. Communications Consent */}
            <div>
              <h2 className="font-bold text-black text-[27px] font-Urbanist">
                Ongoing Commitment
              </h2>
              <p className="text-[15px]  leading-[22px] mt-2">
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
