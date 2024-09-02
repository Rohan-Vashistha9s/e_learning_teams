import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import "./BlogDetails.css";
import Navbar from '../Navbar';
import main from "../../assest/media/main.png";
import Group247 from "../../assest/media/Group 247.png";
import Rectangle23 from "../../assest/media/Rectangle 23.png";
import image12 from "../../assest/media/image 12.png";

const BlogDetails = () => {
  return (
    <>
    <Navbar />
      <main className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-12 p-0">
            <img src={main} className="img-fluid w-100" alt="Main Image" />
          </div>
        </div>
      </main>
      <section className="content-section">
        <h2 className="section-title">Why Swift UI Should Be on the Radar of Every Mobile Developer</h2>
        <p className="section-text">
          TOTC is a platform that allows educators to create online classes whereby they can store the course materials online;
          manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
        </p>
        <p className="section-text">
          TOTC is a platform that allows educators to create online classes whereby they can store the course materials online;
          manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
        </p>
        <p className="section-text">
          TOTC is a platform that allows educators to create online classes whereby they can store the course materials online;
          manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
        </p>
        <div className="tags">
          <span className="tag">affordable</span>
          <span className="tag">Stunning</span>
          <span className="tag">making</span>
          <span className="tag">madbrawns</span>
        </div>
      </section>
      <hr />
      <section className="author-section">
        <div className="author-info">
          <img src={Group247} alt="Author Image" className="author-image" />
          <div className="author-text">
            <span className="written-by">Written by</span>
            <span className="author-name">Lina</span>
          </div>
        </div>
        <button className="follow-button">Follow</button>
      </section>
      <div className="main-container">
        <div className="container">
          <div className="header">
            <h3>Related Blog</h3>
            <a href="#" className="see-all">See all</a>
          </div>
          <div className="cards slider">
            <div className="card">
              <div className="image-container">
                <img src={Rectangle23} alt="Card Image" className="img-fluid" />
              </div>
              <div className="content">
                <h3>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                <div className="author-info">
                  <img src={image12} alt="Author" />
                  <span>Lina</span>
                </div>
                <p>
                  Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                </p>
                <div className="card-view">
                  <a href="#">Read More</a>
                  <div className="views">
                    <FontAwesomeIcon icon={faEye} />
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
    </>
  );
}

export default BlogDetails;
