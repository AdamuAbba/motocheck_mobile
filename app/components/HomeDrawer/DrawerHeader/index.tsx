import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";
import PersonIcon from "@assets/DrawerHeader/person.svg";
import DrawerIcon from "@assets/DrawerHeader/menu hamburger.svg";
import { FC } from "react";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import { CustomDrawerHeaderProps } from "@utils/global/types";

const DrawerHeader: FC<CustomDrawerHeaderProps> = ({ navigation }) => {
  /**
   * @returns {void} void
   * @description - This function toggles the Drawer.
   */
  const handleDrawerPress = (): void => {
    navigation.toggleDrawer();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDrawerPress}>
        <DrawerIcon />
      </TouchableOpacity>
      <PersonIcon />
    </View>
  );
};

export default DrawerHeader;
