import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import image12 from '../assest/media/image 12.png'

const testimonials = [
  { imgSrc:image12, name: 'Bulkin Simons', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { imgSrc:image12, name: 'Bulkin Simons', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { imgSrc:image12, name: 'Bulkin Simons', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { imgSrc:image12, name: 'Bulkin Simons', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { imgSrc:image12, name: 'Bulkin Simons', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { imgSrc:image12, name: 'Bulkin Simons', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { imgSrc:image12, name: 'Bulkin Simons', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { imgSrc:image12, name: 'Bulkin Simons', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  // Add more testimonials as needed
];

const StudentTestimonials = () => {
  return (
    <section className="bg-[#ebf5ff] py-16 text-center w-full overflow-x-hidden">
      <h2 className="text-3xl text-[#2D3436] text-left max-w-screen-xl mx-auto mb-8">What our students have to say</h2>
      <div className="relative max-w-screen-xl mx-auto flex items-center justify-center overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out overflow-x-hidden">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-5 mx-2 flex-shrink-0 w-72 text-center">
              <img src={testimonial.imgSrc} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-6 bg-[#bebebe]" />
              <h3 className="text-lg text-[#2D3436] mb-2">{testimonial.name}</h3>
              <p className="text-sm text-[#696984]">{testimonial.text}</p>
            </div>
          ))}
        </div>
        <button className="absolute left-0 bg-[#9DCCFF] text-white p-2 rounded-full text-xl hover:bg-[#97e1ff] transition-colors duration-300">
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button className="absolute right-0 bg-[#9DCCFF] text-white p-2 rounded-full text-xl hover:bg-[#97e1ff] transition-colors duration-300">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </section>
  );
};

export default StudentTestimonials;
