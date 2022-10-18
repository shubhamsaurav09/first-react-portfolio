import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_1jttdbj",
      "template_pv8sfbc",
      form.current,
      "TC-BkE3e1ct0vJxCy"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>shubhamsauravft9@gmail.com</h5>
            <a href="mailto:shubhamsauravft9@mail.com">Send a Mail</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 8340531321</h5>
            <a
              href="https://api.whatsapp.com/send?phone=918340531321"
              target="_blank"
              rel="noreferrer"
            >
              Chat with Me
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messnger</h4>
            <h5>Shubham Saurav</h5>
            <a
              href="https://m.me/shubhamsauravft9"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
