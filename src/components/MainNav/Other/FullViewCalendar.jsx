import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

import video from "../images/full-view.jpeg";
import bulkin from "../images/bulkin.png";
import laptop from "../images/laptop.png";
import blog02 from "../images/blog-02.png";
import blog03 from "../images/blog-03.png";
import clock from "../images/clock.png";
import cube from "../images/cube.png";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

function FullViewCalendar() {

  
  
  return (
    <>
      <div className="flex flex-col sm:flex-row ">
        <div className="sm:w-[34rem] p-5 space-y-5 overflow-y-auto h-[100vh] scrollbar-hidden">
          <Link
            to="/"
            className="bg-[#49BBBD] text-white px-3 py-2 rounded font-bold"
          >
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
        <div className="w-full bg-[#ebf5ff] px-5 py-10 ">
          <div className="relative">
            <img src={video} alt="" className="w-[100%] rounded-3xl" />
            <div className="absolute bottom-0 px-5 py-5 bg-[#0000004D] w-full rounded-b-3xl">
              <div className="playerBar">
                <div className="bar"></div>
              </div>

              <div className=" flex justify-between text-white">
                <div className="flex items-center gap-5">
                  <i class="fa-solid fa-play"></i>
                  <p>01:05/03:26</p>
                </div>
                <div>
                  <i class="fa-solid fa-expand"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-medium">O6 Super Coins on the way</h3>
            <p className="mt-5 text-[#696984] text:sm">
              Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
              eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing
              elit, sed do eiusmod
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-medium">Who this course is for?</h3>
            <p className="mt-5  text-[#696984] text:sm">
              Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adi
              piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
              eiusmodeiusmodadipiscing elit, sed do eiusmodL
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-medium">Archievable</h3>
            <p className="mt-5 mb-10 text-[#696984] text:sm">
              Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
              eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing
              elit, sed do eiusmodLWho this course is for? Lorem ipsum dolor sit
              amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit,
              sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed
              do eiusmodL
            </p>
          </div>

          <div className="bg-[#F48C064D] py-8 px-10 rounded-xl">
            <div className="flex flex-row gap-5">
              <div>
                <img src={bulkin} alt="" className="w-12 rounded-full" />
              </div>

              <div className="flex flex-col justify-between">
                <h3 className="text-lg font-medium ">Bulkin Simsons</h3>
                <div className="text-[#ffc800]">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <p className="text-sm mt-8 text-[#696984]">
              Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
              eiusmodLorem
            </p>
          </div>
        </div>

      </div>

      <div className="py-10 flex justify-between px-5">
            <h2 className="text-2xl max-sm:text-lg font-medium">Student also bought</h2>
            <div className="flex gap-5">
              <button className="custom-prev-button bg-[#49BBBD] text-white px-4 py-2 rounded-lg">
                <i class="fa-solid fa-less-than"></i>
              </button>

              <button className="custom-next-button  bg-[#49BBBD] text-white px-4 py-2 rounded-lg">
                <i class="fa-solid fa-greater-than"></i>
              </button>
            </div>
          </div>

          <div className="">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              infinite={true}
              loop={true}
              pagination={{
                clickable: true,
              }}

              navigation={{
                nextEl: ".custom-next-button",
                prevEl: ".custom-prev-button",
              }}

              breakpoints={{
                // when window width is >= 480px
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}

              modules={[Navigation, Pagination]}
              className="mySwiper "
            >
              <SwiperSlide className="bg-white p-5 rounded-lg shadow-lg ">
                <div>
                  <img src={blog02} alt="" className="rounded-lg" />
                </div>
                <div className="flex items-center justify-between py-5">
                  <div className="flex gap-2 text-[#696984] font-medium">
                    <div>
                      <img src={cube} alt="" />
                    </div>
                    <p>Design</p>
                  </div>
                  <div className="flex gap-2 text-[#696984] font-medium">
                    <div>
                      <img src={clock} alt="" />
                    </div>
                    <p>3 Months</p>
                  </div>
                </div>
                <h2 className="text-xl font-medium">
                  AWS Certified Solutions Architecture
                </h2>
                <p className="text-sm py-5 text-[#696984]">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <img src={bulkin} alt="" className="w-12 rounded-full" />
                    </div>
                    <h3 className="text-2xl font-medium">Lina</h3>
                  </div>
                  <div className="flex gap-2 text-[#696984]">
                    <p className="line-through">$100</p>
                    <p className="font-semibold">$80</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="bg-white p-5 rounded-lg shadow-lg">
                <div>
                  <img src={laptop} alt="" className="rounded-lg" />
                </div>
                <div className="flex items-center justify-between py-5">
                  <div className="flex gap-2 text-[#696984] font-medium">
                    <div>
                      <img src={cube} alt="" />
                    </div>
                    <p>Design</p>
                  </div>
                  <div className="flex gap-2 text-[#696984] font-medium">
                    <div>
                      <img src={clock} alt="" />
                    </div>
                    <p>3 Months</p>
                  </div>
                </div>
                <h2 className="text-xl font-medium">
                  AWS Certified Solutions Architecture
                </h2>
                <p className="text-sm py-5 text-[#696984]">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <img src={bulkin} alt="" className="w-12 rounded-full" />
                    </div>
                    <h3 className="text-2xl font-medium">Lina</h3>
                  </div>
                  <div className="flex gap-2 text-[#696984]">
                    <p className="line-through">$100</p>
                    <p className="font-semibold">$80</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="bg-white p-5 rounded-lg shadow-lg">
                <div>
                  <img src={blog03} alt="" className="rounded-lg" />
                </div>
                <div className="flex items-center justify-between py-5">
                  <div className="flex gap-2 text-[#696984] font-medium">
                    <div>
                      <img src={cube} alt="" />
                    </div>
                    <p>Design</p>
                  </div>
                  <div className="flex gap-2 text-[#696984] font-medium">
                    <div>
                      <img src={clock} alt="" />
                    </div>
                    <p>3 Months</p>
                  </div>
                </div>
                <h2 className="text-xl font-medium">
                  AWS Certified Solutions Architecture
                </h2>
                <p className="text-sm py-5 text-[#696984]">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <img src={bulkin} alt="" className="w-12 rounded-full" />
                    </div>
                    <h3 className="text-2xl font-medium">Lina</h3>
                  </div>
                  <div className="flex gap-2 text-[#696984]">
                    <p className="line-through">$100</p>
                    <p className="font-semibold">$80</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="bg-white p-5 rounded-lg shadow-lg">
                <div>
                  <img src={laptop} alt="" className="rounded-lg" />
                </div>
                <div className="flex items-center justify-between py-5">
                  <div className="flex gap-2 text-[#696984] font-medium">
                    <div>
                      <img src={cube} alt="" />
                    </div>
                    <p>Design</p>
                  </div>
                  <div className="flex gap-2 text-[#696984] font-medium">
                    <div>
                      <img src={clock} alt="" />
                    </div>
                    <p>3 Months</p>
                  </div>
                </div>
                <h2 className="text-xl font-medium">
                  AWS Certified Solutions Architecture
                </h2>
                <p className="text-sm py-5 text-[#696984]">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <img src={bulkin} alt="" className="w-12 rounded-full" />
                    </div>
                    <h3 className="text-2xl font-medium">Lina</h3>
                  </div>
                  <div className="flex gap-2 text-[#696984]">
                    <p className="line-through">$100</p>
                    <p className="font-semibold">$80</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="bg-white p-5 rounded-lg shadow-lg">
                <div>
                  <img src={blog02} alt="" className="rounded-lg" />
                </div>
                <div className="flex items-center justify-between py-5">
                  <div className="flex gap-2 text-[#696984] font-medium">
                    <div>
                      <img src={cube} alt="" />
                    </div>
                    <p>Design</p>
                  </div>
                  <div className="flex gap-2 text-[#696984] font-medium">
                    <div>
                      <img src={clock} alt="" />
                    </div>
                    <p>3 Months</p>
                  </div>
                </div>
                <h2 className="text-xl font-medium">
                  AWS Certified Solutions Architecture
                </h2>
                <p className="text-sm py-5 text-[#696984]">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <img src={bulkin} alt="" className="w-12 rounded-full" />
                    </div>
                    <h3 className="text-2xl font-medium">Lina</h3>
                  </div>
                  <div className="flex gap-2 text-[#696984]">
                    <p className="line-through">$100</p>
                    <p className="font-semibold">$80</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="bg-white p-5 rounded-lg shadow-lg">
                <div>
                  <img src={blog03} alt="" className="rounded-lg" />
                </div>
                <div className="flex items-center justify-between py-5">
                  <div className="flex gap-2 text-[#696984] font-medium">
                    <div>
                      <img src={cube} alt="" />
                    </div>
                    <p>Design</p>
                  </div>
                  <div className="flex gap-2 text-[#696984] font-medium">
                    <div>
                      <img src={clock} alt="" />
                    </div>
                    <p>3 Months</p>
                  </div>
                </div>
                <h2 className="text-xl font-medium">
                  AWS Certified Solutions Architecture
                </h2>
                <p className="text-sm py-5 text-[#696984]">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <img src={bulkin} alt="" className="w-12 rounded-full" />
                    </div>
                    <h3 className="text-2xl font-medium">Lina</h3>
                  </div>
                  <div className="flex gap-2 text-[#696984]">
                    <p className="line-through">$100</p>
                    <p className="font-semibold">$80</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="bg-white p-5 rounded-lg shadow-lg">
                <div>
                  <img src={laptop} alt="" className="rounded-lg" />
                </div>
                <div className="flex items-center justify-between py-5">
                  <div className="flex gap-2 text-[#696984] font-medium">
                    <div>
                      <img src={cube} alt="" />
                    </div>
                    <p>Design</p>
                  </div>
                  <div className="flex gap-2 text-[#696984] font-medium">
                    <div>
                      <img src={clock} alt="" />
                    </div>
                    <p>3 Months</p>
                  </div>
                </div>
                <h2 className="text-xl font-medium">
                  AWS Certified Solutions Architecture
                </h2>
                <p className="text-sm py-5 text-[#696984]">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <img src={bulkin} alt="" className="w-12 rounded-full" />
                    </div>
                    <h3 className="text-2xl font-medium">Lina</h3>
                  </div>
                  <div className="flex gap-2 text-[#696984]">
                    <p className="line-through">$100</p>
                    <p className="font-semibold">$80</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
    </>
  );
}

export default FullViewCalendar;
