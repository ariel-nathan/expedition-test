import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Camera, CameraType } from "expo-camera";

import CameraSVG from "./SVG/CameraSVG";
import ReverseSVG from "./SVG/ReverseSVG";

export default function App({
  setShowCamera,
  setShowPicture,
  setPicture,
}: any) {
  let camera: any = null;

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);

  const __takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    setShowCamera(false);
    setShowPicture(true);
    setPicture(photo);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={(r) => {
          camera = r;
        }}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              __takePicture();
            }}
          >
            <CameraSVG />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.picture}
            onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }}
          >
            <ReverseSVG color="#F6C62D" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    zIndex: 100,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: Dimensions.get("window").width,
    height: "15%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  picture: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 70,
    height: 70,
  },
  button: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 70,
    height: 70,
  },

  text: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
});
