import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  return (
    <View 
      style={{
        flex: 1,
        padding: 20,
        marginTop: top
      }}
    >
      <Text style={{marginBottom: 10}}>Profile</Text>
      <PrimaryButton label='Abrir menu' onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer)}/>
    </View>
  )
}