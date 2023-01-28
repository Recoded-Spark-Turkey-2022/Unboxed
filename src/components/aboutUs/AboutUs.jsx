import React from 'react';
import FounderPP from './HadiMaleh.jpg';

const HealingInfo = () => {
  return (
    <div data-testid="AboutUs" className="font-poppins max:h-middle">
      <div className="bg-white laptop:px-48  tablet:px-24 sm:px-12 h-fifty">
        <h1 className="laptop:text-5xl tablet:text-4xl sm:text-3xl uppercase pt-10">
          healing!
        </h1>
        <p className="laptop:text-2xl tablet:text-xl sm:text-lg mt-3 font-light leading-relaxed text-black text-opacity-50">
          some cool one liner !
        </p>
        <p className="laptop:text-xl tablet:text-lg sm:text-base pt-6 pb-6">
          At Healing, we believe there is a better way to do things. A more
          valuable way where customers are earned rather than bought. We&apos;re
          obsessively passionate about it, and our mission is to help people
          achieve it. We focus on search engine optimization. It&apos;s one of
          the least understood and least transparent aspects of great marketing,
          and we see that as an opportunity. We&apos;re excited to simplify SEO
          for everyone through our software, education, and community.
        </p>
      </div>
      <div className="bg-[#EAF8F9] flex flex-row sm:flex-col items-center w-full h-fifty">
        <img
          className="rounded-md tablet:py-8 laptop:pl-48 pr-12 tablet:pl-16 sm:pl-12 w-full sm:pt-8 h-webkit"
          src={FounderPP}
          alt="FounderPP"
        />
        <div className="text-[#424A4F] flex flex-col sm:px-12 tablet:py-16 sm:py-12">
          <h1 className="laptop:text-5xl tablet:text-4xl sm:text-3xl pb-8">
            Our Founding
          </h1>
          <p className="laptop:text-xl tablet:text-lg sm:text-base ">
            Healing was founded by Payam Abubakr in 2021. It was called Healing
            Online, and started as a blog and an online community where some of
            the world&apos;s therapists shared their research and ideas. We
            launched the Beginner&apos;s Guide to Therapy and our first study,
            and that hub of industry expertise transformed into a small
            consulting firm and led us to create the Online Therapist of today!
          </p>
        </div>
      </div>
    </div>
  );
};
export default HealingInfo;
