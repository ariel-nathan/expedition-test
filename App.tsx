import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";
import Constants from "expo-constants";
import * as Font from "expo-font";
import MapView, { Marker } from "react-native-maps";

import GooglePlacesInput from "./components/GooglePlacesInput";
import ReceiptScreen from "./components/ReceiptScreen";
import CameraView from "./components/CameraView";

import CompassSVG from "./components/SVG/CompassSVG";
import PictureView from "./components/PictureView";

interface RegionInterface {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export default function App() {
  const [region, setRegion] = useState<RegionInterface>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [location, setLocation] = useState<any>(null);
  const [confirmPark, setConfirmPark] = useState<boolean>(false);
  const [showReceipt, setShowReceipt] = useState<boolean>(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [search, setSearch] = useState<string>("second");
  const [showCamera, setShowCamera] = useState(false);
  const [showPicture, setShowPicture] = useState(false);
  const [picture, setPicture] = useState(null);
  const [complete, setComplete] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Rubik: require("./assets/fonts/Rubik-Regular.ttf"),
      RubikBold: require("./assets/fonts/Rubik-Bold.ttf"),
      RubikSemiBold: require("./assets/fonts/Rubik-SemiBold.ttf"),
    })
      .then(() => {
        console.log("Fonts loaded");
        setFontsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    (async () => {
      loadFonts();
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setRegion({
        ...region,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  const returnToMe = () => {
    setRegion({
      ...region,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
    setConfirmPark(false);
  };

  const handleConfirmPark = () => {
    setShowReceipt(true);
    setConfirmPark(false);
  };

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <GooglePlacesInput
          region={region}
          setRegion={setRegion}
          setConfirmPark={setConfirmPark}
          setSearch={setSearch}
        />

        <MapView style={styles.map} showsUserLocation region={region}>
          {confirmPark && <Marker draggable coordinate={region} />}
        </MapView>

        <TouchableOpacity style={styles.returnToMe} onPress={returnToMe}>
          <CompassSVG color="black"></CompassSVG>
        </TouchableOpacity>

        {confirmPark && (
          <TouchableOpacity
            style={styles.confirmParkContainer}
            onPress={handleConfirmPark}
          >
            <Text style={styles.confirmText}>Confirm Parking</Text>
          </TouchableOpacity>
        )}

        {showReceipt && (
          <ReceiptScreen
            setShowReceipt={setShowReceipt}
            search={search}
            setShowCamera={setShowCamera}
            complete={complete}
            setComplete={setComplete}
          />
        )}

        {showCamera && (
          <CameraView
            setShowCamera={setShowCamera}
            setShowPicture={setShowPicture}
            setPicture={setPicture}
          />
        )}
        {showPicture && (
          <PictureView
            setShowPicture={setShowPicture}
            picture={picture}
            setComplete={setComplete}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,
    fontFamily: "Rubik",
  },
  returnToMe: {
    position: "absolute",
    top: "13%",
    right: 10,
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  returnToMeIcon: {
    width: 30,
    height: 30,
  },
  map: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  confirmParkContainer: {
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    bottom: "5%",
  },
  confirmText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Rubik",
  },
});
