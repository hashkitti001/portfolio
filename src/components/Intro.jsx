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
          <p>I am a sophomore at the Federal University of Technology, Akure currently pursuing a bachelor's degree in Software
      Engineering.<br/>
      I have experience in frontend development, version control systems, Linux and Windows environments from college
      coursework, online boot camps and courses, and I hope to expand my skill set to include backend development,
      mobile app development and machine learning.<br/>I enjoy working in collaborative, fast paced work environments,
      and I'm also looking for opportunities to grow and apply my skills</p>
        <a className="btn btn-primary" href="#contact">Let's Talk</a>

        </div>
        
      </div>

    </section>
  )
}

export default Intro;
