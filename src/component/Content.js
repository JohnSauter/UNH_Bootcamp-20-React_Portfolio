/* The content part of the page  */
import "./Content.css";

import ContactForm from "./ContactForm.js";
import Portfolio from "./Portfolio.js";

export default function Content(props) {
  if (props.section_name === "About_me") {
    return (
      <div className="content_container">
        <span>
          <img
            src="./assets/images/John_headshot_2007_12_200_200.png"
            alt="John Sauter portrait"
            width="100px"
          ></img>
        </span>
        <p className="text_1">
          I am an experienced computer programmer who understands the discipline
          necessary to build products that work, on time and within budget.
        </p>
        <p className="text_2">
          I have worked in many roles in academia and industry, including team
          leader, product development, implementation, quality assurance and
          customer support. As a Principal Software Engineer I developed
          products for Digital Equipment Corporation, a world-class computer
          manufacturer. In September 2022 I will receive a certificate in
          full-stack coding from the University of New Hampshire. That training
          will provide me with experience in JavaScript and its add-on modules
          for front-end and back-end development. I am looking for a permanent,
          full-time position that will let me exercise and develop my computer
          programming skills.
        </p>
      </div>
    );
  }

  if (props.section_name === "Résumé") {
    return (
      <div className="content_container">
        <p className="text_2">
          With over 50 years of experience in the computer industry, my résumé
          is quite long. I have worked as a system programmer for the Stanford
          Artificial Intelligence project and for Sanders Associates, a military
          contractor. I worked as a Software Engineer for Digital Equipment
          Corporation, creating and maintaining products for a world-class
          computer manufacturer.
        </p>
        <p className="text_2">
          <a href="./assets/documents/Résumé.pdf" target="_blank">
            You can download my résumé by clicking here.
          </a>
        </p>
      </div>
    );
  }

  if (props.section_name === "Contact") {
    return (
      <div className="contact_form_container">
        <ContactForm />
      </div>
    );
  }

  if (props.section_name === "Portfolio") {
    return (
      <div className="content_container">
        <Portfolio />
      </div>
    );
  }

  return <div>other content: {props.section_name}</div>;
}
