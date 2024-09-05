import React from 'react';
import rectangle180 from '../../assest/media/Rectangle 180.png';
import rectangle32_1 from '../../assest/media/Rectangle 32 (1).png';
import rectangle32_2 from '../../assest/media/Rectangle 32 (2).png';
import bgImage from '../../assest/media/BG.png';
import groupImage from '../../assest/media/Group 71.png';
import coursecard from "../../assest/media/course-card.png"
import rectangle from "../../assest/media/Rectangle 32.jfif";
import cube from '../../assest/media/cube.png'
import clock from '../../assest/media/clock.png'
import group from "../../assest/media/Group 234.png"
import image1 from "../../assest/media/image 10 (3).png"
import image2 from "../../assest/media/image 10 (1).png"
import image3 from "../../assest/media/image 10 (2).png"
import studentImg1 from '../../assest/media/Ellipse 119.png';
import studentImg2 from '../../assest/media/Ellipse 122.png';
import studentImg3 from '../../assest/media/Ellipse 121.png';
import studentImg4 from '../../assest/media/Ellipse 120.png';
import twitterIcon from '../../assest/media/twitter.png';
import facebookIcon from '../../assest/media/facebook.png';
import instagramIcon from '../../assest/media/instagram.png';
import educationImg1 from '../../assest/media/Rectangle 187.png';
import educationImg2 from '../../assest/media/Rectangle 188.png';
import educationImg3 from '../../assest/media/Rectangle 189.png';






import Navbar from '../Navbar.jsx'
import CourseCard from './CourseCard.jsx';



const Search = () => {
  const images = [
    rectangle32_1,
    rectangle32_2,
    // Add other images here
  ];


  const courses = [
    {
      imgSrc: coursecard,
      title: "AWS Certified solutions Architect",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsam.",
      instructor: "Lina",
      price: "$80",
    },
    {
      imgSrc: rectangle,
      title: "AWS Certified solutions Architect",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsam.",
      instructor: "Lina",
      price: "$80",
    },
    {
      imgSrc: coursecard,
      title: "AWS Certified solutions Architect",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsam.",
      instructor: "Lina",
      price: "$80",
    },
    {
      imgSrc: rectangle,
      title: "AWS Certified solutions Architect",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsam.",
      instructor: "Lina",
      price: "$80",
    },
  ];

  const classData = [
    { name: "Jane Cooper", image: image1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum voluptatum" },
    { name: "Adam", image: image2, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum voluptatum" },
    { name: "Tomara", image: image3, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum voluptatum" },
    { name: "Jane Cooper", image: image1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum voluptatum" },
    { name: "Adam", image: image2, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum voluptatum" },
    { name: "Tomara", image: image3, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum voluptatum" },
    // Add more data if needed
  ];


  return (
    <div>
      <Navbar />
      <div className="bg-white font-poppins text-sm">
        {/* Mobile Menu Bar */}
        <div id="mob-menu" className="hidden">
          <div className="icon">
            <i className="fa fa-times-circle text-3xl" id="close-btn"></i>
          </div>
        </div>

        {/* Search Bar */}
        <section className="relative max-w-full">
          <img src={rectangle180} alt="" className="w-full" />
          <div className="search-btns max-w-3xl mx-auto flex flex-col items-center justify-center">
            <div className="search-input absolute top-12 w-full max-w-[950px] mx-auto flex flex-wrap">
              <input
                type="text"
                placeholder="Search your favourite course"
                onInput={() => showIcon()}
                autoComplete="off"
                id="input"
                className="w-full p-4 border-none rounded-lg outline-none text-sm text-gray-700 font-normal"
              />
              <button className="absolute right-2 top-2 w-[100px] py-2 bg-[#49BBBD] text-white font-bold rounded-lg cursor-pointer hover:bg-transparent hover:border hover:border-[#49BBBD] hover:text-gray-500 transition-all duration-600">
                Search
              </button>
            </div>
            <div className="buttons absolute bottom-16 flex gap-2 flex-wrap">
              {[
                {
                  label: "Subjects",
                  options: ["Math", "Science", "History", "Art"],
                },
                {
                  label: "Partner",
                  options: ["University A", "University B", "University C"],
                },
                {
                  label: "Program",
                  options: ["Bachelor", "Master", "PhD"],
                },
                {
                  label: "Language",
                  options: ["English", "Spanish", "French"],
                },
                {
                  label: "Availability",
                  options: ["Online", "In-Person", "Hybrid"],
                },
                {
                  label: "Learning Type",
                  options: ["Full-Time", "Part-Time", "Evening"],
                },
              ].map(({ label, options }) => (
                <div key={label} className="dropdown relative group">
                  <button className="py-3 px-8 bg-white rounded-lg font-medium cursor-pointer hover:bg-[#49BBBD] hover:text-white flex items-center">
                    {label}
                    <i className="fa fa-chevron-down ml-2"></i>
                  </button>
                  <ul className="dropdown-menu hidden group-hover:block absolute w-[220px] p-1 -ml-[50px] -mb-[20px] bg-white rounded-lg shadow-md">
                    {options.map((item) => (
                      <li key={item} className="relative p-2 cursor-pointer">
                        <a href="/" className="dropdown-item text-sm block w-full text-gray-600">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <CourseCard />


      <section className="max-w-[1200px] mx-auto my-6 p-2.5">
        <div className="bg-[#ebf5ff] grid grid-cols-2 p-5 rounded-lg h-[350px]">
          <div className="pt-10 flex flex-col justify-center">
            <h1 className="text-xl font-semibold text-[#252641] mb-2">Know about learning <br />learning platform</h1>
            <p className="text-sm font-medium text-[#2D3436] py-2 flex items-center">
              <img src={bgImage} alt="icon" className="w-3 h-3 mr-2" />
              Free E-book, video & consultation
            </p>
            <p className="text-sm font-medium text-[#2D3436] py-2 flex items-center">
              <img src={bgImage} alt="icon" className="w-3 h-3 mr-2" />
              Top instructors from around the world
            </p>
            <p className="text-sm font-medium text-[#2D3436] py-2 flex items-center">
              <img src={bgImage} alt="icon" className="w-3 h-3 mr-2" />
              Top courses for your team
            </p>
            <button className="h-11 w-[225px] mt-2.5 rounded-lg text-lg font-bold bg-[#49BBBD] text-white hover:bg-transparent hover:border-2 hover:border-[#49BBBD] hover:text-[#49BBBD] transition-all">
              Start learning now
            </button>
          </div>
          <div>
            <img src={groupImage} alt="Group" className="w-[550px] h-[350px] relative left-2.5" />
          </div>
        </div>
      </section>



      <section className="bg-blue-50 mt-8 p-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-black font-semibold text-2xl">Recommended for you</h1>
            <p className="text-teal-400 font-bold text-lg cursor-pointer">See all</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white w-1/5 rounded-lg p-3 shadow-lg">
                <img className="w-full h-auto transform scale-90 rounded-md hover:scale-100 transition-transform duration-300" src={course.imgSrc} alt={course.title} />
                <div className="flex justify-between mt-4 mb-2">
                  <div className="flex items-center gap-1">
                    <img className="w-4 h-4" src={cube} alt="Cube icon" />
                    <p className="text-sm font-medium text-gray-500">Design</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <img className="w-4 h-4" src={clock} alt="Clock icon" />
                    <p className="text-sm font-medium text-gray-500">3 Month</p>
                  </div>
                </div>
                <h3 className="font-medium text-lg text-black mt-2">{course.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{course.info}</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-4">
                    <img className="w-8 h-8 rounded-full object-cover" src={group} alt="Instructor" />
                    <p className="text-sm font-medium text-black">{course.instructor}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="line-through text-gray-400 text-sm mr-2">$100</p>
                    <p className="text-teal-400 font-bold text-lg">{course.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-8">
        <div className="max-w-4xl mx-auto py-9">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold text-black">Classes taught by real creators</h1>
            <p className="text-teal-500 font-bold">See all</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {classData.map((cls, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg text-center p-6">
                <img src={cls.image} alt={cls.name} className="w-44 h-auto items-center m-auto relative -top-10" />
                <h3 className="text-lg font-medium text-gray-800 mb-2">{cls.name}</h3>
                <p className="text-sm text-gray-600">{cls.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Student Section */}
      <section className="student bg-blue-100 py-8 px-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">What our students have to say</h1>
        </div>
        <div className="flex justify-between items-center bg-white rounded-xl shadow-lg p-10 max-w-7xl mx-auto">
          <div className="relative">
            <img src={studentImg1} alt="Student" className="w-72 relative z-20" />
            <img src={studentImg2} alt="Student" className="w-20 absolute bottom-0 left-10 z-10" />
            <img src={studentImg3} alt="Student" className="w-24 absolute bottom-0 right-20 z-10" />
            <img src={studentImg4} alt="Student" className="w-36 absolute bottom-0 right-0 z-0" />
          </div>
          <div className="ml-10">
            <h3 className="text-xl font-bold mb-2">Savannah Nguyen</h3>
            <h4 className="text-lg font-medium mb-4">tanya.hill@Example.com</h4>
            <p className="text-sm text-gray-600 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, corrupti.</p>
            <p className="text-sm text-gray-600 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, corrupti.</p>
            <p className="text-sm text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, corrupti.</p>
            <div className="flex space-x-4">
              <img src={twitterIcon} alt="Twitter" className="w-8" />
              <img src={facebookIcon} alt="Facebook" className="w-8" />
              <img src={instagramIcon} alt="Instagram" className="w-8" />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img src={studentImg1} alt="Student" className="w-12" />
            <img src={studentImg2} alt="Student" className="w-12" />
            <img src={studentImg3} alt="Student" className="w-12" />
            <img src={studentImg4} alt="Student" className="w-12" />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education py-8 px-10 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Top Education offers and deals are listed here</h1>
          <p className="text-lg font-bold text-teal-500 cursor-pointer">See all</p>
        </div>
        <div className="flex justify-between space-x-6">
          {/* Education Card */}
          <div className="  rounded-2xl  relative overflow-hidden">
            <img src={educationImg1} alt="Education" className="w-full rounded-2xl" />
            <div className="education-card-body p-4">

            </div>
          </div>
          {/* Education Card */}
          <div className="  rounded-2xl  relative overflow-hidden">
            <img src={educationImg2} alt="Education" className="w-full rounded-2xl" />
            <div className="education-card-body p-4">

            </div>
          </div>
          {/* Education Card */}
          <div className=" rounded-2xl relative overflow-hidden">
            <img src={educationImg3} alt="Education" className="w-full rounded-2xl" />
            <div className="education-card-body p-4">
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
