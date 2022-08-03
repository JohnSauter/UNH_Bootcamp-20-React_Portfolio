/* The bottom part of the page  */
import "./Footer.css";

export default function Footer(props) {
  return (
    <nav className="footer_container">
      <span>
        <a href="https:github.com/JohnSauter/">GitHub profile</a>
      </span>
      <span>
        <a href="https://www.linkedin.com/in/john-sauter-9580b2232/">
          Linkedin profile
        </a>
      </span>
      <span>
        <a href="https://www.systemeyescomputerstore.com/">personal web site</a>
      </span>
    </nav>
  );
}
