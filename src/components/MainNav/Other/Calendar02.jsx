import React from 'react';
import './Calender01.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faYoutube, faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faBookOpen, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Calendar02 = () => {
  return (
    <>
    <div className="left-section">
    <div id="course-cal">
    <div className="row">
      <div className="col-md-3">
        <div className="course-cal-inner">
        <Link to='/'>
          <button>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          </Link>

          <h4>Change Simplification</h4>

          <div className="cal-list">
            <div className="cal-btn cal-btn-01">
              <div>
              <FontAwesomeIcon icon={faBookOpen} style={{ color: '#ffffff' }} />
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
                <p className="lesson">Lesson 02 : Advanced XD Techniques</p>
              </div>
              <div>
                <p className="lesson-time">45 mins</p>
              </div>
            </div>

            <div className="cal-btn c-02">
              <div>
              <FontAwesomeIcon icon={faBookOpen} />
              </div>
              <div>
                <p className="lesson">Lesson 03 : XD in Practice</p>
              </div>
              <div>
                <p className="lesson-time">35 mins</p>
              </div>
            </div>

            <div className="cal-btn c-03">
              <div>
              <FontAwesomeIcon icon={faBookOpen} />
              </div>
              <div>
                <p className="lesson">Lesson 04 : Final Project</p>
              </div>
              <div>
                <p className="lesson-time">60 mins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   <div className="course-container">
   <div className="row">
     <div className="col-md-3">
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
             <p className="lesson">Lesson 02 : Advanced XD Techniques</p>
           </div>
           <div>
             <p className="lesson-time">45 mins</p>
           </div>
         </div>

         <div className="cal-btn c-02">
           <div>
             <FontAwesomeIcon icon={faBookOpen} />
           </div>
           <div>
             <p className="lesson">Lesson 03 : XD in Practice</p>
           </div>
           <div>
             <p className="lesson-time">35 mins</p>
           </div>
         </div>

         <div className="cal-btn c-03">
           <div>
             <FontAwesomeIcon icon={faBookOpen} />
           </div>
           <div>
             <p className="lesson">Lesson 04 : Final Project</p>
           </div>
           <div>
             <p className="lesson-time">60 mins</p>
           </div>
         </div>

         {/* Repeat these blocks if needed */}

       </div>
     </div>
    </div>

     <div className="right-section">
     <div className="col-md-9">
            <div className="course-form-inner">
                   <div className="cal-head">
                      <h1>Learn about Adobe XD & Prototyping</h1>
                      <div className="cal-sub-title">
                        <div>
                          <p>Introduction about XD</p>
                        </div>
                        <div>
                          <p><span><FontAwesomeIcon icon={faClock} style={{ color: '#ffffff' }} /></span>1 hour</p>
                        </div>
                      </div>
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
                              <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faYoutube} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faTelegram} />
      <FontAwesomeIcon icon={faWhatsapp} />
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
                           <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faYoutube} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faTelegram} />
      <FontAwesomeIcon icon={faWhatsapp} />
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
                       <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faYoutube} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faTelegram} />
      <FontAwesomeIcon icon={faWhatsapp} />
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
        </div>
     </div>
     </div>
 </>
  )
}

export default Calendar02;