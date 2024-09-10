import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View } from "react-native";
import { globalColors } from "../theme/theme";

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return(
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  );
};