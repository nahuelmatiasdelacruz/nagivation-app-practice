import { Text, View } from "react-native"
import { HambugerMenu } from "../../components/shared/HambugerMenu";
import { IonIcon } from "../../components/shared/IonIcon";

export const Tab1Screen = () => {

  return (
    <View>
      <HambugerMenu/>
      <Text>Tab1Screen.tsx</Text>
      <IonIcon name='rocket-outline' color='red' size={40}/>
    </View>
  )
}