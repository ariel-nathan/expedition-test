import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

interface IProps {
  setShowConfirm: any;
  handleYes: any;
  search: any;
}

const ConfirmScreen = ({ setShowConfirm, handleYes, search }: IProps) => {
  return (
    <View style={styles.confirmScreen}>
      <TouchableOpacity
        style={styles.cancelBtn}
        onPress={() => {
          setShowConfirm(false);
        }}
      >
        <Text style={styles.cancelBtnText}>X</Text>
      </TouchableOpacity>

      <View style={styles.confirmScreenContent}>
        <View style={styles.confirmScreenTextContainer}>
          <Text style={styles.confirmScreenText}>
            Are you sure you would like to setup monthly parking at {search} ?
          </Text>
        </View>

        <TouchableOpacity style={styles.confirmScreenBtn} onPress={handleYes}>
          <Text style={styles.confirmScreenBtnText}>Confirm</Text>
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
    backgroundColor: "rgba(247,202,62,0.8)",
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
  confirmScreenContent: {
    width: "90%",
    height: "60%",
    padding: 10,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  confirmScreenTextContainer: {
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.95)",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  confirmScreenText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    borderRadius: 10,
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
});

export default ConfirmScreen;
