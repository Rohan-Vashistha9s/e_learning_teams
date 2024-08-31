import React from 'react';
import Navbar from '../MainNav/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FaChevronDown } from 'react-icons/fa';
import StudentTestimonials from '../Membership/StudentTestimonials';
import AppDownload from '../Membership/AppDownload';
import ContentSection from '../Membership/ContentSection';

// CoachingBox Component
const CoachingBox = () => (
  <div className="bg-[#2b2d42] text-white text-center py-10 px-4 rounded-xl shadow-lg max-w-5xl mx-auto mt-8">
    <h2 className="text-2xl font-semibold mb-5">Online coaching lessons for remote learning.</h2>
    <p className="text-lg mb-8 mx-auto max-w-2xl leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor 
      <br /> sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    </p>
    <button className="bg-[#49BBBD] text-white border-none rounded-lg py-3 px-6 text-sm font-semibold cursor-pointer transition-colors duration-300 hover:bg-[#49BBBD80]">
      Start learning now
    </button>
  </div>
);

// Accordion Component
const Accordion = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    },
    {
      title: "Consectetur adipiscing elit, sed do",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    },
    {
      title: "Eiusmod tempos Lorem ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-16">Online coaching lessons for remote learning</h1>
      <div className="border-t border-gray-300">
        {accordionItems.map((item, index) => (
          <div key={index} className={`border-b border-gray-300 ${index === accordionItems.length - 1 ? '' : 'mb-4'}`}>
            <div
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300"
              onClick={() => toggleAccordion(index)}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-[#55EFC4] mr-4"></div>
              <span className="flex-grow text-lg font-normal text-gray-800 truncate">{item.title}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
              />
            </div>
            <div className={`p-6 ${activeIndex === index ? 'block' : 'hidden'} text-gray-600`}>
              <p className="text-sm leading-relaxed">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Membership Component
const Membership = () => {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center p-6 bg-white">
        <h1 className="text-3xl text-teal-500 mb-10">Affordable Pricing</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Free Plan */}
          <div className="flex flex-col items-center w-full sm:w-80 bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-teal-500 text-lg mb-4">Free Plan</h2>
            <div className="text-left">
              <div className="text-4xl font-bold text-gray-800">Free</div>
              <div className="text-sm font-bold text-gray-800">/ FOREVER</div>
            </div>
            <ul className="list-none p-5 text-left">
              <li className="flex items-center mb-6 text-gray-800">
                <FontAwesomeIcon icon={faCheckCircle} className="text-gray-300 mr-2" />
                Components-driven system
              </li>
              <li className="flex items-center mb-6 text-gray-800">
                <FontAwesomeIcon icon={faCheckCircle} className="text-gray-300 mr-2" />
                Sales-boosting landing pages
              </li>
              <li className="flex items-center mb-6 text-gray-800">
                <FontAwesomeIcon icon={faCheckCircle} className="text-gray-300 mr-2" />
                Awesome Feather icons pack
              </li>
            </ul>
            <button className="bg-gray-100 text-teal-500 border border-gray-300 px-6 py-3 rounded-lg font-bold hover:bg-teal-500 hover:text-white transition-colors duration-300">
              Try for free
            </button>
          </div>
          
          {/* Individual Plan */}
          <div className="flex flex-col items-center w-full sm:w-80 bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
            <div className="flex justify-between items-start p-6 w-full">
              <h2 className="text-teal-500 text-lg">👤 Individual</h2>
              <div className="bg-white text-gray-900 border border-gray-900 px-3 py-1 rounded-full text-xs -ml-12">BEST!</div>
            </div>
            <div className="text-left px-6">
              <div className="text-4xl font-bold text-gray-800">$24</div>
              <div className="text-sm font-bold text-gray-800">/ MONTH</div>
            </div>
            <ul className="list-none p-6 text-left">
              <li className="flex items-center mb-6 text-gray-800">
                <FontAwesomeIcon icon={faCheckCircle} className="text-teal-300 mr-2" />
                Components-driven system
              </li>
              <li className="flex items-center mb-6 text-gray-800">
                <FontAwesomeIcon icon={faCheckCircle} className="text-teal-300 mr-2" />
                Sales-boosting landing pages
              </li>
              <li className="flex items-center mb-6 text-gray-800">
                <FontAwesomeIcon icon={faCheckCircle} className="text-teal-300 mr-2" />
                Awesome Feather icons pack
              </li>
              <li className="flex items-center mb-6 text-gray-800">
                <FontAwesomeIcon icon={faCheckCircle} className="text-teal-300 mr-2" />
                Themed into 3 different styles
              </li>
              <li className="flex items-center mb-6 text-gray-800">
                <FontAwesomeIcon icon={faCheckCircle} className="text-teal-300 mr-2" />
                Will help to learn Figma
              </li>
            </ul>
            <button className="bg-teal-500 text-white px-6 py-3 my-7 rounded-lg font-bold hover:bg-teal-600 transition-colors duration-300">
              Regular license
            </button>
          </div>
          
          {/* Corporate Plan */}
          <div className="flex flex-col items-center w-full sm:w-80 bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-teal-500 text-lg mb-4">👥 Corporate</h2>
            <div className="text-left px-6">
              <div className="text-4xl font-bold text-gray-800">$12</div>
              <div className="text-sm font-bold text-gray-800">/ EDITOR</div>
            </div>
            <ul className="list-none p-6 text-left">
              <li className="flex items-center mb-6 text-gray-800">
                <FontAwesomeIcon icon={faCheckCircle} className="text-teal-300 mr-2" />
                Components-driven system
              </li>
              <li className="flex items-center mb-6 text-gray-800">
                <FontAwesomeIcon icon={faCheckCircle} className="text-teal-300 mr-2" />
                Sales-boosting landing pages
              </li>
              <li className="flex items-center mb-6 text-gray-800">
                <FontAwesomeIcon icon={faCheckCircle} className="text-teal-300 mr-2" />
                Awesome Feather icons pack
              </li>
              <li className="flex items-center mb-6 text-gray-800">
                <FontAwesomeIcon icon={faCheckCircle} className="text-teal-300 mr-2" />
                Themed into 3 different styles
              </li>
            </ul>
            <button className="bg-gray-100 text-teal-500 border border-gray-300 px-6 py-3 rounded-lg font-bold hover:bg-teal-500 hover:text-white transition-colors duration-300">
              Extended license
            </button>
          </div>
        </div>
      </section>
      <CoachingBox />
      <Accordion />
      <StudentTestimonials />
      <AppDownload />
      <ContentSection />
    </div>
  );
};

export default Membership;
