import React from "react";
import MapView from "react-native-maps";
import { View, StyleSheet, Button } from "react-native";

import useStatusBar from "../hooks/useStatusBar";
import { logout } from "../components/Firebase/firebase";

export default function LogoutScreen() {
  useStatusBar("dark-content");
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={handleSignOut} />
      <MapView style={styles.mapStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
