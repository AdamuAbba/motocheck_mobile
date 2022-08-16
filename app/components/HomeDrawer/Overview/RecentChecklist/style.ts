import { Colors } from "@utils/global/colors";
import { ninetyPercentWidth } from "@utils/global/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: ninetyPercentWidth,
    marginVertical: 30,
  },
  checklistCard: {
    width: ninetyPercentWidth,
    backgroundColor: "white",
    marginBottom: 20,
    borderRadius: 4,
  },
  checklistHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  checklistCardView1: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
  },
  checklistCardView2: {
    flexDirection: "row",
    padding: 20,
  },
  cardDivider: {
    width: "90%",
    height: 2,
    backgroundColor: Colors["MC/Silver-Gray"],
    alignSelf: "center",
  },
  checklistHeaderText2: {
    color: Colors["MC/Green"],
  },
  checklistHeaderText1: {},
  checklistCardViewText: {
    marginLeft: 10,
  },
  checklistCardViewText1: {},
  checklistCardViewText2: {},
});
