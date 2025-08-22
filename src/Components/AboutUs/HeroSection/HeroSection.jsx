import React from 'react'
import BgImage from "../../../assets/AboutUs1.1.jpg";
import AboutUs1_2 from "../../../assets/AboutUs1.2.jpg";
import AboutUs1_3 from "../../../assets/AboutUs1.3.jpg";

// BACKGORUND
const AboutBgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#0009",
  backgroundBlendMode: "color",
  backgroundPosition: "bottom",
};


const HeroSection = () => {
    return (
        <>
            <section style={AboutBgImage} className="flex justify-center min-[1780px]:px-28">
                <div className="flex flex-col md:flex-row gap-10 px-6 py-28 sm:px-10 sm:py-28 md:px-15 min-[890px]:px-10 lg:px-20 md:py-28 2xl:w-[95%] items-center">
                    <div className="hidden min-[890px]:flex w-[50%] md:justify-center lg:justify-center">
                        <img
                            className=" h-[330px] w-[260px] md:w-[290px] md:h-[360px] lg:w-[360px] lg:h-[410px] xl:w-[430px] xl:h-[480px] min-[1780px]:!w-[470px] min-[1780px]:!h-[530px] object-cover rounded-[15px] "
                            src={AboutUs1_2}
                            alt=""
                        />
                        <img
                            className="w-[200px] h-[200px] md:w-[210px] md:h-[220px] lg:w-[250px] lg:h-[260px] xl:w-[280px] xl:h-[310px] min-[1780px]:!w-[320px] min-[1780px]:!h-[340px] object-cover border-solid border-[#161616] border-[5px] mt-48 md:mt-72 -ml-24 md:-ml-34 lg:-ml-38 xl:-ml-48 z-index layering	rounded-[15px]"
                            src={AboutUs1_3}
                            alt=""
                        />
                    </div>
                    <div className="w-[100%]  min-[890px]:w-[50%] flex flex-col justify-center">
                        {/* Heading  */}
                        <div className="border-b-[1px] border-[#BBBBBB] border-solid pb-7">
                            <h1 class="font-Urbanist font-bold text-[#ececec] text-[27px] sm:text-[30px] md:text-[33px] lg:text-[37px] xl:text-[38px] 2xl:text-[46px] mb-3">
                                About Newlista
                            </h1>
                            <p class="mx-auto   font-semibold text-pretty text-[#ececec] font-Urbanist text-[13px] sm:text-[13.5px] md:text-[14px] lg:text-[15px] xl:text-[14.5px]  2xl:text-[19px]">
                                Newlista is an exclusive commercial real estate investor network and online marketplace where serious investors don’t just find properties, they discover each other. In addition to showcasing, discovering, and acquiring investment properties, members can search for investors and connect with like-minded professionals who share the same investment goals. This makes Newlista more than a listing site. t’s a relationship-building platform designed for real estate success.
                            </p>
                        </div>
                        {/* Paragraph  */}
                        <div>
                            <p class="mx-auto mt-6  font-medium text-pretty text-[#ececec] sm:text-md/8 text-[13px]  font-Urbanist sm:text-[13.5px] md:text-[14px] lg:text-[15px] xl:text-[14.5px] 2xl:text-[19px]">
                                Investors can list their commercial real estate properties for sale or lease — completely free. The platform is strictly for investors, with no service solicitations allowed, so every interaction is focused on genuine opportunities. Members can grow their network, receive instant notifications when a new connection is made, and explore off-market opportunities with trusted peers.
                            </p>
                            <p className="mx-auto mt-6  font-medium text-pretty text-[#ececec] sm:text-md/8 text-[13px]  font-Urbanist sm:text-[13.5px] md:text-[14px] lg:text-[15px] xl:text-[14.5px] 2xl:text-[19px]">Premium members enjoy even more ways to close deals faster, including early access to select listings, the ability to make direct property offers, view the status of offers, whether pending, accepted, or declined, private dashboard messaging for secure investor-to-investor communication, and built-in analytics to monitor listing and profile engagement. Hence, you know what’s resonating and when to follow up. These tools make it easy to collaborate, share market insights, and form joint ventures to acquire properties together.</p>
                            <p className="mx-auto mt-6  font-medium text-pretty text-[#ececec] sm:text-md/8 text-[13px]  font-Urbanist sm:text-[13.5px] md:text-[14px] lg:text-[15px] xl:text-[14.5px] 2xl:text-[19px]">
                                Whether you’re selling a multifamily complex, acquiring industrial property, or partnering on your next retail development, Newlista brings the right people and the right properties together, all in one place.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection