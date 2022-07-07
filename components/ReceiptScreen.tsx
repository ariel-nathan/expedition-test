import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import styled from "styled-components/native";

import CameraSVG from "./SVG/CameraSVG";
import CloseSVG from "./SVG/CloseSVG";
import InfoArrowSVG from "./SVG/InfoArrowSVG";
import ChatBubbleSVG from "./SVG/ChatBubbleSVG";
import ClockSVG from "./SVG/ClockSVG";
import DirectionSVG from "./SVG/DirectionSVG";
import StartSVG from "./SVG/StartSVG";
import EndSVG from "./SVG/EndSVG";
import HelpSVG from "./SVG/HelpSVG";
import ReceiptSVG from "./SVG/ReceiptSVG";
import MoreSVG from "./SVG/MoreSVG";
import ParkingIconSVG from "./SVG/ParkingIconSVG";

const ReceiptScreen = ({
  setShowReceipt,
  search,
  setShowCamera,
  complete,
  setComplete,
}: any) => {
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
            Nice! Your monthly parking is confirmed.
          </Text>
          <Subtitle>
            <Text
              style={{
                fontFamily: "Rubik",
                fontSize: 13,
              }}
            >
              Your reservation details are below.
            </Text>
          </Subtitle>
        </Header>

        <Receipt>
          <ReceiptTopContainer>
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
                  }}
                >
                  SPOT 21
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
          </ReceiptTopContainer>
          <Divider>
            <CircleLeft />
            <DashedDivider>
              <DashedDividerCenterLine></DashedDividerCenterLine>
            </DashedDivider>
            <CircleRight />
          </Divider>
          <ReceiptBottomContainer>
            <DateContainer>
              <DateFromContainer>
                <DateHeader>
                  <Text
                    style={{
                      fontFamily: "RubikSemiBold",
                      fontSize: 10,
                      color: "gray",
                    }}
                  >
                    Start Date
                  </Text>
                  <StartSVG />
                </DateHeader>
                <Date>
                  <Text
                    style={{
                      fontFamily: "RubikBold",
                      fontSize: 19,
                    }}
                  >
                    FEB 20
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Rubik",
                      fontSize: 13,
                    }}
                  >
                    2022 (12:00AM)
                  </Text>
                </Date>
              </DateFromContainer>
              <DateDivider></DateDivider>
              <DateToContainer>
                <DateHeader>
                  <Text
                    style={{
                      fontFamily: "RubikSemiBold",
                      fontSize: 10,
                      color: "gray",
                    }}
                  >
                    End Date
                  </Text>
                  <EndSVG />
                </DateHeader>
                <Date>
                  <Text
                    style={{
                      fontFamily: "RubikBold",
                      fontSize: 19,
                    }}
                  >
                    MAR 20
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Rubik",
                      fontSize: 13,
                    }}
                  >
                    2022 (12:00AM)
                  </Text>
                </Date>
              </DateToContainer>
            </DateContainer>
            <InfoContainer>
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
                      borderRadius: "100%",
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
                      borderRadius: "100%",
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
                      borderRadius: "100%",
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
            </InfoContainer>
            <UserInfoContainer>
              <UserInfo>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "100%",
                    backgroundColor: "black",
                  }}
                >
                  <Image
                    source={require("../assets/images/profile-picture.jpg")}
                    alt="Profile Picture"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "100%",
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

const ParkingIconContainer = styled.View`
  position: absolute;
  left: 18px;
  top: -13px;
`;

const ParkingIconStick = styled.View`
  position: absolute;
  left: 0;
  height: 15px;
  width: 2px;
  background-color: black;
  margin-top: -10px;
`;

const ParkingIcon = styled.View`
  width: 24px;
  height: 24px;
  background-color: black;
  border-radius: 6px;
  position: absolute;
  left: -11px;
  top: -18px;
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;
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

const DateContainer = styled.View`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #ebeef1;
`;

const DateFromContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 24px;
`;

const DateDivider = styled.View`
  width: 1px;
  background-color: #ebeef1;
`;

const DateToContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 24px;
`;

const InfoContainer = styled.View`
  width: 100%;
  height: 50%;
  padding-left: 24px;
`;

const DateHeader = styled.View`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;

const Date = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  flex: 1;
`;

const Info = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 24px;
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
