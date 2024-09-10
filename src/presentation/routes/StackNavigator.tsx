import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ProductsScreen, SettingsScreen } from '../screens';
import { ProductScreen } from '../screens/products/ProductScreen';
import { RootStackParams } from '../../domain/types/RootStackParams';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const navigator = useNavigation();
  useEffect(()=>{
    navigator.setOptions({
      headerShown: false,
    })
  },[])
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerStyle: {
        elevation: 0,
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name='Product' component={ProductScreen}/>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}