import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { useSearchScreen } from "./useSearchScreen";

export const SearchScreen = () => {
  const {
    data: { query },
    operations: { handleChangeText },
  } = useSearchScreen();

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter search term..."
        value={query}
        onChangeText={handleChangeText}
      />
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
