import React, {useState} from 'react';
import "./Blog.css";
import Group40 from "../assest/media/Group 40.png";
import Rectangle34 from "../assest/media/Rectangle 34.png";
import Rectangle341 from "../assest/media/Rectangle 34 (1).png";
import Rectangle342 from "../assest/media/Rectangle 34 (2).png";
import Rectangle343 from "../assest/media/Rectangle 34 (3).png";
import Rectangle23 from "../assest/media/Rectangle 23.png";
import image12 from "../assest/media/image 12.png";
import blog01 from "../assest/media/blog-01.png";
import blog02 from "../assest/media/blog-02.png";
import blog03 from "../assest/media/blog-03.png";
import blog04 from "../assest/media/blog-04.png";
import Navbar from '../MainNav/Navbar';
import eye from "../assest/media/eye.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faClock } from '@fortawesome/free-solid-svg-icons';


const Blog = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      imgSrc: Rectangle23,
      title: 'ClassName adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
      authorImg: image12,
      authorName: 'Lina',
      views: '251,232',
    },
    {
      imgSrc: Rectangle23,
      title: 'ClassName adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
      authorImg: image12,
      authorName: 'Lina',
      views: '251,232',
    },
    {
      imgSrc: Rectangle23,
      title: 'ClassName adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
      authorImg: image12,
      authorName: 'Lina',
      views: '251,232',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div>
        <Navbar />
        <div className="main-container">
        <div className="hero-section">
            <div className="text-content">
                <div className="text-top">By Thermadbrains in <span className="highlight">inspiration</span></div>
                <h1>Why Swift UI Should Be on the <br /> Radar of Every Mobile <br />Developer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempos Lorem ipsum dolor sitamet,<br /> consectetur adipiscing elit, sed do eiusmod tempor</p>
                <button>Start learning now</button>
            </div>
            <div className="image-content">
                <img src={Group40} alt="Swift UI" />
            </div>
        </div>
    </div>
    <div className="blog-list">
        <h2>Reading blog list</h2>
        <div className="blog-items">
            <div className="blog-item">
                <img src={Rectangle34} alt="UX/UI" />
                <button className="btn">UX/UI</button>
            </div>
            <div className="blog-item">
                <img src={Rectangle341} alt="React" />
                <button className="btn">React</button>
            </div>
            <div className="blog-item">
                <img src={Rectangle342} alt="PHP" />
                <button className="btn">PHP</button>
            </div>
            <div className="blog-item">
                <img src={Rectangle343} alt="JavaScript" />
                <button className="btn">JavaScript</button>
            </div>
        </div>
    </div>

    <div className="main-container p-4">
      <div className="container mx-auto">
        <div className="header flex justify-between items-center mb-4">
          <h3 className="text-3xl text-gray-600">Related Blog</h3>
          <a href="#" className="see-all text-teal-500">See all</a>
        </div>
        <div className="cards slider flex space-x-4 overflow-hidden">
          <div className="card w-1/2">
            <div className="image-container">
              <img src={cards[currentIndex].imgSrc} alt="Card Image" className="img-fluid rounded-lg" />
            </div>
            <div className="content mt-4">
              <h3 className="font-semibold text-lg">{cards[currentIndex].title}</h3>
              <div className="author-info flex items-center mt-2">
                <img src={cards[currentIndex].authorImg} alt="Author" className="w-8 h-8 rounded-full mr-2" />
                <span>{cards[currentIndex].authorName}</span>
              </div>
              <p className="mt-2 text-gray-600">
                ClassName, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
              </p>
              <div className="card-view flex justify-between items-center mt-4">
                <a href="#" className="text-teal-500">Read More</a>
                <div className="views flex items-center">
                <img src={eye} alt="" className='w-4' />
                  <span className="ml-2">{cards[currentIndex].views}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-1/2">
            <div className="image-container">
              <img src={cards[(currentIndex + 1) % cards.length].imgSrc} alt="Card Image" className="img-fluid rounded-lg" />
            </div>
            <div className="content mt-4">
              <h3 className="font-semibold text-lg">{cards[(currentIndex + 1) % cards.length].title}</h3>
              <div className="author-info flex items-center mt-2">
                <img src={cards[(currentIndex + 1) % cards.length].authorImg} alt="Author" className="w-8 h-8 rounded-full mr-2" />
                <span>{cards[(currentIndex + 1) % cards.length].authorName}</span>
              </div>
              <p className="mt-2 text-gray-600">
                ClassName, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
              </p>
              <div className="card-view flex justify-between items-center mt-4">
                <a href="#" className="text-teal-500">Read More</a>
                <div className="views flex items-center">
                <img src={eye} alt="" className='w-4' />
                  <span className="ml-2">{cards[(currentIndex + 1) % cards.length].views}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
                <button className="prev pp2">&#10094;</button>
                <button className="next nn2">&#10095;</button>
            </div>
      </div>
    </div>

    <section className="choice choice2">
        <div className="choice-top">
            <h2>Marketing Articles</h2>
            <h6>See all</h6>
        </div>
        <div className="choice-container">
                <div className="choice-card card">
                    <img src={blog01} alt="Lesson 1" />
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
                            <img src={image12} alt="" />
                            <h4>Lina</h4>
                        </div>
                        <div className="course-price">
                            <p>$100</p>
                            <p>$80</p>
                        </div>
                    </div>
                </div>
                <div className="choice-card card">
                    <img src={blog02} alt="Lesson 1" />
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
                            <img src={image12} alt="" />
                            <h4>Lina</h4>
                        </div>
                        <div className="course-price">
                            <p>$100</p>
                            <p>$80</p>
                        </div>
                    </div>
                </div>
                <div className="choice-card card">
                    <img src={blog03} alt="Lesson 1" />
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
                            <img src={image12} alt="" />
                            <h4>Lina</h4>
                        </div>
                        <div className="course-price">
                            <p>$100</p>
                            <p>$80</p>
                        </div>
                    </div>
                </div>
                <div className="choice-card card">
                    <img src={blog04} alt="Lesson 1" />
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
                            <img src={image12} alt="" />
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

export default Blog;