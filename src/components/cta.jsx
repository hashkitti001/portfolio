import React from 'react'
import CV from '../assets/my-cv.pdf'
/*Call to action component */
const Cta = () => {
  return (
    <div className="cta">
        <a className="btn " href={CV} download>Download CV</a>
        <a className="btn btn-primary" href="#contact">Let's Talk</a>
    </div>
  )
}

export default Cta;