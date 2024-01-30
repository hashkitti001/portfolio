import React from 'react'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import '../styles/about.css'
import dp2 from "/src/assets/dp1.png"
const Intro = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img className="dp" src={dp2} alt="Profile pix"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className="about_icon"/>
                <h5>Experience</h5>
                <small>2 Years of Working Experience</small>
              </article>
            <article className='about_card'>
              <VscFolderLibrary className="about_icon"/>
                <h5>Projects</h5>
                <small>8 Complete Projects</small>
            </article>
          </div>
  <p>Hello! I am a student at the Federal University of Technology, Akure, actively pursuing a bachelor's degree in Software Engineering. <br/>
My academic journey has equipped me with a strong foundation in web development, version control systems, and proficiency in the Linux command line. <br/>
    This expertise has been cultivated through rigorous college coursework, online boot camps, and various courses, with a commitment to expanding my skill set continuously.<br/>
Currently, I am seeking opportunities that not only align with my current skill set but also provide a platform for continuous growth and practical application of my expanding skills.
</p>
        <a className="btn btn-primary" href="#contact">Let's Talk</a>

        </div>
        
      </div>

    </section>
  )
}

export default Intro;
