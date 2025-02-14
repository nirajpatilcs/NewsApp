import React, { memo } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type ArticleCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export const ArticleCard = memo(
  ({ title, description, imageUrl }: ArticleCardProps) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  card: {
    flexDirection: "row", // Aligns image and text side by side
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16,
    elevation: 5,
    overflow: "hidden",
  },
  image: {
    width: 120, // Fixed width for image
    height: "100%", // Full height of the card
    resizeMode: "cover",
  },
  content: {
    flex: 1, // Takes remaining space
    padding: 16,
    justifyContent: "center", // Aligns text vertically in center
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});
