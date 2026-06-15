import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type QuoteType = {
  text: string;
  id: number;
  author: string;
};
export function useBlogQuote() {
  const { id } = useParams();
  const [quote, setQuote] = useState<QuoteType | null>(null);
  const [loading, setLoading] = useState(false);
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
  return { quote, loading, error };
}
