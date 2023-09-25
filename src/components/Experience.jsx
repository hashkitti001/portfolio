import React from 'react'
import "../styles/experience.css"
import { AiOutlineHtml5 } from 'react-icons/ai'
import { BiLogoBootstrap, BiLogoCss3 } from 'react-icons/bi'
import { BiLogoJavascript } from 'react-icons/bi'
import { BiLogoReact } from 'react-icons/bi'
import { SiExpress } from 'react-icons/si'
import { BiLogoPython } from 'react-icons/bi'
import { SiSqlite } from 'react-icons/si'
import { SiGnubash } from 'react-icons/si'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { BiLogoNodejs } from 'react-icons/bi'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>Tools and Technologies</h2>

      <div className="container experience_container">
        <div className="exp experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <AiOutlineHtml5 className="skillicon" />
              <h4>HTML</h4>
            </article>
            <article className='experience_details'>
              <BiLogoCss3 className="skillicon" />
              <h4>CSS</h4>
            </article>
            <article className='experience_details'>
              <BiLogoJavascript className="skillicon" />
              <h4>JavaScript</h4>
            </article>
            <article className='experience_details'>
              <BiLogoReact className="skillicon" />
              <h4>React</h4>
            </article>
            <article className='experience_details'>
              <BiLogoTailwindCss className="skillicon" />
              <h4>Tailwind CSS</h4>
            </article>
            <article className='experience_details'>
              <BiLogoBootstrap className="skillicon" />
              <h4>Bootstrap</h4>
            </article>
          </div>
        </div>
        <div className="exp experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
        <article className='experience_details'>
            <BiLogoNodejs className="skillicon"/>
            <h4>Node.js</h4>
            </article>
            <article className='experience_details'>
            <BiLogoPython className="skillicon"/>
            <h4>Python</h4>
            </article>
            <article className='experience_details'>
            <SiExpress className="skillicon"/>
            <h4>Express.js</h4>
            </article>
            <article className='experience_details'>
            <SiSqlite className="skillicon"/>
            <h4>SQLite</h4>
            </article>
           </div>
        </div>
        <div className="exp experience_others">
          <h3>Others</h3>
        <article className='experience_details'>
            <SiGnubash className="skillicon"/>
            <h4>Bash</h4>
            </article>
        </div>
        <div className="exp experience_mobile">
        <h3>Mobile</h3>
        <article className='experience_details'>
            <BiLogoReact className="skillicon"/>
            <h4>React Native</h4>
            </article>
        </div>
      </div>
    </section>
  )
}

export default Experience;
