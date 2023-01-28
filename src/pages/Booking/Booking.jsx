/* eslint-disable no-nested-ternary */
import { React, useState } from 'react';
import { MdArrowBackIos } from 'react-icons/md/index';
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

  function HandleClick() {
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
    <form className=" flex- col xl:mt-28" data-testid="Booking">
      <div className="container bg-white sm:mr-20">
        <div className="flex flex-col h-auto font-poppins xl:ml-28 lg:ml-12 md:ml-10 sm:ml-1">
          {filteredData.map((any) => (
            <div className="   font-poppins xxl:text-3xl xl:text-3xl lg:text-2xl sm:w-[80%] xs:w-[80%]  w-[60%] md:text-xl sm:text-sm  uppercase  ">
              {any.h1}
            </div>
          ))}
          {filteredData.map((any) => (
            <div className="   p-2 sm:p-1 w-[60%] sm:w-[80%]     mb-5 sm:text-sm md:text-sm xl:text-base lg:text-base  font-poppins  text-black/50">
              {any.subheader}
            </div>
          ))}
        </div>

        <div className="flex flex-col w-full px-8 py-4 m-5 mx-auto my-16 mt-5 md:max-w-2xl lg:max-w-4xl">
          <div
            className="h-auto p-4 bg-white rounded "
            style={{ boxShadow: '0px 4px 12px 0 rgba(0,0,0,0.12)' }}
          >
            {page >= 2 && page <= 8 ? (
              <MdArrowBackIos
                size="32px"
                className="m-1 mt-1 "
                onClick={() => setPage(page - 1)}
              />
            ) : null}
            {filteredData.map((any) => (
              <div className="flex items-center justify-center p-4 ml-6 text-black capitalize first-letter:text-left md:text-xl sm:text-xs lg:text-2xl xl:text-3xl">
                {any.question}
              </div>
            ))}

            {page >= 1 && page <= 3 ? (
              <div>
                {filteredData.map((item) =>
                  item.answer.map((answer) => (
                    <div className=" mx-6 mt-7  sm:w-[80%] ">
                      <button
                        key={answer.id}
                        type="button"
                        value={answer}
                        name="answer"
                        className="  pl-[1rem] mt-3  text-base p-2 text-center  capitalize flex items-center md:text-xl sm:text-sm w-full focus:outline-none focus:ring focus:ring-cyan-100 sm:h-[3rem] h-[3.5rem]  transition-all duration-500 hover:bg-[#2dd3e3] focus:bg-[#2dd3e3]  focus:text-white hover:text-white bg-white border-2 rounded-md border-gray-150 "
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
                    <div key={any.id} className="flex items-center gap-3 p-2 ">
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
                        className=" appearance-none border-1 border-black rounded-md  text-3xl  w-5 h-5 text-black-600 bg-gray-100 focus:outline-black  focus:ring-cyan-200 sm:h-[3rem]   transition-all duration-500 hover:bg-cyan-100  focus:bg-[#2dd3e3]   focus:ring-2  ml-2 font-xl text-black-900 "
                      />
                      {any}
                    </div>
                  ))
                )}
              </div>
            ) : // eslint-disable-next-line no-nested-ternary
            page === 6 && page ? (
              <div>
                <label
                  className="block mb-2 text-sm text-gray-900 h-50 font-xl"
                  htmlFor="thoughts "
                >
                  <textarea
                    className=" appearance-none   block  p-2.5 w-full xl:h-[20rem] lg-h-[15rem]  md:-[12rem] sm:h-[8rem]: text-sm  text-gray-900 bg-grey-10 rounded-lg border border-gray-300 focus:ring-cyan-500 focus:border-cyan-400"
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
              <div className="ml-[38%] mb-[2%]">
                <button
                  key={any.id}
                  onClick={HandleClick}
                  type="button"
                  className=" p-auto  mt-20 p-2 sm:mt-20 xl:text-xl     flex items-center  sm:text-sm   sm:h-[3rem]  transition-all duration-500 align-bottom  md:text-xl ml-2  lg:px-6   text-3xl text-center uppercase text-black  xl:h-[60px]  xl:w-[6.5rem] md:h-[50px] md:w-[5rem] justify-center hover:bg-[#27B2C4]  hover:text-black  rounded-md bg-[#2dd3e3]"
                >
                  {any.Button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Booking;