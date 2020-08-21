import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerContent } from "../screens/DrawerContent";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import LogoutScreen from "../screens/LogoutScreen";
import LabScreen from "../screens/LabScreen";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Detail" component={DetailScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
      <Drawer.Screen name="Lab" component={LabScreen} />
    </Drawer.Navigator>
  );
}
