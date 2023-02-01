import React from 'react';
import { useTranslation } from 'react-i18next';
import nadim from './TeamMembersPP/nadim.jpg';
import esra from './TeamMembersPP/esra.jpg';
import hadi from './TeamMembersPP/hadi.jpg';
import pelin from './TeamMembersPP/pelin2.jpg';
import ysf from './TeamMembersPP/ysf.jpg';
import mucver from './TeamMembersPP/mucver.jpg';

const TeamM = () => {
  const { t } = useTranslation();
  return (
    <div
      data-testid="TeamM"
      className=" font-poppins flex flex-col items-center max:h-middle justify-center"
    >
      <div className=" flex flex-col items-center my-10 w-2/3 lg:w-5/6">
        <div className=" self-start">
          <h1 className="text-5xl sm:text-3xl">{t('teamTitle')}</h1>
          <p className="text-3xl sm:text-xl leading-10 mt-24 sm:mt-16 text-gray-700">
            {t('meat')}
          </p>
        </div>
      </div>

      <div className="mt-32 mb-10 mx-8 flex flex-wrap justify-evenly gap-8 items-center">
        <div className="inline-flex flex-col items-center justify-end w-44 pt-0.5 pb-16 bg-[#EAF8F9] rounded-3xl">
          <img
            className="w-full rounded-tl-3xl rounded-tr-3xl"
            src={nadim}
            alt="brain"
          />
          <div className="w-full h-1.5 bg-[#6BD24D]" />
          <p className="text-xl mt-2 leading-relaxed text-center text-gray-700">
            Nadim Absi
          </p>
          <p className="text-base leading-normal text-center text-gray-700 mt-8">
            {t('jr')}
          </p>
          <div className="flex mt-4">
            <a
              href="https://linkedin.com/in/nadim-absi-a15660217"
              className="text-gray-500 hover:text-gray-800"
            >
              <svg
                className="mr-2 h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24H22.225c.979 0 1.771-.773 1.771-1.729v-20.542C23.996.774 23.204 0 22.225 0z" />
              </svg>
            </a>
            <a
              href="https://github.com/Nadim-absi"
              className="text-gray-500 hover:text-gray-800"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="inline-flex flex-col items-center justify-end w-44 pt-0.5 pb-16 bg-[#EAF8F9] rounded-3xl">
          <img
            className="w-full rounded-tl-3xl rounded-tr-3xl"
            src={esra}
            alt="bridge"
          />
          <div className="w-full h-1.5 bg-[#6BD24D]" />
          <p className="text-xl mt-2 leading-relaxed text-center text-gray-700">
            Esra Akbulat
          </p>
          <p className="text-base leading-normal text-center text-gray-700 mt-8">
            {t('jr')}
          </p>
          <div className="flex mt-4">
            <a
              href="https://linkedin.com/in/esra-akbulat"
              className="text-gray-500 hover:text-gray-800"
            >
              <svg
                className="mr-2 h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24H22.225c.979 0 1.771-.773 1.771-1.729v-20.542C23.996.774 23.204 0 22.225 0z" />
              </svg>
            </a>
            <a
              href="https://github.com/akbulatesra"
              className="text-gray-500 hover:text-gray-800"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="inline-flex flex-col items-center justify-end w-44 pt-0.5 pb-16 bg-[#EAF8F9] rounded-3xl">
          <img
            className="w-full rounded-tl-3xl rounded-tr-3xl"
            src={hadi}
            alt="savior"
          />
          <div className="w-full h-1.5 bg-[#6BD24D]" />
          <p className="text-xl mt-2 leading-relaxed text-center text-gray-700">
            Abdel Hadi Maleh
          </p>
          <p className="text-base leading-normal text-center text-gray-700 mt-8">
            {t('jr')}
          </p>
          <div className="flex mt-4">
            <a
              href="https://linkedin.com/in/abdel-hadi-maleh-877842102/"
              className="text-gray-500 hover:text-gray-800"
            >
              <svg
                className="mr-2 h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24H22.225c.979 0 1.771-.773 1.771-1.729v-20.542C23.996.774 23.204 0 22.225 0z" />
              </svg>
            </a>
            <a
              href="https://github.com/Hadizios"
              className="text-gray-500 hover:text-gray-800"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="inline-flex flex-col items-center justify-end w-44 pt-0.5 pb-16 bg-[#EAF8F9] rounded-3xl">
          <img
            className="w-full rounded-tl-3xl rounded-tr-3xl"
            src={pelin}
            alt="funnyclumsy"
          />
          <div className="w-full h-1.5 bg-[#6BD24D]" />
          <p className="text-xl mt-2 leading-relaxed text-center text-gray-700">
            Pelin Karakoca
          </p>
          <p className="text-base leading-normal text-center text-gray-700 mt-8">
            {t('jr')}
          </p>
          <div className="flex mt-4">
            <a
              href="https://linkedin.com/in/pelin-karakoca-444289149/"
              className="text-gray-500 hover:text-gray-800"
            >
              <svg
                className="mr-2 h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24H22.225c.979 0 1.771-.773 1.771-1.729v-20.542C23.996.774 23.204 0 22.225 0z" />
              </svg>
            </a>
            <a
              href="https://github.com/pelinkarakoca"
              className="text-gray-500 hover:text-gray-800"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="inline-flex flex-col items-center justify-end w-44 pt-0.5 pb-16 bg-[#EAF8F9] rounded-3xl">
          <img
            className="w-full rounded-tl-3xl rounded-tr-3xl"
            src={ysf}
            alt="trouble"
          />
          <div className="w-full h-1.5 bg-[#6BD24D]" />
          <p className="text-xl mt-2 leading-relaxed text-center text-gray-700">
            Yusuf Dumlu
          </p>
          <p className="text-base leading-normal text-center text-gray-700 mt-8 ">
            {t('jr')}
          </p>
          <div className="flex mt-4">
            <a
              href="https://linkedin.com/in/ysfdumlu"
              className="text-gray-500 hover:text-gray-800"
            >
              <svg
                className="mr-2 h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24H22.225c.979 0 1.771-.773 1.771-1.729v-20.542C23.996.774 23.204 0 22.225 0z" />
              </svg>
            </a>
            <a
              href="https://github.com/ysfdumlu"
              className="text-gray-500 hover:text-gray-800"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col items-center justify-end w-44 pt-0.5 pb-16 bg-[#EAF8F9] rounded-3xl">
        <img
          className="w-full rounded-tl-3xl rounded-tr-3xl"
          src={mucver}
          alt="cat"
        />
        <div className="w-full h-1.5 bg-[#6BD24D]" />
        <p className="text-xl mt-2 leading-relaxed text-center text-gray-700">
          Mucver
        </p>
        <p className="text-base leading-normal text-center text-gray-700 mt-4">
          Front-End Development Intern
        </p>
      </div>
    </div>
  );
};

export default TeamM;
