import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Pressable } from "react-native";
import { Text } from "react-native";

export const HambugerMenu = () => {
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menú</Text>
        </Pressable>
      )
    })
  },[]);
  return <></>;
};