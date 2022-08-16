import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { ninetyPercentWidth, screenWidth } from "@utils/global/constants";
import { Colors } from "@utils/global/colors";
export const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    height: 70,
    width: screenWidth,
    paddingHorizontal: 10,
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Colors.motoBg,
  },
});
