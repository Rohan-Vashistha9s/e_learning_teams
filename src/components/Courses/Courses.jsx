import React from 'react';
import "./Courses.css";
import heroImg01 from "../assest/media/heroimg-01.png";
import personImg01 from "../assest/media/personimg-01.png";
import heroImg02 from "../assest/media/heroimg-02.jfif";
import heroImg03 from "../assest/media/heroimg-03.png";
import courseimg01 from "../assest/media/courseimg-01.png";
import courseimg02 from "../assest/media/courseimg-02.png";
import Navbar from '../MainNav/Navbar';

const Courses = () => {
  return (
    <div>
        <Navbar />
        <section id="welcome" className="welcome">
            <div className="welcome-top">
                <h2>Welcome back, ready for your next lesson?</h2>
                <h6>View history</h6>
            </div>
            <div className="lessons slider container">
                <div className="lesson-card card">
                    <img src={heroImg01} alt="Lesson 1" />
                    <h1>AWS Certified Solutions Architect</h1>
                    <div className="review">
                        <img src={personImg01} alt="" />
                        <h4>Lina</h4>
                    </div>
                    <div className="progress-container">
                        <div className="progress-bar" style={{width: "71%"}}></div>
                    </div>
                    <p>Lesson 5 of 7</p>
                </div>
                <div className="lesson-card card">
                    <img src={heroImg02} alt="Lesson 2" />
                    <h1>AWS Certified Solutions Architect</h1>
                    <div className="review">
                        <img src={personImg01} alt="" />
                        <h4>Lina</h4>
                    </div>
                    <div className="progress-container">
                        <div className="progress-bar" style={{width: "71%"}}></div>
                    </div>
                    <p>Lesson 5 of 7</p>
                </div>
                <div className="lesson-card card">
                    <img src={heroImg03} alt="Lesson 3" />
                    <h1>AWS Certified Solutions Architect</h1>
                    <div className="review">
                        <img src={personImg01} alt="" />
                        <h4>Lina</h4>
                    </div>
                    <div className="progress-container">
                        <div className="progress-bar" style={{width: "71%"}}></div>
                    </div>
                    <p>Lesson 5 of 7</p>
                </div>
                <div className="lesson-card card">
                    <img src={heroImg01} alt="Lesson 1" />
                    <h1>AWS Certified Solutions Architect</h1>
                    <div className="review">
                        <img src={personImg01} alt="" />
                        <h4>Lina</h4>
                    </div>
                    <div className="progress-container">
                        <div className="progress-bar" style={{width: "71%"}}></div>
                    </div>
                    <p>Lesson 5 of 7</p>
                </div>
                <div className="lesson-card card">
                    <img src={heroImg02} alt="Lesson 2" />
                    <h1>AWS Certified Solutions Architect</h1>
                    <div className="review">
                        <img src={personImg01} alt="" />
                        <h4>Lina</h4>
                    </div>
                    <div className="progress-container">
                        <div className="progress-bar" style={{width: "71%"}}></div>
                    </div>
                    <p>Lesson 5 of 7</p>
                </div>
                <div className="lesson-card card">
                    <img src={heroImg03} alt="Lesson 3" />
                    <h1>AWS Certified Solutions Architect</h1>
                    <div className="review">
                        <img src={personImg01} alt="" />
                        <h4>Lina</h4>
                    </div>
                    <div className="progress-container">
                        <div className="progress-bar" style={{width: "71%"}}></div>
                    </div>
                    <p>Lesson 5 of 7</p>
                </div>
            </div>
            <div className="slider-btn">
                {/* <i className="fa-solid fa-chevron-left pp1"></i> <i className="fa-solid fa-chevron-right nn1"></i> */}
              </div>
        </section>

        <section className="favourite-courses">
            <h1>Choice favourite course from top Category</h1>
            <div className="category-section">
                <div className="category-card">
                    <div className="icon icon1">
                        {/* <i className="fa-solid fa-paintbrush"></i> */}
                        </div>
                    <h3>Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </div>
                <div className="category-card">
                    <div className="icon icon2">
                        {/* <i className="fa-solid fa-display"></i> */}
                        </div>
                    <h3>Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </div>
                <div className="category-card">
                    <div className="icon icon3">
                        {/* <i className="fa-solid fa-database"></i> */}
                        </div>
                    <h3>Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </div>
                <div className="category-card">
                    <div className="icon icon4">
                        {/* <i className="fa-solid fa-briefcase"></i> */}
                        </div>
                    <h3>Business</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </div>
                <div className="category-card">
                    <div className="icon icon5">
                        {/* <i className="fa-solid fa-bullhorn"></i> */}
                        </div>
                    <h3>Marketing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </div>
                <div className="category-card">
                    <div className="icon icon6">
                        {/* <i className="fa-solid fa-book"></i> */}
                        </div>
                    <h3>Photography</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </div>
                <div className="category-card">
                    <div className="icon icon7">
                        {/* <i className="fa-solid fa-masks-theater"></i> */}
                        </div>
                    <h3>Acting</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </div>
                <div className="category-card">
                    <div className="icon icon8">
                        {/* <i className="fa-solid fa-briefcase"></i> */}
                        </div>
                    <h3>Business</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </div>
            </div>
        </section>

        <section className="recommended">
            <div className="recommended-top">
                <h2>Recommended for you</h2>
                <h6>See all</h6>
            </div>
            <div className="recommended slider-2 container">
                    <div className="recommended-card card">
                        <img src={courseimg01} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                    <div className="recommended-card card">
                        <img src={courseimg02} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                    <div className="recommended-card card">
                        <img src={courseimg01} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                    <div className="recommended-card card">
                        <img src={courseimg02} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                    <div className="recommended-card card">
                        <img src={courseimg01} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                    <div className="recommended-card card">
                        <img src={courseimg02} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                    <div className="recommended-card card">
                        <img src={courseimg01} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                    <div className="recommended-card card">
                        <img src={courseimg02} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-btn">
                    {/* <i className="fa-solid fa-chevron-left pp2"></i> <i className="fa-solid fa-chevron-right nn2"></i> */}
                  </div>
        </section>

        <section className="choice choice1">
            <div className="choice-top">
                <h2>Get choice of your course</h2>
                <h6>See all</h6>
            </div>
            <div className="choice-container">
                    <div className="choice-card card">
                        <img src={courseimg01} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                    <div className="choice-card card">
                        <img src={courseimg02} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                    <div className="choice-card card">
                        <img src={courseimg01} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                    <div className="choice-card card">
                        <img src={courseimg02} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

        <section className="coaching">
            <div className="coaching-head">Online coaching lessons for remote learning.</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <button><a href="#">Start learning now</a></button>
        </section>

        <section className="choice choice2">
            <div className="choice-top">
                <h2>The course in personal development</h2>
                <h6>See all</h6>
            </div>
            <div className="choice-container">
                    <div className="choice-card card">
                        <img src={courseimg01} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                    <div className="choice-card card">
                        <img src={courseimg02} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                    <div className="choice-card card">
                        <img src={courseimg01} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                    <div className="choice-card card">
                        <img src={courseimg02} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

        <section className="choice choice3">
            <div className="choice-top">
                <h2>Student are viewing</h2>
                <h6>See all</h6>
            </div>
            <div className="choice-container">
                    <div className="choice-card card">
                        <img src={courseimg01} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                    <div className="choice-card card">
                        <img src={courseimg02} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                    <div className="choice-card card">
                        <img src={courseimg01} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                    <div className="choice-card card">
                        <img src={courseimg02} alt="Lesson 1" />
                        <div className="design-time">
                            <div className="design">
                                {/* <i className="fa-solid fa-border-all"></i> */}
                                Desgin</div>
                            <div className="time">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                3 Month</div>
                        </div>
                        <h1>AWS Certified Solutions Architect</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="review">
                            <div className="person-review">
                                <img src={personImg01} alt="" />
                                <h4>Lina</h4>
                            </div>
                            <div className="course-price">
                                <p>$100</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Courses;