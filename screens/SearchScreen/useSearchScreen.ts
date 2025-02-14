import { useCallback, useState } from "react";
import { debounce } from "lodash";

export const useSearchScreen = () => {
  const [query, setQuery] = useState("");

  const debouncedSearch = useCallback(
    debounce(async (nextQuery) => {
      if (nextQuery.length < 2) {
        // Don't search if query is too short (less than 2 characters)
        return;
      }

      // TODO: Implement search logic
    }, 200),
    [],
  );

  const handleChangeText = (text: string) => {
    setQuery(text);
    debouncedSearch(text);
  };

  return {
    data: {
      query,
    },
    operations: { handleChangeText },
  };
};
