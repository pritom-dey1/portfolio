import React from 'react';
import FallingText from './Footer';
import Footercontent from './Footercontent';

const Footerlayout = () => {
  return (
    <div className="relative">
      {/* Footer Content with responsive padding */}
      <div className="px-4 md:px-0">
        <Footercontent />
      </div>

      {/* Falling Text - hidden on small screens */}
      <div>
        <FallingText
          text={`GITHUB REACT NODEJS JAVASCRIPT MONGODB EXPRESS SQL PYTHON DJANGO DJANGO REST FRAMEWORK POSTMAN ILLUSTRATOR PHOTOSHOP Figma DOCKER VSCODE JWT UI/UX`}
          highlightWords={["REACT", "NODEJS", "JAVASCRIPT", "PYTHON", "DOCKER"]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="2.4rem"
        />
      </div>
    </div>
  );
};

export default Footerlayout;
