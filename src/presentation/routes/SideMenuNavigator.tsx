import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens';
import { globalColors } from '../theme/theme';
import { useWindowDimensions } from 'react-native';
import { CustomDrawerContent } from '../components/CustomDrawerContent';
import { BottomTabsNavigator } from './BottomTabsNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props}/>}
      screenOptions={{
        headerShown: false,
        drawerType: (dimensions.width >= 758) ? 'permanent' : 'front',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      <Drawer.Screen options={{ drawerIcon: ({color})=>(<IonIcon name='bonfire-outline' color={color}/>)}} name="Tabs" component={BottomTabsNavigator} />
      <Drawer.Screen options={{ drawerIcon: ({color})=>(<IonIcon name='person-circle-outline' color={color}/>)}} name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};