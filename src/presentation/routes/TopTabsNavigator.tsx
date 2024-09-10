import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AboutScreen, ProfileScreen} from '../screens';
import { HambugerMenu } from '../components/shared/HambugerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <>
      <HambugerMenu/>
      <Tab.Navigator>
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
};
