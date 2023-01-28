/* eslint-disable no-nested-ternary */
import { React, useState } from 'react';

import Data from './Booking-Data';

// import { db } from '../../firebase';
//  booking page logical path step by step :

// - create afunction that map the data by ID from other comoponent ,
// - create a function that map the styles from the design component ,
// - create state that linked with the data component ,
// - create state that linked with the design component ,
// - create functionn two arguments each time i click in the button the state will change , the state will change onClick button , each time we click next button the we will push to the n
// - create a function that will save the data when we click on a certain button,
// - create an input that will save the date when we write inside input field inside same ovject ,
// - create a function that interact with firebase to put the collected object inside firebase on submit .
// - create a function to reject next button if user didnt choose answer ,

const Booking = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    BookingData: '',
  });
  const [selectedData, setSelectedData] = useState('');

  async function HandleClick() {
    if (page <= 7) {
      setData({ ...data, [page]: selectedData });
      setPage(page + 1);
    }

    if (page === 8) {
      // await db
      //   .collection('patients')
      //   .doc(selectedData.id)
      //   .set(selectedData)
      //   .then(() => {
      //     console.log('Data added successfully!');
      //   });

      window.location.href = '/';
    }
  }

  // this function will create a parameter to access the data from the data component , and will map the data based on the id of the page
  const filteredData = Data.filter((any) => any.id === page);

  return (
    <form className=" flex- col xl:mt-28 " data-testid="Booking">
      <div className=" container sm:mr-20  bg-white  ">
        <div className="    h-auto  xl:ml-28 lg:ml-12  md:ml-10  sm:ml-1  ">
          {filteredData.map((any) => (
            <div className=" xxl:text-3xl xl:text-3xl lg:text-2xl sm:w-[80%] xs:w-[80%]  w-[60%] md:text-xl sm:text-sm  uppercase  ">
              {any.h1}
            </div>
          ))}
          {filteredData.map((any) => (
            <div className=" p-2 sm:p-1 w-[60%] sm:w-[80%]    absolute  sm:text-sm md:text-sm xl:text-base lg:text-base  font-poppins  text-black/50">
              {any.subheader}
            </div>
          ))}
        </div>

        <div className=" md:mt-10 xl:mt-1 sm:mt-1  justify-center  w-screen  card self-center flex flex-col items-center  px-6 py-4 mx-auto h-screen lg:py-0">
          <div
            className="  h-auto   rounded p-4  bg-white"
            style={{ boxShadow: '0px 4px 12px 0 rgba(0,0,0,0.12)' }}
          >
            {filteredData.map((any) => (
              <div className=" flex  items-center p-4  justify-center   md:text-xl sm:text-xs lg:text-2xl xl:text-3xl text-left capitalize text-black">
                {any.question}
              </div>
            ))}

            {page >= 1 && page <= 3 ? (
              <div>
                {filteredData.map((item) =>
                  item.answer.map((answer) => (
                    <div className=" mx-3 pt-7  sm:w-[80%] ">
                      <button
                        key={answer.id}
                        type="button"
                        value={answer}
                        name="answer"
                        className=" appearance-none pl-[1rem] mt-4 text-base p-2 text-center capitalize flex items-center md:text-xl sm:text-sm w-full  sm:h-[3rem] h-[3.5rem]  transition-all duration-500 hover:bg-[#2dd3e3] active:bg-[#2dd3e3] active:text-white hover:text-white bg-white border-2 rounded-md border-gray-150 "
                        onClick={(e) => {
                          setSelectedData({
                            ...selectedData,
                            [page]: e.target.value,
                          });
                        }}
                      >
                        {answer}
                      </button>
                    </div>
                  ))
                )}
              </div>
            ) : page >= 4 && page <= 5 ? (
              <div>
                {filteredData.map((item) =>
                  item.answer.map((any) => (
                    <div key={any.id} className=" flex items-center gap-2 p-2">
                      <input
                        type="radio"
                        value={any}
                        key={any.id}
                        name="answer"
                        placeholder="Enter your answer"
                        onClick={(e) => {
                          setSelectedData({
                            ...selectedData,
                            [page.any]: e.target.value,
                          });
                        }}
                        className=" text-xl  w-5 h-5 text-black-600 bg-gray-100 border-Black-300 focus:#06b6d4  dark:focus:bg-cyan-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-2 font-medium text-black-900 dark:text-gray-300"
                      />
                      {any}
                    </div>
                  ))
                )}
              </div>
            ) : page === 6 && page ? (
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900"
                  htmlFor="thoughts "
                >
                  <textarea
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                    placeholder="Write your thoughts here..."
                    type="text"
                    onChange={(e) => {
                      setSelectedData({
                        ...data,
                        [page]: e.target.value,
                      });
                    }}
                  />
                </label>
              </div>
            ) : page >= 7 && page >= 8 ? (
              <div>
                {filteredData.map((any) => (
                  <div className=" p-2 sm:p-1 w-[60%] sm:w-[80%]    absolute  sm:text-sm md:text-sm xl:text-base lg:text-base  font-poppins  text-black/50">
                    {any.subheader}
                  </div>
                ))}
              </div>
            ) : null}
            {filteredData.map((any) => (
              <button
                key={any.id}
                onClick={HandleClick}
                type="button"
                className="   mt-40 p-2 sm:mt-20    flex items-center  sm:text-xl   sm:h-[3rem]  transition-all duration-500 align-bottom  md:text-3xl ml-2  lg:px-6   text-3xl text-center uppercase text-black  xl:h-[60px]  xl:w-[6.5rem] md:h-[60px] md:[6.5] justify-center hover:bg-[#27B2C4]  hover:text-black  rounded-md bg-[#2dd3e3]"
              >
                {any.Button}
              </button>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Booking;
