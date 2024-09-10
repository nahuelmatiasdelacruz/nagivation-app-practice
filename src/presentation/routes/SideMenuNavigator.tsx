import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens';
import { globalColors } from '../theme/theme';
import { useWindowDimensions } from 'react-native';
import { CustomDrawerContent } from '../components/CustomDrawerContent';
import { BottomTabsNavigator } from './BottomTabsNavigator';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props}/>}
      screenOptions={{
        headerShown: true,
        drawerType: (dimensions.width >= 758) ? 'permanent' : 'front',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      <Drawer.Screen name="Tabs" component={BottomTabsNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};