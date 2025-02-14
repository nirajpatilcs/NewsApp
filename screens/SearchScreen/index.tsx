import { ArticleCard } from "@/components";
import type { Article } from "@/types";
import { useMemo } from "react";
import { SafeAreaView, ScrollView, StyleSheet, TextInput } from "react-native";
import uuid from "react-native-uuid";
import { useSearchScreen } from "./useSearchScreen";

export const SearchScreen = () => {
  const {
    data: { query, articles, error, loading, emptySearch },
    operations: { handleChangeText },
  } = useSearchScreen();

  const searchedArticles = useMemo(() => {
    return articles.map((article: Article) => (
      <ArticleCard
        key={uuid.v4()}
        title={article.title}
        description={article.description}
        imageUrl={article.urlToImage}
      />
    ));
  }, [articles]);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter search term..."
        value={query}
        onChangeText={handleChangeText}
      />
      <ScrollView style={styles.scrollContainer}>{searchedArticles}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  scrollContainer: {
    marginBottom: 100, // To make space for the Last Item
  },
});
