/* eslint-disable no-alert */
/* eslint-disable no-nested-ternary */
import { React, useState } from 'react';
import { MdArrowBackIos } from 'react-icons/md/index';
import Data from './Booking-Data';

// import { db } from '../../firebase';

const Booking = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    BookingData: '',
  });
  const [selectedData, setSelectedData] = useState('');

  function HandleClick() {
    if (page >= 1 && page <= 6) {
      if (!selectedData[page]) {
        alert('Please choose an answer');
        return;
      }
    }
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
    <form className=" flex- col xl:mt-10" data-testid="Booking">
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

        <div className="flex flex-col w-full px-8 mx-auto mb-10 md:max-w-2xl lg:max-w-4xl">
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
                            [page]: e.target.value,
                          });
                        }}
                        className=" appearance-none border-2 border-black-500 rounded-md md:text-3xl   p-2 w-5 h-5  text-black-600 bg-gray-100 focus:outline-black  focus:ring-cyan-200   transition-all duration-500 hover:bg-cyan-100  focus:bg-[#2dd3e3]   focus:ring-2 focus:ring-bg-black ml-2 font-xl text-black-900 "
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
              <div className="ml-[40%] sm:ml-[25%] md:ml-[30%] mb-[2%]">
                <button
                  key={any.id}
                  onClick={HandleClick}
                  type="button"
                  className=" p-auto  mt-20 p-2 sm:mt-20 xl:text-2xl     flex items-center  sm:text-sm   sm:h-[3rem]   md:text-base  transition-all duration-500 align-bottom   ml-2  lg:px-6   text-3xl text-center uppercase text-black  xl:h-[3.5rem]  xl:w-[12rem]  md:w-[12rem] md:h-[3.5rem]  justify-center hover:bg-[#27B2C4]  hover:text-black  rounded-md bg-[#2dd3e3]"
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
