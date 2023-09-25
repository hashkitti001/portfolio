import React, {useRef} from 'react'
import '../styles/contact.css'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_js6a89o', 'template_65arkul', form.current, 'dxDYfQLjsm1i-TC9w')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
    <section id="contact">
        <h2>Say Hi!</h2>
        <p className="text-light">The form sends your message to my email address.</p>
        <form ref={form} className="container" onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your name" id="name"/>
            <input type="email" name="email" placeholder="Your email" id="email"/>
            <textarea placeholder="Message"name="message" id="message" cols="30" rows="10"></textarea>
            <input className="btn btn-primary" type="submit" value="Submit"/>
        </form>
    </section>
  )
  }
export default Contact