import React from 'react'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import '../styles/about.css'
const Intro = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img className="dp" src="./src/assets/dp1.png" alt="Profile pix"/>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sapiente, quisquam dignissimos quas molestiae fugit similique ut officia aliquam quidem cum libero. Et illo rerum dolorum ipsa ab dicta sit.</p>
        <a className="btn btn-primary" href="#contact">Let's Talk</a>

        </div>
        
      </div>

    </section>
  )
}

export default Intro;