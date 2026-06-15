import { Link } from "react-router-dom";
import "./BlogPage.css";
import { useEffect, useRef, useState } from "react";
import { useBlogQuotes } from "../../hooks/useBlogQuotes";
export function BlogPage() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const { quotes, loading, error } = useBlogQuotes();
  const menuRef = useRef<HTMLDivElement>(null);

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
  }, [hamburgerOpen, quotes]);
  return (
    <main className="p-5">
      <div className="btn btn-primary">Blog</div>
      <Link className="btn btn-secondary" to="/">
        Back to main
      </Link>

      <button
        className="btn btn-secondary"
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
        {quotes.map((quote) => (
          <div key={quote.id} className="card">
            <Link className="a-link" to={`/blog/${quote.id}`}>
              {quote.text}
            </Link>
            <small>- {quote.author}</small>
          </div>
        ))}
      </div>
    </main>
  );
}
