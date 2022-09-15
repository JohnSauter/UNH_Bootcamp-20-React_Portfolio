/* The content part of the page  */
import "./Content.css";

/* The contact form is not used.  
import ContactForm from "./ContactForm.js";
 */
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
          lead, product development, implementation, quality assurance and
          customer support. As a Principal Software Engineer I developed
          products for Digital Equipment Corporation, a world-class computer
          manufacturer. In September 2022 I received a certificate in
          full-stack coding from the University of New Hampshire. That training
          has provided me with experience in JavaScript and its add-on modules
          for front-end and back-end development. I am looking for a permanent,
          full-time position that will let me exercise and develop my computer
          programming skills.
        </p>
      </div>
    );
  }

  if (props.section_name === "Technical_skills") {
    return (
      <div className="content_container">

        <p className="text_2">
          I am skilled in using HTML, CSS,
          JavaScript, Node.js and
          their many companion packages
          to create both the front-end
          and back-end parts of a web application.
        </p>
        <p className="text_2">
          In addition to JavaScript I can code in C, Python,
          Bliss, Basic, Ada, Fortran, SQL and assembly
          language for a variety of computers.
          I have written batch, interactive
          and real-time software.
        </p>
      </div>
    );
  }

  if (props.section_name === "Résumé") {
    return (
      <div className="content_container">
        <p className="text_2">
          <a href="./assets/documents/Résumé.pdf"
            target="_blank" rel="noreferrer">
            You can download my résumé by clicking here.
          </a>
        </p>
        <p className="text_2">
          Beyond what is detailed on my résumé, I have worked
          as a system programmer for the
          Stanford Artificial Intelligence project
          and for Sanders Associates, a military
          contractor. I have also worked as a
          Software Engineer for Digital Equipment
          Corporation, creating and maintaining
          products for a world-class
          computer manufacturer.
        </p>
      </div>
    );
  }

  if (props.section_name === "Contact") {
    /* The contact form is fake, as required by the assignment.
     * Replace it by some text.
    return (
      <div className="contact_form_container">
        <ContactForm />
      </div>
    );
    */
    return (
      <div className="contact_container">
        <p className="text_2">
          I prefer to be contacted by email.
          My email address is: {" "}
          <a href="mailto:John_Sauter@systemeyescomputerstore.com">
            John_Sauter@systemeyescomputerstore.com</a>
        </p>
        <p className="text_2">
          Alternatively, you can write to me at this address:
        </p>
        <p className="text_pre">
          John Sauter<br />
          System Eyes Computer Store<br />
          20A Northwest Bvld.  Ste 345<br />
          Nashua, NH  03063-4066<br />
          USA</p>

        <p className="text_2">
          If you prefer voice communication
          you can call me at (603) 424-1188.
          That number is guarded by a robocall prevention device
          which requires you to pass an intelligence test
          before ringing through to me.
        </p>
        <p className="text_2">
          I do not communicate using text messages or FaceBook,
          but if you would like to use Google Meet or Zoom
          contact me by email or telephone can we can make
          arrangements.
        </p>
        <p className="text_2">
          If you are concerned that email may not be secure,
          we can use PGP to sign and encrypt our email
          conversations.  I routinely sign my email messages.
          You can verify the signature using my public key
          which you can retrieve using this command:
        </p>
        <p className="text_pre">
          gpg --locate-external-keys John_Sauter@systemeyescomputerstore.com
        </p>
        <p className="text_2">
          <a href="./assets/documents/John_Sauter_public_key.asc"
            target="_blank">
            You can also download it by clicking here.
          </a>
        </p>
        <p className="text_2">
          Once you have my PGP public key
          you can also sign your messages to me.
          When you do, please let me know how to find your public key.
          You might, for example, attach it to your e-mail message.
          When we both have each other's public keys we can not only
          sign our messages to each other but also encrypt them.
          See <a href="https://www.openpgp.org/"
            target="_blank" rel="noreferrer">
            https://www.openpgp.org</a> for more information.
        </p>

      </div >
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
