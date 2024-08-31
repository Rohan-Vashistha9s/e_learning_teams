import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';

const AppDownload = () => {
  return (
    <div className="bg-[#252641] py-10 text-center rounded-lg shadow-lg max-w-4xl mx-auto flex items-center justify-between px-8">
      <p className="text-white text-lg">APP is available for free</p>
      <div className="flex gap-4">
        <a href="#" className="bg-[#29B9E7] text-white py-2 px-4 rounded-lg flex items-center gap-2">
          <FontAwesomeIcon icon={faAndroid} /> Android APP
        </a>
        <a href="#" className="bg-[#49BBBD] text-white py-2 px-4 rounded-lg flex items-center gap-2">
          <FontAwesomeIcon icon={faApple} /> iOS APP
        </a>
      </div>
    </div>
  );
};

export default AppDownload;
