import React, { useState } from "react";
import MapView, {
  PROVIDER_GOOGLE,
  Polyline,
  Marker,
  Callout,
} from "react-native-maps";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  Image,
} from "react-native";

import useStatusBar from "../hooks/useStatusBar";
import { logout } from "../components/Firebase/firebase";

export default function HomeScreen() {
  const [region, setRegion] = useState({
    latitude: 6.713848,
    longitude: 79.98859,
    latitudeDelta: 50,
    longitudeDelta: 50,
  });
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
      {/* <Button title="Sign Out" onPress={handleSignOut} /> */}
      {/* <Button title="Sign Out" onPress={handleSignOut} /> */}
      <MapView
        //customMapStyle={mapStyle}
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        followsUserLocation={true}
        showsMyLocationButton={true}
        initialRegion={region}
        showsBuildings={true}
        zoomEnabled={true}
        region={region}
      >
        {/* Callouts & Markers */}
        <Marker
          coordinate={{
            latitude: 6.9553,
            longitude: 79.922,
          }}
          image={require("../assets/map.png")}
          title="Lanka Lab"
          description="This is a laboratory"
        >
          <Callout tooltip>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>All Tests</Text>
                <Text>Any Labtest for your door step</Text>
                <Image
                  style={styles.image}
                  source={require("../assets/lab1.png")}
                />
              </View>
              <View style={styles.arrowborder} />
              <View style={styles.arrow} />
            </View>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: 7.9553,
            longitude: 79.922,
          }}
          image={require("../assets/map.png")}
          title="Medical Lab"
          description="This is a laboratory"
        />
      </MapView>
      {/* <MapView style={styles.mapStyle} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    marginBottom: 70,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowborder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
  },
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  image: {
    width: 120,
    height: 80,
  },
});
