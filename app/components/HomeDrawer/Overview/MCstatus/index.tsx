import { View, Text } from "react-native";
import React, { FC } from "react";
import { MCstatusProps } from "@utils/global/types";
import { Colors } from "@utils/global/colors";
import { styles } from "./style";

const MCstatus: FC<MCstatusProps> = ({ status }) => {
  /**
   * @description This function handles status box BG or text color.
   * @param {string} status  Status of the status box.
   * @param {string} type style type of status box.
   * @returns {string} string
   */

  const statusCheck = (status: string, type: string): string => {
    if (type === "bg") {
      switch (status) {
        case "Pending":
          return Colors["pending/status"];
        case "Ready":
          return Colors["ready/status"];
        default:
          return Colors["DuroPP/07"];
      }
    } else if (type === "text") {
      switch (status) {
        case "Pending":
          return Colors["MC/Danger"];
        case "Ready":
          return Colors["MC/Green"];
        default:
          return Colors["DuroPP/07"];
      }
    } else {
      return Colors["DuroPP/07"];
    }
  };
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: statusCheck(status, "bg"),
      }}
    >
      <Text style={{ color: statusCheck(status, "text") }}>{status}</Text>
    </View>
  );
};

export default MCstatus;
