import React from 'react'
import FallingText from './Footer'

const Footerlayout = () => {
  return (
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
/>    </div>
  )
}

export default Footerlayout