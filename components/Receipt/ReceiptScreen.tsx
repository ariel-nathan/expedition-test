import { Dimensions, StyleSheet, View, Text, Image } from "react-native";

import styled from "styled-components/native";

import CameraSVG from "../SVG/CameraSVG";
import CloseSVG from "../SVG/CloseSVG";
import ChatBubbleSVG from "../SVG/ChatBubbleSVG";

import ReceiptTop from "./ReceiptTop";
import DateInfo from "./DateInfo";
import InfoRows from "./InfoRows";

import { ReceiptDataInterface } from "../../utils/types";

interface IProps {
  setShowReceipt: any;
  search: string;
  setShowCamera: any;
  complete: boolean;
  setComplete: any;
  receiptData: ReceiptDataInterface;
}

const ReceiptScreen = ({
  setShowReceipt,
  search,
  setShowCamera,
  complete,
  setComplete,
  receiptData,
}: IProps) => {
  return (
    <ReceiptScreenContainer style={styles.receiptContainer}>
      <CloseButton onPress={() => setShowReceipt(false)}>
        <CloseSVG></CloseSVG>
      </CloseButton>

      <ReceiptContainer>
        <Header>
          <Text
            style={{
              fontFamily: "RubikBold",
              fontSize: 20,
              textTransform: "uppercase",
            }}
          >
            {receiptData.heading}
          </Text>
          <Subtitle>
            <Text
              style={{
                fontFamily: "Rubik",
                fontSize: 13,
              }}
            >
              {receiptData.subtitle}
            </Text>
          </Subtitle>
        </Header>

        <Receipt>
          <ReceiptTopContainer>
            <ReceiptTop search={search} spot={receiptData.spot}></ReceiptTop>
          </ReceiptTopContainer>
          <Divider>
            <CircleLeft />
            <DashedDivider>
              <DashedDividerCenterLine></DashedDividerCenterLine>
            </DashedDivider>
            <CircleRight />
          </Divider>
          <ReceiptBottomContainer>
            <DateInfo receiptData={receiptData} />
            <InfoContainer>
              <InfoRows />
            </InfoContainer>
            <UserInfoContainer>
              <UserInfo>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                    backgroundColor: "black",
                  }}
                >
                  <Image
                    source={require("../../assets/images/profile-picture.jpg")}
                    alt="Profile Picture"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 100,
                    }}
                  />
                </View>
                <View
                  style={{
                    marginLeft: 12,
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 14,
                      fontFamily: "RubikSemiBold",
                      fontSize: 14,
                    }}
                  >
                    Annie W.
                  </Text>
                  <Text
                    style={{
                      marginLeft: 12,
                      fontFamily: "Rubik",
                      fontSize: 14,
                      color: "gray",
                    }}
                  >
                    Owner
                  </Text>
                </View>
              </UserInfo>
              <ChatBubble>
                <ChatBubbleSVG />
              </ChatBubble>
            </UserInfoContainer>
          </ReceiptBottomContainer>
        </Receipt>

        {!complete && (
          <ConfirmVehicleButton
            onPress={() => {
              setShowCamera(true);
            }}
          >
            <View>
              <CameraSVG></CameraSVG>
            </View>

            <Text
              style={{
                fontFamily: "RubikBold",
                fontSize: 17,
                color: "white",
              }}
            >
              IDENTIFY YOUR VEHICLE
            </Text>
          </ConfirmVehicleButton>
        )}
        {complete && (
          <ConfirmVehicleButton
            onPress={() => {
              setShowReceipt(false);
              setComplete(false);
            }}
          >
            <Text
              style={{
                fontFamily: "RubikBold",
                fontSize: 17,
                color: "white",
              }}
            >
              COMPLETE
            </Text>
          </ConfirmVehicleButton>
        )}
      </ReceiptContainer>
    </ReceiptScreenContainer>
  );
};

const styles = StyleSheet.create({
  receiptContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

const ReceiptScreenContainer = styled.View`
  position: absolute;
  z-index: 2;
  background-color: rgba(247, 202, 62, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 58px;
  left: 26px;
`;

const ReceiptContainer = styled.View`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 80%;
  top: 112px;
  padding: 20px;
`;

const Header = styled.View``;

const Subtitle = styled.View`
  margin-top: 8px;
  width: 343px;
  height: 18px;
  color: rgba(0, 0, 0, 0.6);
`;

const Receipt = styled.View`
  width: 343px;
  flex: 1;
  margin-top: 24px;
  border-radius: 8px;
`;

const Divider = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 343px;
  height: 16px;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
`;

const CircleLeft = styled.View`
  position: relative;
  width: 16px;
  height: 16px;
  background-color: rgba(247, 202, 62, 1);
  border-radius: 100%;
  left: -8px;
  z-index: 4;
`;

const CircleRight = styled.View`
  position: relative;
  width: 16px;
  height: 16px;
  background-color: rgba(247, 202, 62, 1);
  border-radius: 100%;
  right: -8px;
  z-index: 4;
`;

const DashedDivider = styled.View`
  position: absolute;
  left: 8px;
  width: 327px;
  height: 1px;
  z-index: 3;
  background-color: #ebeef1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const DashedDividerCenterLine = styled.View`
  top: 0;
  width: 1px;
  height: 20px
  z-index: 3;
  background-color: #ebeef1;
`;

const ConfirmVehicleButton = styled.TouchableOpacity`
  margin-top: 24px;
  width: 343px;
  height: 60px;
  background-color: black;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.13);
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-left: 22px;
  padding-right: 22px;
`;

const ReceiptTopContainer = styled.View`
  height: 40%;
  width: 343px;
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 30px;
`;

const ReceiptBottomContainer = styled.View`
  height: 57%;
  width: 343px;
  background-color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const InfoContainer = styled.View`
  width: 100%;
  height: 50%;
  padding-left: 24px;
`;

const UserInfoContainer = styled.View`
  width: 100%;
  height: 20%;
  background-color: #f4f6f8;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

const ChatBubble = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export default ReceiptScreen;
