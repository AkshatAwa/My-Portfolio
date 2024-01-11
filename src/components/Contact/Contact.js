import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import github from "./github.png";
import linkedin from "./linkedin.png";
import ig from "./instagram.png";
import wp from "./whatsapp.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Form Data:", form.current);

    emailjs
      .sendForm(
        "service_00xsk4m",
        "template_kuft525",
        form.current,
        "w9_2g5pYlId-oxvTm"
      )
      .then(
        (result) => {
          console.log("EmailJS Success:", result.text);
          window.location.reload();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <div className="h-[calc(96vh-4rem)] mt-[30vh]">
      <div className="c_sepline" id="contact"></div>
      <div className="contactitle flex justify-center text-4xl">Contact Me</div>
      <span className="contactdesc flex justify-center">
        <center>Please fill out the form below for contacting me.</center>
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Enter your Name"
          name="from_name"
          required
        />
        <input
          type="email"
          className="email"
          placeholder="Enter your Email here"
          name="your_email"
          required
        />
        <textarea
          name="message"
          rows="5"
          className="msg"
          placeholder="Your message"
          required
        ></textarea>
        <button className="submit" value="Send" type="submit">
          Submit
        </button>
      </form>
      <div className="link flex justify-center gap-20 mt-10">
        <a
          href="https://github.com/AkshatAwa"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <img src={github} alt="GitHub Icon" className="linkimg w-10 h-10" />
        </a>

        <a
          href="https://www.linkedin.com/in/akshat-awasthi-7a89b6249/"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:opacity-80"
        >
          <img src={linkedin} alt="LinkedIn Icon" className="linkimg inw-10 h-10" />
        </a>

        <a
          href="https://www.instagram.com/yourinstagramusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <img src={ig} alt="Instagram Icon" className="linkimg w-10 h-10" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <img src={wp} alt="WhatsApp Icon" className="linkimg w-10 h-10" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
