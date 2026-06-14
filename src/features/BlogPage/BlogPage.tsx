import { Link } from "react-router-dom";
import "./BlogPage.css";
import { useEffect, useRef, useState } from "react";
export function BlogPage() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("api/quotes");
      const data = await response.json();
      return data;
    };
    fetchData().then((q) => setQuotes(q));
  }, []);
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
      menuRef.current.style.opacity = "0";
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
        onClick={() => {
          if (hamburgerOpen) setHamburgerOpen(false);
          else setHamburgerOpen(true);
        }}
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
        {quotes.map((quote: { id: number; text: string }) => {
          // console.log(quote.id!);
          return (
            <div key={quote.id} className="card">
              <Link className="a-link" to={`/blog/${String(quote.id)}`}>
                {quote.text}
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
