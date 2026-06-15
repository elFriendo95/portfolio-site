import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";
import { useResize } from "../../../hooks/useResize";
export function BurgerMenu() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const width = useResize();

  useEffect(() => {
    if (!menuRef.current) return;

    if (hamburgerOpen) {
      // Get actual scroll height (content height)
      const scrollHeight = menuRef.current.scrollHeight;
      // Set max-height to that pixel value
      menuRef.current.style.maxHeight = `${scrollHeight}px`;
      menuRef.current.style.opacity = "1";
    } else {
      // Collapse
      menuRef.current.style.maxHeight = "0px";
      // menuRef.current.style.opacity = "0";
    }
  }, [hamburgerOpen]);
  if (width > 768) return null;
  return (
    <div style={{ zIndex: 100, position: "relative" }}>
      <button
        id="btn-hamburger"
        className="btn btn-primary"
        onClick={() => setHamburgerOpen((prev) => !prev)}
      >
        ☰
      </button>
      <div
        ref={menuRef}
        className="grid-group hamburger"
        style={{
          overflow: "hidden",
          transition: "max-height 1s ease, opacity 0.2s ease",
          maxHeight: "0px",
          opacity: 0,
        }}
      >
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
      </div>
    </div>
  );
}
