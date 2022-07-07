import React from "react";
import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PictureView = ({ setShowPicture, picture, setComplete }: any) => {
  return (
    <View
      style={{
        position: "absolute",
        zIndex: 100,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground
        source={{ uri: picture && picture.uri }}
        style={{
          position: "absolute",
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 50,
          width: "80%",
          borderRadius: 10,
          backgroundColor: "black",
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          setShowPicture(false);
          setComplete(true);
        }}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "RubikBold",
            fontSize: 20,
            textTransform: "uppercase",
          }}
        >
          Use Picture?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PictureView;
