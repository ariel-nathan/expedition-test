import { View, Text, TouchableOpacity } from "react-native";

import styled from "styled-components/native";

import DirectionSVG from "../SVG/DirectionSVG";
import MoreSVG from "../SVG/MoreSVG";
import ParkingIconSVG from "../SVG/ParkingIconSVG";

const ReceiptTop = ({ search, spot }: any) => {
  return (
    <>
      <ParkingIconContainer>
        <ParkingIconSVG />
      </ParkingIconContainer>

      <ReceiptHeadingContainer>
        <View style={{ width: "80%" }}>
          <Text
            style={{
              fontFamily: "RubikSemiBold",
              fontSize: 20,
            }}
          >
            {search}
          </Text>
          <Text
            style={{
              fontFamily: "Rubik",
              fontSize: 14,
              color: "gray",
            }}
          >
            {search}
          </Text>
        </View>
        <ThreeDotsContainer>
          <MoreSVG />
        </ThreeDotsContainer>
      </ReceiptHeadingContainer>

      <ReceiptSubtitle>
        <View>
          <Text
            style={{
              fontFamily: "RubikSemiBold",
              fontSize: 14,
              textTransform: "uppercase",
            }}
          >
            {spot}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 23,
            }}
          >
            <DirectionSVG />
            <Text
              style={{
                fontFamily: "RubikSemiBold",
                fontSize: 14,
                marginLeft: 8.33,
                color: "#118AA3",
              }}
            >
              Get Directions
            </Text>
          </TouchableOpacity>
        </View>
      </ReceiptSubtitle>
    </>
  );
};

const ParkingIconContainer = styled.View`
  position: absolute;
  left: 18px;
  top: -13px;
`;

const ReceiptHeadingContainer = styled.View`
  width: 290px;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const ReceiptSubtitle = styled.View`
  width: 290px;
  height: 14px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const ThreeDotsContainer = styled.TouchableOpacity`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ReceiptTop;
