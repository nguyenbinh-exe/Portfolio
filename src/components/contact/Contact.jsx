import React, {useRef} from "react";
import emailjs from '@emailjs/browser'
import "./contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1myve6l', 'template_92p1cpg', form.current, 'EQyRpDeyjkMMsq5GL')
            e.target.reset()
    };

  return (
      <section className="contact section" id="contact">
          <h2 className="section_title">Contact Me</h2>
          <span className="section_subtitle">Get in touch</span>

          <div className="contact_container container grid">
              <div className="contact_content">
                  <h3 className="contact_title">Reach out to Me</h3>
                  <div className="contact_info">
                      <div className="contact_card">
                          <i className='bx bxl-github contact_card-icon'></i>
                          <h3 className="contact_card-title">GitHub</h3>
                          <span className="contact_card-data"></span>
                          <a href="https://github.com/nguyenbinh-exe" className="contact_button">
                              View my Work <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                          </a>
                      </div>
                      <div className="contact_card">
                          <i className='bx bxl-linkedin contact_card-icon'></i>
                          <h3 className="contact_card-title">LinkedIn</h3>
                          <span className="contact_card-data"></span>
                          <a href="https://www.linkedin.com/in/nguyenbinh-exe/" className="contact_button">
                              Connect with Me <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="contact_content">
                  <h3 className="contact_title">Leave a message</h3>
                     <div className="contact_card">

                      <form ref={form} onSubmit={sendEmail} action="" className="contact_form">
                          <div className="contact_form-div">
                              <label className="contact_form-tag">Name </label>
                              <input type="text" name="name" className="contact_form-input" placeholder="Full Name"/>
                          </div>
                          <div className="contact_form-div">
                              <label className="contact_form-tag">E-Mail </label>
                              <input type="email" name="email" className="contact_form-input" placeholder="Email address"/>
                          </div>
                          <div className="contact_form-div contact_form-area">
                              <label className="contact_form-tag">Message </label>
                              <textarea name="message" className="contact_form-input" cols="30" rows="10" placeholder="Your message"></textarea>
                          </div>
                          <button className="button button--flex">
                              Send message
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Contact