import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native"
import { RootStackParams } from "../../../domain/types/RootStackParams";
import { globalStyles } from "../../theme/theme";
import { useEffect } from "react";

export const ProductScreen = () => {

  const {id, name} = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();
  useEffect(()=>{
    navigation.setOptions({
      title: name
    })
  },[]);

  return (
    <View style={globalStyles.container}>
      <Text>Product Screen</Text>
      <Text style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20
        }}>
        {id} - {name}
      </Text>
    </View>
  );
};