import React from 'react'
import SearchBar from '../../SearchBar/SearchBar'
import HeroBg from "../../../assets/HeroSecImage.jpg";


// BACKGORUND
const HeroBackground = {
  backgroundImage: `url(${HeroBg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgb(0 0 0 / 54%)",
  backgroundBlendMode: "color",
};

const HeroSection = () => {
    return (
        <>
            <section
                style={HeroBackground}
                className="relative max-[400px]:px-6 px-10  -mt-[40%] sm:pt-10 sm:-mt-[18%] max-[891px]:pt-12 min-[891px]:pt-18 md:-mt-[15%] lg:px-8 lg:pt-18  xl:-mt-[10%] xl:pt-14"
            >
                <div className="max-[350px]:pt-28 max-[400px]:pt-40 pt-48 max-[400px]:pb-20 pb-28 min-[480px]:!pt-44 flex flex-col justify-center sm:items-center  sm:!pb-36 sm:pt-44 md:!pt-40 md:!pb-32 lg:!py-44">
                    <div className="sm:text-center max-[891px]:pt-7 min-[891px]:pt-10 lg:pt-20">
                        <h1 className="text-[28px] leading-[40px] min-[370px]:!text-[37.5px]  min-[370px]:!leading-[47px] sm:!text-[37px] sm:!leading-[46px]  md:!text-[42px]	md:!leading-[53px] lg:!text-[53px] lg:!leading-[65px] xl:!text-[60px] font-[600] font-Poppins tracking-tight lg:text-balance text-white ">
                            The Ultimate Commercial Real Estate Marketplace & Investor Network
                        </h1>
                    </div>
                    <div className="max-[350px]:w-[90%] w-[75%] sm:w-[50%] md:w-[90%] min-[800px]:w-[80%] lg:w-[100%] xl:w-[97%] 2xl:w-[75%] min-[1780px]:!w-[65%]">
                        <SearchBar></SearchBar>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection