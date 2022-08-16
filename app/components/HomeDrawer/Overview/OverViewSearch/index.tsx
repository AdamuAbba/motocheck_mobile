import { View, Text, TextInput } from "react-native";
import React from "react";
import { styles } from "./style";
import SearchIcon from "@assets/Overview/Search.svg";

const OverViewSearch = () => {
  return (
    <View style={styles.container}>
      <SearchIcon />
      <TextInput style={styles.input} placeholder="Search lorem ipsum" />
    </View>
  );
};

export default OverViewSearch;
