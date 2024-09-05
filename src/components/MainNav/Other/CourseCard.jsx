import React from "react";
import cube from '../../assest/media/cube.png'
import clock from '../../assest/media/clock.png'
import group from "../../assest/media/Group 234.png"
import coursecard from "../../assest/media/course-card.png"
import rectangle from "../../assest/media/Rectangle 32.jfif"





const CourseCard = ({ imgSrc, title, info, price, imgName }) => {
    return (
        <div className="w-1/5 p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img
                className="w-full h-auto rounded-lg transform scale-90 hover:scale-100 transition-transform cursor-pointer"
                src={imgSrc}
                alt={title}
            />
            <div className="flex justify-between mt-2">
                <div className="flex items-center gap-1">
                    <img className="w-4 h-4" src={cube} alt="cube" />
                    <p className="text-xs font-medium text-gray-600">Design</p>
                </div>
                <div className="flex items-center gap-1">
                    <img className="w-4 h-4" src={clock} alt="clock" />
                    <p className="text-xs font-medium text-gray-600">3 Months</p>
                </div>
            </div>
            <h3 className="font-medium mt-2 text-lg text-gray-900">{title}</h3>
            <p className="text-sm mt-2 text-gray-600">{info}</p>
            <div className="flex justify-between mt-4">
                <div className="flex items-center gap-2">
                    <img className="w-8 h-8 object-cover" src={group} alt="profile" />
                    <p className="text-sm font-medium text-gray-900">{imgName}</p>
                </div>
                <div className="mt-2">
                    <p className="text-lg font-bold text-teal-500">${price}</p>
                </div>
            </div>
        </div>
    );
};

const Courses = () => {
    const courses = [
        {
            imgSrc: coursecard,
            title: "AWS Certified Solutions Architect",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsam.",
            price: "80",
            imgName: "Lina",
        },
        {
            imgSrc: rectangle,
            title: "AWS Certified Solutions Architect",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsam.",
            price: "80",
            imgName: "Lina",
        },
        {
            imgSrc: coursecard,
            title: "AWS Certified Solutions Architect",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsam.",
            price: "80",
            imgName: "Lina",
        },
        {
            imgSrc: rectangle,
            title: "AWS Certified Solutions Architect",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsam.",
            price: "80",
            imgName: "Lina",
        },
        {
            imgSrc:  coursecard,
            title: "AWS Certified Solutions Architect",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsam.",
            price: "80",
            imgName: "Lina",
        },
        {
            imgSrc:  rectangle,
            title: "AWS Certified Solutions Architect",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsam.",
            price: "80",
            imgName: "Lina",
        },
        {
            imgSrc:  coursecard,
            title: "AWS Certified Solutions Architect",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsam.",
            price: "80",
            imgName: "Lina",
        },
        {
            imgSrc:  rectangle,
            title: "AWS Certified Solutions Architect",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum ea ipsam.",
            price: "80",
            imgName: "Lina",
        },
        // Add more course objects here
    ];

    return (

        <div>
            <section className="max-w-full mx-auto py-8 flex flex-col items-center justify-center">
                <div className="flex flex-wrap items-center justify-center gap-8">
                    {courses.map((course, index) => (
                        <CourseCard
                            key={index}
                            imgSrc={course.imgSrc}
                            title={course.title}
                            info={course.info}
                            price={course.price}
                            imgName={course.imgName}
                        />
                    ))}
                </div>
            </section>
        </div>

    );
};

export default Courses;
