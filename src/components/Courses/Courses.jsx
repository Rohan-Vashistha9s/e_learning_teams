import React, {useState} from 'react';
import "./Courses.css";
import heroImg01 from "../assest/media/heroimg-01.png";
import personImg01 from "../assest/media/personimg-01.png";
import heroImg02 from "../assest/media/heroimg-02.jfif";
import heroImg03 from "../assest/media/heroimg-03.png";
import courseimg01 from "../assest/media/courseimg-01.png";
import courseimg02 from "../assest/media/courseimg-02.png";
import Navbar from '../MainNav/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintbrush, faDisplay, faDatabase, faBriefcase, faBullhorn, faBook, faMasksTheater, faBorderAll, faClock } from '@fortawesome/free-solid-svg-icons';


const Courses = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const lessons = [
        { id: 1, img: heroImg01, title: 'AWS Certified Solutions Architect', reviewImg: personImg01, reviewer: 'Lina', progress: '71%', lessonInfo: 'Lesson 5 of 7' },
        { id: 2, img: heroImg02, title: 'AWS Certified Solutions Architect', reviewImg: personImg01, reviewer: 'Lina', progress: '71%', lessonInfo: 'Lesson 5 of 7' },
        { id: 3, img: heroImg03, title: 'AWS Certified Solutions Architect', reviewImg: personImg01, reviewer: 'Lina', progress: '71%', lessonInfo: 'Lesson 5 of 7' },
        { id: 4, img: heroImg01, title: 'AWS Certified Solutions Architect', reviewImg: personImg01, reviewer: 'Lina', progress: '71%', lessonInfo: 'Lesson 5 of 7' },
        { id: 5, img: heroImg02, title: 'AWS Certified Solutions Architect', reviewImg: personImg01, reviewer: 'Lina', progress: '71%', lessonInfo: 'Lesson 5 of 7' },
        { id: 6, img: heroImg03, title: 'AWS Certified Solutions Architect', reviewImg: personImg01, reviewer: 'Lina', progress: '71%', lessonInfo: 'Lesson 5 of 7' },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === lessons.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? lessons.length - 1 : prevIndex - 1
        );
    };

    const [currIndex, setCurrIndex] = useState(0);

    const previousSlide = () => {
        const lastIndex = cards.length - 1;
        const shouldResetIndex = currIndex === 0;
        const index = shouldResetIndex ? lastIndex - 3 : currIndex - 4;
        setCurrIndex(index);
    };

    const nextCardSlide = () => {
        const lastIndex = cards.length - 4;
        const shouldResetIndex = currIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currIndex + 4;
        setCurrIndex(index);
    };

    const cards = [
        {
            imgSrc: courseimg01,
            design: "Design",
            time: "3 Month",
            title: "AWS Certified Solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
            reviewerImg: personImg01,
            reviewerName: "Lina",
            oldPrice: "$100",
            newPrice: "$80"
        },
        {
            imgSrc: courseimg02,
            design: "Design",
            time: "3 Month",
            title: "AWS Certified Solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
            reviewerImg: personImg01,
            reviewerName: "Lina",
            oldPrice: "$100",
            newPrice: "$80"
        },
        {
            imgSrc: courseimg01,
            design: "Design",
            time: "3 Month",
            title: "AWS Certified Solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
            reviewerImg: personImg01,
            reviewerName: "Lina",
            oldPrice: "$100",
            newPrice: "$80"
        },
        {
            imgSrc: courseimg01,
            design: "Design",
            time: "3 Month",
            title: "AWS Certified Solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
            reviewerImg: personImg01,
            reviewerName: "Lina",
            oldPrice: "$100",
            newPrice: "$80"
        },
    ];

  return (
    <div>
        <Navbar />
        <section id="welcome" className="welcome">
            <div className="welcome-top">
                <h2>Welcome back, ready for your next lesson?</h2>
                <h6>View history</h6>
            </div>
            <div className="lessons slider container">
                <div className="lesson-track" style={{ transform: `translateX(-${currentIndex * 100 / lessons.length}%)` }}>
                    {lessons.map((lesson, index) => (
                        <div key={lesson.id} className="lesson-card card">
                            <img src={lesson.img} alt={`Lesson ${index + 1}`} />
                            <h1>{lesson.title}</h1>
                            <div className="review">
                                <img src={lesson.reviewImg} alt={lesson.reviewer} />
                                <h4>{lesson.reviewer}</h4>
                            </div>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: lesson.progress }}></div>
                            </div>
                            <p>{lesson.lessonInfo}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pagination">
                <button onClick={prevSlide} className="prev pp2">&#10094;</button>
                <button onClick={nextSlide} className="next nn2">&#10095;</button>
            </div>
        </section>

        <section className="favourite-courses">
            <h1>Choice favourite course from top Category</h1>
            <div className="category-section">
                <div className="category-card">
                    <div className="icon icon1">
                    <FontAwesomeIcon icon={faPaintbrush} className='text-teal-500 h-7' />
                        </div>
                    <h3>Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </div>
                <div className="category-card">
                    <div className="icon icon2">
                    <FontAwesomeIcon icon={faDisplay} className='text-indigo-500 h-7' />
                        </div>
                    <h3>Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </div>
                <div className="category-card">
                    <div className="icon icon3">
                    <FontAwesomeIcon icon={faDatabase} className='text-blue-300 h-7' />
                        </div>
                    <h3>Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </div>
                <div className="category-card">
                    <div className="icon icon4">
                    <FontAwesomeIcon icon={faBriefcase} className='text-teal-500 h-7' />
                        </div>
                    <h3>Business</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </div>
                <div className="category-card">
                    <div className="icon icon5">
                    <FontAwesomeIcon icon={faBullhorn} className='text-orange-400 h-7' />
                        </div>
                    <h3>Marketing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </div>
                <div className="category-card">
                    <div className="icon icon6">
                    <FontAwesomeIcon icon={faBook} className='text-red-400 h-7' />
                        </div>
                    <h3>Photography</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </div>
                <div className="category-card">
                    <div className="icon icon7">
                    <FontAwesomeIcon icon={faMasksTheater} className='text-gray-800 h-7' />
                        </div>
                    <h3>Acting</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </div>
                <div className="category-card">
                    <div className="icon icon8">
                    <FontAwesomeIcon icon={faBriefcase} className='text-teal-500 h-7' />
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
            <div className="relative flex items-center justify-center">
                <div className="overflow-hidden w-full">
                    <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currIndex * (100 / 4)}%)` }}>
                        {cards.map((card, index) => (
                            <div className="recommended-card card flex-shrink-0 w-1/4 p-4" key={index}>
                                <img src={card.imgSrc} alt="Lesson" />
                                <div className="design-time">
                                    <div className="design">
                                        <FontAwesomeIcon icon={faBorderAll} className='text-gray-300 mr-4' />
                                        {card.design}
                                    </div>
                                    <div className="time">
                                        <FontAwesomeIcon icon={faClock} className='text-gray-300 mr-4' />
                                        {card.time}
                                    </div>
                                </div>
                                <h1>{card.title}</h1>
                                <p>{card.description}</p>
                                <div className="review">
                                    <div className="person-review">
                                        <img src={card.reviewerImg} alt="" />
                                        <h4>{card.reviewerName}</h4>
                                    </div>
                                    <div className="course-price">
                                        <p>{card.oldPrice}</p>
                                        <p>{card.newPrice}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="pagination">
                <button className="prev pp2">&#10094;</button>
                <button className="next nn2">&#10095;</button>
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
                                <FontAwesomeIcon icon={faBorderAll} className='text-gray-300 mr-4' />
                                Desgin</div>
                            <div className="time">
                                <FontAwesomeIcon icon={faClock} className='text-gray-300 mr-4' />
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
                                <FontAwesomeIcon icon={faBorderAll} className='text-gray-300 mr-4' />
                                Desgin</div>
                            <div className="time">
                                <FontAwesomeIcon icon={faClock} className='text-gray-300 mr-4' />
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
                                <FontAwesomeIcon icon={faBorderAll} className='text-gray-300 mr-4' />
                                Desgin</div>
                            <div className="time">
                                <FontAwesomeIcon icon={faClock} className='text-gray-300 mr-4' />
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
                                <FontAwesomeIcon icon={faBorderAll} className='text-gray-300 mr-4' />
                                Desgin</div>
                            <div className="time">
                                <FontAwesomeIcon icon={faClock} className='text-gray-300 mr-4' />
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
                                <FontAwesomeIcon icon={faBorderAll} className='text-gray-300 mr-4' />
                                Desgin</div>
                            <div className="time">
                                <FontAwesomeIcon icon={faClock} className='text-gray-300 mr-4' />
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
                                <FontAwesomeIcon icon={faBorderAll} className='text-gray-300 mr-4' />
                                Desgin</div>
                            <div className="time">
                                <FontAwesomeIcon icon={faClock} className='text-gray-300 mr-4' />
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
                                <FontAwesomeIcon icon={faBorderAll} className='text-gray-300 mr-4' />
                                Desgin</div>
                            <div className="time">
                                <FontAwesomeIcon icon={faClock} className='text-gray-300 mr-4' />
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
                                <FontAwesomeIcon icon={faBorderAll} className='text-gray-300 mr-4' />
                                Desgin</div>
                            <div className="time">
                                <FontAwesomeIcon icon={faClock} className='text-gray-300 mr-4' />
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
                                <FontAwesomeIcon icon={faBorderAll} className='text-gray-300 mr-4' />
                                Desgin</div>
                            <div className="time">
                                <FontAwesomeIcon icon={faClock} className='text-gray-300 mr-4' />
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
                                <FontAwesomeIcon icon={faBorderAll} className='text-gray-300 mr-4' />
                                Desgin</div>
                            <div className="time">
                                <FontAwesomeIcon icon={faClock} className='text-gray-300 mr-4' />
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
                                <FontAwesomeIcon icon={faBorderAll} className='text-gray-300 mr-4' />
                                Desgin</div>
                            <div className="time">
                                <FontAwesomeIcon icon={faClock} className='text-gray-300 mr-4' />
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
                                <FontAwesomeIcon icon={faBorderAll} className='text-gray-300 mr-4' />
                                Desgin</div>
                            <div className="time">
                                <FontAwesomeIcon icon={faClock} className='text-gray-300 mr-4' />
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