import DrawerHeader from "@components/HomeDrawer/DrawerHeader";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  HistoryScreen,
  InspectionScreen,
  MaintenanceScreen,
  NotificationScreen,
  OverviewScreen,
  PaymentWalletScreen,
} from "@screens/HomeDrawer";
import { DrawerNavigatorParamsList } from "@utils/global/types";

const Drawer = createDrawerNavigator<DrawerNavigatorParamsList>();

const { Navigator, Screen } = Drawer;

const HomeDrawerNavigator = () => {
  return (
    <Navigator
      initialRouteName="overview"
      screenOptions={({ navigation, route }) => ({
        header: () => <DrawerHeader navigation={navigation} />,
      })}
    >
      <Screen name="overview" component={OverviewScreen} />
      <Screen name="inspection" component={InspectionScreen} />
      <Screen name="notification" component={NotificationScreen} />
      <Screen name="maintenance" component={MaintenanceScreen} />
      <Screen name="Payment wallet" component={PaymentWalletScreen} />
      <Screen name="history" component={HistoryScreen} />
    </Navigator>
  );
};

export default HomeDrawerNavigator;
