import React from 'react';
import Navbar from '../Navbar.jsx'
import courseDetails from '../../assest/media/course-detail.jfif'
import person01 from '../../assest/media/personimg-01.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faYoutube, faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons';

import courseImg1 from '../../assest/media/courseimg-01.png';
import courseImg2 from '../../assest/media/courseimg-02.png';
import personImg from '../../assest/media/personimg-01.png';
import deal from '../../assest/media/deal.png';



                 

const CourseDetails = () => {

    const courses = [
        {
            img: courseImg1,
            design: 'Design',
            time: '3 Month',
            title: 'AWS Certified Solutions Architect',
            description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
            personName: 'Lina',
            originalPrice: '$100',
            discountedPrice: '$80',
        },
        {
            img: courseImg2,
            design: 'Design',
            time: '3 Month',
            title: 'AWS Certified Solutions Architect',
            description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
            personName: 'Lina',
            originalPrice: '$100',
            discountedPrice: '$80',
        },
        {
            img: courseImg1,
            design: 'Design',
            time: '3 Month',
            title: 'AWS Certified Solutions Architect',
            description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
            personName: 'Lina',
            originalPrice: '$100',
            discountedPrice: '$80',
        },
        {
            img: courseImg2,
            design: 'Design',
            time: '3 Month',
            title: 'AWS Certified Solutions Architect',
            description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
            personName: 'Lina',
            originalPrice: '$100',
            discountedPrice: '$80',
        },
        // Add more courses as needed
    ];


    return (
        <div>
            <Navbar />
            {/* Full-width Image */}
            <div className="w-full h-[32rem] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${courseDetails})` }}>
            </div>
            <section className="flex flex-col lg:flex-row mt-[-12rem] mx-4 lg:mx-8">
                {/* Main Content */}
                <div className="lg:w-2/3 w-full px-4">
                    <div className="p-5">
                        <div className="flex gap-4 mb-8">
                            <button className="bg-gray-300 text-black py-2 px-4 rounded-lg font-bold text-lg opacity-50">Overview</button>
                            <button className="bg-teal-600 text-white py-2 px-4 rounded-lg font-bold text-lg">Overview</button>
                            <button className="bg-gray-300 text-black py-2 px-4 rounded-lg font-bold text-lg opacity-50">Overview</button>
                            <button className="bg-gray-300 text-black py-2 px-4 rounded-lg font-bold text-lg opacity-50">Overview</button>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg">
                            <div className="flex gap-8 mb-8">
                                <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center">
                                    <div className="text-3xl font-semibold text-black opacity-50 mb-4">4 out of 5</div>
                                    <div className="flex gap-1 text-yellow-400 text-xl mb-4">
                                        {[...Array(5)].map((_, index) => (
                                            <FontAwesomeIcon key={index} icon={faStar} />
                                        ))}
                                    </div>
                                    <div className="text-lg text-gray-600">Top Rating</div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col gap-2">
                                        {[5, 4, 3, 2, 1].map((stars) => (
                                            <div key={stars} className="flex items-center mb-2">
                                                <div className="text-lg text-black opacity-50 w-1/4">{stars} Stars</div>
                                                <div className="w-3/4 bg-gray-200 rounded-full h-3">
                                                    <div className="bg-teal-600 h-3 rounded-full" style={{ width: '71%' }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {[1, 2, 3].map((_, index) => (
                                    <div key={index} className="mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <img src={person01} alt="Person" className="w-16 h-16 rounded-full bg-gray-300" />
                                                <div>
                                                    <div className="text-lg font-medium">Lina</div>
                                                    <div className="flex gap-1 text-yellow-400">
                                                        {[...Array(5)].map((_, starIndex) => (
                                                            <FontAwesomeIcon key={starIndex} icon={faStar} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <FontAwesomeIcon icon={faClock} className="text-gray-300" />
                                                3 Month
                                            </div>
                                        </div>
                                        <p className="text-lg text-gray-600">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                                        {index < 1 && <hr className="my-4" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Content */}
                <div className="lg:w-1/3 w-full lg:ml-auto px-4 lg:px-9">
                    <div className="bg-white p-5 rounded-lg shadow-lg">
                        <img src={courseDetails} alt="Course" className="w-full rounded-lg mb-4" />
                        <div className="flex justify-between mb-4">
                            <span className="text-4xl font-semibold text-black">$49.65</span>
                            <span className="text-2xl font-semibold text-black line-through opacity-50">$99.99</span>
                            <span className="text-2xl font-semibold text-black opacity-50">50% Off</span>
                        </div>
                        <p className="text-xl font-semibold text-teal-600 mb-4">11 hours left at this price</p>
                        <button className="bg-teal-600 text-white w-full py-3 rounded-lg border-2 border-teal-600 text-lg font-bold mb-4 hover:text-teal-600 hover:bg-transparent">
                            Buy Now
                        </button>
                        <hr className="mb-4" />
                        <div className="mb-4">
                            <h3 className="text-2xl font-semibold mb-2">This Course Includes</h3>
                            <ul className="list-none p-0">
                                {['Money-back guarantee', 'Access on mobile', 'Certification of completion', '12 hours video'].map((item, index) => (
                                    <li key={index} className="flex items-center mb-2 text-sm font-semibold text-black opacity-70">
                                        <FontAwesomeIcon icon={[faStar, faClock, faStar, faClock, faStar][index]} className="text-teal-600 text-xl mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <hr className="mb-4" />
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Training 5 or more people</h3>
                            <p className="text-sm text-gray-600">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        </div>
                        <hr className="mb-4" />
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Share this course</h3>
                            <div className="flex gap-2">
                                {['twitter', 'facebook', 'youtube', 'instagram', 'telegram', 'whatsapp'].map((platform, index) => (
                                    <FontAwesomeIcon
                                        key={index}
                                        icon={[faTwitter, faFacebook, faYoutube, faInstagram, faTelegram, faWhatsapp][index]}
                                        className={`text-white bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${platform === 'youtube' ? 'bg-red-600' : ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Marketing Section */}
            <section className="bg-[#EBF5FF] py-8 px-4">
                <h1 className='font-bold text-3xl mb-5'>Marketing Articles</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {courses.map((course, index) => (
                        <div key={index} className="bg-white border-2 border-white shadow-md rounded-lg p-4 transform hover:translate-y-2 transition-transform duration-200">
                            <img
                                src={course.img}
                                alt={`Course ${index + 1}`}
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <div className="flex justify-between mt-2 text-gray-500 text-sm">
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faBorderAll} className="mr-1" />
                                    {course.design}
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faClock} className="mr-1" />
                                    {course.time}
                                </div>
                            </div>
                            <h1 className="text-lg font-medium mt-2">{course.title}</h1>
                            <p className="text-base text-gray-600 mt-1">{course.description}</p>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center">
                                    <img src={personImg} alt="Reviewer" className="w-10 h-10 rounded-full bg-gray-300 mr-2" />
                                    <h4 className="text-lg font-medium">{course.personName}</h4>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-xl font-bold text-[#49BBBD]">{course.discountedPrice}</p>
                                    <p className="text-lg font-light text-gray-500 line-through ml-2">{course.originalPrice}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CourseDeals />

        </div>
    );
};




export const CourseDeals = () => {
    return (
        <section className="course-deals py-10">
            <div className="deals-top flex justify-between items-center mx-8 my-4">
                <h2 className="text-2xl font-semibold text-gray-800">Top Education offers and deals are listed here</h2>
                <h6 className="text-lg font-bold text-teal-500 cursor-pointer">See all</h6>
            </div>
            <div className="deals-container flex justify-center gap-6 mt-8">
                <DealCard />
                <DealCard />
                <DealCard />
            </div>
        </section>
    );
};

const DealCard = () => {
    return (
        <div
            className="deal-card relative bg-cover bg-center text-white p-6 w-1/3 h-[17rem] rounded-2xl shadow-lg"
            style={{
                backgroundImage: `linear-gradient(rgba(8, 8, 8, 0.5), rgba(0, 0, 0, 0.5)), url(${deal})`,
            }}
        >
            <div className="deal-offer absolute top-4 left-4 bg-teal-500 text-white text-xl font-bold px-4 py-2 rounded-full">
                50%
            </div>
            <div className="deal-head text-xl font-bold mt-[7rem]">FOR INSTRUCTORS</div>
            <p className="deal-details text-sm mt-4">
                TOTC’s school management software helps traditional and online schools manage scheduling,
            </p>
        </div>
    );
};

export default CourseDetails;
