import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { FC } from "react";
import { styles } from "./style";
import { recentChecklistDummyData } from "@utils/dummyData";
import { RecentChecklistRenderItemProps } from "@utils/global/types";
import ClockIcon from "@assets/Overview/time.svg";
import MCstatus from "../MCstatus";

const RecentChecklist = () => {
  const _renderItem: FC<RecentChecklistRenderItemProps> = ({ item }) => {
    return (
      <View style={styles.checklistCard}>
        <View style={styles.checklistCardView1}>
          <View>
            <Text style={styles.checklistCardViewText1}>{item.name}</Text>
            <Text style={styles.checklistCardViewText2}>
              {item.vehicleName}
            </Text>
          </View>
          <View>
            <MCstatus status={item.status} />
          </View>
        </View>
        <View style={styles.cardDivider} />
        <View style={styles.checklistCardView2}>
          <ClockIcon />
          <Text style={styles.checklistCardViewText}>{item.date}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.checklistHeader}>
        <Text style={styles.checklistHeaderText1}>Recent Checklist</Text>
        <TouchableOpacity>
          <Text style={styles.checklistHeaderText2}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={recentChecklistDummyData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <_renderItem item={item} />}
      />
    </View>
  );
};

export default RecentChecklist;
