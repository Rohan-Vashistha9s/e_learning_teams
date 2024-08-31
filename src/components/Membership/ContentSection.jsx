import React from 'react';
import card1 from'../assest/media/course-card.png'


const content = [
  { imgSrc:card1, title: 'Become a Teacher', description: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',apply:'Apply as a Teacher' },
  { imgSrc:card1, title: 'Become a Coursector', description: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',apply:'Apply as a Coursector' },
];

const ContentSection = () => {
  return (
    <div className="flex justify-evenly p-5 max-w-screen-xl mx-auto">
      {content.map((item, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden w-[45%]">
          <img src={item.imgSrc} alt={item.title} className="w-full h-auto object-cover" />
          <div className="p-5">
            <h2 className="text-2xl font-semibold text-[#252641] mb-4">{item.title}</h2>
            <p className="text-lg text-[#696984] mb-4">{item.description}</p>
            <button className="bg-[#49BBBD] text-white py-3 px-6 rounded-lg font-medium text-sm">{item.apply}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentSection;
