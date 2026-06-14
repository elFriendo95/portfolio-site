import { Link } from "react-router-dom";
import "./Header.css";
export function Header() {
  return (
    <header className="main-header">
      <nav>
        <ul className="flex flex-start">
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
          <Link to="/blog" className="a-link">
            Blog
          </Link>
        </ul>
      </nav>
    </header>
  );
}
