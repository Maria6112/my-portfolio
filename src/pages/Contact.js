import React from "react";
import ContactForm from "../components/ContactForm";
import "./Contact.css";
import { FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <div className="contact-container-grid">
        {/* ЛЕВАЯ ЧАСТЬ: Твоя форма */}
        <div className="contact-left-form">
          <h2 className="contact-main-title">Say Hello</h2>
          <div className="contact-title-line"></div>

          <ContactForm />
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Контакты как на фото */}
        <div className="contact-right-info">
          <h2 className="contact-main-title">My Contacts</h2>
          <div className="contact-title-line"></div>

          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>

          <div className="contact-methods">
            <div className="method-item">
              <span className="icon">
                <FiPhone color="#888" />
              </span>{" "}
              <p>+972-52-8786112</p>
            </div>
            {/* <div className="method-item">
              <span className="icon">🌐</span>
              <p>www.yourwebsite.com</p>
            </div> */}
            <div className="method-item">
              <span className="icon">
                <FiMail color="#888" />
              </span>{" "}
              <p>mariastefanian@gmail.com</p>
            </div>
            {/* <div className="method-item">
              <span className="icon">📍</span>
              <p>Chisinau, Republic of Moldova</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
