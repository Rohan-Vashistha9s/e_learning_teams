import React, { useState } from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCalendarDays, faEnvelope, faChevronDown, faFileInvoice, faUsers, faPaperPlane, faCircleXmark, faCircleCheck, faStar, faBook, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FaAngleRight, FaStar } from 'react-icons/fa';
import hero from '../assest/media/hero-img.png';
import userHero from '../assest/media/user-hero.jpeg';
import wit01 from '../assest/media/wit-01.png';
import wit02 from '../assest/media/wit-02.png';
import classroomImage from '../assest/media/classroom.jpeg';
import featureImage1 from '../assest/media/feature-01.jpeg';
import featureImage2 from '../assest/media/feature-02.png';
import featureImage3 from '../assest/media/feature-03.png';
import featureImage4 from '../assest/media/feature-04.png';
import featureImage5 from '../assest/media/feature-05.png';
import dots from '../assest/media/dot-bg-02.png';
import test from '../assest/media/test-img.png';
import course01 from '../assest/media/course-01.png'
import course02 from '../assest/media/course-02.png'
import course03 from '../assest/media/course-03.png'
import revimg from '../assest/media/rev-img.jpeg'
import blog01 from '../assest/media/blog-01.png'
import blog02 from '../assest/media/blog-02.png'
import blog03 from '../assest/media/blog-03.png'
import blog04 from '../assest/media/blog-04.png'
import { Link } from 'react-router-dom';



const Home = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="font-poppins">
            <div className='bg-[#49BBBD]'>
                <header className="flex justify-between items-center p-5 w-full">
                    <div className="logo relative flex items-center">
                        <div className="head-icon absolute -top-[6px] -left-[4px]">
                            <i className="fa-thin fa-square text-white text-[40px] transform rotate-45"></i>
                        </div>
                        <h4 className="w-[200px] text-white font-medium">TOTC</h4>
                    </div>
                    <nav className="space-x-4">
                        <ul className="flex space-x-12 text-white cursor-pointer">
                            <Link to="/">Home</Link>
                            <Link to="/courses">Courses</Link>
                            <Link to="/members" >Membership</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/literature">Literature</Link>
                            <li className="relative">
                                <button
                                    className="btn bg-transparent text-white border-none text-[14px] flex items-center"
                                    onClick={() => setShowDropdown(!showDropdown)}
                                >
                                    Others
                                    <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-white" />
                                </button>
                                {showDropdown && (
                                    <ul className="dropdown-menu w-[10rem] absolute left-0 mt-5 bg-white text-[#49BBBD] py-5 rounded-lg shadow-lg">
                                        <Link to='/search' className="dropdown-item text-[14px] my-1 py-1 block px-4 hover:bg-gray-200">Search</Link>
                                        <Link className="dropdown-item text-[14px] my-1 py-1 block px-4 hover:bg-gray-200">Meeting</Link>
                                        <Link className="dropdown-item text-[14px] my-1 py-1 block px-4 hover:bg-gray-200">Course Details</Link>
                                        <Link className="dropdown-item text-[14px] my-1 py-1 block px-4 hover:bg-gray-200">Blog Details</Link>
                                        <Link className="dropdown-item text-[14px] my-1 py-1 block px-4 hover:bg-gray-200">Checkout</Link>
                                        <Link className="dropdown-item text-[14px] my-1 py-1 block px-4 hover:bg-gray-200">Calendar 01 </Link>
                                        <Link className="dropdown-item text-[14px] my-1 py-1 block px-4 hover:bg-gray-200">Calendar 02 </Link>
                                        <Link className="dropdown-item text-[14px] my-1 py-1 block px-4 hover:bg-gray-200">Course Calendar </Link>
                                        <Link className="dropdown-item text-[14px] my-1 py-1 block px-4 hover:bg-gray-200">Full View Calendar   </Link>
                                    </ul>
                                )}
                            </li>
                            <Link to='/login' className="btn-head-l mx-[5px] bg-white py-1.5 px-6 text-black rounded-full shadow-[0px_20px_24px_0px_rgba(0,0,0,0.08)]">Login</Link>
                            <Link to='/login' className="btn-head-s mx-[5px] bg-white/30 py-1.5 px-6 text-white rounded-full shadow-[0px_20px_24px_0px_rgba(0,0,0,0.08)]">Sign Up</Link>
                        </ul>
                    </nav>
                    <i className="fa-regular fa-bars-staggered text-white lg:hidden" id="menu-btn"></i>
                </header>

                <div className="py-16">
                    <div className="mx-auto flex flex-col lg:flex-row items-center">
                        <div className="w-[50rem] left-[9rem] text-white relative">
                            <h1 className="text-[3rem] my-6 leading-[4rem] font-bold">
                                <span className="text-yellow-300">Studying</span> Online is now <br /> much easier
                            </h1>
                            <p className="leading-10 font-semibold my-6">
                                <span>TOTC is an interesting platform that will teach you <br /> in more an interactive way</span>
                            </p>
                            <div className="flex space-x-4">
                                <button className="bg-[#91d5d6] hover:bg-[#3b8384] text-white py-2 px-4 rounded-3xl h-[3rem] w-[9.5rem]">Join for free</button>
                                <p className="flex items-center">
                                    <FontAwesomeIcon icon={faCirclePlay} className='w-[3rem] relative bottom-2 h-[4rem]' /> <span className='mx-6 bottom-2 relative text-black'> Watch how it works</span>
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <img
                                src={hero}
                                alt="hero-img"
                                className="w-[32rem] h-[40rem]"
                            />

                            <div>
                                {/* information */}
                                <div className="hero-inner relative bottom-[37rem] right-[4rem]">
                                    <div className="absolute w-[15rem] top-10 left-0 bg-white/70 p-4 flex items-center text-black space-x-4 rounded-lg">
                                        <FontAwesomeIcon icon={faCalendarDays} className="text-[24px]" />
                                        <div>
                                            <h4 className="text-[1.2rem] font-semibold">250k</h4>
                                            <p className="text-[#252641] text-sm">Assisted Student</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-[380px] w-[20rem] left-0 bg-white/70 p-4 flex h-[10rem] text-black space-x-4 rounded-lg">
                                        <img src={userHero} alt="hero user" className="w-10 h-10 rounded-full" />
                                        <div>
                                            <h4 className="text-[1.2rem] font-semibold">User Experience Class</h4>
                                            <p className="text-[#252641] text-sm">Today at 12.00 PM</p>
                                        </div>
                                    </div>
                                    <button className="bg-[#D8587E] relative top-[30rem] font-semibold items-center py-2 px-4 w-[8rem] rounded-2xl left-[5rem] text-white">Join Now</button>
                                    <div className="absolute top-[250px] -right-[9rem] w-[18rem] bg-white/70 p-4 flex items-center text-black space-x-4 rounded-lg">
                                        <FontAwesomeIcon icon={faEnvelope} className="text-[24px]" />
                                        <div>
                                            <h4 className="text-[1.2rem] font-semibold">Congratulations</h4>
                                            <p className="text-[#252641] text-sm">Your admission completed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center py-16">
                <h1 className="text-4xl font-bold">Our Success</h1>
                <p className="text-gray-600 mt-4">
                    Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec <br />
                    nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
                </p>
                <div className="flex justify-between w-[50rem] m-auto mt-8">
                    <div className="text-[#49BBBD] text-6xl "><h4 >15k+</h4></div>
                    <div className="text-[#49BBBD] text-6xl "><h4>75%</h4></div>
                    <div className="text-[#49BBBD] text-6xl "><h4>35</h4></div>
                    <div className="text-[#49BBBD] text-6xl "><h4>26</h4></div>
                    <div className="text-[#49BBBD] text-6xl "><h4>16</h4></div>
                </div>
            </div>


            {/* all-in-one section */}
            <div id="all-in-one" className="max-w-5xl mx-auto my-16 px-4">
                <h1 className="text-center text-2xl font-medium">
                    All-In-One <span className="text-[#49BBBD]">Cloud Software</span>.
                </h1>
                <p className="text-center text-sm text-gray-600 mt-5">
                    TOTC is one powerful online software suite that combines all the tools <br /> needed to run a successful school or office.
                </p>

                <div className="all-one-list mt-10">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full sm:w-1/2 lg:w-1/3 p-5">
                            <div className="all-in-inner bg-white p-5 rounded-lg shadow-lg hover:transform hover:-translate-y-2 transition duration-300 text-center h-full">
                                <FontAwesomeIcon icon={faFileInvoice} className="text-white p-5 rounded-full shadow-lg" style={{ backgroundColor: '#5B72EE' }} />
                                <h4 className="text-2xl font-medium text-[#2F327D] mt-5">Online Billing,<br /> Invoicing, & Contracts</h4>
                                <p className="text-gray-600 mt-4">
                                    Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts.
                                </p>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/3 p-5">
                            <div className="all-in-inner bg-white p-5 rounded-lg shadow-lg hover:transform hover:-translate-y-2 transition duration-300 text-center h-full">
                                <FontAwesomeIcon icon={faCalendarDays} className="text-white p-5 rounded-full shadow-lg" style={{ backgroundColor: '#00CBB8' }} />
                                <h4 className="text-2xl font-medium text-[#2F327D] mt-5">Easy Scheduling & Attendance Tracking</h4>
                                <p className="text-gray-600 mt-4">
                                    Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.
                                </p>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/3 p-5">
                            <div className="all-in-inner bg-white p-5 rounded-lg shadow-lg hover:transform hover:-translate-y-2 transition duration-300 text-center h-full">
                                <FontAwesomeIcon icon={faUsers} className="text-white p-5 rounded-full shadow-lg" style={{ backgroundColor: '#29B9E7' }} />
                                <h4 className="text-2xl font-medium text-[#2F327D] mt-5">Customer Tracking</h4>
                                <p className="text-gray-600 mt-4">
                                    Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* totc */}

            <div id="wit" className="py-16">
                <h1 className="text-center text-3xl font-bold">
                    What is <span className="text-[#49BBBD]">TOTC?</span>
                </h1>
                <p className="text-center text-gray-600 mt-4 leading-relaxed">
                    TOTC is a platform that allows educators to create online classes whereby they can <br />
                    store the course materials online; manage assignments, quizzes and exams; monitor <br />
                    due dates; grade results and provide students with feedback all in one place.
                </p>

                <div className="wit-img-sec mt-12">
                    <div className="flex flex-wrap  justify-center">
                        <div className="w-full sm:w-2/3 md:w-1/3 px-4">
                            <div className="wit-inner bg-cover bg-center bg-no-repeat transition-transform duration-300 rounded-lg h-[250px] m-[20px] p-4 flex items-center justify-center text-center hover:transform hover:-translate-y-2" style={{ backgroundImage: `linear-gradient(#1414148f, rgba(23, 23, 23, 0.43)), url(${wit01})` }}>
                                <div>
                                    <h1 className="text-white text-xl font-bold">FOR INSTRUCTORS</h1>
                                    <button className="wit-btn-1 mt-4 py-2 px-8 border-2 border-white rounded-full text-white bg-transparent transition-colors duration-300 hover:bg-white hover:text-[#41BE90]">
                                        Start a class today
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-2/3 md:w-1/3 px-4">
                            <div className="wit-inner bg-cover bg-center bg-no-repeat transition-transform duration-300 rounded-lg h-[250px] m-[20px] p-4 flex items-center justify-center text-center hover:transform hover:-translate-y-2" style={{ backgroundImage: `linear-gradient(#1414148f, rgba(23, 23, 23, 0.43)), url(${wit02})` }}>
                                <div>
                                    <h1 className="text-white text-xl font-bold">FOR INSTRUCTORS</h1>
                                    <button className="wit-btn-2 mt-4 py-2 px-8 border-2 border-[#23BDEEE5] rounded-full text-white bg-[#23BDEEE5] transition-colors duration-300 hover:bg-transparent hover:text-[#23BDEEE5]">
                                        Start a class today
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* classroom section */}
            <div id="classroom" className="max-w-5xl mx-auto my-10 px-5 py-5">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="class-inner md:w-1/2 p-5">
                        <h2 className="text-[#252641] font-medium text-xl md:text-2xl leading-[2.8rem]">
                            Everything you can do in a physical <br />
                            classroom, <span className="text-[#49BBBD]">you can do with TOTC</span>
                        </h2>
                        <p className="my-5 text-[#696984] font-normal">
                            TOTC’s school management software helps traditional <br />
                            and online schools manage scheduling, attendance, <br />
                            payments, and virtual classrooms all in one secure cloud- <br />
                            based system.
                        </p>
                        <a href="#" className="text-[#696984] pb-2 border-b-2 border-transparent hover:border-[#696984] transition-all">
                            Learn More
                        </a>
                    </div>

                    <div className="class-inner class-img md:w-1/2 p-5 relative">
                        <img
                            src={classroomImage}
                            alt="class-room"
                            className="w-full h-auto rounded-lg"
                        />
                        <div className="class-l absolute h-[130px] w-[130px] bg-[#23BDEE] rounded-lg top-2.5 left-2.5 z-[-1]"></div>
                        <div className="class-r absolute h-[170px] w-[170px] bg-[#33EFA0] rounded-lg bottom-2.5 right-2.5 z-[-1]"></div>
                    </div>
                </div>
            </div>


            {/* feature section */}
            <div id="feature" className="max-w-6xl mx-auto my-10 px-5 py-5">
                <h1 className="text-2xl font-semibold text-center">
                    Our <span className="text-[#49BBBD]">Features</span>
                </h1>

                <p className="my-5 text-sm text-[#696984] text-center">
                    This very extraordinary feature, can make learning activities more efficient
                </p>

                <div className="flex flex-col lg:flex-row items-center mt-20" id="feature-sec">
                    <div className="lg:w-7/12">
                        <div className="relative px-7" id="feature-img">
                            <div className="f-top-circle absolute h-[100px] w-[100px] bg-[#33EFA0] rounded-full -top-10 left-8 z-[-1]"></div>
                            <div className="f-down-circle absolute h-[200px] w-[200px] bg-[#5B61EB] rounded-full -bottom-10 right-20 z-[-1]"></div>
                            <div className="f-bg absolute h-full w-[90%] bg-[#F4F4F4] rounded-xl top-0 left-0 z-[-1] overflow-hidden"></div>
                            <div className="f-head bg-[#EAEAEA] h-[25px] w-[105%] flex items-center">
                                <i className="fa-solid fa-circle text-xs ml-2" style={{ color: '#ff0000' }}></i>
                                <i className="fa-solid fa-circle text-xs ml-2" style={{ color: '#F6C566' }}></i>
                                <i className="fa-solid fa-circle text-xs ml-2" style={{ color: '#5BEB7B' }}></i>
                            </div>

                            <div className="flex flex-wrap mt-5">
                                <div className="md:w-5/12 w-8/12 p-2">
                                    <div className="f-inner">
                                        <div className="f-img-name relative">
                                            <img
                                                src={featureImage1}
                                                alt="feature-01"
                                                className="w-full h-auto rounded-xl"
                                            />
                                            <div className="f-user-name absolute bottom-5 left-2.5 bg-[#b2b5bba6] rounded-xl p-2">
                                                <p className="text-white text-xs">
                                                    <span className="bg-[#3793FF] px-1.5 py-0.5 rounded">Instructor</span> Eveny Howard
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-5 flex space-x-3">
                                            <button className="f-btn-1 bg-[#3465E1] text-white px-7 py-2 rounded-full shadow-md">
                                                Present
                                            </button>
                                            <button className="f-btn-2 bg-[#E13468] text-white px-7 py-2 rounded-full shadow-md flex items-center">
                                                <i className="fa-solid fa-phone mr-2"></i>Call
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:w-3/12 p-2">
                                    <div className="f-inner">
                                        <div className="f-img-name relative mb-5">
                                            <img
                                                src={featureImage2}
                                                alt="feature-02"
                                                className="w-full h-auto rounded-xl"
                                            />
                                            <div className="f-user-name absolute bottom-5 left-2.5 bg-[#b2b5bba6] rounded-xl p-2">
                                                <p className="text-white text-xs">Tamara Clarke</p>
                                            </div>
                                        </div>

                                        <div className="f-img-name relative">
                                            <img
                                                src={featureImage3}
                                                alt="feature-03"
                                                className="w-full h-auto rounded-xl"
                                            />
                                            <div className="f-user-name absolute bottom-5 left-2.5 bg-[#b2b5bba6] rounded-xl p-2">
                                                <p className="text-white text-xs">Humbert Holland</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:w-4/12 w-4/12 p-2">
                                    <div className="f-inner">
                                        <div className="f-img-name relative mb-5">
                                            <img
                                                src={featureImage4}
                                                alt="feature-04"
                                                className="w-full h-auto rounded-xl"
                                            />
                                            <div className="f-user-name absolute bottom-5 left-2.5 bg-[#b2b5bba6] rounded-xl p-2">
                                                <p className="text-white text-xs">Adam Levin</p>
                                            </div>
                                        </div>

                                        <div className="f-img-name relative">
                                            <img
                                                src={featureImage5}
                                                alt="feature-05"
                                                className="w-full h-auto rounded-xl"
                                            />
                                            <div className="f-user-name absolute bottom-5 left-2.5 bg-[#b2b5bba6] rounded-xl p-2">
                                                <p className="text-white text-xs">Patricia Mendoza</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-5/12 p-10">
                        <div className="f-con-inner">
                            <h1 className="text-2xl font-medium text-left">
                                A <span className="text-[#49BBBD]">user interface</span> designed <br /> for the classroom
                            </h1>

                            <div className="f-con-desc mt-5">
                                <div className="f-con-decs-in flex items-center mb-5">
                                    <i className="fa-solid fa-users text-xl mr-5"></i>
                                    <p className="text-left">
                                        Teachers don’t get lost in the grid view and have a dedicated Podium space.
                                    </p>
                                </div>
                                <div className="f-con-decs-in flex items-center mb-5">
                                    <i className="fa-solid fa-users text-xl mr-5"></i>
                                    <p className="text-left">
                                        Teachers don’t get lost in the grid view and have a dedicated Podium space.
                                    </p>
                                </div>
                                <div className="f-con-decs-in flex items-center">
                                    <i className="fa-solid fa-users text-xl mr-5"></i>
                                    <p className="text-left">
                                        Teachers don’t get lost in the grid view and have a dedicated Podium space.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* tools section */}
            <div id="tools" className="w-[70rem] mx-auto my-8 px-4 py-5">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-7/12">
                        <div className="mb-6 md:mb-0">
                            <h1 className="text-3xl font-medium leading-tight">
                                <span className="text-teal-500">Tools</span> For Teachers <br /> And Learners
                            </h1>
                            <p className="mt-4 text-gray-500 text-sm leading-6">
                                Class has a dynamic set of teaching tools built to <br />
                                be deployed and used during class. Teachers can <br />
                                hand out assignments in real-time for students to <br />
                                complete and submit.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-5/12">
                        <div className="relative p-8 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${dots})` }}>
                            <div className="absolute top-28 left-4 bg-white p-2 shadow-lg rounded-md">
                                <i className="fa-solid fa-window-restore text-indigo-500 text-2xl bg-white shadow-md p-2 rounded-full"></i>
                            </div>
                            <div className="absolute top-36 right-4 bg-white p-2 shadow-lg rounded-md">
                                <i className="fa-solid fa-window-restore text-indigo-500 text-2xl bg-white shadow-md p-2 rounded-full"></i>
                            </div>
                            <div className="absolute top-4 right-16 w-4 h-4 bg-teal-400 rounded-full"></div>
                            <div className="absolute bottom-16 left-8 w-4 h-4 bg-orange-400 rounded-full"></div>
                            <div className="absolute bottom-20 right-2 w-4 h-4 bg-purple-400 rounded-full"></div>
                            <img src={hero} alt="female with book" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>

            {/* test */}

            <div className="max-w-6xl mx-auto my-12 px-5">
                <div className="flex flex-wrap items-center">
                    <div className="w-[25rem]  relative p-5">
                        <div className="bg-white shadow-lg p-5 rounded-2xl relative">
                            <p className="bg-[#CDD8FF] text-[#717FB0] text-sm font-normal px-3 py-1 rounded-full inline-block mb-5">
                                Question 1
                            </p>
                            <h4 className="text-[#55578D] text-xl font-semibold mb-12">
                                True or false? This play <br /> takes place in Italy
                            </h4>
                            <img src={test} alt="" className="rounded-2xl w-full max-w-xs" />

                            {/* Additional Elements */}

                            <div className="absolute bottom-0 right-0 p-4 bg-white shadow-lg rounded-2xl">
                                <div className="flex items-center space-x-4">
                                    <FontAwesomeIcon icon={faPaperPlane} className="text-[#41be99] text-2xl p-2 bg-[#D8F9ED] rounded-full" />
                                    <p className="text-[#41BE90] text-base font-semibold">
                                        Your answer was <br /> sent successfully
                                    </p>
                                </div>
                            </div>

                            <div className="absolute top-0 right-10 p-3 rounded-full bg-white shadow-md">
                                <FontAwesomeIcon icon={faCircleXmark} className="text-[#ee3175] text-3xl" />
                            </div>

                            <div className="absolute top-10 right-0 p-3 rounded-full bg-white shadow-md">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-[#2dd38e] text-3xl" />
                            </div>

                            <div className="absolute top-[-10px] left-[100px] h-5 w-5 bg-[#F3A268] rounded-full"></div>
                            <div className="absolute bottom-[30px] left-[-10px] h-5 w-5 bg-[#34E7A5] rounded-full"></div>
                        </div>
                    </div>

                    <div className="m-auto md:w-5/12 p-5 relative left-16">
                        <h1 className="text-5xl font-medium leading-tight mb-4">
                            Assessments, <br /> <span className="text-[#49BBBD]">Quizzes</span>, Tests
                        </h1>
                        <p className="text-lg  font-normal text-[#696984] mb-5">
                            Easily launch live assignments, quizzes, and <br /> tests. Student results are automatically entered in <br /> the online gradebook.
                        </p>
                    </div>
                </div>
            </div>


            {/* class management  */}
            <div className="max-w-7xl mx-auto my-16 px-5">
                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-6/12 p-5">
                        <div className="space-y-5">
                            <h1 className="text-3xl font-medium leading-tight">
                                <span className="text-[#49BBBD]">Class Management</span><br />
                                Tools for Educators
                            </h1>
                            <p className="text-base font-normal text-[#696984]">
                                Class provides tools to help run and manage the class <br /> such as Class Roster, Attendance, and more. With
                                the <br /> Gradebook, teachers can review and grade tests and <br /> quizzes in real-time.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-6/12 p-5 relative">
                        <div className="bg-white shadow-lg rounded-xl relative p-4">
                            <div className="absolute h-32 w-32 bg-[#D3E7FF] -bottom-3 -left-3 rounded-xl z-[-1]"></div>

                            <div className="absolute top-[-8px] left-[-12px] bg-white p-2 rounded-full shadow-lg">
                                <FontAwesomeIcon icon={faStar} className="text-[#FFD43B] text-xl" />
                            </div>

                            <div className="absolute top-6 right-[-12px] bg-white p-2 rounded-full shadow-lg">
                                <FontAwesomeIcon icon={faBook} className="text-[#3491e7] text-xl" />
                            </div>

                            <div className="bg-[#54AFF0] p-2 rounded-t-xl text-center">
                                <h4 className="text-white text-lg font-normal">GradeBook</h4>
                            </div>

                            <div className="p-4 mt-6 bg-white rounded-b-xl">
                                <div className="flex flex-col gap-8">
                                    {[featureImage5, featureImage4, featureImage3, featureImage2].map((src, index) => (
                                        <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full">
                                                <img src={src} alt="management" className="h-full w-full object-cover rounded-full -ml-4" />
                                            </div>
                                            <div className={`w-32 h-4 ${index % 2 === 0 ? 'bg-[#3189EF]' : 'bg-[#3AC6F2]'} rounded`}></div>
                                        </div>
                                    ))}
                                </div>

                                <button className="bg-gradient-to-r from-[#545AE7] to-[#393FCF] text-white py-2 px-4 rounded-full shadow-lg mt-6 float-right">
                                    Export
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* discuss section  */}
            <div className="max-w-6xl mx-auto my-30 relative px-0">
                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-7/12 p-5 relative">
                        <div className="bg-white rounded-2xl relative ">
                            {/* Background elements for the overlapping effect */}
                            <div className="absolute h-[30rem] w-[38rem] bg-[#e0eaff]  bottom-[0.2rem] -left-10 rounded-2xl z-[-1] filter blur-lg"></div>
                            {/* <div className="absolute h-72 w-[38rem] bg-white bottom-[14rem] -left-5 rounded-2xl z-[-1] shadow-md"></div> */}

                            {/* Top left and right corner buttons */}
                            <div className="absolute top-2 left-4 p-2 rounded-full shadow-lg flex space-x-1">
                                <FontAwesomeIcon icon={faCircle} className="text-[#ff0000] text-xs" />
                                <FontAwesomeIcon icon={faCircle} className="text-[#F6C566] text-xs" />
                                <FontAwesomeIcon icon={faCircle} className="text-[#5BEB7B] text-xs" />
                            </div>

                            {/* <div className="absolute top-0 right-0 bg-white p-2 rounded-full shadow-lg flex space-x-1">
                                <FontAwesomeIcon icon={faCircle} className="text-[#ff0000] text-xs" />
                                <FontAwesomeIcon icon={faCircle} className="text-[#F6C566] text-xs" />
                                <FontAwesomeIcon icon={faCircle} className="text-[#5BEB7B] text-xs" />
                            </div> */}

                            {/* Title bar */}
                            <div className="bg-[#bcd3ff] p-6 rounded-t-2xl text-center">
                                <h4 className="text-white text-base font-normal"></h4>
                            </div>

                            {/* Main content with images and text */}
                            <div className="p-5 mt-10 bg-white rounded-b-2xl shadow-lg">
                                <div className="flex flex-col gap-8">
                                    <div className="flex items-center gap-4">
                                        <img src={featureImage1} alt="user" className="h-48 w-48 object-cover rounded-2xl" />
                                        <img src={featureImage5} alt="user" className="h-48 w-48 object-cover rounded-2xl" />
                                    </div>

                                    <div className="flex justify-between items-center mt-8">
                                        <div>
                                            <h4 className="text-lg font-medium text-gray-600">Private Discussion</h4>
                                            <p className="text-sm text-gray-400">Your video can’t be seen by others</p>
                                        </div>
                                        <button className="bg-gradient-to-r from-[#F55454] to-[#E6422B] text-white py-2 px-6 rounded-full">
                                            End Discussion
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text section on the right */}
                    <div className="w-full md:w-5/12 p-5">
                        <div className="p-5">
                            <h1 className="text-3xl font-medium leading-tight">
                                One-on-One <br /> <span className="text-[#49BBBD]">Discussions</span>
                            </h1>
                            <p className="text-base font-normal mt-4 text-gray-600">
                                Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
                            </p>
                        </div>
                    </div>
                </div>

                <button className="block mx-auto border border-[#49BBBD] py-2 px-6 text-[#49BBBD] font-normal bg-transparent rounded-full text-sm mt-8">
                    See more features
                </button>
            </div>





            <section id="explore-course-section" className='bg-[#e9f2ff] w-auto '>
                <div className='bg-white  w-[20rem] h-[111rem] absolute left-[74rem] -z-10'></div>
                <div id="ex-course">
                    <div id="ex-in">
                        <h1>Explore Course</h1>
                        <p>Ut sed eros finibus, placerat orci id, dapibus.</p>

                        <div className="ex-c-list">
                            <div className="ex-title">
                                <div>
                                    <h4>Lorem Ipsum</h4>
                                </div>
                                <div>
                                    <p>See all</p>
                                </div>
                            </div>

                            <div className="ex-list-data">
                                {["Ut Sed Eros", "Curabitur Egestas", "Quisque Conseq…", "Cras Convallis", "Vestibulum fauci…", "Ut Sed Eros", "Vestibulum faucibu"].map((text, index) => (
                                    <div className="ex-book" key={index}>
                                        <div className="ex-d-01">
                                            <div className={`ex-d-02 exb-0${index + 1}`}>
                                                <div>{text}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="ex-book-img">
                                    <img src={course01} alt="Lorem Ipsum" className="img-fluid" />
                                </div>
                            </div>

                            {[1, 2].map((_, i) => (
                                <React.Fragment key={i}>
                                    <div className="ex-title">
                                        <div>
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <div>
                                            <p>See all</p>
                                        </div>
                                    </div>

                                    <div className="ex-list-data">
                                        {["Ut Sed Eros", "Curabitur Egestas", "Quisque Conseq…", "Cras Convallis", "Vestibulum fauci…", "Ut Sed Eros", "Vestibulum faucibu"].map((text, index) => (
                                            <div className="ex-book" key={index}>
                                                <div className="ex-d-01">
                                                    <div className={`ex-d-02 exb-0${index + 1}`}>
                                                        <div>{text}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="ex-book-img">
                                            <img src={i === 0 ? course02 : course03} alt="Lorem Ipsum" className="img-fluid" />
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Mobile Course Section */}
                        <div id="ex-mob-course">
                            {["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"].map((title, i) => (
                                <div key={i}>
                                    <div className="ex-title">
                                        <div>
                                            <h4>{title}</h4>
                                        </div>
                                        <div>
                                            <p>See all</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="ex-c-inner">
                                                <div className="row">
                                                    {["Ut Sed Eros", "Curabitur Egestas", "Quisque Conseq…", "Cras Convallis", "Vestibulum fauci…", "Ut Sed Eros", "Vestibulum faucibu"].map((text, index) => (
                                                        <div className="col-sm-6 col-12" key={index}>
                                                            <div className="ex-m-book">
                                                                <div className="ex-book-mob">
                                                                    <div className={`ex-mob-02 exb-0${index + 1}`}>
                                                                        <div>{text}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="ex-c-inner">
                                                <div className="ex-book-img">
                                                    <img src={`assest/media/course-0${i + 1}.png`} alt="Lorem Ipsum" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            <div className="max-w-screen-xl mx-auto my-12 p-5">
                <div className="flex flex-wrap">
                    {/* Review Info */}
                    <div className="w-full md:w-1/2 p-5">
                        <div className="p-5">
                            <h4 className="text-base font-normal">TESTIMONIAL</h4>
                            <h1 className="text-3xl font-semibold my-5 text-[#2F327D]">What They Say?</h1>
                            <p className="my-6 text-base text-[#696984] font-normal">TOTC has got more than 100k positive ratings <br /> from our users around the world.</p>
                            <p className="my-6 text-base text-[#696984] font-normal">Some of the students and teachers were <br /> greatly helped by the Skilline.</p>
                            <p className="my-6 text-base text-[#696984] font-normal">Are you too? Please give your assessment</p>
                            <button className="border border-[#49BBBD] px-10 py-3 bg-transparent rounded-full text-[#49BBBD] text-sm mt-8">Write your assessment</button>
                        </div>
                    </div>

                    {/* Review Image and Details */}
                    <div className="w-full md:w-1/3 p-5 relative">
                        <img src={revimg} alt="Review" className="rounded-xl w-full object-cover" />
                        <div className="absolute top-1/2 right-0 p-3 bg-white rounded-full shadow-md transform translate-y-[-50%]">
                            <FaAngleRight className="text-[#1ea4ce] text-xl" />
                        </div>
                        <div className="absolute -bottom-[3rem] -right-[17rem] bg-white shadow-lg border-l-4 border-[#F67766] rounded-lg p-10">
                            <p className="text-[#5F5F7E] max-w-md">"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."</p>
                            <div className="flex justify-between items-center mt-6">
                                <h4 className="text-[#5F5F7E] text-xl font-medium">Gloria Rose</h4>
                                <div className="flex items-center">
                                    <div className="flex text-[#FFD43B]">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p className="text-sm text-[#696984] ml-3 ">12 reviews at Yelp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div className="max-w-screen-xl mx-auto my-40 p-5">
                <h1 className="text-2xl text-[#2F327D] text-center font-medium mb-2">Latest News and Resources</h1>
                <p className="text-center text-base text-[#696984] font-normal">See the developments that have occurred to TOTC in the world</p>

                <div className="mt-12 flex flex-wrap">
                    {/* Main Blog Item */}
                    <div className="w-full lg:w-1/2 p-5">
                        <div className="p-5">
                            <img src={blog01} alt="blog01" className="rounded-lg w-full object-cover" />
                            <button className="mt-8 border-none bg-[#49BBBD] text-white py-2 px-6 rounded-full text-sm">NEWS</button>
                            <h4 className="text-[#252641] text-lg font-medium mt-4">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h4>
                            <p className="text-[#696984] text-sm mt-2">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                            <a href="#" className="text-[#696984] text-base mt-8 block">Read more</a>
                        </div>
                    </div>

                    {/* Side Blog Items */}
                    <div className="w-full lg:w-1/2 p-5">
                        <div className="space-y-10">
                            <div className="flex items-center space-x-4">
                                <img src={blog02} alt="blog-02" className="w-1/3 rounded-lg" />
                                <div>
                                    <h4 className="text-[#252641] text-lg font-medium">Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h4>
                                    <p className="text-[#696984] text-sm mt-2">Class Technologies Inc., the company that created Class,...</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <img src={blog03} alt="blog-03" className="w-1/3 rounded-lg" />
                                <div>
                                    <h4 className="text-[#252641] text-lg font-medium">Zoom’s earliest investors are betting millions on a better Zoom for schools</h4>
                                    <p className="text-[#696984] text-sm mt-2">Zoom’s earliest investors are betting millions on a better Zoom for schools</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <img src={blog04} alt="blog-04" className="w-1/3 rounded-lg" />
                                <div>
                                    <h4 className="text-[#252641] text-lg font-medium">Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</h4>
                                    <p className="text-[#696984] text-sm mt-2">This year, investors have reaped big financial returns from betting on Zoom...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;