import React from 'react';
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


const Blog = () => {
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

    <div className="main-container">
        <div className="container">
            <div className="header">
                <div>
                    <h3>Related Blog</h3>
                </div>
                <div>
                    <a href="#" className="see-all">See all</a>
                </div>
            </div>
            <div className="cards slider">
                <div className="card">
                    <div className="image-container">
                        <img src={Rectangle23} alt="Card Image" className="img-fluid" />
                    </div>
                    <div className="content">
                        <h3>className adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                        <div className="author-info">
                            <img src={image12} alt="Author" />
                            <span>Lina</span>
                        </div>
                        <p>className, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <div className="card-view">
                           <div>
                            <a href="#" >Read More</a>
                           </div>
                           <div>
                            <div className="views">
                                {/* <i className="material-icons">visibility</i> */}
                                <span>251,232</span>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <img src={Rectangle23} alt="Card Image" className="img-fluid" />
                    </div>
                    <div className="content">
                        <h3>className adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                        <div className="author-info">
                            <img src={image12} alt="Author" />
                            <span>Lina</span>
                        </div>
                        <p>className, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <div className="card-view">
                            <a href="#">Read More</a>
                            <div className="views">
                                {/* <i className="material-icons">visibility</i> */}
                                <span>251,232</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <img src={Rectangle23} alt="Card Image" />
                    </div>
                    <div className="content">
                        <h3>className adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                        <div className="author-info">
                            <img src={image12} alt="Author" />
                            <span>Lina</span>
                        </div>
                        <p>className, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <div className="card-view">
                            <a href="#">Read More</a>
                            <div className="views">
                                {/* <i className="material-icons">visibility</i> */}
                                <span>251,232</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <img src={Rectangle23} alt="Card Image" />
                    </div>
                    <div className="content">
                        <h3>className adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                        <div className="author-info">
                            <img src={image12} alt="Author" />
                            <span>Lina</span>
                        </div>
                        <p>className, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <div className="card-view">
                            <a href="#">Read More</a>
                            <div className="views">
                                {/* <i className="material-icons">visibility</i> */}
                                <span>251,232</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <img src={Rectangle23} alt="Card Image" />
                    </div>
                    <div className="content">
                        <h3>className adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                        <div className="author-info">
                            <img src={image12} alt="Author" />
                            <span>Lina</span>
                        </div>
                        <p>className, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <div className="card-view">
                            <a href="#">Read More</a>
                            <div className="views">
                                {/* <i className="material-icons">visibility</i> */}
                                <span>251,232</span>
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