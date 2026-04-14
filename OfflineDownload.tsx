import React from "react";
import { View, Button, Alert } from "react-native";

export default function OfflineDownload({ place }: { place: any }) {
  const handleDownload = () => {
    Alert.alert("Download", `Saved ${place.name} for offline use!`);
  };

  return (
    <View style={{ marginTop: 10 }}>
      <Button title="Download Offline" onPress={handleDownload} />
    </View>
  );
}
