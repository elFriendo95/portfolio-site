import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./QuotePage.css";

type QuoteType = {
  text: string;
  id: number;
  author: string;
};

export function QuotePage() {
  const { id } = useParams();
  const [quote, setQuote] = useState<QuoteType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/quotes/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        setQuote(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

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
