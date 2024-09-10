import { Pressable, Text, View } from "react-native"
import { globalStyles } from "../../theme/theme";
import { DrawerActions, NavigationProp, useNavigation } from "@react-navigation/native";
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { RootStackParams } from "../../../domain/types/RootStackParams";
import { useEffect } from "react";
import { HambugerMenu } from "../../components/shared/HambugerMenu";

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <HambugerMenu/>
      <PrimaryButton onPress={()=>navigation.navigate('Products')} label='Productos'/>
      <PrimaryButton onPress={()=>navigation.navigate('Settings')} label='Settings'/>
    </View>
  );
};