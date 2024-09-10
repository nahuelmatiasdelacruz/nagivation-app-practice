import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
import { BottomTabsNavigator } from './presentation/routes/BottomTabsNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <SideMenuNavigator/>
    </NavigationContainer>
  )
}