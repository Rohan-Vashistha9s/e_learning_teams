import React, {useState} from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import image12 from "../assest/media/image 12.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBarsStaggered, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="other-header">
        <div className="logo">
          <div className="head-icon">
          {/* <FontAwesomeIcon icon={faSquare} /> */}
          </div>
          <h4 className="w-[200px] text-white font-medium">TOTC</h4>
        </div>
        <div className="h-link space-x-4">
          <ul className="flex space-x-12 space-y-2 text-white cursor-pointer">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/courses">Courses</Link>
            </li>
            <li>
                <Link to="/members">Membership</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
            <li>
                <Link to="/literature">Literature</Link>
            </li>
            <li>
            <div className="relative inline-block text-left">
      <button
        className="btn dropdown-toggle bg-blue-500 text-white px-4 py-1 rounded-md focus:outline-none"
        onClick={toggleDropdown}
      >
        Others <FontAwesomeIcon icon={faChevronDown} />
      </button>

      {isOpen && (
        <ul className="dropdown-menu absolute right-0 mt-2 top-14 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <li>
            <Link className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/search">
              Search
            </Link>
          </li>
          <li>
            <Link className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/meeting">
              Meeting
            </Link>
          </li>
          <li>
            <Link className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/course-detail">
              Course Details
            </Link>
          </li>
          <li>
            <Link className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/blog-details">
              Blog Details
            </Link>
          </li>
          <li>
            <Link className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/checkoutpage">
              Checkout
            </Link>
          </li>
          <li>
            <Link className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/course-cal-create-01">
              Calendar 01
            </Link>
          </li>
          <li>
            <Link className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/Course-Calendar-Create2">
              Calendar 02
            </Link>
          </li>
          <li>
            <Link className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/course-calendar">
              Course Calendar
            </Link>
          </li>
          <li>
            <Link className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/Course-Full-View">
              Full View Calendar
            </Link>
          </li>
        </ul>
      )}
    </div>
            </li>
            <li>
              <div className="header-user">
                <div>
                  <img src={image12} alt="user" />
                </div>
                <div>
                  <p> Lina <FontAwesomeIcon icon={faAngleDown} style={{ color: '#161718' }} /></p>
                </div>
              </div>
            </li>
          </ul>
          <FontAwesomeIcon icon={faBarsStaggered} style={{ color: '#ffffff' }} id="menu-btn" />
        </div>
      </header>

      {/* Mobile menu bar */}
      <div id="mob-menu">
        <div className="icon">
        <FontAwesomeIcon icon={faCircleXmark} id="close-btn" />
        </div>
        <div className="link-sec">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/course">Courses</Link></li>
            <li><Link to="/membership">Membership</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/literature">Literature</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/meeting">Meeting</Link></li>
            <li><Link to="/course-detail">Course Details</Link></li>
            <li><Link to="/blog-details">Blog Details</Link></li>
            <li><Link to="/checkoutpage">Checkout</Link></li>
            <li><Link to="/course-cal-create-01">Calendar 01</Link></li>
            <li><Link to="/Course-Calendar-Create2">Calendar 02</Link></li>
            <li><Link to="/course-calendar">Course Calendar</Link></li>
            <li><Link to="/Course-Full -View">Full View Calendar</Link></li>
            <li className="btn-head-l"><Link to="/log-res">Login</Link></li>
            <li className="btn-head-s"><Link to="/log-res">Sign Up</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
