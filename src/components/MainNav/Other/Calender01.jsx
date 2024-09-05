import React from 'react';
import './Calender01.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBookOpen, faClock as faSolidClock } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Calender01 = () => {
  return (
    <>
    <div className="min-h-screen flex">
  {/* Sidebar */}
  <div className="course-cal-inner">
    <Link to='/'>
      <button>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </Link>

    <h4>Change Simplification</h4>

    <div className="cal-list">
      {/* Lesson 01 */}
      <div className="cal-btn cal-btn-01">
        <FontAwesomeIcon icon={faBookOpen} style={{ color: '#ffffff' }} />
        <p className="lesson">Lesson 01 : Introduction about XD</p>
        <p className="lesson-time">30 mins</p>
      </div>

      {/* Lesson 02 */}
      <div className="cal-btn c-01">
        <FontAwesomeIcon icon={faBookOpen} />
        <p className="lesson">Lesson 02 : Introduction about XD</p>
        <p className="lesson-time">30 mins</p>
      </div>

      {/* Lesson 03 */}
      <div className="cal-btn c-02">
        <FontAwesomeIcon icon={faBookOpen} />
        <p className="lesson">Lesson 03 : Introduction about XD</p>
        <p className="lesson-time">30 mins</p>
      </div>

      {/* Lesson 04 */}
      <div className="cal-btn c-03">
        <FontAwesomeIcon icon={faBookOpen} />
        <p className="lesson">Lesson 04 : Introduction about XD</p>
        <p className="lesson-time">30 mins</p>
      </div>
    </div>

    <h4>PRACTICE QUIZ</h4>

<div className="cal-list">
    <div className="cal-btn c-02">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 01 : Introduction about XD</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-01">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 02 : Introduction about XD</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-02">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 03 : Introduction about XD</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-03">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 04 : Introduction about XD</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-02">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 05 : XD Best Practices</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-01">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 06 : Creating Prototypes</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-02">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 07 : User Testing in XD</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-03">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 08 : Designing for Mobile</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-02">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 09 : XD Collaboration Features</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-01">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 10 : Final Review</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-02">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 10 : Final Review</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-03">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 10 : Final Review</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>
</div>

<h4>PRACTICE QUIZ</h4>

<div className="cal-list">
    <div className="cal-btn c-02">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 01 : Introduction about XD</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-01">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 02 : Introduction about XD</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-02">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 03 : Introduction about XD</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-03">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 04 : Introduction about XD</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-02">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 05 : XD Best Practices</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-01">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 06 : Creating Prototypes</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-02">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 07 : User Testing in XD</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-03">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 08 : Designing for Mobile</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-02">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 09 : XD Collaboration Features</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-01">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 10 : Final Review</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-02">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 10 : Final Review</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>

    <div className="cal-btn c-03">
        <div>
            <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <div>
            <p className="lesson">Lesson 10 : Final Review</p>
        </div>
        <div>
            <p className="lesson-time">30 mins</p>
        </div>
    </div>
</div>

  </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="bg-[#49BBBD] right-section p-4">
          <h1 className="text-white text-2xl">Learn about Adobe XD & Prototyping</h1>
          <p className="text-white">Introduction about XD</p>
          <p><span><FontAwesomeIcon icon={faClock} style={{ color: '#ffffff' }} /></span>1 hour</p>
        </div>

        {/* Content */}
        <div className="w-full p-6 bg-blue-50">
          <h2 className="text-xl font-semibold mb-4">Create new event</h2>
          <p className='text-[14px] mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLorem</p>
          <form className="space-y-4 bg-white px-10 py-4">
            <div>
              <label className="block text-sm font-medium">Event Name</label>
              <input type="text" className="mt-1 text-[13px] p-2 w-full border rounded-md" placeholder="Adobe XD Auto - Animate : Your Guide to Creating" />
            </div>
            <div className="flex space-x-4">
              <div>
                <label className="block text-sm font-medium">Start Date / Time</label>
                <input type="text" className="mt-1 text-[13px] p-2 w-full border rounded-md" placeholder="September 24, 2017 07:59 am" />
              </div>
              <div>
                <label className="block text-sm font-medium">End Date / Time</label>
                <input type="text" className="mt-1 text-[13px] p-2 w-full border rounded-md" placeholder="September 24, 2017 07:59 am" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Location</label>
              <input type="text" className="mt-1 text-[13px] p-2 w-full border rounded-md" placeholder="2118 Thornridge Cir, Syracuse, Connecticut 35624" />
            </div>
            <div className="flex space-x-4">
              <div>
                <label className="block text-sm font-medium">Notification</label>
                <input type="text" className="mt-1 text-[13px] p-2 w-full border rounded-md" placeholder="30 mins" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" className="mt-1 text-[13px] p-2 w-full border rounded-md" placeholder="jessica.hansome@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Comments</label>
              <textarea className="mt-1 text-[13px] p-2 w-full border rounded-md" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet" style={{height: "150px"}}></textarea>
            </div>
            <button type="submit" className="mt-4 px-4 py-2 bg-[#49BBBD] text-white rounded-md">Sign in</button>
          </form>
        </div>
      </div>
    </div>
 </>
  )
}

export default Calender01;