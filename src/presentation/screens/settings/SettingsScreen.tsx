import { RouteProp, StackActions, useNavigation, useRoute } from "@react-navigation/native"
import { Text, View } from "react-native"
import { RootStackParams } from "../../../domain/types/RootStackParams";
import { globalStyles } from "../../theme/theme";
import { PrimaryButton } from "../../components/shared/PrimaryButton";

export const SettingsScreen = () => {
  const navigator = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10}}>Settings Screen</Text>
      <PrimaryButton label='Regresar' onPress={()=>navigator.goBack()}/>
      <PrimaryButton label='Volver al inicio' onPress={()=>navigator.dispatch(StackActions.popToTop())}/>
    </View>
  );
};