import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Location from "expo-location";
import Constants from "expo-constants";
import * as Font from "expo-font";
import MapView, { Marker } from "react-native-maps";

import GooglePlacesInput from "./components/GooglePlacesInput";
import ConfirmScreen from "./components/ConfirmScreen";
import ReceiptScreen from "./components/ReceiptScreen";

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
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [showReceipt, setShowReceipt] = useState<boolean>(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [search, setSearch] = useState<string>("second");

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
    setShowConfirm(true);
  };

  const handleYes = () => {
    setShowConfirm(false);
    setConfirmPark(false);
    setShowReceipt(true);
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
          {/* <Text>return</Text> */}
          <Image
            style={styles.returnToMeIcon}
            source={require("./assets/images/icons8-near-me-96.png")}
          ></Image>
        </TouchableOpacity>

        {confirmPark && (
          <TouchableOpacity
            style={styles.confirmParkContainer}
            onPress={handleConfirmPark}
          >
            <Text style={styles.confirmText}>Confirm Parking</Text>
          </TouchableOpacity>
        )}

        {showConfirm && (
          <ConfirmScreen
            setShowConfirm={setShowConfirm}
            handleYes={handleYes}
            search={search}
          />
        )}

        {showReceipt && (
          <ReceiptScreen
            setShowReceipt={setShowReceipt}
            handleYes={handleYes}
            search={search}
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
