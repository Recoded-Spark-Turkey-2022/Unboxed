import React from "react";
import FounderPP from "./FounderPP.svg";

const HealingInfo = () => {

    return(

        <div data-testid="AboutUs" className="font-poppins">
            <div className="bg-white laptop:mx-48 mb-20 tablet:mx-24 sm:mx-12">
                <h1 className="laptop:text-5xl tablet:text-4xl sm:text-3xl uppercase mt-20">
                    healing!
                </h1>
                <p className="laptop:text-2xl tablet:text-xl sm:text-lg mt-3 font-light leading-relaxed text-black text-opacity-50">
                    some cool one liner !
                </p>
                <p className="laptop:text-xl tablet:text-lg sm:text-base mt-12">
                    At Healing, we believe there is a better way to do things. A more valuable way where customers are earned rather than bought. We&apos;re obsessively passionate about it, and our mission is to help people achieve it. We focus on search engine optimization. It&apos;s one of the least understood and least transparent aspects of great marketing, and we see that as an opportunity. We&apos;re excited to simplify SEO for everyone through our software, education, and community.
                </p>
            </div>
            <div className="bg-[#EAF8F9] flex flex-row sm:flex-col items-center w-full ">
                <img className="rounded-md tablet:my-8 laptop:ml-48 mr-12 tablet:ml-16 sm:ml-12 tablet:w-1/2 sm:w-3/4 sm:mt-8" src={FounderPP} alt="FounderPP"/>
                <div className="text-[#424A4F] flex flex-col sm:mx-12 tablet:my-16 sm:my-12">
                    <h1 className="laptop:text-5xl tablet:text-4xl sm:text-3xl mb-8 laptop:mr-52 tablet:mr-24">
                        Our Founding
                    </h1>
                    <p className="laptop:text-xl tablet:text-lg sm:text-base laptop:mr-52 tablet:mr-24">
                        Healing was founded by Payam Abubakr in 2021. It was called Healing Online, and started as a blog and an online community where some of the world&apos;s therapists shared their research and ideas. We launched the Beginner&apos;s Guide to Therapy and our first study, and that hub of industry expertise transformed into a small consulting firm and led us to create the Online Therapist of today!
                    </p>
                </div>
            </div>
        </div>
    )
}
export default HealingInfo;