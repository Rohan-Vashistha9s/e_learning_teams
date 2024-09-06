import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBarsStaggered, faCircleXmark, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import image12 from "../assest/media/image 12.png";

function LitNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="text-gray-800 bg-white px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="head-icon">
            {/* Logo Icon */}
          </div>
          <h4 className="text-lg font-medium">TOTC</h4>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-10 text-[15px]">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/members">Membership</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/literature">Literature</Link></li>
            <li>
              <div className="flex items-center space-x-2">
                <img src={image12} alt="user" className="w-8 h-8 rounded-full" />
                <p>Lina <FontAwesomeIcon icon={faAngleDown} style={{ color: '#161718' }} /></p>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <FontAwesomeIcon icon={faBarsStaggered} className='h-7' style={{ color: '#49BBBD' }} onClick={toggleSidebar} />
        </div>
      </header>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-white z-10 flex flex-col">
          <div className="flex justify-between p-4">
          <div className="flex-grow" />
            <FontAwesomeIcon icon={faCircleXmark} className="cursor-pointer h-10 text-gray-800" onClick={toggleSidebar} />
          </div>
          <div className="flex-grow p-4 overflow-y-auto">
            <ul className="space-y-3 px-7 text-gray-600 text-[15px]">
              <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
              <li><Link to="/courses" onClick={toggleSidebar}>Courses</Link></li>
              <li><Link to="/members" onClick={toggleSidebar}>Membership</Link></li>
              <li><Link to="/blog" onClick={toggleSidebar}>Blog</Link></li>
              <li><Link to="/literature" onClick={toggleSidebar}>Literature</Link></li>
              <li><Link to="/search" onClick={toggleSidebar}>Search</Link></li>
              <li><Link to="/meeting" onClick={toggleSidebar}>Meeting</Link></li>
              <li><Link to="/courseDe" onClick={toggleSidebar}>Course Details</Link></li>
              <li><Link to="/blog-details" onClick={toggleSidebar}>Blog Details</Link></li>
              <li><Link to="/checkoutpage" onClick={toggleSidebar}>Checkout</Link></li>
              <li><Link to="/course-cal-create-01" onClick={toggleSidebar}>Calendar 01</Link></li>
              <li><Link to="/Course-Calendar-Create2" onClick={toggleSidebar}>Calendar 02</Link></li>
              <li><Link to="/course-calendar" onClick={toggleSidebar}>Course Calendar</Link></li>
              <li><Link to="/Course-Full-View" onClick={toggleSidebar}>Full View Calendar</Link></li>
            </ul>
            <div className="mt-8">
              <Link to="/log-res" className="bg-[#49BBBD] text-white text-center py-2 rounded-[30px] block" onClick={toggleSidebar}>Login</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LitNav;
