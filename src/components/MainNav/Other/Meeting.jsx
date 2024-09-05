import React from 'react';
import { FaVideo, FaMicrophone, FaPhone, FaDesktop, FaShareSquare } from 'react-icons/fa';

import { BsCalendar } from 'react-icons/bs';
import s1 from '../../assest/media/s1.png'
import s2 from '../../assest/media/s2.png'
import s3 from '../../assest/media/s3.png'
import back from '../../assest/media/back.png'
import setting from '../../assest/media/setting.png'
import teacher from '../../assest/media/teacher.png'
import hour from '../../assest/media/hour.png'
import book1 from '../../assest/media/book1.png'
import book2 from '../../assest/media/book2.png'
import lesson from '../../assest/media/lesson.png'





const Meeting = () => {
  return (
    <div className="container mx-auto my-4 px-4 lg:px-0 bg-blue-50">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md mb-4">
            <div className="flex items-center p-4 border-b border-gray-200">
              <button className="bg-white border-none rounded-lg p-2">
                <a href="/">
                  <img src={back} alt="Back" className="w-6" />
                </a>
              </button>
              <div className="ml-4">
                <h5 className="text-xl font-semibold text-gray-800 mb-1">UX/UI Design Conference Meeting</h5>
                <small className="text-gray-600">9 Lesson 6h 30min</small>
              </div>
              <div className="ml-auto">
                <button className="bg-white border-none p-2 rounded-lg">
                  <img src={setting} alt="Settings" className="w-6" />
                </button>
              </div>
            </div>
            <div className="p-0">
              <div className="relative">
                <img src={teacher} alt="Conference" className="w-full rounded-t-lg" />
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <a href="#"><img src={s1} alt="Participant" className="w-28 h-auto border-3 border-white rounded-lg" /></a>
                  <a href="#"><img src={s2} alt="Participant" className="w-28 h-auto border-3 border-white rounded-lg" /></a>
                  <a href="#"><img src={s3} alt="Participant" className="w-28 h-auto border-3 border-white rounded-lg" /></a>
                </div>
              </div>
              <div className="flex justify-center gap-2 py-4" id="function-button">
                <button className="bg-white border-none rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                  <FaVideo className="text-red-500 text-2xl" />
                </button>
                <button className="bg-white border-none rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                  <FaMicrophone className="text-blue-500 text-2xl" />
                </button>
                <button className="bg-white border-none rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                  <FaPhone className="text-pink-500 text-2xl rotate-180" />
                </button>
                <button className="bg-white border-none rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                  <FaDesktop className="text-teal-500 text-2xl" />
                </button>
                <button className="bg-white border-none rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                  <FaShareSquare className="text-teal-500 text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1">
          {/* Course Contents Card */}
          <div className="bg-white rounded-lg shadow-md mb-4">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-semibold">Course Contents</h5>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span>2/5 completed</span>
                <button className="bg-white border rounded-lg p-2 flex items-center">
                  <BsCalendar className="text-teal-500 text-xl" />
                </button>
              </div>
              <div className="relative mb-4 bg-gray-200 rounded-full h-1">
                <div className="bg-teal-500 h-1 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <div className="accordion">
                <div className="border-t border-gray-200">
                  <h2>
                    <button className="text-teal-500 font-semibold w-full text-left py-2" type="button">
                      Get Started
                    </button>
                  </h2>
                  <div className="accordion-body">
                    <img src={hour} alt="Hour" className="inline" /> 1 Hour 
                    <img src={lesson} alt="Lesson" className="inline" /> 5 Lessons
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <h2>
                    <button className="text-teal-500 font-semibold w-full text-left py-2" type="button">
                      Illustrator Structures
                    </button>
                  </h2>
                  <div className="accordion-body">
                    <ul className="list-none pl-0">
                      <li className="flex justify-between py-1">1. Lorem ipsum dolor sit amet <span className="text-gray-500">65:00</span></li>
                      <li className="flex justify-between py-1">2. Lorem ipsum dolor sit amet <span className="text-gray-500">25:00</span></li>
                      <li className="flex justify-between py-1">3. Lorem ipsum dolor sit amet <span className="text-gray-500">30:00</span></li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <h2>
                    <button className="text-teal-500 font-semibold w-full text-left py-2" type="button">
                      Using Illustrator
                    </button>
                  </h2>
                  <div className="accordion-body">
                    <img src={hour} alt="Hour" className="inline" /> 1 Hour &nbsp;&nbsp;&nbsp;&nbsp; <img src={lesson} alt="Lesson" className="inline" /> 4 Lessons
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <h2>
                    <button className="text-teal-500 font-semibold w-full text-left py-2" type="button">
                      What is Pandas?
                    </button>
                  </h2>
                  <div className="accordion-body">
                    12:54 · 5 Lessons
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <h2>
                    <button className="text-teal-500 font-semibold w-full text-left py-2" type="button">
                      Work with Numpy
                    </button>
                  </h2>
                  <div className="accordion-body">
                    59:00 · 3 Lessons
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Book For You Card */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-semibold">Book for you</h5>
                <i className="fa-regular fa-calendar text-teal-500 text-xl"></i>
              </div>
              <div className="flex gap-2">
                <a href="#" className="w-1/2">
                  <div className="bg-white rounded-lg shadow-sm">
                    <img src={book1} alt="Book 1" className="w-full rounded-t-lg" />
                    <div className="p-2">
                      <p className="text-base font-medium mb-1">All Benefits of PLUS</p>
                      <p className="text-xl font-semibold text-teal-500">$24</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="w-1/2">
                  <div className="bg-white rounded-lg shadow-sm">
                    <img src={book2} alt="Book 2" className="w-full rounded-t-lg" />
                    <div className="p-2">
                      <p className="text-base font-medium mb-1">All Benefits of PLUS</p>
                      <p className="text-xl font-semibold text-teal-500">$24</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
