import React, {useState} from 'react';
import Rectangle193 from "../assest/media/Rectangle 193.png";
import ellipse128 from "../assest/media/Ellipse 128.png";
import star from "../assest/media/star.png";
import eye from "../assest/media/eye.png";
import play from "../assest/media/play.png";
import twitter from "../assest/media/twitter.png";
import facebook from "../assest/media/facebook.png";
import instagram from "../assest/media/instagram.png";
import rect196 from "../assest/media/Rectangle 196.png";
import rect1961 from "../assest/media/Rectangle 196 (1).png";
import rect1962 from "../assest/media/Rectangle 196 (2).png";
import rect1963 from "../assest/media/Rectangle 196 (3).png";
import rect1964 from "../assest/media/Rectangle 196 (4).png";
import rect32 from "../assest/media/Rectangle 32.png";
import rect33 from "../assest/media/Rectangle 33.png";
import rect325 from "../assest/media/Rectangle 32 (5).png";
import rect323 from "../assest/media/Rectangle 32 (3).png";
import rect324 from "../assest/media/Rectangle 32 (4).png";
import LitNav from './LitNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Literature = () => {
    const [selectedTab, setSelectedTab] = useState('Book');
  
  // Images for each tab
  const tabImages = {
    About: rect196,
    Course: rect32,
    Notes: rect33,
    Project: rect325,
    Podcast: rect323,
    Book: rect196,
    Review: rect324,
  }; 

  const books = [
    { price: '$24', imgSrc: tabImages[selectedTab] },
    { price: '$24', imgSrc: rect1961 },
    { price: '$24', imgSrc: rect1962 },
    { price: '$24', imgSrc: rect1963 },
    { price: '$24', imgSrc: rect1964 },
    { price: '$24', imgSrc: rect196 },
  ];

  return (
    <div>
        <LitNav />
<div className="max-w-6xl mx-auto mt-10 relative">
      <div>
        <img
          className="w-full h-[18rem] object-cover rounded-lg"
          src={Rectangle193}
          alt="Background"
        />
      </div>

      <div className="absolute top-[70px] left-[150px] transform -translate-x-2/4 -translate-y-12">
            <div className="rounded-full w-[250px] h-[250px] border-4 border-white overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-full"
                src={ellipse128}
                alt="Profile"
              />
            </div>
          </div>

      <div className="bg-white shadow-lg rounded-[20px] overflow-hidden absolute top-10 left-[700px] transform -translate-x-2/4 w-[70.5%]">
        <div className="relative p-6">
          <button className="absolute top-6 right-6 bg-teal-500 text-white px-4 py-2 rounded-lg">
            Enroll Now
          </button>

          <div className="top-6">
            <h2 className="text-2xl text-gray-800 font-semibold">Jhon Anderson</h2>
            <p className="text-gray-600 text-[15px]">Assistant Professor at McMaster University</p>
          </div>

          <p className="mt-8 text-gray-600 text-[15px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque delectus
            molestiae mollitia natus beatae sit eos amet reiciendis! Lorem ipsum dolor
            sit. Lorem, ipsum dolor.
          </p>

          <div className="mt-4 flex items-center space-x-[250px]">
            <div className="flex items-center space-x-8">
            <span className="flex items-center text-[12px]">
              <img src={star} alt="" className='w-4' />
              <span className="text-gray-600 ml-2">4.9 Instructor Rating</span>
            </span>
            <span className="flex items-center text-[12px]">
              <img src={eye} alt="" className='w-4' />
              <span className="text-gray-600 ml-2">1,592 Students</span>
            </span>
            <span className="flex items-center text-[12px]">
              <img src={play} alt="" className='w-4' />
              <span className="text-gray-600 ml-2">Courses</span>
            </span>
            </div>
            <div className="flex items-center justify-center space-x-4">
            <img src={twitter} alt="Twitter" className='w-7' />
            <img src={facebook} alt="Facebook" className='w-7' />
            <img src={instagram} alt="Instagram" className='w-7' />
          </div>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-20 mt-10 p-4">
      <div className="flex space-x-2 mb-6">
        {Object.keys(tabImages).map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-8 py-2 rounded-lg font-bold ${selectedTab === tab ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-500'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <h2 className="text-2xl text-gray-800 font-semibold mb-4">Literature Course</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full p-4 h-[360px] object-cover" src={book.imgSrc} alt={book.title} />
            <div className="p-4 flex justify-between">
              <p className="text-sm text-gray-500">All Benefits of PLUS</p>
              <p className="text-teal-500 font-semibold">{book.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        <button className="px-3 py-1 bg-teal-100 text-teal-500">
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button className="px-3 py-1 text-gray-700">1</button>
        <button className="px-3 py-1 text-gray-700">2</button>
        <button className="px-3 py-1 bg-teal-500 text-white">3</button>
        <button className="px-3 py-1 text-gray-700">4</button>
        <button className="px-3 py-1 text-gray-700">5</button>
        <button className="px-3 py-1 text-gray-70 bg-teal-100 text-teal-500">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
    
    </div>
  )
}

export default Literature;