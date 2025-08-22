import GuidanceSec from "../../Components/AboutUs/GuidanceSec/GuidanceSec";
import HeroSection from "../../Components/AboutUs/HeroSection/HeroSection";
import TestimonialSection from "../../Components/Home/TestimonialSection/TestimonialSection";
import ServiceCardShowcase from "../../Components/AboutUs/ServiceCardShowcase/ServiceCardShowcase";



const AboutUs = () => {
  return (
    <>
      <HeroSection></HeroSection>

      <div className="min-[1780px]:px-28">
  
        <ServiceCardShowcase></ServiceCardShowcase>
  
        <GuidanceSec></GuidanceSec>

        <section className="py-14 flex justify-center 2xl:-ml-10">
          <TestimonialSection></TestimonialSection>
        </section>
      </div>

    </>
  );
};

export default AboutUs;
