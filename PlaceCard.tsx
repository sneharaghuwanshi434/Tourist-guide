import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Place } from "../types/place";

type Props = { place: Place };

export default function PlaceCard({ place }: Props) {
  return (
    <View style={styles.card}>
      {place.image && <Image source={{ uri: place.image }} style={styles.image} />}
      <Text style={styles.title}>{place.name}</Text>
      <Text style={styles.description}>{place.description}</Text>
      <Text style={styles.location}>{place.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: { fontSize: 18, fontWeight: "bold" },
  description: { marginTop: 5, fontSize: 14, color: "#555" },
  location: { marginTop: 5, fontSize: 12, color: "#888" },
});
