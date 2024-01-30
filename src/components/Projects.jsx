import React from 'react'
import "../styles/projects.css"
const Projects = () => {
  return (

    <section id="projects">
      <h2>Projects</h2>
      <div className="container portfolio_container">
        <div className="portfolio_item">
          <img className="project-img" src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/dm3s8oqtz0mwcaygqjhy.jpg" />
          <h3>Interactive Rating Component</h3>
          <div className="project-buttons">
            <a className="btn" href="https://github.com/hashkitti001/interactive-rating-component-main">Repo Link</a>
            <a className="btn btn-primary" href="https://interactive-rating-component-main-wd3z.vercel.app/">Preview Link</a>
          </div>
        </div>

        <div className="portfolio_item">
          <img className="project-img" src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/zp74vhrxan0bpg43z2uu.jpg" alt="" />
          <h3>Intro section with dropdown navigation</h3>
          <div className="project-buttons">
            <a className="btn" href="https://github.com/hashkitti001/Intro-section-with-dropdown-menu">Repo Link</a>
            <a className="btn btn-primary" href="https://intro-section-with-dropdown-menu-eight.vercel.app/">Preview Link</a>
          </div>
        </div>
        <div className="portfolio_item">
          <img className="project-img" src="https://store-images.s-microsoft.com/image/apps.42280.13834962130662620.2d9f3a48-e1b4-4862-be23-71af009f924f.81c95645-7323-49cf-adcf-8df35c9f4e9b?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg" alt="" />
          <h3>Memory game</h3>
          <div className="project-buttons">
            <a className="btn" href="https://github.com/hashkitti001/memory-game">Repo Link</a>
            <a className="btn btn-primary" href="https://memorygame-7y1g.onrender.com">Preview Link</a>
          </div>
        </div>
        <div className="portfolio_item">
          <img className="project-img" src="https://media.licdn.com/dms/image/C5612AQHm4tg5c35tLg/article-cover_image-shrink_600_2000/0/1584175590822?e=2147483647&v=beta&t=qm5hr2_27kVDNVn_sE3GbMazFcsr0i-6HeQrF807dEw" alt="" />
          <h3>Tictactoe</h3>
          <div className="project-buttons">
            <a className="btn" href="https://github.com/hashkitti001/OdinProjectFiles-/tree/main/TicTacToe%20Project">Repo Link</a>
            <a className="btn btn-primary" href="https://rawcdn.githack.com/hashkitti001/OdinProjectFiles-/19e01ff771dd464e25efdfd6237d94005525dd9b/TicTacToe%20Project/index.html">Preview Link</a>
          </div>
        </div>
       
         <div className="portfolio_item">
          <img className="project-img" src="https://i.imgur.com/FyNjDkK.jpg" alt="Chat app" />
          <h3>Chat App </h3>
          <div className="project-buttons">
            <a className="btn" href="https://github.com/hashkitti001/chatapp">Repo Link</a>
            <a className="btn btn-primary" href="https://odinchat.onrender.com/">Preview Link</a>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
