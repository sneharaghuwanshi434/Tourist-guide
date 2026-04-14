// frontend/app/tabs/explore.tsx
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { fetchPlaces } from "../../services/api";
import PlaceCard from "../../components/PlaceCard";

// Type for a place with image
export type Place = {
  id: number;
  name: string;
  description: string;
  location: string;
  image?: string; // optional image URL
};

export default function ExploreScreen() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchPlaces();
        // If backend doesn't send images, we can manually add them here
        const placesWithImages = data.map((place: Place) => {
          switch (place.name) {
            case "Mahakaleshwar Temple":
              return {
                ...place,
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/1/1f/Mahakaleshwar_temple.jpg",
              };
            case "Kaal Bhairav Temple":
              return {
                ...place,
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/3/34/Kaal_Bhairav_temple_Ujjain.jpg",
              };
            case "Ram Ghat":
              return {
                ...place,
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Ram_Ghat_Ujjain.jpg",
              };
            default:
              return place;
          }
        });
        setPlaces(placesWithImages);
      } catch (error) {
        console.error("Error fetching places:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading Places...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </ScrollView>
  );
}
