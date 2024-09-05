import React from 'react';
import './Calender01.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faYoutube, faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faBookOpen, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Calendar02 = () => {
  return (
    <>
    <div className="min-h-screen md:flex">
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
        <p className="lesson">Lesson 01 : Introduction about XD</p>
        <p className="lesson-time">30 mins</p>
      </div>

      {/* Lesson 03 */}
      <div className="cal-btn c-02">
        <FontAwesomeIcon icon={faBookOpen} />
        <p className="lesson">Lesson 01 : Introduction about XD</p>
        <p className="lesson-time">30 mins</p>
      </div>

      {/* Lesson 04 */}
      <div className="cal-btn c-03">
        <FontAwesomeIcon icon={faBookOpen} />
        <p className="lesson">Lesson 01 : Introduction about XD</p>
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
        <div className="bg-[#49BBBD] p-4">
          <h1 className="text-white text-2xl">Learn about Adobe XD & Prototyping</h1>
          <p className="text-white">Introduction about XD</p>
          <p><span><FontAwesomeIcon icon={faClock} style={{ color: '#ffffff' }} /></span>1 hour</p>
        </div>
                   <div id="cal-form-sec">
                      <h4>Create new event</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLorem</p>

                      <div id="cal-form" className="my-3">
                           <div className="cal-create-02-title">
                              <div>
                                <h4>O6 Super Coins on the way</h4>
                              </div>
                              <div>
                              <FontAwesomeIcon className='text-white bg-[#49BBBD] rounded-full h-4 w-4 p-1 mx-2' icon={faTwitter} />
                              <FontAwesomeIcon className='text-white bg-[#49BBBD] rounded-full h-4 w-4 p-1 mx-2' icon={faFacebook} />
                              <FontAwesomeIcon className='text-white bg-[#49BBBD] rounded-full h-4 w-4 p-1 mx-2' icon={faYoutube} />
                              <FontAwesomeIcon className='text-white bg-[#49BBBD] rounded-full h-4 w-4 p-1 mx-2' icon={faInstagram} />
                              <FontAwesomeIcon className='text-white bg-[#49BBBD] rounded-full h-4 w-4 p-1 mx-2' icon={faTelegram} />
                              <FontAwesomeIcon className='text-white bg-[#49BBBD] rounded-full h-4 w-4 p-1 mx-2' icon={faWhatsapp} />
                              </div>
                           </div>

                           <p>Lorem ipsum dolor sit amet, consectetur adi</p>

                           <div className="cal-c02-decs c-02">
                            <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodL</p>
                           </div>
                      </div>

                      <div id="cal-form" className="my-3">
                        <div className="cal-create-02-title">
                           <div>
                             <h4>O6 Super Coins on the way</h4>
                           </div>
                           <div>
                           <FontAwesomeIcon className='text-white bg-[#49BBBD] rounded-full h-4 w-4 p-1 mx-2' icon={faTwitter} />
                           <FontAwesomeIcon className='text-white bg-[#49BBBD] rounded-full h-4 w-4 p-1 mx-2' icon={faFacebook} />
                           <FontAwesomeIcon className='text-white bg-[#49BBBD] rounded-full h-4 w-4 p-1 mx-2' icon={faYoutube} />
                           <FontAwesomeIcon className='text-white bg-[#49BBBD] rounded-full h-4 w-4 p-1 mx-2' icon={faInstagram} />
                           <FontAwesomeIcon className='text-white bg-[#49BBBD] rounded-full h-4 w-4 p-1 mx-2' icon={faTelegram} />
                           <FontAwesomeIcon className='text-white bg-[#49BBBD] rounded-full h-4 w-4 p-1 mx-2' icon={faWhatsapp} />
                           </div>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adi</p>

                        <div className="cal-c02-decs c-01">
                         <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodL</p>
                        </div>
                   </div>

                   <div id="cal-form" className="my-3">
                    <div className="cal-create-02-title">
                       <div>
                         <h4>O6 Super Coins on the way</h4>
                       </div>
                       <div>
                       <FontAwesomeIcon className='text-white bg-[#49BBBD] rounded-full h-4 w-4 p-1 mx-2' icon={faTwitter} />
                       <FontAwesomeIcon className='text-white bg-[#49BBBD] rounded-full h-4 w-4 p-1 mx-2' icon={faFacebook} />
                       <FontAwesomeIcon className='text-white bg-[#49BBBD] rounded-full h-4 w-4 p-1 mx-2' icon={faYoutube} />
                       <FontAwesomeIcon className='text-white bg-[#49BBBD] rounded-full h-4 w-4 p-1 mx-2' icon={faInstagram} />
                       <FontAwesomeIcon className='text-white bg-[#49BBBD] rounded-full h-4 w-4 p-1 mx-2' icon={faTelegram} />
                       <FontAwesomeIcon className='text-white bg-[#49BBBD] rounded-full h-4 w-4 p-1 mx-2' icon={faWhatsapp} />
                       </div>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adi</p>

                    <div className="cal-c02-decs c-03">
                     <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodL</p>
                    </div>
               </div>
                   </div>
            </div>
         </div>
 </>
  )
}

export default Calendar02;