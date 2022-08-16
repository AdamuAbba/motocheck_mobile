import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const screenHeight = height;
const screenWidth = width;
const ninetyPercentWidth = screenWidth * 0.9;

export { screenHeight, screenWidth, ninetyPercentWidth };
