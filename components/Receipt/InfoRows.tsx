import { View, Text } from "react-native";
import styled from "styled-components/native";

import InfoArrowSVG from "../SVG/InfoArrowSVG";
import ClockSVG from "../SVG/ClockSVG";
import HelpSVG from "../SVG/HelpSVG";
import ReceiptSVG from "../SVG/ReceiptSVG";

const InfoRows = () => {
  return (
    <>
      <Info
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#ebeef1",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 100,
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HelpSVG />
          </View>
          <Text
            style={{
              marginLeft: 12,
              fontFamily: "Rubik",
              fontSize: 14,
            }}
          >
            View parking instructions
          </Text>
        </View>
        <InfoArrowSVG />
      </Info>
      <Info
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#ebeef1",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 100,
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ClockSVG />
          </View>
          <Text
            style={{
              marginLeft: 12,
              fontFamily: "Rubik",
              fontSize: 14,
            }}
          >
            Purchase additional months
          </Text>
        </View>
        <InfoArrowSVG />
      </Info>
      <Info>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 100,
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ReceiptSVG />
          </View>
          <Text
            style={{
              marginLeft: 12,
              fontFamily: "Rubik",
              fontSize: 14,
            }}
          >
            View receipt for $272.95
          </Text>
        </View>
        <InfoArrowSVG />
      </Info>
    </>
  );
};

const Info = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 24px;
`;

export default InfoRows;
