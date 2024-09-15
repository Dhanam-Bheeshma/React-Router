import React from 'react';
import '../css/style.css';

const VerticalNavBar = ({ setSelectedCategory }) => {
  return (
    <div className="vertical-navbar">
      <ul>
        <li><a href="#" onClick={() => setSelectedCategory("Programming Languages")}>Programming Languages</a></li>
        <li><a href="#" onClick={() => setSelectedCategory("Full Stack Development")}>Full Stack Development</a></li>
        <li><a href="#" onClick={() => setSelectedCategory("Data Science")}>Data Science</a></li>
        <li><a href="#" onClick={() => setSelectedCategory("Cyber Security")}>Cyber Security</a></li>
        <li><a href="#" onClick={() => setSelectedCategory("Others")}>Others</a></li>
      </ul>
    </div>
  );
};

export default VerticalNavBar;
