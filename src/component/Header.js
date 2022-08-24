/* The top part of the page  */
import "./Header.css";

/* A function for each navigation item in the header.
 * When clicked it highlights itself and switches what is
 * presented in the contect section.
 * Props contains the name if the item currently selected
 * and the function to call when the item is clicked.
 */

function AboutMe(props) {
  let selectedQ = "";
  if (props.section_name === "About_me") {
    selectedQ = "selected";
  } else {
    selectedQ = "not_selected";
  }
  return (
    <span className={selectedQ} onClick={props.onClick}>
      About Me
    </span>
  );
}
function TechnicalSkills(props) {
  let selectedQ = "";
  if (props.section_name === "Technical_skills") {
    selectedQ = "selected";
  } else {
    selectedQ = "not_selected";
  }
  return (
    <span className={selectedQ} onClick={props.onClick}>
      Technical Skills
    </span>
  );
}

function Portfolio(props) {
  let selectedQ = "";
  if (props.section_name === "Portfolio") {
    selectedQ = "selected";
  } else {
    selectedQ = "not_selected";
  }
  return (
    <span className={selectedQ} onClick={props.onClick}>
      Portfolio
    </span>
  );
}

function Contact(props) {
  let selectedQ = "";
  if (props.section_name === "Contact") {
    selectedQ = "selected";
  } else {
    selectedQ = "not_selected";
  }
  return (
    <span className={selectedQ} onClick={props.onClick}>
      Contact
    </span>
  );
}

function Résumé(props) {
  let selectedQ = "";
  if (props.section_name === "Résumé") {
    selectedQ = "selected";
  } else {
    selectedQ = "not_selected";
  }
  return (
    <span className={selectedQ} onClick={props.onClick}>
      Résumé
    </span>
  );
}

/* Display my name.  */
function Name(props) {
  return <span className="my_name">John Sauter</span>;
}

export default function Header(props) {
  /* Functions to respond to clicks on header items  */
  function click_about_me(e) {
    props.setSection_name("About_me");
  }
  function click_technical_skills(e) {
    props.setSection_name("Technical_skills");
  }
  function click_portfolio(e) {
    props.setSection_name("Portfolio");
  }
  function click_contact(e) {
    props.setSection_name("Contact");
  }
  function click_résumé(e) {
    props.setSection_name("Résumé");
  }

  return (
    <nav className="header_container">
      <Name />
      <AboutMe section_name={props.section_name} onClick={click_about_me} />
      <TechnicalSkills
        section_name={props.section_name}
        onClick={click_technical_skills}
      />
      <Portfolio section_name={props.section_name} onClick={click_portfolio} />
      <Contact section_name={props.section_name} onClick={click_contact} />
      <Résumé section_name={props.section_name} onClick={click_résumé} />
    </nav>
  );
}
