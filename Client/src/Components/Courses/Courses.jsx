import React from "react";
import "./Courses.css";

const Courses = () => {
  const courses = [
    {
      title: "Python Programming",
      description:
        "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies",
      price: "$450.00",
    },
    {
      title: "C++ Programming",
      description:
        "C++ is a computer programming language which is a development of the C++ language",
      price: "$450.00",
    },
    {
      title: "C# Programming",
      description:
        "C# is an object-oriented programming language developed by Microsoft as part of its framework initiative",
      price: "$450.00",
    },
  ];
  return (
    <>
      <div className="app">
        <h1 className="heading1">Explore Coaches</h1>
        <div className="tabs">
          <span className="active-tab">Programming</span>
          <span>Language</span>
          <span>Relationship</span>
          <span>Fitness</span>
        </div>
        <div className="courses">
          {courses.map((course, index) => (
            <div className={`course-card1`} key={index}>
              <div className="icon"></div>
              <h2 className="cheading">{course.title}</h2>
              <p>{course.description}</p>
              <div className="card-footer">
                <span className="price">{course.price}</span>
                <a href="#" className="read-more">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
