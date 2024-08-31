import React from 'react';
import rectangle180 from '../../assest/media/Rectangle 180.png';
import rectangle32_1 from '../../assest/media/Rectangle 32 (1).png';
import rectangle32_2 from '../../assest/media/Rectangle 32 (2).png';


const Search = () => {
  const images = [
    rectangle32_1,
    rectangle32_2,
    // Add other images here
  ];

  return (
    <div className="bg-white font-poppins text-sm">
      {/* Mobile Menu Bar */}
      <div id="mob-menu" className="hidden">
        <div className="icon">
          <i className="fa fa-times-circle text-3xl" id="close-btn"></i>
        </div>
      </div>

      {/* Search Bar */}
      <section className="relative max-w-full">
        <img src={rectangle180} alt="" className="w-full" />
        <div className="search-btns max-w-3xl mx-auto flex flex-col items-center justify-center">
          <div className="search-input absolute top-12 w-full max-w-[950px] mx-auto flex flex-wrap">
            <input
              type="text"
              placeholder="Search your favourite course"
              onInput={() => showIcon()}
              autoComplete="off"
              id="input"
              className="w-full p-4 border-none rounded-lg outline-none text-sm text-gray-700 font-normal"
            />
            <button className="absolute right-2 top-2 w-[100px] py-2 bg-[#49BBBD] text-white font-bold rounded-lg cursor-pointer hover:bg-transparent hover:border hover:border-[#49BBBD] hover:text-gray-500 transition-all duration-600">
              Search
            </button>
          </div>
          <div className="buttons absolute bottom-16 flex gap-2 flex-wrap">
            {["Subjects", "Partner", "Program", "Language", "Availability", "Learning Type"].map(
              (text) => (
                <div key={text} className="dropdown relative">
                  <button className="py-3 px-8 bg-white rounded-lg font-medium cursor-pointer hover:bg-[#49BBBD] hover:text-white">
                    {text}
                  </button>
                  <ul className="dropdown-menu hidden absolute w-[220px] p-1 -ml-[50px] -mb-[20px] bg-white rounded-lg shadow-md">
                    {[
                      "Subjects",
                      "Partner",
                      "Program",
                      "Language",
                      "Availability",
                      "Learning Type",
                    ].map((item) => (
                      <li key={item} className="relative p-2 cursor-pointer">
                        <a href="/" className="dropdown-item text-sm block w-full text-gray-600">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Search;
