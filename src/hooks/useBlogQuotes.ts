import { useEffect, useState } from "react";

type QuoteType = {
  text: string;
  id: number;
  author: string;
};
export function useBlogQuotes() {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/quotes");
        if (!response.ok) throw new Error("Failed to fetch quotes");
        const data = await response.json();
        setQuotes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { quotes, loading, error };
}
