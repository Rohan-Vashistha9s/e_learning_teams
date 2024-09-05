import React from 'react';
import './Calender01.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBookOpen, faClock as faSolidClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Calender01 = () => {
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
               <p>
                 <span>
                 <FontAwesomeIcon icon={faSolidClock} style={{ color: '#ffffff' }} />
                 </span> 
                 1 hour
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div id="cal-form-sec">
      <h4>Create new event</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLorem
      </p>

      <div id="cal-form">
        <form className="row g-3">
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Event Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Adobe XD Auto - Animate : Your Guide to Creating"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="startDateTime" className="form-label">
              Start date / Time
            </label>
            <input
              type="text"
              className="form-control"
              id="startDateTime"
              placeholder="September 24, 2017 07:59 am"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="endDateTime" className="form-label">
              End Date / Time
            </label>
            <input
              type="text"
              className="form-control"
              id="endDateTime"
              placeholder="September 24, 2017 07:59 am"
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="2118 Thornridge Cir, Syracuse, Connecticut 35624"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="notification" className="form-label">
              Notification
            </label>
            <input
              type="text"
              className="form-control"
              id="notification"
              placeholder="30 mins"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="jessica.hansome@example.com"
            />
          </div>

          <div className="col-12">
            <label htmlFor="comments" className="form-label">
              Comments
            </label>
            <textarea
              className="form-control"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet"
              id="comments"
              style={{ height: '150px' }}
            />
          </div>

          <div className="col-12 form-btn">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
     </div>
 </>
  )
}

export default Calender01;