import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

function CounterCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex flex-col sm:flex-row ">
      <div className="sm:w-[34rem] p-5 space-y-5 overflow-y-auto h-[100vh] scrollbar-hidden">
        <Link to="/" className="bg-[#49BBBD] text-white px-3 py-2 rounded font-bold">
        <i class="fa-solid fa-arrow-left"></i>
        </Link>
        <h3 className="text-2xl">Change Simplification</h3>
        <div className="">
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#49BBBD]">
            <i className="fa-solid fa-book-open text-white"></i>
            <p className="text-white text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#F48C064D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#9DCCFF4D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#EE645B4D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
        </div>
        
        <h3 className="text-2xl">PRACTICE QUIZ</h3>
        <div>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#F48C064D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#9DCCFF4D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#EE645B4D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#F48C064D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#9DCCFF4D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#EE645B4D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#F48C064D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#9DCCFF4D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#EE645B4D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#F48C064D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#9DCCFF4D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#EE645B4D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
        </div>

        <h3 className="text-2xl">PRACTICE QUIZ</h3>
        <div>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#F48C064D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#9DCCFF4D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#EE645B4D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#F48C064D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#9DCCFF4D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#EE645B4D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#F48C064D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#9DCCFF4D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#EE645B4D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#F48C064D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#9DCCFF4D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 my-4 rounded-xl bg-[#EE645B4D]">
            <i className="fa-solid fa-book-open text-black"></i>
            <p className="text-black text-sm">
              Lesson 01: Introduction about XD
            </p>
            <span className="text-sm">30 mins</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full">
        <div className="bg-[#49BBBD] px-5 py-7 ">
          <p className="text-white text-3xl">
            Learn about Adobe XD & Prototyping
          </p>
          <div className="flex justify-between text-white">
            <p>Introduction about XD</p>
            <p className="flex items-center gap-2">
              <i className="fa-regular fa-clock"></i>1 hour
            </p>
          </div>
        </div>

        <div className="bg-[#ebf5ff] px-5 pb-10">
          <h3 className="py-10 text-2xl font-medium">Share and refer</h3>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
            eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
            eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed
            do eiusmodLoremLorem ipsum dolor sit amet, consectetur adi piscing
            elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing
            elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmodadipiscing elit, sed do
            eiusmodeiusmodadipiscing elit, sed do eiusmodLorem eiusmodLorem
            dolor sit amet, consectetur adipiscing
          </p>

          <div className="flex flex-col xl:flex-row gap-2 xl:gap-8 bg-white mt-10 p-10 rounded-3xl">
            <div className="py-10 ">
              <Calendar onChange={setDate} value={date} className="border-none w-full" />
            </div>

            <div className="lineTwo"></div>

            <div className="w-full flex flex-col gap-5">
              <div>
                <p className="w-full text-center font-semibold py-5">
                  Sep 12, Monday
                </p>
                <div className="flex flex-row items-center gap-5">
                  <p className="whitespace-nowrap text-gray-400">2 PM</p>
                  <div className="line w-full"></div>
                </div>
                <p className="relative left-14 bg-[#fad0cd] text-[#ee645b] w-52 px-5 py-3 font-medium rounded-xl">
                  Adobe XD Live Class
                </p>
              </div>

              <div className="flex flex-row items-center gap-5">
                  <p className="whitespace-nowrap text-gray-400">2 PM</p>
                  <div className="line w-full"></div>
                </div>

                <div className="flex flex-row items-center gap-5">
                  <p className="whitespace-nowrap text-gray-400">2 PM</p>
                  <div className="line w-full"></div>
                </div>

                <div className="flex flex-row items-center gap-5">
                  <p className="whitespace-nowrap text-gray-400">2 PM</p>
                  <div className="line w-full"></div>
                </div>

                <div className="flex flex-row items-center gap-5">
                  <p className="whitespace-nowrap text-gray-400">2 PM</p>
                  <div className="line w-full"></div>
                </div>
                <div className="flex flex-row items-center gap-5">
                  <p className="whitespace-nowrap text-gray-400">2 PM</p>
                  <div className="line w-full"></div>
                </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterCalendar;
