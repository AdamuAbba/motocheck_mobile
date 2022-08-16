import { DrawerHeaderProps } from "@react-navigation/drawer";

export type DrawerNavigatorParamsList = {
  overview: undefined;
  inspection: undefined;
  notification: undefined;
  maintenance: undefined;
  "Payment wallet": undefined;
  history: undefined;
};

export type RootNavigatorParamsList = {
  HomeDrawer: undefined;
};

export type ColorsType = {
  "pending/status": string;
  "ready/status": string;
  "DuroPP/07": string;
  "MC/Silver-Gray": string;
  "MC/Green": string;
  "MC/Gray": string;
  "MC/Danger": string;
  "Status/ready": string;
  "MC/White": string;
};

export type RecentChecklistType = {
  name: string;
  vehicleName: string;
  status: string;
  date: string;
};

export type RecentChecklistRenderItemProps = {
  item: RecentChecklistType;
};

export type MCstatusProps = {
  status: string;
};

export type CustomDrawerHeaderProps = Pick<DrawerHeaderProps, "navigation">;
