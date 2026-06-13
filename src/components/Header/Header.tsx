import "./Header.css";
export function Header() {
  return (
    <header className="main-header" aria-role="banner">
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
        </ul>
      </nav>
    </header>
  );
}
