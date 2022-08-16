import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeDrawerNavigator from "@routes/HomeDrawer";
import { RootNavigatorParamsList } from "@utils/global/types";

const Stack = createStackNavigator<RootNavigatorParamsList>();

const { Navigator, Screen } = Stack;

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="HomeDrawer" component={HomeDrawerNavigator} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
