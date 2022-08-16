import { Colors } from "@utils/global/colors";
import { ninetyPercentWidth } from "@utils/global/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: ninetyPercentWidth,
    height: 50,
    backgroundColor: Colors["MC/White"],
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors["MC/Silver-Gray"],
    alignSelf: "center",
    alignItems: "center",
    paddingLeft: 20,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
});
