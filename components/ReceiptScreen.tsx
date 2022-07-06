import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import styled from "styled-components/native";

const ReceiptDivider = styled.View`
  width: 100%;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const YellowCircleLeft = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: rgba(247, 202, 62, 1);
  margin-left: -10px;
`;

const YellowCircleRight = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: rgba(247, 202, 62, 1);
  margin-right: -10px;
`;

const ReceiptScreen = ({ setShowReceipt, handleYes, search }: any) => {
  return (
    <View style={styles.confirmScreen}>
      <TouchableOpacity
        style={styles.cancelBtn}
        onPress={() => {
          setShowReceipt(false);
        }}
      >
        <Text style={styles.cancelBtnText}>X</Text>
      </TouchableOpacity>
      <View style={styles.receiptScreenContent}>
        <View style={styles.receiptScreenTextContainer}>
          <Text style={styles.receiptScreenText}>
            Nice! Your monthly parking is confirmed.
          </Text>
          <Text>Your reservation details are below.</Text>
        </View>

        <View style={styles.receiptContainer}>
          <View style={styles.receiptTopContainer}>
            <View style={styles.receiptTopContent}>
              <View>
                <Text>ICON</Text>
              </View>
              <View>
                <Text>{search}</Text>
              </View>
              <View style={styles.getDirectionsContainer}>
                <View>
                  <Text>Spot 21</Text>
                </View>
                <View>
                  <Text>Get Directions</Text>
                </View>
              </View>
            </View>
          </View>
          <ReceiptDivider>
            <YellowCircleLeft></YellowCircleLeft>
            <View style={styles.divider}></View>
            <YellowCircleRight></YellowCircleRight>
          </ReceiptDivider>
          <View style={styles.receiptBottomContainer}>
            <View style={styles.receiptBottomContent}>
              <View style={styles.datesContainer}>
                <View>
                  <Text>Feb 20</Text>
                </View>
                <View>
                  <Text>May 20</Text>
                </View>
              </View>
              <View style={styles.moreInfoContainer}>
                <View>
                  <Text>View parking instructions</Text>
                </View>
                <View>
                  <Text>Purchase additional months</Text>
                </View>
                <View>
                  <Text>View receipt for $272.50</Text>
                </View>
              </View>
              <View>
                <Text>Annie W</Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.confirmScreenBtn} onPress={handleYes}>
          <Text style={styles.confirmScreenBtnText}>Identify your vehicle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmScreen: {
    position: "absolute",
    zIndex: 2,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "rgba(247,202,62,0.9)",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cancelBtn: {
    position: "absolute",
    top: "10%",
    left: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cancelBtnText: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Rubik",
  },
  confirmScreenBtn: {
    width: "100%",
    height: 50,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  confirmScreenBtnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
    fontFamily: "RubikBold",
  },
  receiptScreenContent: {
    width: "90%",
    height: "85%",
    padding: 10,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  receiptScreenTextContainer: {
    width: "100%",
  },
  receiptScreenText: {
    textAlign: "left",
    fontSize: 25,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "RubikBold",
  },
  receiptContainer: {
    width: "100%",
    height: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  receiptTopContainer: {
    width: "100%",
    height: "35%",
    backgroundColor: "rgba(255,255,255,0.95)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  divider: {
    flex: 1,
    height: "5%",
    borderColor: "#a5a5a5",
    borderWidth: 1,
    borderStyle: "solid",
  },
  receiptBottomContainer: {
    width: "100%",
    height: "55%",
    backgroundColor: "rgba(255,255,255,0.95)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  receiptTopContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: 10,
    // backgroundColor: "rgba(255,255,25,0.95)",
  },
  receiptBottomContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    // backgroundColor: "rgba(255,255,25,0.95)",
  },
  getDirectionsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  datesContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  moreInfoContainer: {
    display: "flex",
    width: "100%",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default ReceiptScreen;
