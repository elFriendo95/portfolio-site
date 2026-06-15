import { Link } from "react-router-dom";
import "./QuotePage.css";
import { useBlogQuote } from "../../hooks/useQuote";

export function QuotePage() {
  const { quote, loading, error } = useBlogQuote();

  if (loading) return <div className="card">Loading...</div>;
  if (error) return <div className="card">Error: {error}</div>;
  if (!quote) return <div className="card">No quote found</div>;

  return (
    <div className="card">
      <Link to="/blog" className="a-link btn btn-secondary">
        Back to Blog
      </Link>
      <div>
        <p>"{quote.text}"</p>
        <p>- {quote.author}</p>
      </div>
    </div>
  );
}
