import React from 'react';
import phonecallimg from './phonecall.svg';
import chatimg from './chat.svg';
import videocallimg from './videocall.svg';

const Comm = () => {
  return (
    <div
      data-testid="Comm"
      className=" p-[4rem] flex flex-row px-2 tablet:justify-center font-poppins"
    >
      <div className="tablet:space-y-4">
        <h1 className="text-2xl font-medium tablet:font-normal tablet:text-5xl ">
          WE CAN COMMUNICATE THROUGH
        </h1>
        <div className="flex flex-row flex-wrap justify-center gap-6 tablet:gap-8 sm:gap-10">
          <div className="flex-col-4 tablet:w-80 tablet:h-80 w-40 h-40 pt-6 tablet:pt-16 tablet:space-y-4 space-y-2 tablet:mt-4  shadow-2xl rounded-lg align-start text-center">
            <img
              className="flex object-center mx-auto h-1/3 w-1/3 md:h-1/3 md:w-1/3"
              src={phonecallimg}
              alt="phonecallimg"
            />
            <h2 className="text-2xl sm:text-base font-semibold tablet:text-5xl ">
              Voice Call
            </h2>
            <p className="pb-1 sm:text-xs">
              Feeling ready? Give your therapist a voice call and talk your
              heart out!
            </p>
          </div>
          <div className="flex-col-4 object-center tablet:w-80 tablet:h-80 w-40 h-40 pt-6 tablet:pt-16 tablet:space-y-4 space-y-2 tablet:mt-4  shadow-2xl rounded-lg align-start text-center">
            <img
              className="flex object-center mx-auto h-1/3 w-1/3 md:h-1/3 md:w-1/3"
              src={chatimg}
              alt="chatimg"
            />
            <h2 className="text-2xl sm:text-base font-semibold tablet:text-5xl">
              Chat
            </h2>
            <p className="pb-1 sm:text-xs">
              Need to talk to someone? Come have a chat with your therapist!
            </p>
          </div>
          <div className="flex flex-col items-center justify-evenly sm:w-40 sm:h-40 tablet:w-80 tablet:h-80 w-40 h-40 pt-6 tablet:pt-16 tablet:space-y-4 space-y-2 tablet:mt-4  shadow-2xl rounded-lg align-start text-center">
            <img
              className="flex object-center mx-auto h-1/3 w-1/3 md:h-1/3 md:w-1/3,"
              src={videocallimg}
              alt="videocallimg"
            />
            <h2 className="text-2xl sm:text-base font-semibold tablet:text-5xl">
              Video Call
            </h2>
            <p className="pb-1 sm:text-xs">
              For better experience therapists recommend video calls, but this
              is a choice!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comm;
