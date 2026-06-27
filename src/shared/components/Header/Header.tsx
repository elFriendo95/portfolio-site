import { Link } from "react-router-dom";
import "./Header.css";
import { useThemeContext } from "../../../context/ThemeContext/useThemeContext";
export function Header() {
  const { toggleTheme } = useThemeContext();
  return (
    <header className="main-header">
      <button onClick={toggleTheme}>Toggle theme</button>
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
