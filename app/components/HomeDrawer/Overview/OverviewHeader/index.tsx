import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";

const OverViewHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText1}>Welcome Back,Imani 👋🏽 </Text>
      <Text style={styles.headerText2}>
        It is a long established fact lorem.{" "}
      </Text>
    </View>
  );
};

export default OverViewHeader;
