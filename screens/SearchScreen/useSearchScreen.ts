import { useCallback, useState } from "react";
import axios from "axios";
import { debounce } from "lodash";
import type { Article } from "@/types";
import Constants from "expo-constants";

const API_KEY = Constants?.expoConfig?.extra?.API_KEY;
const BASE_URL = "https://newsapi.org/v2/everything";

export const useSearchScreen = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [articles, setArticles] = useState<Array<Article>>([]);

  const debouncedSearch = useCallback(
    debounce(async (nextQuery) => {
      if (nextQuery.length < 2) {
        // Don't search if query is too short (less than 2 characters)
        // Clear articles if query is empty
        setArticles([]);
        return;
      }

      await fetchNews(nextQuery);
    }, 200),
    [],
  );

  const handleChangeText = (text: string) => {
    setQuery(text);
    debouncedSearch(text);
  };

  const fetchNews = async (searchQuery: string) => {
    if (!searchQuery) return;

    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: searchQuery,
          apiKey: API_KEY,
          pageSize: 5,
          language: "en",
        },
      });
      setArticles(response.data.articles);
    } catch (err) {
      setError("Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  return {
    data: {
      query,
      articles,
      error,
      loading,
      emptySearch: !loading && !error && !articles.length,
    },
    operations: { handleChangeText },
  };
};
