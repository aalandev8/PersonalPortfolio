import React from 'react'
import "./aboutme.css";



const AboutMe = () => {
  return (
    <section id="about" class="about">
    <div class="box-container">
      <div class="image">
        <img className="about-image" src="cv.png" alt="about-image"/>
      </div>
  <div class="content">
    <h2>My name is Facundo Duque</h2>
    <p>As a Fullstack Web Developer, I create dynamic web experiences, from frontend design to backend functionality. Using the latest technologies, I build scalable and responsive applications, ensuring high-quality code and user satisfaction.</p>
  <div class="about-info">
    <div class="info">
    <h4>Age: <span>21</span></h4>
    <h4>Gender: <span>Male</span></h4>
    <h4>Language: <span>Spanish, English, Portuguese</span></h4>
    <h4>Work: <span>Full-stack dev & UX/UI designer.</span></h4>
    <h4>Freelance: <span>available</span></h4>
    <button className='btn'>Download cv</button>
   </div>
  </div>
  </div>
  </div>

  </section>
  )
}

export default AboutMe
