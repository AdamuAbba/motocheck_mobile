import { View, Text } from "react-native";
import React from "react";
import OverViewHeader from "@components/HomeDrawer/Overview/OverviewHeader";
import { styles } from "./style";
import {
  OverViewSearch,
  RecentChecklist,
} from "@components/HomeDrawer/Overview";

const OverviewScreen = () => {
  return (
    <View style={styles.container}>
      <OverViewHeader />
      <OverViewSearch />
      <RecentChecklist />
    </View>
  );
};

export default OverviewScreen;
